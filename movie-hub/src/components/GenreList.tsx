import { Button, Skeleton,Text } from "@chakra-ui/react";
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
    
    {genres.map(genre=>
                <ul>
                  <li>
                
                    <Button 
                      backgroundColor={selectedGenre?.id === genre.id ? 'blue.500' : 'normal'}                      
                      marginLeft={'10px'}
                      marginBottom={'10px'}
                      padding={'5px'}
                      onClick={()=>onSelectGenre(genre)}  
                      variant={'outline'}
                      key={genre.id} 
                      fontSize={'lg'} 
                      flexDirection={'column'}
                      justifyContent={'flex-start'}
                    >
                      {genre.name}
                    </Button>
                  </li>
                </ul>)}


  </>
  )
}

export default GenreList
