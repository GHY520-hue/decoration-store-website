import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  build: {
    sourcemap: 'hidden',
    // 单个 chunk 超过 500KB 才警告（默认 500）
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      output: {
        // 将 node_modules 依赖拆分成独立 chunk，利用浏览器缓存
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('vue') || id.includes('pinia') || id.includes('vue-router')) {
              return 'vue-vendor'
            }
            return 'vendor'
          }
        }
      }
    }
  },
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // ✅ 定义 @ = src
    },
  },
})
