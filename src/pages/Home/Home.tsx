import SearchBar from "@components/SearchBar/SearchBar.tsx";

import s from "./Home.module.css";

const Home = () => {
  return (
    <main className={s.page}>
      <h1 className={s.title}>
        Find most active <span className={s.textGradient}>GitHub</span> user
      </h1>
      <SearchBar
        initialValue=""
        navigateTo={(query) => "/users?q=" + query}
        className={s.searchBar}
      />
    </main>
  );
};

export default Home;
