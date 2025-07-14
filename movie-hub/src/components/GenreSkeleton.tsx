import { Box, SimpleGrid, Skeleton } from "@chakra-ui/react";

function GenreSkeleton() {

    const skeletons=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]

  return (
    
    <SimpleGrid gapY={'10px'} columns={4}>
    {skeletons.map(skeleton=>
      <Box>
        <Skeleton
            width={'100%'}
            height={'40px'}
            margin={'5px'}
            backgroundColor={'gray.600'}
            key={skeleton}
        />
      </Box>
    )}

    </SimpleGrid>
  )
}

export default GenreSkeleton
