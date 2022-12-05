import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from 'next-seo';
import SEO from '../next-seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider>
    <DefaultSeo {...SEO} />
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
