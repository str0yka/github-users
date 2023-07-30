import { Link, useSearchParams } from "react-router-dom";

import Container from "@components/common/Container/Container.tsx";
import SearchBar from "@components/SearchBar/SearchBar.tsx";
import { useDebounce } from "@/hooks";
import { getSearchParams } from "@/utils/helpers/getSearchParams.ts";

import s from "./Header.module.css";

const Header = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const onDebouncedSearch = useDebounce((q: string) => {
    setSearchParams(getSearchParams({ q }), { replace: true });
  }, 500);

  return (
    <header className={s.header}>
      <Container className={s.arrangement}>
        <Link to="/" className={s.link}>
          Home
        </Link>
        <SearchBar
          className={s.searchBar}
          initialValue={searchParams.get("q") || ""}
          whileTyping={onDebouncedSearch}
          navigateTo={(query) => "/users?q=" + query}
        />
      </Container>
    </header>
  );
};

export default Header;
