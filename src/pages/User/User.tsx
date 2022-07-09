import * as styles from "./UserStyles";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserRoutes from "../../routes/UserRoutes";
import H1 from "../../components/H1";
import UserHeaderNav from "../../components/UserHeaderNav";

const User = () => {
  const [title, setTitle] = useState<string>("");
  const { pathname } = useLocation();
  const { username } = useParams();

  useEffect(() => {
    const pathNameRegex = () => {
      const regex = /estatistica|postar/;
      const regexMatch = pathname.match(regex)?.at(0);
      switch (regexMatch) {
        case "estatistica":
          setTitle("Estatísticas");
          break;
        case "postar":
          setTitle("Poste sua Foto");
          break;
        default:
          setTitle(username as string);
      }
    };
    pathNameRegex();
  }, [pathname]);

  return (
    <styles.Container className="container">
      <styles.UserHeader>
        <H1 title={title} />
        <UserHeaderNav />
      </styles.UserHeader>
      <UserRoutes />
    </styles.Container>
  );
};

export default User;
