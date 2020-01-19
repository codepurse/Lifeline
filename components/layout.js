import Head from "../components/head";

const Layout = props => (
  <div>
    <Head>
      <title>Login - Lifeline</title>
    </Head>
    {props.children}
  </div>
);

export default Layout;
