import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, theme, ColorModeScript } from '@chakra-ui/react'
import { RouterProvider } from 'react-router-dom'
import router from './routing/routes'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    <RouterProvider router={router}>

    </RouterProvider>
    </ChakraProvider>
  </React.StrictMode>
)
