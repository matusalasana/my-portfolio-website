import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/movie-svgrepo-com.svg'

function NavBar() {
  return (
    <HStack>
        <Image src={logo} boxSize={'60px'}/>
        <Text>This is the navbar</Text>
    </HStack>
  )
}

export default NavBar