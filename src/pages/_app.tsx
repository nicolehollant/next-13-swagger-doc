import 'swagger-ui-react/swagger-ui.css'
import '@/styles/globals.css'
import '@/styles/swagger-dark.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
