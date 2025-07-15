import { Box, Text, Button, Heading, SimpleGrid } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres"
import GenreSkeleton from "./GenreSkeleton";

interface Props{
  selectedGenre:number | null;
  onSelectGenre:(id:number,name:string)=>void;
  onClickAll:(all:null)=>void;
}

function GenreList({selectedGenre,onSelectGenre,onClickAll}:Props) {

    const {data:genres,isLoading,error}=useGenres()

    if (error) return <Text>{error.message}</Text>
    if (isLoading) return <GenreSkeleton/>

  return (
  <>
    <Heading fontSize={'2xl'} textAlign={'center'} >Genres</Heading>
    
    <SimpleGrid gapY={'10px'} columns={4}>
      <Box>
        <Button
          onClick={()=>onClickAll(null)}
          width={'100%'}
          margin={'5px'}
          colorPalette={'blue'}
          variant={selectedGenre==null ? 'solid' : 'outline'}
          >
          All
        </Button>
      </Box>
    {genres?.map(genre=>
      <Box>
        <Button
          width={'100%'}
          margin={'5px'}
          colorPalette={'blue'}
          variant={selectedGenre==genre.id ? 'solid' : 'outline'}
          onClick={()=>onSelectGenre(genre.id,genre.name)}
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
