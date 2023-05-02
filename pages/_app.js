import '@/styles/globals.css';
import Layouts from '@/components/Layouts';
import { AppProvider } from '@/settings/context/appContext';
import { SessionProvider } from 'next-auth/react';

export default function App({ Component, pageProps:{ session,...pageProps} }) {
  return (
    <AppProvider>
      <SessionProvider session={session}>
        <Layouts>
          <Component {...pageProps} />
        </Layouts>
      </SessionProvider>
    </AppProvider>
  )
}
