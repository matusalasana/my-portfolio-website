"use client"

import { Portal, Select, createListCollection } from "@chakra-ui/react"

interface Props{
  onSortChange:(value:string)=>void
}

function SortingMovies({onSortChange}:Props) {

  const frameworks = createListCollection({
  items: [
    { label: "Alphabetical (A-Z)", value: "title.asc" },
    { label: "Number of rating", value: "vote_count.desc" },
    { label: "Popularity", value: "popularity.desc" },
    { label: "Number of stars", value: "vote_average.desc" },
  ],
})

  return (
    <Select.Root onChange={(event)=>onSortChange((event.target as HTMLSelectElement).value)} collection={frameworks} size="sm" width="320px">
      <Select.HiddenSelect />
      <Select.Control>
        <Select.Trigger>
          <Select.ValueText placeholder="Sort movies" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content>
            {frameworks.items.map((framework) => (
              <Select.Item item={framework} key={framework.value}>
                {framework.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  )
}


export default SortingMovies