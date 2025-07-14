

import { Heading } from '@chakra-ui/react'

interface props{
    genreTitle?: string;
}

function DynamicMovieHeading({genreTitle}: props) {
  return (
    <Heading margin={'40px'} textAlign={'center'} fontSize={{base:'2xl',lg:'5xl',sm:'3xl'}} as={'h1'}>{genreTitle}{' '}Movies</Heading>
  )
}

export default DynamicMovieHeading