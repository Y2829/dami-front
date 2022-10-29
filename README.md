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

## git-flow

2명 이상의 작업자가 git을 활용하여 작업하고 버전 관리를 위해 기본적인 규칙을 정한다.

### branch

- `main` : 최상단 브랜치로 release된 작업물을 포함한다.
- `develop` : release되기 전에 개발자들의 작업물을 모아놓은 브랜치다.
- `feature/[작업이름]` : 개발자가 맡은 부분을 작업하기 위한 브랜치다. `[작업이름]`에 본인이 작업하는 내용을 간략화하여 작성한다.
- `fix/[작업이름]` : `develop` 브랜치에 merge된 후에 수정이 필요할 경우 사용되는 브랜치다.
- `refactor/[작업이름]` : 기존 작업물에 대해 리팩토링을 진행할 경우 사용되는 브랜치다.

### commit message

commit message를 작성할 때 아래의 pre-fix를 포함하여 commit 내용을 작성한다.

- `feat:` : 새롭운 작업물이 포함된 경우
- `fix:` : 기존 작업물을 수정한 경우
- `refactor` : 리팩토링을 진행한 경우
- `docs:` : 문서를 작성한 경우

예시 : `feat: 로그인 페이지 추가`

### flow

작업자는 아래와 같은 순서대로 개발을 진행한다.

- `develop` 브랜치를 기준으로 `feature` 또는 `fix` 브랜치를 생성한다.
- 해당 브랜치에서 작업 후에 `commit`을 진행한다.
- `develop` 브랜치로 돌아가 최신 작업물을 가져온다.
  - `git pull origin develop`
- 다시 작업한 브랜치로 이동하여 `develop` 브랜치로 rebase를 진행한다.
  - `git rebase develop`
- rebase를 마친 후에 push하여 작업한 브랜치를 원격 저장소에 올린다.
- `develop` 브랜치로 Pull Request를 한다.
- 코드리뷰가 통과된 것만 `develop` 브랜치로 merge한다.

### 코드리뷰

개인 공부, 잠재적인 버그 발견, 컨벤션 통일, 버스팩터향상을 위해 코드리뷰를 진행한다. 코드리뷰를 할 때는 아래의 기본 규칙을 따른다.

- 최대한 작업물을 나눠서 PR하기, 한 개의 PR 내에서도 commit을 기능 별로 나누기
- PR 내용 상세히 작성하기
  - PR할 때 제목 작성하기, 제목에 pre-fix 포함시키기(ADD, FIX, REFACTOR, DOCS)
    `ADD : 로그인 기능 추가`
  - PR 내용에는 최대한 작업에 대해 상세히 설명하기
- 다른 사람이 PR을 한 경우 2일 내로 리뷰를 진행한다.
