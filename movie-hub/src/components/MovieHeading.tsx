

import { Heading } from '@chakra-ui/react'

interface props{
    genreTitle?: string;
}

function MovieHeading({genreTitle}: props) {
  return (
    <Heading marginTop={'5px'} textAlign={'center'} fontSize={{base:'2xl',lg:'5xl',sm:'3xl'}} marginBottom={'10px'} marginLeft={'10px'} as={'h1'}>{genreTitle}{' '}Movies</Heading>
  )
}

export default MovieHeading