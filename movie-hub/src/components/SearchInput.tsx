
import { Box,List, Input, InputGroup, Spinner, SimpleGrid } from '@chakra-ui/react'
import { LuSearch} from 'react-icons/lu';
import useSearchMovies from './hooks/useSearchMovies';
import { useState } from 'react';
import { FiFilm } from 'react-icons/fi';
import { PiTelevisionSimpleFill } from 'react-icons/pi';


export interface props{
    onSearch: (query:string)=> void
  }

function SearchInput({onSearch}:props) {

  const [sugesstions,setSugesstions]=useState<string>('')
  const {data:searchTerm,isLoading}=useSearchMovies(sugesstions)

  return (
     <Box  position={'relative'} >

        <InputGroup 
          mb={2}
          startElement={<LuSearch />}
        >
          <Input
            _focus={{boxShadow:'0 0 15px blue'}}
            onChange={(event)=>(setSugesstions(event.target.value))}
            placeholder={'Search ...'}
            borderRadius={20}
            width={{base:'100%',lg:'400px'}}
            backgroundColor={'white'}
            color={'black'}
          />
        </InputGroup>

        {isLoading && <Spinner color={'black'} size="sm" position="absolute" top="10px" right="10px" />}

        {searchTerm && (
          <SimpleGrid borderRadius={5} >
            {searchTerm.map((movie: any) => (
              <Box>
                <List.Root
                  bgColor={'blackAlpha.300'}
                  color={'white'}
                  borderRadius={5}
                  _hover={{backgroundColor:'gray.800'}}
                  margin={'2px'}
                  padding={2} 
                  listStyle={'none'}
                  width={'100%'}
                >
                  <List.Item 
                    onClick={()=>(
                      onSearch(movie.title),
                      setSugesstions('')
                    )} 
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
          </SimpleGrid>
        )}

      </Box>
  )
}

export default SearchInput