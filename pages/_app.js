// import '../styles/globals.css'
import { ChakraProvider, Box } from '@chakra-ui/react'
import Header from '../components/Header'

import theme from '../styles/theme'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header brandName="Component Gallery" />
      <Box maxW="container.xl" mx="auto">
        <Component {...pageProps} />
      </Box>
    </ChakraProvider>
  )
}

export default MyApp
