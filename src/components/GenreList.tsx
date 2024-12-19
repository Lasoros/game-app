import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GameCardSkeleton from "./GenreSkeleton";
import GenreListContainer from "./GenreListContainer";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  // if (isLoading) return <Spinner />;

  const skeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
  ];

  return (
    <List>
      {isLoading &&
        skeletons.map((skeleton) => (
          <GenreListContainer>
            <GameCardSkeleton key={skeleton} />
          </GenreListContainer>
        ))}

      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={1.5}>
          <HStack>
            <Image
              boxSize={"32px"}
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Text fontSize={"lg"}>{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
