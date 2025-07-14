import { SimpleGrid, Skeleton } from "@chakra-ui/react";

function MovieSkeleton() {
  const skeletons= [1,2,3,4,5,6,7,8,9,10,11,12];

  return (
    <SimpleGrid
      padding="10px"
      columns={{ base: 2, md: 3, lg: 5, xl: 6 }}
      gap="10px"
    >
      {skeletons.map((skeleton) => (
        <Skeleton
            key={skeleton}
            borderRadius="10px"
            width={'100%'}
            height={'300px'}
            backgroundColor={'gray.500'}
        />
      ))}
    </SimpleGrid>
  );
}


export default MovieSkeleton