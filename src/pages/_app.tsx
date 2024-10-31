import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/theme.scss';
import '../styles/globals.scss';
import '../styles/index.css';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {

  return <Component {...pageProps} />;

}
