import { Button, Text, Skeleton, Image } from "@chakra-ui/react";
import useGenres from "./hooks/useGenres"
import { type Genre } from "./hooks/useGenres";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}


function GenreList({onSelectGenre}:Props) {

    const {genres,isLoading,err}=useGenres()

    if (err) return <Text color={'red.500'}>{err}</Text>
    if (isLoading) return <Skeleton/>

  return (
  <>
    

    
    {genres.map(genre=>
                <ul>
                  <li>
                
                    <Button 
                      marginLeft={'10px'}
                      marginBottom={'10px'}
                      padding={'5px'}
                      onClick={()=>onSelectGenre(genre)} 
                      // variant={genre.id ? "solid" : "ghost"} 
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
