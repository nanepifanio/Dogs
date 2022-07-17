import Feed from "../../components/Feed";
import Head from "../../components/Head";
import * as styles from "./HomeStyles";

const Home = () => {
  return (
    <styles.HomeFeedSection className="container mainContainer">
      <Head
        title="Fotos"
        description="Home do site dogs, com o feed de fotos."
      />
      <Feed user={undefined} />
    </styles.HomeFeedSection>
  );
};

export default Home;
