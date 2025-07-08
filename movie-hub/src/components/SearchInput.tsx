
import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react';
import { LuSearch } from 'react-icons/lu';

interface props{
    onSearch: (searchText:string)=> void;
}

function SearchInput({onSearch}:props) {
    const ref= useRef<HTMLInputElement>(null)
  return (

    <>
    
    
    <form onSubmit={(event)=>{
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
    }}>
        <InputGroup flex="1" startElement={<LuSearch />}>
        <Input
                ref={ref}
                padding={'20px'}
                placeholder={'Search for a movie...'}
                borderRadius={20}
                variant={'subtle'}
            />
        </InputGroup>
    </form>

    </>

  )
}

export default SearchInput