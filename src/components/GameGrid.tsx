import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10"}
        spacing={"10"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game}></GameCard>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

// import React, { useEffect, useState } from "react";
// import apiClient from "../services/api-client";

// const GameGrid = () => {
//   const [games, setGames] = useState<Games[]>([]);
//   const [error, setError] = useState("");

//   interface Games {
//     id: number;
//     name: string;
//   }

//   interface FetchGamesResponse {
//     count: number;
//     results: Games[];
//   }

//   useEffect(() => {
//     apiClient
//       .get<FetchGamesResponse>("/games")
//       .then((res) => setGames(res.data.results))
//       .catch((err) => setError(err.message));
//   });

//   return (
//     <>
//       <ul>
//         {games.map((games) => (
//           <li key={games.id}>{games.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default GameGrid;
// Testing purposes to debug API not working - keep to quick test in case API stops working
