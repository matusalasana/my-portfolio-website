
import { Text, Image, HStack, SimpleGrid, Box } from "@chakra-ui/react";
import useMovies from "./hooks/useMovies";
import LoadingSkeleton from "./LoadingSkeleton";
import { HiStar } from "react-icons/hi";

export interface Props{
    genreId:number | null
}

function MovieCard({genreId}:Props) {
  const { data: movies, isLoading } = useMovies(genreId,'');

  if (isLoading) return <LoadingSkeleton />;

  return (
    <SimpleGrid
      padding="10px"
      columns={{ base: 2, md: 3, lg: 5, xl: 6 }}
      gap="10px"
    >
      {movies?.map((movie) => (
        <Box
          key={movie.id}
          borderRadius="10px"
          overflow="hidden"
          position="relative"
        >
          <Image
            height="100%"
            width="100%"
            objectFit="fill"
            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
            borderRadius={'inherit'}
          />

          <Box p="2">
            <Text
              textAlign="center"
              fontWeight={{ sm: "medium", lg: 'thin' }}
              position="absolute"
              left={0}
              bottom="0"
              background="blackAlpha.800"
              width="100%"
              py="10px"
            >
              {movie.title}
            </Text>


            <Text position={'absolute'} left={'0px'} top={'0px'} fontSize="10px" background={'blackAlpha.800'} borderBottomRightRadius ={'md'} px={1}>
              {movie.release_date.slice(0, 4)}
            </Text>
          </Box>

          <HStack
            position="absolute"
            background={'blackAlpha.800'}
            borderBottomLeftRadius={'md'}
            top="0"
            right="0px"
            px={'2px'}
          >
            <HiStar color="gold" />
            <Text fontSize="small">
              {movie.vote_average.toPrecision(2)} ({movie.vote_count})
            </Text>
          </HStack>
        </Box>
      ))}
    </SimpleGrid>
  );
}

export default MovieCard;
