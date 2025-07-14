import { HStack, IconButton } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"

import { BiMoon, BiSun } from "react-icons/bi"


function ColorModeSwitch (){
    const { toggleColorMode, colorMode } = useColorMode()
    return (
        <HStack>
            <IconButton variant={'ghost'} size={'sm'} onClick={toggleColorMode}>
                {colorMode=='dark' ? <BiMoon/> : <BiSun/>}
            </IconButton>
        </HStack>
    )
}

export default ColorModeSwitch

