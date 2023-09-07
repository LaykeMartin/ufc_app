import { FightCard } from "../components/FightCard";
import * as api from "../api/fightData";
import _ from "lodash";
import { useQuery } from "react-query";

export const Home = () => {
  const { data } = useQuery("data", api.getFightData, {
    refetchInterval: 2000,
  });

  const pageElements = (data) => {
    if (data) {
      const { sports } = data;
      const leagues = _.get(sports[0], "leagues", {});
      const events = _.get(leagues[0], "events", []);
      return events.map((fighterDetails, index) => (
        <div key={index} style={{ padding: 10 }}>
          <FightCard details={fighterDetails} />
        </div>
      ));
    }
  };

  return (
    <div
      style={{
        width: 600,
      }}
    >
      {pageElements(data)}
    </div>
  );
};
