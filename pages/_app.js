import '../styles/main.scss';
import "aos/dist/aos.css";
import { initGA, logPageView } from '../utils/analytics'

function MyApp({ Component, pageProps }) {
  componentDidMount= ()=> {
    if (!window.GA_INITIALIZED) {
      initGA()
      window.GA_INITIALIZED = true
    }
    logPageView();
  }
  return <Component {...pageProps} />
}

export default MyApp
