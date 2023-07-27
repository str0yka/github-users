import { Link, useSearchParams } from "react-router-dom";

import SearchBar from "@components/SearchBar/SearchBar.tsx";
import { useDebounce } from "@/hooks";

import Container from "@components/common/Container/Container.tsx";

import s from "./Header.module.css";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const onDebouncedSearch = useDebounce(
    (query: string) => setSearchParams({ query }, { replace: true }),
    500
  );

  return (
    <header className={s.header}>
      <Container className={s.arrangement}>
        <Link to="/" className={s.link}>
          Home
        </Link>
        <SearchBar
          className={s.searchBar}
          initialValue={searchParams.get("query") || ""}
          onSearch={onDebouncedSearch}
          searchWhenType={true}
        />
      </Container>
    </header>
  );
};

export default Header;
