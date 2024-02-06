import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
	plugins: [react()],

	resolve: {
		alias: {
			'@/assets': path.resolve(__dirname, './src/assets/'),
			'@/components': path.resolve(__dirname, './src/components/'),
			'@/layout': path.resolve(__dirname, './src/components/layout/'),
			'@/ui': path.resolve(__dirname, './src/components/ui/'),
			'@/misc': path.resolve(__dirname, './src/components/misc/'),
			'@/hooks': path.resolve(__dirname, './src/hooks/'),
			'@/utils': path.resolve(__dirname, './src/utils/'),
			'@/services': path.resolve(__dirname, './src/services/'),

			'css-variables': path.resolve(__dirname, './src/styles/css-variables.scss'),
			'scss-variables': path.resolve(__dirname, './src/styles/scss-variables.scss'),
			functions: path.resolve(__dirname, './src/styles/functions.scss'),
			mixins: path.resolve(__dirname, './src/styles/mixins.scss'),
		}
	}
})
