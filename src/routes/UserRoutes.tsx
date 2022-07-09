import { useRoutes } from "react-router-dom";
import Feed from "../components/Feed";
import PostPictures from "../pages/User/PostPictures";
import Stats from "../pages/User/Stats";

const UserRoutes = () => {
  return useRoutes([
    { path: "", element: <Feed /> },
    { path: "estatisticas", element: <Stats /> },
    { path: "postar", element: <PostPictures /> },
  ]);
};

export default UserRoutes;
