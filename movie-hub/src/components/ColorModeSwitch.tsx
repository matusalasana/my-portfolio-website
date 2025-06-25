import { HStack, Switch } from "@chakra-ui/react"
import { useColorMode } from "./ui/color-mode"

import { useState } from "react"


function ColorModeSwitch (){
    const { toggleColorMode, colorMode } = useColorMode()
    const [status, setStatus] = useState(colorMode)

    return (
        <HStack>
            <Switch.Root
                checked={colorMode=='dark'}
                onChange={toggleColorMode}
                colorPalette={'teal'}
                onClick={()=>setStatus(colorMode)}>
                <Switch.HiddenInput />
                <Switch.Control>
                    <Switch.Thumb />
                </Switch.Control>
                
                <Switch.Label>{status}</Switch.Label>
            </Switch.Root>
        </HStack>
    )
}

export default ColorModeSwitch

