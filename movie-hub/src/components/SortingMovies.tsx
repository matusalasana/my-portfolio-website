import { HStack } from "@chakra-ui/react";

interface Props {
  onSelectSortOrder: (order: string) => void;
}

function SortingMovies({ onSelectSortOrder }: Props) {
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: 'title', label: 'A-Z' },
    { value: 'new', label: 'Latest release' },
    { value: 'old', label: 'Oldest release' },
    { value: 'most-rated', label: 'Most rated' },
    { value: 'least-rated', label: 'Least rated' }
  ];

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelectSortOrder(event.target.value);
  };

  return (
    <HStack display={'flex'} className="sortby">
    <p>Sort by:</p>
    <select className="sort-selector" onChange={handleChange}>
      {sortOrders.map((order) => (
        <option key={order.value} value={order.value}>
          {order.label}
        </option>
      ))}
    </select>
    </HStack>
  );
}

export default SortingMovies;
