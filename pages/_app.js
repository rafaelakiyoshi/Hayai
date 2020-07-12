import Head from "next/head";
import 'antd/dist/antd.compact.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Hayai Boilerplate</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
