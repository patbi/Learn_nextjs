// These styles apply to every route in the application
import 'tailwindcss/tailwind.css'
 
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}