
import { useState } from 'react'
import './App.css'

import {
        Grid, 
        GridItem, 
        Text, 
        Image,
        Card, 
        CardBody, 
        CardTitle,
        AbsoluteCenter,
        VStack,
        Spinner,
        HStack, 
        ProgressCircle, 
        SimpleGrid } from '@chakra-ui/react'

import MovieSkeleton from './components/MovieSkeleton';

import useMovies from './components/hooks/useMovies'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import {type Genre } from './components/hooks/useGenres'


function App() {
  const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
  const {movies,isLoading,err}=useMovies(Number(selectedGenre?.id))


    const skeletons=[1,2,3,4,5,6];



if (err) return <Text color={'red.500'}>{err}</Text>
  return (
    
    <Grid templateAreas={{
      base:`'nav''main'`,
      lg:`'nav nav''aside main'`
    }}>

      <GridItem area={'nav'}>
        <NavBar/>
      </GridItem>

      <GridItem display={{base:'none',lg:'block'}} area={'aside'}>
        {isLoading && <VStack marginTop={'100px'} colorPalette="teal">
                        <Spinner color="colorPalette.600" />
                        <Text color="colorPalette.600">Loading the genres...</Text>
                      </VStack>}
        <GenreList onSelectGenre={(genre)=>setSelectedGenre(genre)} />
      </GridItem>

      <GridItem gridTemplateColumns={3} area={'main'} >

        <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} gap={{base:3,md:4,lg:6}} p={4} >
        {isLoading&& skeletons.map(skeleton=><MovieSkeleton key={skeleton} />)}
        {movies.map(movie=>
                    <Card.Root borderRadius={10} overflow={'hidden'} key={movie.id}>
                        <Image  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <CardBody spaceY={"10px"}>
                            
                            <CardTitle textAlign={'center'} fontSize={{base:'xs',sm:'sm',lg:'2xl'}}>{movie.title}</CardTitle>
                            <Text textAlign={'center'} color={'gray.500'} fontSize={{base:'8px',sm:'xs',lg:'1xl'}}>{movie.release_date}</Text>
                            
                        </CardBody>
                        <Card.Description padding={'5px'}>
                            {movie.overview}
                        </Card.Description>
                        <HStack padding={'5px'}>
                            <ProgressCircle.Root colorPalette={Number(movie.vote_average.toFixed(1))*10>=70 ?'green':'yellow'}  key={movie.id} value={Number(movie.vote_average.toFixed(1))*10} >
                                <ProgressCircle.Circle>
                                    <ProgressCircle.Track />
                                    <ProgressCircle.Range />
                                </ProgressCircle.Circle>
                                <AbsoluteCenter>
                                    <ProgressCircle.ValueText />
                                </AbsoluteCenter>
                            </ProgressCircle.Root>
                        </HStack>                
                    </Card.Root>)}
    </SimpleGrid>

      </GridItem>

    </Grid>

  )
}

export default App
