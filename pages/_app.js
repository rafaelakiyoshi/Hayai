import Head from "next/head";
import { ThemeSwitcherProvider } from "react-css-theme-switcher";

const themes = {
  dark: `/dark-theme.module.css`,
  light: `/light-theme.module.css`,
};

export default class MyApp extends React.Component {
  state = {
    rendered: true
  }
  componentDidMount() {
    this.setState({ rendered: true });
  }

  render() {
    const { Component, pageProps } = this.props;
    const { rendered } = this.state;
    return (
      <>
        <Head>
          <title>Hayai Boilerplate</title>
        </Head>
        <ThemeSwitcherProvider themeMap={themes} defaultTheme="light" insertionPoint="styles-insertion-point">
          <Component {...pageProps} />
        </ThemeSwitcherProvider>
      </>
    );
  }
}
