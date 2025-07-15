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
    <Heading fontSize={'2xl'} textAlign={'center'} fontFamily={'sans-serif'} pt={5} >Genres</Heading>
    
    <SimpleGrid padding={5} gap={'10px'} columns={{base:3,lg:10}}>
      <Box>
        <Button
          onClick={()=>onClickAll(null)}
          width={'100%'}
          variant={selectedGenre==null ? 'solid' : 'surface'}
          >
          All
        </Button>
      </Box>
    {genres?.map(genre=>
      <Box>
        <Button
          width={'100%'}
          variant={selectedGenre==genre.id ? 'solid' : 'surface'}
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
