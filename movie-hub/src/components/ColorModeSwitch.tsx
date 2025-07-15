import { HStack, IconButton } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"

import { BiSun } from "react-icons/bi"
import { BsMoonStarsFill } from "react-icons/bs"


function ColorModeSwitch (){
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack>
            <IconButton cursor={'button'} _hover={{backgroundColor:'blackAlpha.100'}} rounded={'10px'} variant={'plain'} size={'lg'} onClick={toggleColorMode}>
                {colorMode=='dark' ? <BiSun color="orange"/> : <BsMoonStarsFill color="black" />}
            </IconButton>
        </HStack>
    )
}

export default ColorModeSwitch

