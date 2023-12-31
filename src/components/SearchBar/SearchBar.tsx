import React, { ChangeEvent, ComponentProps, useState } from "react";
import { useNavigate } from "react-router-dom";

import VisuallyHidden from "@components/common/VisuallyHidden/VisuallyHidden.tsx";
import { getClassNames } from "@/utils";

import s from "./SearchBar.module.css";

interface SearchBarProps extends ComponentProps<"input"> {
  initialValue: string;
  whileTyping?: (query: string) => void;
  navigateTo: (query: string) => string;
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({
  initialValue,
  whileTyping,
  navigateTo,
  className,
  ...inputProps
}) => {
  const [query, setQuery] = useState(initialValue);
  const navigate = useNavigate();
  const searchLink = navigateTo(query);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    whileTyping && whileTyping(event.target.value);
  };

  const searchBarClassNames = getClassNames(s.bar, className);

  return (
    <label
      className={searchBarClassNames}
      onKeyDown={(event) => event.key === "Enter" && navigate(searchLink)}
    >
      <input
        {...inputProps}
        value={query}
        onChange={handleInput}
        className={s.input}
        type="text"
        placeholder="Search..."
      />
      <button className={s.link} onClick={() => navigate(searchLink)}>
        <svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 488.4 488.4"
        >
          <g>
            <g>
              <path
                d="M0,203.25c0,112.1,91.2,203.2,203.2,203.2c51.6,0,98.8-19.4,134.7-51.2l129.5,129.5c2.4,2.4,5.5,3.6,8.7,3.6
			s6.3-1.2,8.7-3.6c4.8-4.8,4.8-12.5,0-17.3l-129.6-129.5c31.8-35.9,51.2-83,51.2-134.7c0-112.1-91.2-203.2-203.2-203.2
			S0,91.15,0,203.25z M381.9,203.25c0,98.5-80.2,178.7-178.7,178.7s-178.7-80.2-178.7-178.7s80.2-178.7,178.7-178.7
			S381.9,104.65,381.9,203.25z"
              />
            </g>
          </g>
        </svg>
        <VisuallyHidden>search</VisuallyHidden>
      </button>
    </label>
  );
};

export default SearchBar;
