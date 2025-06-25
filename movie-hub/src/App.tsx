
import { Grid, GridItem } from '@chakra-ui/react'

import './App.css'
import NavBar from './components/NavBar'

function App() {

  return (
    
    <Grid templateAreas={{
      base:`'nav''main'`,
      lg:`'nav nav''aside main'`
    }}>

      <GridItem area={'nav'}>
        <NavBar/>
      </GridItem>
      <GridItem display={{base:'none',lg:'block'}} area={'aside'}>
        aside
      </GridItem>
      <GridItem area={'main'} >
        main
      </GridItem>

    </Grid>

  )
}

export default App
