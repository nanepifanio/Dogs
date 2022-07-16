import Feed from "../../components/Feed";
import * as styles from "./HomeStyles";

const Home = () => {
  return (
    <styles.HomeFeedSection className="container mainContainer">
      <Feed />
    </styles.HomeFeedSection>
  );
};

export default Home;
