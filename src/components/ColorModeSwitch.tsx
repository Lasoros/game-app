import { HStack, Switch, Text, useColo } from "@chakra-ui/react";
import { Checkbox } from "@/components/ui/checkbox";

const ColorModeSwitch = () => {
  return (
    <HStack>
      <Switch />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default ColorModeSwitch;
