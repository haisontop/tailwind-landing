import Blogs from "../components/Home/Blogs";
import HomeHero from "../components/Home/HomeHero";
import HomeTop from "../components/Home/HomeTop";
import Services from "../components/Home/Services";
import Subscription from "../components/Home/Subscription";
import Team from "../components/Home/Team";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="COMET">
    <HomeTop />
    <HomeHero />
    <Services />
    <Team />
    <Subscription />
    <Blogs />
  </Layout>
);

export default IndexPage;

