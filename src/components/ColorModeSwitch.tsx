// import { Button, HStack, Switch, Text } from "@chakra-ui/react";

// const ColorModeSwitch = () => {
//   return (
//     <HStack>
//       {/* <Checkbox>Click me</Checkbox> */}
//       <Button>Dark Mode</Button>
//     </HStack>
//   );
// };

// export default ColorModeSwitch;

import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  return (
    <HStack>
      <Switch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text whiteSpace="nowrap">Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
