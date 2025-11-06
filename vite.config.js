import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      extend:{
        keyframes:{
          Blob:{
            '0': { transform:'scale(1)'},
            '33': { transform:'scale(1.2)'},
            '66': { transform:'scale(0.8)'},
            '100': { transform:'scale(1)'},
          },
        },
        animation:{
          Blob:'blob 10s infinite',
        },
        backgroundImage:{
          'skills-gradient': 'linear-gradient(38.73deg, rgba(204,0,187,0.15) 0%, rgba(201,32,184,0) 50%),linear-gradient(141.27deg, rgba(0,70,209,0) 50%, rgba(0,70,209,0.15) 100%)'
        }

      }
    }),
  ],
})