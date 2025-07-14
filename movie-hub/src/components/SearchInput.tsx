
import { Input, InputGroup } from '@chakra-ui/react'
import { LuSearch } from 'react-icons/lu';

interface props{
    onSearch: (query:string)=> void;
}

function SearchInput({onSearch}:props) {
  return (
<InputGroup startElement={<LuSearch />}>
        <Input
            onChange={(event)=>onSearch(event.target.value)}
            padding={'20px'}
            placeholder={'Search for a movie or tv show'}
            borderRadius={20}
            variant={'subtle'}
            />
        </InputGroup>
  )
}

export default SearchInput