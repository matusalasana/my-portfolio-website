

import { Heading } from '@chakra-ui/react'

interface props{
    genreTitle?: (string);
}

function DynamicMovieHeading({genreTitle}: props) {
  return (
    <Heading  textAlign={'center'} fontSize={'2xl'} fontFamily={'sans-serif'} mt={'100px'} >{genreTitle=='' ? "All Movies" : genreTitle}</Heading>
  )
}

export default DynamicMovieHeading