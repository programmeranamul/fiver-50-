import "../styles/globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Header from './../components/common/Header';
import Search from './../components/common/Search';
import Footer from './../components/common/Footer';
import {useEffect} from "react"

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
