import { HStack, Image } from "@chakra-ui/react"

import logo from '../assets/movie-svgrepo-com.svg'
import ColorModeSwitch from "./ColorModeSwitch"
import SortingMovies from "./SortingMovies"


function NavBar() {
  return (
    <HStack justifyContent={'space-between'} padding={'10px'}>
      <Image src={logo} boxSize='60px' />
      <SortingMovies/>
      <ColorModeSwitch/>
    </HStack>
  )
}

export default NavBar