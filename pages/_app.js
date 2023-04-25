import '@/styles/globals.css';
import Layouts from '@/components/Layouts';
import { AppProvider } from '@/settings/context/appContext';

export default function App({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layouts>
        <Component {...pageProps} />
      </Layouts>
    </AppProvider>
  )
}
