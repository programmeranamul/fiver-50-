import "../styles/globals.css";
import Search from './../components/common/Search';
import Footer from './../components/common/Footer';
import {useEffect} from "react"
import Header from './../components/common/Header/Header';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.body.className="light-theme"
  }, [])
  return (
    <>
    <Header />
      <Search />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
