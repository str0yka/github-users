import SearchBar from "@components/common/SearchBar/SearchBar.tsx";

import s from "./Home.module.css";

const Home = () => {
  return (
    <section>
      <SearchBar onSearch={() => {}} className={s.searchBar} />
    </section>
  );
};

export default Home;
