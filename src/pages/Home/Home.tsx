import { useNavigate } from "react-router-dom";

import SearchBar from "@components/SearchBar/SearchBar.tsx";

import s from "./Home.module.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className={s.page}>
      <h1 className={s.title}>
        Find most active <span className={s.textGradient}>GitHub</span> user
      </h1>
      <SearchBar
        initialValue=""
        onSearch={(query) => navigate(`/users?query=${query}`)}
        searchWhenType={false}
        className={s.searchBar}
      />
    </main>
  );
};

export default Home;
