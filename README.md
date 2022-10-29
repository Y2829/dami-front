# DAMI Front

> DAMI는 온라인 게임친구를 찾는 서비스입니다.

## 주요 기술스택

- Typescript
- React18
- Mui

### 상태관리

- Redux
- React-Query

### 테스트

- Jest
- Teting-Library

### 패키지 매니저

- yarn berry

---

## 디렉토리 구조

- `pages/` : 여러 개의 최상단 페이지들이 위치한 폴더
  - `pages/components/` : 해당 페이지에서만 사용하는 하위 컴포넌트들을 뫃아놓은 폴더
  - `pages/hooks/` : 해당 페이지에서만 사용하는 hook을 모아놓은 폴더
- `components/` : 공통적으로 사용되는 컴포넌트를 모아놓은 폴더
- `hooks/` : 공통적으로 사용되는 hook을 모아놓은 폴더
- `apis/` : 백엔드에 요청하는 API를 모아놓은 폴더
- `types/` : 타입을 모아놓은 폴더(백엔드 모델을 기준으로 파일 분리하기)
- `configs/` : 공통적으로 사용되는 변수 및 설정사항들을 모아놓은 폴더
- `utils/` : 공통적으로 사용되는 함수를 모아놓은 폴더
