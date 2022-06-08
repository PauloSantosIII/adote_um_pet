import '../ui/styles/globals.css'
import { ThemeProvider } from '@mui/material'
import type { AppProps } from 'next/app'
import Tema from '../ui/themes/theme'
import Header from '../ui/components/Head/Head'

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider theme={Tema}>
      <Header />
      <Component {...pageProps} />
    </ThemeProvider>    
  )
}

export default MyApp
