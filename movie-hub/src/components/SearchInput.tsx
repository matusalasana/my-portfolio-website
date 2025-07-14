
import { Box,List, Input, InputGroup, Spinner } from '@chakra-ui/react'
import { LuSearch, LuTv} from 'react-icons/lu';
import useSearchMovies from './hooks/useSearchMovies';
import { useState } from 'react';
import { FiFilm } from 'react-icons/fi';


interface props{
    onSearch: (query:string)=> void
  }

function SearchInput({onSearch}:props) {

  const [sugesstions,setSugesstions]=useState<string>('')
  const {data:searchTerm,isLoading}=useSearchMovies(sugesstions)

  return (
    <>
     <Box>
        <InputGroup startElement={<LuSearch />}>
            <Input
                onChange={(event)=>(onSearch(event.target.value),setSugesstions(event.target.value))}
                padding={'20px'}
                placeholder={'Search for a movie or tv show'}
                borderRadius={20}
                variant={'subtle'}
            />
        </InputGroup>

        

      {isLoading && <Spinner size="sm" position="absolute" top="10px" right="10px" />}

      {searchTerm && (
        <Box>
          {searchTerm.map((movie: any) => (
              
            <List.Root gap="2" variant="plain" align="center">
              <List.Item onClick={()=>(onSearch(movie.title),setSugesstions(''))} key={movie.id}>
                <List.Indicator asChild color="yellow.600">
                  {movie.genre_ids.includes(10770) ? <LuTv/> : <FiFilm  />}
                </List.Indicator>
                {movie.title}
              </List.Item>
            </List.Root>

          ))}
        </Box>
      )}
    </Box>

        </>
  )
}

export default SearchInput