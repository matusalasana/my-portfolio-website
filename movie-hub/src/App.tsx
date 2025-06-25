
import { Grid, GridItem } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    
    <Grid templateAreas={{
      base:`'nav''main'`,
      lg:`'nav nav''aside main'`
    }}>

      <GridItem area={'nav'} bg={'dodgerblue'}>
        Nav
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
