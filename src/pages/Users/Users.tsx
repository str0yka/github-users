import { ChangeEvent, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import SearchBar from "@components/common/SearchBar/SearchBar.tsx";
import { useDebounce } from "@/hooks";

const Users = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState<string>(searchParams.get("query") || "");
  const onSearch = (query: string) => setSearchParams({ query: query });
  const onDebouncedSearch = useDebounce(onSearch, 1000);

  const handleSearchBar = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    onDebouncedSearch(query);
  }, [query]);

  return (
    <>
      <div>{searchParams.get("q")}</div>
      <SearchBar
        value={query}
        onChange={handleSearchBar}
        onSearch={() => onSearch(query)}
      />
    </>
  );
};

export default Users;
