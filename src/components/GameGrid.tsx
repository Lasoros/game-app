// import { Text } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";

// const GameGrid = () => {
//   const { games, error } = useGames();

//   return (
//     <>
//       {error && <Text>{error}</Text>}
//       <ul>
//         {games.map((game) => (
//           <li key={game.id}> {game.name} </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default GameGrid;

import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const GameGrid = () => {
  const [games, setGames] = useState<Games[]>([]);
  const [error, setError] = useState("");

  interface Games {
    id: number;
    name: string;
  }

  interface FetchGamesResponse {
    count: number;
    results: Games[];
  }

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });

  return (
    <>
      <ul>
        {games.map((games) => (
          <li key={games.id}>{games.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
