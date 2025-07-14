import { Box, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres"

function GenreList() {

    const {data:genres}=useGenres()

  return (
  <>
    <Heading fontSize={'2xl'} textAlign={'center'} >Genres</Heading>
    
    <SimpleGrid gapY={'10px'} columns={4}>
    {genres?.map(genre=>
      <Box>
        <Button
          key={genre.id}
        >
          {genre.name}
        </Button>
      </Box>
    )}

    </SimpleGrid>
  </>
  )
}

export default GenreList
