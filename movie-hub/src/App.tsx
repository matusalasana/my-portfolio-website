
import { Grid, GridItem } from '@chakra-ui/react'

import './App.css'
import NavBar from './components/NavBar'
import MovieCard from './components/MovieCard'

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
      <GridItem gridTemplateColumns={3} area={'main'} >
        <MovieCard/>
      </GridItem>

    </Grid>

  )
}

export default App
