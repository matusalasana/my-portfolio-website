

import { Heading } from '@chakra-ui/react'

interface props{
    genreTitle?: (string);
}

function DynamicMovieHeading({genreTitle}: props) {
  return (
    <Heading margin={'40px'} textAlign={'center'} fontSize={'2xl'} as={'h1'}>{genreTitle=='' ? "All Movies" : genreTitle +' '+"Movies"}</Heading>
  )
}

export default DynamicMovieHeading