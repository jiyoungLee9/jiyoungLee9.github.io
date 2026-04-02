# GitHub Pages 배포 가이드
> React + Vite 프로젝트를 GitHub Pages에 배포하는 전체 과정 메뉴얼  
> GitHub Actions를 통한 자동 빌드 및 배포 기준

---

## 목차
1. [사전 준비](#1-사전-준비)
2. [로컬 환경 세팅](#2-로컬-환경-세팅)
3. [Vite 프로젝트 설정](#3-vite-프로젝트-설정)
4. [GitHub Pages 설정](#4-github-pages-설정)
5. [GitHub Actions 워크플로우 설정](#5-github-actions-워크플로우-설정)
6. [일상적인 작업 루틴](#6-일상적인-작업-루틴)
7. [트러블슈팅 모음](#7-트러블슈팅-모음)

---

## 1. 사전 준비

### 리포지토리 구조 설계
GitHub Pages를 `main` 브랜치의 `/docs` 폴더로 서빙하는 방식을 기준으로 한다.

```
my-repo/
├── portfolio/          ← React + Vite 소스 (개발 작업 폴더)
│   ├── src/
│   ├── public/
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── docs/               ← Vite 빌드 결과물 (GitHub Pages 서빙 루트)
├── .github/
│   └── workflows/
│       └── deploy.yml  ← GitHub Actions 워크플로우
└── README.md
```

### 기존 Jekyll 방식 리포라면 먼저 정리
```bash
rm _config.yml   # Jekyll 설정 파일 삭제
rm index.md      # Jekyll 루트 진입점 삭제
# README.md는 유지
```

---

## 2. 로컬 환경 세팅

### 클론 및 안전망 확보
```bash
# 원하는 경로로 이동 후 클론
cd D:/projects
git clone https://github.com/<username>/<repo>.git
cd <repo>

# 현재 상태 백업 브랜치 생성 (복구 안전망)
git checkout -b backup/original
git push origin backup/original

# main으로 복귀
git checkout main
```

> ✅ 백업 브랜치를 먼저 만들어두면 문제 발생 시 언제든 복구 가능하다.

---

## 3. Vite 프로젝트 설정

### 프로젝트 생성 및 패키지 설치
```bash
# 리포 루트에서 실행
npm create vite@latest portfolio -- --template react
cd portfolio
npm install
npm install react-router-dom sass
```

### `vite.config.js` 핵심 설정

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath } from 'url'
import path from 'path'

// ES Module 환경에서 __dirname 대체 (에디터 경고 방지)
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  plugins: [react()],

  // GitHub Pages 루트 도메인이면 '/' / 서브경로면 '/repo-name/'
  base: '/',

  build: {
    // 빌드 결과물을 리포 루트의 /docs 로 출력
    outDir: '../docs',
    emptyOutDir: true,
  },

  css: {
    preprocessorOptions: {
      scss: {
        // ⚠️ 반드시 절대경로 사용 (상대경로 사용 시 각 scss 파일 위치 기준으로
        //    해석되어 "Can't find stylesheet to import" 에러 발생)
        additionalData: `@use "${
          path.resolve(__dirname, 'src/styles/variables').replace(/\\/g, '/')
        }" as *;`
      }
    }
  }
})
```

#### ⚠️ SCSS `additionalData` 경로 주의사항
`additionalData`는 모든 `.scss` 파일 맨 앞에 해당 코드를 자동 삽입한다.  
상대경로(`./src/styles/variables`)로 작성하면 각 scss 파일 위치 기준으로 해석되어 빌드 에러가 발생한다.

```
# 예시: Footer.module.scss 위치
portfolio/src/layouts/Footer/Footer.module.scss

# 상대경로로 작성했을 때 실제 해석 결과
portfolio/src/layouts/Footer/src/styles/variables  ← 존재하지 않음 → 에러
```

반드시 `path.resolve(__dirname, ...)` 로 절대경로를 사용한다.  
Windows 환경에서는 `.replace(/\\/g, '/')` 로 백슬래시를 슬래시로 변환해야 한다.

### 로컬 빌드 테스트 (배포 전 반드시 확인)
```bash
cd portfolio
npm run build
# 성공 시 리포 루트의 docs/ 폴더에 결과물 생성
```

> ✅ Actions에 올리기 전에 로컬 빌드가 성공하는지 반드시 확인한다.  
> 로컬에서 실패하면 Actions에서도 동일하게 실패한다.

---

## 4. GitHub Pages 설정

### GitHub 리포지토리 설정 (브라우저)
```
Repository → Settings → Pages
  Source   : Deploy from a branch
  Branch   : main
  Folder   : /docs    ← 반드시 /docs 선택
→ Save
```

> ⚠️ Folder를 `/docs`로 변경하지 않으면 Jekyll이 루트를 계속 점유하여  
> 빌드 결과물이 있어도 반영되지 않는다.

### Jekyll 처리 방지 (`.nojekyll`)
```bash
# docs/ 폴더가 Jekyll에 의해 처리되지 않도록 차단
touch docs/.nojekyll
git add docs/.nojekyll
git commit -m "fix: add .nojekyll"
git push origin main
```

### Actions 워크플로우 권한 설정 (브라우저)
```
Repository → Settings → Actions → General
  Workflow permissions
  → "Read and write permissions" 선택
→ Save
```

> Actions 봇이 빌드 후 `docs/`를 main 브랜치에 커밋+push하려면  
> write 권한이 필요하다.

---

## 5. GitHub Actions 워크플로우 설정

### `deploy.yml` 전체 코드

```yaml
name: Deploy Portfolio

on:
  push:
    branches: [main]

# ✅ Actions 봇이 main 브랜치에 push할 수 있도록 권한 명시
# 이 설정이 없으면 "fatal: 403" 에러 발생
permissions:
  contents: write

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          cd portfolio
          # ✅ npm ci 대신 npm install 사용
          # npm ci는 package-lock.json이 없으면 실패함
          npm install

      - name: Build
        run: |
          cd portfolio
          npm run build
          # vite.config.js의 outDir: '../docs' 설정에 의해
          # 리포 루트의 docs/ 폴더에 빌드 결과물 생성

      - name: Copy subdirectories into docs
        run: |
          # docs/ 에 함께 서빙할 폴더가 있으면 여기에 복사
          # 예: 학습기록 폴더 URL 유지
          cp -r react_learning_log docs/react_learning_log

      - name: Commit & Push docs
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "github-actions[bot]@users.noreply.github.com"
          git add docs/
          # 변경사항이 없으면 커밋 스킵 (에러 방지)
          git diff --cached --quiet || git commit -m "chore: deploy [skip ci]"
          # [skip ci] → 이 커밋으로 Actions가 다시 트리거되지 않도록 방지
          git push
```

### `permissions` 위치 주의사항
```yaml
# ❌ 잘못된 위치 (jobs 안에 넣으면 "Unexpected value" 에러 발생)
jobs:
  build-and-deploy:
    permissions:
      contents: write

# ✅ 올바른 위치 (on: 과 jobs: 사이, 최상위 레벨)
on:
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  build-and-deploy:
```

> YAML은 들여쓰기가 곧 구조다. 탭 대신 스페이스 2칸을 사용한다.

### `[skip ci]` 커밋 메시지의 역할
Actions 봇이 `docs/`를 커밋할 때 `[skip ci]`를 메시지에 포함하면  
해당 커밋으로 Actions가 재트리거되지 않아 **무한 루프를 방지**한다.

---

## 6. 일상적인 작업 루틴

### ⚠️ 반드시 지켜야 할 순서

Actions 봇이 `docs/`를 자동으로 main에 커밋하는 구조이기 때문에,  
로컬에서 작업할 때는 **항상 pull을 먼저** 해야 한다.  
pull 없이 push하면 아래 에러가 발생한다.

```
! [rejected] main -> main (non-fast-forward)
hint: Updates were rejected because the tip of your current branch is behind
```

### 올바른 작업 순서
```bash
# 1. 작업 시작 전 항상 먼저 pull
git pull --rebase origin main
#          ↑
#  --rebase 옵션 사용 이유:
#  Actions 봇 커밋과 내 커밋을 머지 커밋 없이 깔끔하게 정렬해준다.
#  일반 git pull은 불필요한 머지 커밋이 생긴다.

# 2. 파일 수정 작업

# 3. 스테이징 및 커밋
git add .
git commit -m "feat: 작업 내용 설명"

# 4. push
git push origin main
# 최초 1회만 git push -u origin main (이후부터는 git push 만으로 충분)
```

### non-fast-forward 에러가 발생했을 때
```bash
# pull --rebase 로 해결
git pull --rebase origin main
git push origin main
```

---

## 7. 트러블슈팅 모음

### ❌ SCSS 빌드 에러: "Can't find stylesheet to import"
```
Error: Can't find stylesheet to import.
1 │ @use "./src/styles/variables" as *;
```
**원인:** `vite.config.js`의 `additionalData` 경로가 상대경로  
**해결:** `path.resolve(__dirname, ...)` 절대경로로 변경 → [3장 참고](#3-vite-프로젝트-설정)

---

### ❌ Actions 에러: "fatal: 403"
```
fatal: unable to access 'https://github.com/...': 
The requested URL returned error: 403
```
**원인:** Actions 봇에 main 브랜치 push 권한 없음  
**해결:**
1. `deploy.yml` 최상위에 `permissions: contents: write` 추가
2. `Settings → Actions → General → Read and write permissions` 활성화

---

### ❌ Actions 에러: "Unexpected value 'permissions'" (Line 7)
```
Invalid workflow file
(Line: 7, Col: 3): Unexpected value 'permissions'
```
**원인:** `permissions`가 `jobs:` 블록 안에 잘못 위치함  
**해결:** `permissions`를 `on:`과 `jobs:` 사이 최상위 레벨로 이동

---

### ❌ Actions 에러: "npm ci" 실패
```
npm error The `npm ci` command can only install with an existing package-lock.json
```
**원인:** `package-lock.json`이 없거나 git에 커밋되지 않은 상태  
**해결:** `deploy.yml`에서 `npm ci` → `npm install` 로 변경

---

### ❌ push 에러: "non-fast-forward"
```
! [rejected] main -> main (non-fast-forward)
Updates were rejected because the tip of your current branch is behind
```
**원인:** Actions 봇이 커밋한 내용이 로컬에 없는 상태에서 push 시도  
**해결:**
```bash
git pull --rebase origin main
git push origin main
```

---

### ❌ GitHub Pages가 React 앱이 아닌 Jekyll로 서빙됨
**원인:** GitHub Pages Source가 `/docs`가 아닌 루트로 설정되어 있거나 `_config.yml`이 남아있음  
**해결:**
1. `Settings → Pages → Folder: /docs` 로 변경
2. 루트의 `_config.yml`, `index.md` 삭제
3. `docs/.nojekyll` 파일 추가

---

### ❌ SPA 라우팅 새로고침 시 404
**원인:** GitHub Pages는 정적 서버라 `/skills` 같은 경로를 직접 새로고침하면 파일을 찾지 못함  
**해결:** `docs/404.html` 추가 및 `index.html`에 redirect 스크립트 삽입

```html
<!-- docs/404.html -->
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <script>
    const path = window.location.pathname;
    sessionStorage.setItem('redirect', path);
    window.location.replace('/');
  </script>
</head>
</html>
```

```html
<!-- portfolio/index.html <head> 안에 추가 -->
<script>
  const redirect = sessionStorage.getItem('redirect');
  if (redirect) {
    sessionStorage.removeItem('redirect');
    history.replaceState(null, null, redirect);
  }
</script>
```

---

## 참고: 배포 흐름 요약

```
로컬 수정
  ↓
git pull --rebase origin main   ← 항상 먼저
  ↓
git add . / git commit
  ↓
git push origin main
  ↓
GitHub Actions 트리거 (deploy.yml)
  ↓
① npm install
② npm run build → docs/ 생성
③ 추가 폴더 docs/ 에 복사
④ docs/ 커밋 + push [skip ci]
  ↓
GitHub Pages (main /docs) 서빙
  ↓
https://<username>.github.io/ 반영
```
