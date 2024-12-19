import { SimpleGrid, Skeleton, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, isLoading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14]; //local var is fine as this skeleton will not change. Simply a place holder whilst site loads actual GameCards
  //added more due to size of ultrawides. With only 6 loading skeletons you can see empty space
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={"10"}
        spacing={"10"}
      >
        {isLoading &&
          skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
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
