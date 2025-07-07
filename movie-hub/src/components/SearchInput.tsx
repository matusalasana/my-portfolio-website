
import { Input, InputGroup } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

function SearchInput() {
  return (

    <>
    
    
    <InputGroup borderRadius={20} startAddon={<BsSearch/>}>        
    <Input
            placeholder={'Search for a movie...'}
            borderRadius={20}
            variant={'subtle'}
        />
    </InputGroup>

    </>

  )
}

export default SearchInput