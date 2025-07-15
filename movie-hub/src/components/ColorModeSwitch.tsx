import { HStack, IconButton } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"

import { BiSun } from "react-icons/bi"
import { TbMoonStars } from "react-icons/tb"


function ColorModeSwitch (){
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack>
            <IconButton cursor={'button'} _hover={{backgroundColor:'blackAlpha.100'}} rounded={'10px'} variant={'plain'} size={'md'} onClick={toggleColorMode}>
                {colorMode=='dark' ? <TbMoonStars size={''} color="black" /> : <BiSun color="orange"/>}
            </IconButton>
        </HStack>
    )
}

export default ColorModeSwitch

