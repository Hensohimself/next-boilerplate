import App from "next/app";
import { appWithTranslation } from "../i18n";
import { GlobalStyle, theme } from "../src/styles/GlobalStyles";
import { ThemeProvider } from "styled-components";

const MyApp = ({ Component, pageProps }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
);

MyApp.getInitialProps = async (appContext) => ({
  ...(await App.getInitialProps(appContext)),
});

export default appWithTranslation(MyApp);
