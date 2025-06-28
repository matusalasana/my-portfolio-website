import {
    Card,
  CardBody,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react"


function MovieSkeleton() {
  return (
    <Card.Root width={{base:'100px',sm:'155px',lg:'500px'}} gap="6" maxW="xs">
        <Skeleton height="200px" />
        <CardBody>
            <SkeletonText />
        </CardBody>
    </Card.Root>
  )
}

export default MovieSkeleton


