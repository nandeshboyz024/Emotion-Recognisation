import type { AppProps } from 'next/app'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import {EmotionContextProvider} from '../context/EmotionContext'
export default function App({ Component, pageProps }: AppProps) {
  return <EmotionContextProvider>
            <Component {...pageProps}/>
        </EmotionContextProvider>
}

