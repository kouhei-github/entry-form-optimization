import '@/styles/globals.css'
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {


  return (
      <>
        <title>求人情報</title>
        <Component {...pageProps} />
      </>
  );
}
export default MyApp;
