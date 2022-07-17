import * as styles from "./UserStyles";
import { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import UserRoutes from "../../routes/UserRoutes";
import H1 from "../../components/H1";
import UserHeaderNav from "../../components/UserHeaderNav";
import UserContext from "../../context/UserContext";
import Head from "../../components/Head";

const User = () => {
  const [title, setTitle] = useState<string>("");
  const { pathname } = useLocation();
  const { username } = useParams();
  const { userData } = useContext(UserContext);

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
      <Head title={username} description={`Página do usuário ${username}`} />
      <styles.UserHeader>
        <H1 title={title} />
        <UserHeaderNav />
      </styles.UserHeader>
      <UserRoutes user={userData} />
    </styles.Container>
  );
};

export default User;
