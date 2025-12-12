import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // GitHub Pages는 리포지토리 이름이 기본 경로가 되므로 상대 경로('./')를 사용해야 함
  base: './',
  define: {
    // 코드 내의 process.env.API_KEY를 Vite의 환경 변수 방식으로 치환
    'process.env.API_KEY': 'import.meta.env.VITE_API_KEY'
  }
});