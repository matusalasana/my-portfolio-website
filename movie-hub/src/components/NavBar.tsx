
import { ClientOnly, HStack, IconButton, Image, Skeleton, Text } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode.tsx"
import { LuMoon, LuSun } from "react-icons/lu"

import logo from '../assets/movie-svgrepo-com.svg'

const NavBar = () => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (

    <HStack>
      <Image src={logo} boxSize={'60px'}/>
      <Text>This is navbar</Text>
      <ClientOnly fallback={<Skeleton boxSize="8" />}>
        <IconButton onClick={toggleColorMode} variant="outline" size="sm">
          {colorMode === "light" ? <LuSun /> : <LuMoon />}
        </IconButton>
      </ClientOnly>
    </HStack>
  )
}

export default NavBar