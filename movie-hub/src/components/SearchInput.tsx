
import { Box,List, Input, InputGroup, Spinner, SimpleGrid } from '@chakra-ui/react'
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
     <Box position={'relative'}>

        <InputGroup startElement={<LuSearch />}>
            <Input
                onChange={(event)=>(setSugesstions(event.target.value))}
                placeholder={'Search for a movie or tv show'}
                borderRadius={20}
                variant={'subtle'}
            />
        </InputGroup>

        {isLoading && <Spinner size="sm" position="absolute" top="10px" right="10px" />}

        {searchTerm && (
          <SimpleGrid>
            {searchTerm.map((movie: any) => (
              <Box>
                <List.Root 
                  _hover={{backgroundColor:'yellow.focusRing'}}
                  margin={'2px'}
                  borderRadius={5} 
                  padding={1} 
                  listStyle={'none'}
                >
                  <List.Item 
                    onClick={()=>(
                      onSearch(movie.title),
                      setSugesstions('')
                    )} 
                    key={movie.id}
                  >
                    <List.Indicator asChild>
                      {movie.genre_ids.includes(10770) ? <LuTv size={18} color='orange' /> : <FiFilm size={18} color='teal' />}
                    </List.Indicator>
                    {movie.title}
                  </List.Item>
                </List.Root>
              </Box>
            ))}
          </SimpleGrid>
        )}

      </Box>
  )
}

export default SearchInput