import "../styles/globals.css";
import { CartContextProvider } from "../components/StoreContext";
import Navbar from "../components/NavigationBar/Navbar";
import Footer from '../components/Footer/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
        <Navbar/>
        <Component {...pageProps} />
        <Footer/>
    </CartContextProvider>
  );
}

export default MyApp;
