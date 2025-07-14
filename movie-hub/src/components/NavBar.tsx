
import { HStack, Text } from "@chakra-ui/react"
import ColorModeSwitch from "./ColorModeSwitch"
import { IoFilmSharp } from "react-icons/io5"

function NavBar() {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <HStack>
        <IoFilmSharp color="teal" size={50}/><Text fontFamily={'sans-serif'} fontSize={'xx-large'} fontWeight={'bold'} color={'red.700'}>The Movie Hub</Text></HStack>
      <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar