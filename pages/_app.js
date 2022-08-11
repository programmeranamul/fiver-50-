import "../styles/globals.css";
import Search from "./../components/common/Search";
import Footer from "./../components/common/Footer";
import { useEffect } from "react";
import Header from "./../components/common/Header/Header";
import { ThemeProvider } from "../lib/ThemeContext";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className = "light-theme";
  }, []);
  return (
    <ThemeProvider>
      <Header />
      <Search className="container" />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
