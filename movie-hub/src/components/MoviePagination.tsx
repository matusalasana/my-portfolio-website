
import { Flex, IconButton } from "@chakra-ui/react"
import { LuChevronLeft, LuChevronRight } from "react-icons/lu"

interface Props{
  onClickNext:(page:number | null)=>void
  onClickPrevious:(page:number | null)=>void
  disabled:boolean
}

const MoviePagination = ({onClickNext,onClickPrevious,disabled}:Props) => {

  return (
        <Flex padding={5} display={'flex'} mt={'80px'} justifyContent={'space-evenly'}>
          <IconButton disabled={disabled} onClick={()=>onClickPrevious(null)} bgColor={'blue.600'} padding={2}>
            <LuChevronLeft />Previous
          </IconButton>
          
          <IconButton onClick={()=>onClickNext(null)} bgColor={'blue.600'} padding={2}>
            Next<LuChevronRight />
          </IconButton>
        </Flex>
  )
}

export default MoviePagination
