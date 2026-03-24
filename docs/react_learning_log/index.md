# LLM AI를 활용한 React UI 배우기

jsp/jquery 기반의 웹퍼블리셔가 LLM AI를 통해서만 SPA(React) 가반에서 UI 구현을 학습하는 기록일지입니다.

## 진행개요
- (대상자) : jsp/jquery 기반 웹퍼블리셔 (UX설계, UI디자인, HTML/CSS/JS 외에 다양한 UI library, UI platform 을 통한 공통UI구현) <br />
- (일정) : 약 3개월 (사전 셋팅 별도) <br />
- (활용AI) : Google Gemini, Claude, ChatGPT, Stitch(디자인), Figma(디자인) <br />
- (AI학습조건) : VibeCoding이 아닌 학습로드맵, 문법, 로직에 대한 질문, 답변, 설계 질문을 통한 학습 <br />
- (학습정리) : Notion [학습정보모음 바로가기](https://www.notion.so/React-2bb52a8b182d80958d76d8b39bc75c23) <br />
- (기타) : 대화 중 필요한 부분 발췌 공유

## 서문
이 기록일지는 학습기록도 있겠지만, 기존에 온/오프라인을 통해 배웠던 방식에서 대화를 통한 AI로만 학습 가능여부도 알고 싶었습니다.<br/>
실무자 입장에서 이러한 학습이 진짜 활용이 가능한지, 사람이나 책이 아닌 AI를 통한 학습 중 느끼는 점들을 기록하고 싶었습니다.<br/>
Google Gemini를 주력으로 진행되지만, 필요에 따라 여러 AI모델을 수시로 사용하였습니다.

## 기록일지
- <a href="./logs/20251230.html" target="_blank" rel="noopener noreferrer" title="새창">2025-12-30 학습계획을 세워보자</a><br />
- <a href="./logs/20251231.html" target="_blank" rel="noopener noreferrer" title="새창">2025-12-31 환경셋팅</a><br />
- <a href="./logs/20260104.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-04 Gemini 선생님</a><br />
- <a href="./logs/20260105.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-05 React빌드,배포 개념</a><br />
- <a href="./logs/20260107.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-07 일지를 써야 겠어</a><br />
- <a href="./logs/20260115.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-15 style입히기-기본</a><br />
- <a href="./logs/20260116.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-16 style입히기-css library</a><br />
- <a href="./logs/20260120.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-20 figma생성</a><br />
- <a href="./logs/20260121.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-21 map() list 그리고 className</a><br />
- <a href="./logs/20260123.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-23 ai를 통한 점검</a><br />
- <a href="./logs/20260127.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-27 storybook 도입</a><br />
- <a href="./logs/20260128.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-28 state 설계</a><br />
- <a href="./logs/20260129.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-29 코드리뷰 frame</a><br />
- <a href="./logs/20260130.html" target="_blank" rel="noopener noreferrer" title="새창">2026-01-30 어디로 가야 하죠 아저씨, 우는 손님은 처음인가요?</a><br />
- <a href="./logs/20260202.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-02 컴포넌트 생성</a><br />
- <a href="./logs/20260203.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-03 효과적인 ai를 이용한 학습채팅</a><br />
- <a href="./logs/20260204.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-04 useState</a><br />
- <a href="./logs/20260205.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-05 실무프로젝트에 가깝게 학습조건 재설정</a><br />
- <a href="./logs/20260206.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-06 useEffect</a><br />
- <a href="./logs/20260209.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-09 안물어보면 대답 안함</a><br />
- <a href="./logs/20260210.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-10 md파일 생성</a><br />
- <a href="./logs/20260211.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-11 반복적인 리팩토링</a><br />
- <a href="./logs/20260212.html" target="_blank" rel="noopener noreferrer" title="새창">2026-02-12 React프로젝트에서의 웹퍼블리셔의 역할</a><br />
- <a href="./logs/20260301.html" target="_blank" rel="noopener noreferrer" title="새창">2026-03-01 UI Component 완료!</a><br />
- <a href="./logs/20260305.html" target="_blank" rel="noopener noreferrer" title="새창">2026-03-05 Grid Component 추가 그리고 페이지 설계</a><br />
- <a href="./logs/20260309.html" target="_blank" rel="noopener noreferrer" title="새창">2026-03-09 Claude로 Storybook 디자인토큰 적용</a><br />
- <a href="./logs/20260311.html" target="_blank" rel="noopener noreferrer" title="새창">2026-03-11 grid 구조 생성</a><br />
- <a href="./logs/20260320.html" target="_blank" rel="noopener noreferrer" title="새창">2026-03-20 grid component 작성</a><br />
- <a href="./logs/20260324.html" target="_blank" rel="noopener noreferrer" title="새창">2026-03-24 포트폴리오 준비</a><br />


