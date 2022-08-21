import "/public/css/main.css";
import Layout from "../components/layout";
import { reduxWrapper } from "../redux/store";
function MyApp({ Component, pageProps }) {
  const data = { name: "roshan" };

  return (
    <Layout pageProps={data}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default reduxWrapper.withRedux(MyApp);
