
import { Grid, GridItem } from '@chakra-ui/react'

import NavBar from './components/NavBar'
import './App.css'

function App() {

  return (
    
    <Grid templateAreas={{
      base:`'nav''main'`,
      lg:`'nav nav''aside main'`
    }}>

      <GridItem area={'nav'}>
        <NavBar/>
      </GridItem>
      <GridItem display={{base:'none',lg:'block'}} area={'aside'} bg={'coral'}>
        aside
      </GridItem>
      <GridItem area={'main'} bg={'gold'}>
        main
      </GridItem>

    </Grid>

  )
}

export default App
