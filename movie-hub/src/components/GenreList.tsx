import { Button, Heading, Skeleton,Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres"
import { type Genre } from "./hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre:Genre | null;
}


function GenreList({onSelectGenre,selectedGenre}:Props) {

    const {genres,isLoading,err}=useGenres()

    
    if (isLoading) return <Skeleton/>

  return (
  <>
    
    {err && <Text color={'red.500'}>{err}</Text>}
    <Heading fontSize={'2xl'} marginBottom={3} marginLeft={'10px'} >Genres</Heading>
    
    {genres.map(genre=>
                    <Button
                      className="genre-button"
                      backgroundColor={selectedGenre?.id === genre.id ? 'orange.500' : 'normal'}                      
                      onClick={()=>onSelectGenre(genre)}  
                      variant={'outline'}
                      key={genre.id} 
                      fontSize={'lg'} 
                      flexDirection={'column'}
                      justifyContent={'flex-start'}
                    >
                      {genre.name}
                    </Button>
                  )}


  </>
  )
}

export default GenreList
