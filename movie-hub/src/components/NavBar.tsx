
import { HStack, SimpleGrid, Text } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import { IoFilmSharp } from "react-icons/io5"


interface props{
  children:any
}

function NavBar({children}:props) {
  return (
    <SimpleGrid 
      padding={'10px'} 
      backgroundColor={'#2e6ab2'}
    >
      <HStack justifyContent={'space-between'}>
        <HStack>
          <IoFilmSharp 
            size={50}
            color='white'
          />
          <Text 
            textAlign={'center'}
            fontFamily={'sans-serif'} 
            fontSize='xx-large'
            color={'white'}
          >
            The Movie Hub
          </Text>
      </HStack>
      <HStack>
        <ColorModeSwitch/>
      </HStack>
    </HStack>
    <HStack mb={2} display={'grid'} placeItems={'center'}>
      {children}
    </HStack>
      </SimpleGrid>
  )
}

export default NavBar