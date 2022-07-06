import { SessionProvider, signOut } from "next-auth/react";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider>
      <Component {...pageProps} />
      <button onClick={signOut}>Sign out</button>
    </SessionProvider>
  );
}

export default MyApp;
