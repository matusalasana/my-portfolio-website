
import { useState } from 'react'
import './App.css'
import { 
        Heading,
        Grid, 
        GridItem, 
        Text, 
        Image,
        Card, 
        CardBody, 
        CardTitle,
        AbsoluteCenter,
        HStack, 
        ProgressCircle, 
        SimpleGrid, 
        Separator} from '@chakra-ui/react'

import MovieSkeleton from './components/MovieSkeleton';

import useMovies from './components/hooks/useMovies'
import NavBar from './components/NavBar'
import GenreList from './components/GenreList'
import {type Genre } from './components/hooks/useGenres'
import SortingMovies from './components/SortingMovies'
import useSearchMovies from './components/hooks/useSearchMovies';
import MovieHeading from './components/MovieHeading';


function App() {

  

  const [selectedGenre,setSelectedGenre]=useState<Genre | null>(null)
  const [sortOrder, setSortOrder] = useState<string>('');
  const [searchText,setSearchText]=useState<string>('');
  const [genretitle,setgenretitle]=useState<string>('')

  const {movies:genreMovies,isLoading:loadingGenre,err:errGenre}=useMovies(Number(selectedGenre?.id))
  const {movies:searchMovies,isLoading:isSearchLoading,err:searchErr}=useSearchMovies(searchText)
  const skeletons=[1,2,3,4,5,6,7,8,9];
  const isSearching = searchText.trim().length > 0;
  const moviesToShow = isSearching ? searchMovies : genreMovies;


  const sortedMovies = [...moviesToShow].sort((a, b) => {
    switch (sortOrder) {
      case 'title':
        return a.title.localeCompare(b.title);
      case 'new':
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
      case 'old':
        return new Date(a.release_date).getTime() - new Date(b.release_date).getTime();
      case 'most-rated':
        return b.vote_average - a.vote_average;
      case 'least-rated':
        return a.vote_average - b.vote_average;
      default:
        return 0;
    }
  });

  const filteredMovies = sortedMovies.filter(movie =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );



if (errGenre || searchErr)
  return <Text color="red.500">{errGenre || searchErr}</Text>;





  return (
    <>
    
    <Grid templateAreas={{
      base:`'nav''main'`,
      lg:`'nav nav''main'`
    }}>
      
      <GridItem area={'nav'}>
        <NavBar onSearch={setSearchText}/>
      </GridItem>

      <GridItem gridTemplateColumns={3} area={'main'} >

        <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre)=>{setSelectedGenre(genre),setgenretitle(genre.name)}} />

        <MovieHeading genreTitle={genretitle}/>

        <SortingMovies onSelectSortOrder={setSortOrder}/>

        <SimpleGrid columns={{ base: 2, md: 3, lg: 4,xl:5 }} gap={{base:3,md:4,lg:6}} p={4} >
          {(loadingGenre||isSearchLoading)&& skeletons.map(skeleton=><MovieSkeleton key={skeleton} />)}
          {filteredMovies.map(movie=>
        
                  Number(movie.vote_average)*10>=Number(movie.vote_average)*10 &&  
                    <Card.Root borderRadius={10} overflow={'hidden'} key={movie.id}>
                        <Image  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                        <CardBody spaceY={"10px"}>
                            
                            <CardTitle textAlign={'center'} fontSize={{base:'xs',sm:'sm',lg:'2xl'}}>{movie.title}</CardTitle>
                            <Text textAlign={'center'} color={'gray.500'} fontSize={{base:'8px',sm:'xs',lg:'1xl'}}>{movie.release_date}</Text>
                            
                        </CardBody>
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

    <Separator/>

    <footer className='footer'>
      <a className='about-me' href="https://github.com/matusalasana" >About me</a>
      <Heading color={'gray.500'} marginRight={'10px'} textAlign={'center'} fontSize={'sm'}>© 2025 The Movie Hub. Created by Sana Matusala</Heading>
    </footer>
    </>

  )
}

export default App
