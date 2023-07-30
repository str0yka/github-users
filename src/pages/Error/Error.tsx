import React from "react";

import s from "./Error.module.css";

interface ErrorPageProps {
  message: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ message }) => {
  return (
    <main className={s.page}>
      <h1 className={s.title}>{message}</h1>
    </main>
  );
};

export default ErrorPage;
