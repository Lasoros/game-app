import { Button, Show } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { NavBar } from "./components/NavBar";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "base"`,
        lg: `"nav nav" "aside main"`, // wider than 1024px
      }}
    >
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem hideBelow={"lg"} area={"aside"} padding={"10px"} bg={"gold"}>
        Aside
      </GridItem>
      <GridItem area={"main nav"} padding={"10px"} bg={"blue"}>
        GameGrid
      </GridItem>
    </Grid>
  );
}

export default App;
