
import {Card, CardBody, CardTitle,AbsoluteCenter,HStack, ProgressCircle, Image, SimpleGrid, Text } from "@chakra-ui/react";
import useMovies from "./hooks/useMovies";
import MovieSkeleton from "./MovieSkeleton";



function MovieCard() {

    const {movies,isLoading}=useMovies()

    const skeletons=[1,2,3,4,5,6];
  return (
    <>
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
    
    </>
  )
}

export default MovieCard