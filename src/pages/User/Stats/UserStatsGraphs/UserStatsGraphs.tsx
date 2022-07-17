import * as styles from "./UserStatsGraphsStyles";
import { useEffect, useState } from "react";
import { APIStatsGet } from "../../../../types/types";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

type UserStatsGraphsProps = {
  data: APIStatsGet[];
};

type VictoryGraph = {
  x: string;
  y: number;
};

const UserStatsGraphs = ({ data }: UserStatsGraphsProps) => {
  const [graph, setGraph] = useState<VictoryGraph[]>([]);
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    const graphData: VictoryGraph[] = data.map((item) => ({
      x: item.title,
      y: +item.acessos,
    }));
    setTotal(
      data.map(({ acessos }) => +acessos).reduce((acu, cur) => acu + cur, 0)
    );
    setGraph(graphData);
  }, [data]);

  return (
    <styles.GraphContainer className="animeLeft">
      <styles.GraphTotal className="graphItem">
        <p>Acessos: {total}</p>
      </styles.GraphTotal>
      <div className="graphItem">
        <VictoryPie
          data={graph}
          innerRadius={50}
          padding={{ top: 20, bottom: 20, left: 80, right: 80 }}
          style={{
            data: {
              fillOpacity: 0.9,
              stroke: "#fff",
              strokeWidth: 2,
            },
            labels: {
              fontSize: 14,
              fill: "#333",
            },
          }}
        />
      </div>
      <div className="graphItem">
        <VictoryChart>
          <VictoryBar data={graph} alignment="start"></VictoryBar>
        </VictoryChart>
      </div>
    </styles.GraphContainer>
  );
};

export default UserStatsGraphs;
