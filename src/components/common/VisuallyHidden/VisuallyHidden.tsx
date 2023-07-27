import React from "react";

import s from "./VisuallyHidden.module.css";

interface VisuallyHiddenProps {
  children: string;
}

const VisuallyHidden: React.FC<VisuallyHiddenProps> = ({ children }) => {
  return <span className={s.visuallyHidden}>{children}</span>;
};

export default VisuallyHidden;
