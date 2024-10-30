import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Styles/theme.scss'; 
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])


  return <Component {...pageProps} />;

}

export default MyApp;
