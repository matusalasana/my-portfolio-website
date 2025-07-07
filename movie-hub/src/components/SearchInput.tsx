
import { Input, InputGroup } from '@chakra-ui/react'
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs'

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
        <InputGroup borderRadius={20} startAddon={<BsSearch/>}>
        <Input
                ref={ref}
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