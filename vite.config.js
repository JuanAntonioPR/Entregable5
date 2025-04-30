import { defineConfig } from 'vite';
import { resolve } from 'path'

export default defineConfig({
    base: '/Entregable5/',

    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                aviso_sobre_cookies: resolve(__dirname, 'html/aviso_sobre_cookies.html'),
                blog: resolve(__dirname, 'html/blog.html'),
                contacto: resolve(__dirname, 'html/contacto.html'),
                curso_backend: resolve(__dirname, 'html/curso_backend.html'),
                curso_frontend: resolve(__dirname, 'html/curso_frontend.html'),
                curso_fullstack: resolve(__dirname, 'html/curso_fullstack.html'),
                cursos: resolve(__dirname, 'html/cursos.html'),
                login: resolve(__dirname, 'html/login.html'),
                noticia1: resolve(__dirname, 'html/noticia1.html'),
                noticia2: resolve(__dirname, 'html/noticia2.html'),
                politica_de_cookies: resolve(__dirname, 'html/politica_de_cookies.html'),
                politica_de_privacidad: resolve(__dirname, 'html/politica_de_privacidad.html'),
                quienes_somos: resolve(__dirname, 'html/quienes_somos.html'),
                registro: resolve(__dirname, 'html/registro.html'),
            }
        }
    }
});