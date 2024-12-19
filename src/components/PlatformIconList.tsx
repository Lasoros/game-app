import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    // { [key:string] } is called an index signature
    // name: PlayStation
    // slug: playstation <-- rely on slug (for the most part) as they tend to not change

    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    man: FaApple,
    android: FaAndroid,
    linux: FaLinux,
    web: BsGlobe,
    ios: MdPhoneIphone,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color={"gray.500"} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
