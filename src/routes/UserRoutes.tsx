import { useRoutes } from "react-router-dom";
import Feed from "../components/Feed";
import NotFound from "../pages/NotFound";
import PostPictures from "../pages/User/PostPictures";
import Stats from "../pages/User/Stats";
import { APIUserGet } from "../types/types";

type UserRoutesProps = {
  user: APIUserGet | null;
};

const UserRoutes = ({ user }: UserRoutesProps) => {
  return useRoutes([
    { path: "", element: <Feed user={user?.id} /> },
    { path: "estatisticas", element: <Stats /> },
    { path: "postar", element: <PostPictures /> },
    { path: "*", element: <NotFound /> },
  ]);
};

export default UserRoutes;
