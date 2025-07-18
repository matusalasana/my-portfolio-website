
import { Flex, IconButton } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

interface Props{
  onClickNext:(page:number | null)=>void
  onClickPrevious:(page:number | null)=>void
  btnStatus:boolean
}

const MoviePagination = ({onClickNext,onClickPrevious,btnStatus}:Props) => {

  return (
        <Flex padding={5} display={'flex'} mt={'80px'} justifyContent={'space-evenly'}>
          <IconButton width={'110px'} color={'white'} rounded={10} disabled={btnStatus} onClick={()=>onClickPrevious(null)} bgColor={'blue.700'} padding={2}>
            <LuChevronLeft />Previous
          </IconButton>
          
          <IconButton width={'110px'} color={'white'} rounded={10} onClick={()=>onClickNext(null)} bgColor={'blue.700'} padding={2}>
            Next<LuChevronRight />
          </IconButton>
        </Flex>
  )
}

export default MoviePagination
