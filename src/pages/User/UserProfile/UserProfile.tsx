import { useParams } from "react-router-dom";
import Feed from "../../../components/Feed";
import H1 from "../../../components/H1";

const UserProfile = () => {
  const { author } = useParams();

  return (
    <section className="container mainContainer">
      <H1>{author}</H1>
      <Feed user={author} />
    </section>
  );
};

export default UserProfile;
