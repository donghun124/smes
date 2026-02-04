# SMES Manual Site

SMES (Smart Manufacturing Execution System) 사용자 매뉴얼 사이트입니다.

## 프로젝트 구조

- **React + TypeScript + Vite** 기반
- **React Router**를 사용한 SPA (Single Page Application)
- **Tailwind CSS**를 사용한 스타일링

## 로컬 실행

**필수 요구사항:** Node.js 18 이상

1. 의존성 설치:
   ```bash
   npm install
   ```

2. 개발 서버 실행:
   ```bash
   npm run dev
   ```

3. 브라우저에서 `http://localhost:3001` 접속

## 빌드

프로덕션 빌드:
```bash
npm run build
```

빌드 결과물은 `dist` 폴더에 생성됩니다.

## Cloudflare Pages 배포

### 1. Cloudflare Pages 설정

1. [Cloudflare Dashboard](https://dash.cloudflare.com/)에 로그인
2. **Pages** 메뉴로 이동
3. **Create a project** 클릭
4. **Connect to Git** 선택
5. GitHub 저장소 `donghun124/smes` 선택

### 2. 빌드 설정

- **Framework preset:** Vite
- **Build command:** `npm run build`
- **Build output directory:** `dist`
- **Root directory:** `/` (기본값)
- **Node version:** 18 이상

### 3. 환경 변수 (필요시)

환경 변수가 필요한 경우 Cloudflare Pages 대시보드에서 설정할 수 있습니다.

### 4. 배포

- 저장소에 푸시하면 자동으로 배포됩니다
- `main` 브랜치에 푸시하면 프로덕션 배포
- Pull Request에 대해서는 미리보기 배포가 생성됩니다

### 5. 커스텀 도메인 설정

Cloudflare Pages 대시보드에서 **Custom domains** 섹션에서 도메인을 추가할 수 있습니다.

## 주요 기능

- 📋 공사 및 현장 관리
- 📦 BOM 관리
- 🛒 자재 발주 관리
- 📥 입고 관리
- 🏭 생산 관리
- ✅ 품질 관리
- 🚚 출하 및 설치 관리
- 📐 제품 관리
- 🔗 IFC 연동
- ⚙️ 시스템 관리

## 기술 스택

- React 19
- TypeScript
- Vite 6
- React Router DOM 7
- Tailwind CSS

## 라이선스

© 2026 (주) 이엔지소프트. All rights reserved.
