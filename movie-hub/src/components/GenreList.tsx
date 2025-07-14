import { Box, Text, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres"
import GenreSkeleton from "./GenreSkeleton";

interface Props{
  selectedGenre:number | null;
  onSelectGenre:(id:number)=>void;
}

function GenreList({selectedGenre,onSelectGenre}:Props) {

    const {data:genres,isLoading,error}=useGenres()

    if (error) return <Text>{error.message}</Text>
    if (isLoading) return <GenreSkeleton/>

  return (
  <>
    <Heading fontSize={'2xl'} textAlign={'center'} >Genres</Heading>
    
    <SimpleGrid gapY={'10px'} columns={4}>
    {genres?.map(genre=>
      <Box>
        <Button
        width={'100%'}
          margin={'5px'}
          color={'white'}
          backgroundColor={selectedGenre==genre.id ? 'blue.600' : 'blackAlpha.800'}
          variant={'outline'}
          onClick={()=>onSelectGenre(genre.id)}
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
