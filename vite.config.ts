import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ غيّر الـ base ليطابق اسم الريبو على GitHub
export default defineConfig({
  base: '/Amr-Portfolio/',
  plugins: [react()],
})
