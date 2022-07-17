import { lazy, Suspense, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../../api/api";
import Head from "../../../components/Head";
import Loading from "../../../components/Loading";
import ShowError from "../../../components/ShowError";
import { useFetch } from "../../../hooks/useFetch";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { APIStatsGet } from "../../../types/types";
const UserStatsGraphs = lazy(() => import("./UserStatsGraphs"));

const Stats = () => {
  const { username } = useParams();
  const { data, error, loading, request } = useFetch();
  const { getLocalValue } = useLocalStorage();

  useEffect(() => {
    const fetchStats = async (): Promise<void> => {
      const { url, options } = api.STATS_GET(getLocalValue("token"));
      await request(url, options);
    };
    fetchStats();
  }, [request]);

  return (
    <>
      {loading && <Loading />}
      {error && <ShowError error={error} />}
      {data && (
        <Suspense fallback={<div></div>}>
          <Head
            title={username + " | Estatísticas"}
            description={`Página de Estatísticas do usuário ${username}`}
          />
          <UserStatsGraphs data={data as APIStatsGet[]} />
        </Suspense>
      )}
    </>
  );
};

export default Stats;
