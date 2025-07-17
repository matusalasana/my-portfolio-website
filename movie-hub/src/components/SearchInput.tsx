
import { Box, Input, InputGroup } from '@chakra-ui/react'
import { LuSearch} from 'react-icons/lu';


export interface props{
    onUserInput:(value:string)=>void
  }

function SearchInput({onUserInput}:props) {

  return (
    <Box>

      <InputGroup 
        startElement={<LuSearch />}
      >
        <Input
          _focus={{boxShadow:'0 0 15px blue'}}
          onChange={(event)=>onUserInput(event.target.value)}
          placeholder={'Search ...'}
          borderRadius={20}
          width={{base:'100%',lg:'400px'}}
          backgroundColor={'white'}
          color={'black'}
        />
      </InputGroup>

    </Box>
        
  )
}

export default SearchInput