import Feed from "../../components/Feed";
import Loading from "../../components/Loading";
import * as styles from "./HomeStyles";

const Home = () => {
  return (
    <styles.HomeFeedSection className="container mainContainer">
      <Loading />
      {/* <Feed /> */}
    </styles.HomeFeedSection>
  );
};

export default Home;
