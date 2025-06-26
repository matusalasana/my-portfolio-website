
import { Card, CardBody, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import useMovies from "./hooks/useMovies";


function MovieCard() {
    const {movies}=useMovies()
  return (
    <>
    <SimpleGrid columns={{ base: 2, md: 3, lg: 3 }} gap={{base:3,md:4,lg:6}} p={4} >
        {movies.map(movie=>
        
            <Card.Root borderRadius={10} overflow={'hidden'} key={movie.id}>
                <Image  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <CardBody>
                    <Heading textAlign={'center'} fontSize={{base:'xs',sm:'sm',lg:'2xl'}}>{movie.title}</Heading>
                </CardBody>
            </Card.Root>)}
    </SimpleGrid>
    
    </>
  )
}

export default MovieCard