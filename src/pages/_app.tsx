import { ToastContainer } from 'react-toastify'
import '../../styles/globals.css'

import { Layout } from '../components/Layout'
import AppProvider from '../hooks'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout>
        <>
          <Component {...pageProps} />
          <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </>
      </Layout>
    </AppProvider>
  )
}

export default MyApp
