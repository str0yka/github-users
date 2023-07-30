import React from "react";

import Pagination from "@components/common/Pagination/Pagination.tsx";

import s from "./UsersPagination.module.css";
import { getClassNames } from "@/utils";

interface UsersPaginationProps {
  limit: number;
  totalCount: number;
  current: number;
  onClick: (page: number) => void;
  className?: string;
}

const UsersPagination: React.FC<UsersPaginationProps> = ({
  limit,
  totalCount,
  current,
  onClick,
  className,
}) => {
  const paginationClassName = getClassNames(s.pagination, className);
  const activeButtonClassName = getClassNames(s.button, s.active);

  return (
    <Pagination
      current={current}
      buttonQuantity={7}
      totalButtonQuantity={Math.ceil(totalCount / limit)}
      onClick={onClick}
      activeButtonClassName={activeButtonClassName}
      nonactiveButtonClassName={s.button}
      paginationClassName={paginationClassName}
    />
  );
};

export default UsersPagination;
