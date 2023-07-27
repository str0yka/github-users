import SearchBar from "@components/common/SearchBar/SearchBar.tsx";

import s from "./Home.module.css";

const Home = () => {
  return (
    <main className={s.page}>
      <h1 className={s.title}>
        Find most active <span className={s.textGradient}>GitHub</span> user
      </h1>
      <SearchBar onSearch={() => {}} className={s.searchBar} />
    </main>
  );
};

export default Home;
