import { useState, useEffect, useCallback } from "react";
import { FightCard } from "../components/FightCard";
import * as api from "../api/fightData";
import _ from "lodash";

export const Home = () => {
  const [data, setData] = useState([]);

  const updateData = useCallback(async () => {
    try {
      const { sports } = await api.getFightData();
      const leagues = _.get(sports[0], "leagues", {});
      const events = _.get(leagues[0], "events", []);

      if (events) {
        setData(events);
      }
    } catch (e) {
      console.error("could not update fight data");
    }
  }, []);

  useEffect(() => {
    setInterval(updateData, 3000);
  }, [updateData]);

  const pageElements = data.map((fighterDetails, index) => (
    <div key={index} style={{ padding: 10 }}>
      <FightCard details={fighterDetails} />
    </div>
  ));

  return (
    <div
      style={{
        width: 600,
      }}
    >
      {pageElements}
    </div>
  );
};
