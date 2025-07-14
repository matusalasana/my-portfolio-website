
import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react';
import { LuSearch } from 'react-icons/lu';

interface props{
    onSearch: (query:string)=> void;
}

function SearchInput({onSearch}:props) {
    const ref= useRef<HTMLInputElement>(null)
  return (
<InputGroup flex="1" startElement={<LuSearch />}>
        <Input
            onChange={(event)=>onSearch(event.target.value)}
            ref={ref}
            padding={'20px'}
            placeholder={'Search for a movie or tv show'}
            borderRadius={20}
            variant={'subtle'}
            />
        </InputGroup>
  )
}

export default SearchInput