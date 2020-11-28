import { Auth0Provider } from "@auth0/auth0-react";
import "../styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain="dev-5qv6e2f9.eu.auth0.com"
      clientId="qOWLgvAq44ctOsTT9cuo8U1QhsQE99Tv"
      redirectUri="https://playground-nextjs-blog.vercel.app/"
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}
