import React from "react";

import { getClassNames } from "@/utils";

import s from "./Container.module.css";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  const containerClassName = getClassNames(s.container, className);

  return <div className={containerClassName}>{children}</div>;
};

export default Container;
