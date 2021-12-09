import Blogs from "../components/Home/Blogs";
import HomeHero from "../components/Home/HomeHero";
import HomeTop from "../components/Home/HomeTop";
import Services from "../components/Home/Services";
import Subscription from "../components/Home/Subscription";
import Team from "../components/Home/Team";
import Layout from "../components/Layout";
import client from "../client";

const IndexPage = ({ blogs, team }) => {
  return (
    <Layout title="COMET">
      <HomeTop />
      <HomeHero />
      <Services />
      <Team team={team} />
      <Subscription />
      <Blogs blogs={blogs} />
    </Layout>
  );
};

export async function getStaticProps(context) {
  const blogs = await client.fetch(
    `*[_type == "blog"][0..2]{
      title,
      preview,
      slug,
      mainImage {
        asset -> {
          _id,
          url
        }
      }
    }`
  );

  const teamData = await client.fetch(`
  *[_type == "team"]{
    title,
    description,
    team_images[]{
      asset -> {
        _id,
        url
      }
    }
  }
  `);

  const team = {
    ...teamData[0],
    team_images: teamData[0].team_images.map((image) => image.asset.url),
  };

  return {
    props: {
      blogs,
      team,
    },
    revalidate: 60,
  };
}

export default IndexPage;
