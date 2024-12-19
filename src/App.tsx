import { Grid, GridItem, Show, Text } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";
import GameGrid from "./components/GameGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "base"`,
        lg: `"nav nav" "aside main"`, // wider than 1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
      {/* <GridItem hideBelow={"lg"} area={"aside"}>
        Aside
      </GridItem> */}
      {/* Above used prior to package.json*/}

      <GridItem area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  );
}

export default App;
