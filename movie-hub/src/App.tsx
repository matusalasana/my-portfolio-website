

import './App.css'
import { 
        Heading,
        Grid, 
        GridItem, 
        Separator} from '@chakra-ui/react'

import NavBar from './components/NavBar';
import MoviesPage from './components/MoviesPage';

function App() {

  return (
    <>
    
    <Grid templateAreas={{
      base:`'nav''main'`,
      lg:`'nav nav''main'`
    }}>
      
      <GridItem area={'nav'}>
        <NavBar/>
      </GridItem>

      <GridItem area={'main'} >
        <MoviesPage/>

      </GridItem>
    </Grid>

    <Separator/>

    <footer className='footer'>
      <a className='about-me' href="https://github.com/matusalasana" >About me</a>
      <Heading color={'gray.500'} marginRight={'10px'} textAlign={'center'} fontSize={'sm'}>© 2025 The Movie Hub. Created by Sana Matusala</Heading>
    </footer>
    </>

  )
}

export default App
