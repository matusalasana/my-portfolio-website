import { Box, List } from "@chakra-ui/react"
import useSearchMovies from "./hooks/useSearchMovies"
import { PiTelevisionSimpleFill } from "react-icons/pi";
import { FiFilm } from "react-icons/fi";
import type { Movie } from "./hooks/useMovies";

interface Props{
    userInput:string;
    onClickSuggestion:(movie:Movie[])=>void
}

function SearchSuggestions({userInput, onClickSuggestion}:Props) {

const {data:searchTerm}=useSearchMovies(userInput)
    
  return (
    <Box m={2}>
        {searchTerm && (
            <Box    
                display={'flex'} 
                scrollbar={'hidden'} 
                height={'400px'} 
                overflowY={'scroll'} 
                flexDirection={'column'} 
                rounded={10} 
            >
                {searchTerm.map((movie: any) => (
                    <Box key={movie.id}>
                        <List.Root
                        onClick={()=>onClickSuggestion([movie])}
                        borderRadius={5}
                        border={'2px solid skyblue'}
                        _hover={{backgroundColor:'gray.500'}}
                        margin={'2px'}
                        padding={3} 
                        listStyle={'none'}
                        width={'100%'}
                        >
                        <List.Item 
                            key={movie.id}
                        >
                            <List.Indicator asChild>
                            {movie.genre_ids.includes(10770) ? <PiTelevisionSimpleFill size={22} color='black' /> : <FiFilm size={18} color='yellow' />}
                            </List.Indicator>
                            {movie.title}
                        </List.Item>
                        </List.Root>
                    </Box>
                ))}
            </Box>
        )}
    </Box>
  )
}

export default SearchSuggestions