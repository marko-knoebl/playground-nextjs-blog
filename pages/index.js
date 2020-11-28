import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";
import Date from "../components/date";
import { useAuth0 } from "@auth0/auth0-react";

export default function Home({ allPostsData }) {
  const auth = useAuth0();

  const makeRequestSilently = () => {
    auth.getAccessTokenSilently().then((token) => {
      console.log(`making request with token ${token}`);
    });
  };

  const makeRequestWithPopup = () => {
    auth.getAccessTokenWithPopup().then((token) => {
      console.log(`making request with token ${token}`);
    });
  };

  if (auth.isLoading) {
    return <button onClick={auth.loginWithRedirect}>Log in</button>;
  } else if (auth.error) {
    return <div>error...</div>;
  } else if (!auth.isAuthenticated) {
    return <button onClick={auth.loginWithRedirect}>Log in</button>;
  } else {
    return (
      <div>
        main content
        <button onClick={auth.logout}>log out</button>
        <button onClick={makeRequestSilently}>make request silently</button>
        <button onClick={makeRequestWithPopup}>make request with popup</button>
      </div>
    );
  }
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
