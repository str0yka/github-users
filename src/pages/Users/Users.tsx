import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import Container from "@components/common/Container/Container.tsx";
import ErrorPage from "@/pages/Error/Error.tsx";
import UserCard from "@components/UserCard/UserCard.tsx";
import Skeleton from "@components/common/Skeleton/Skeleton.tsx";
import UsersPagination from "@components/UsersPagination/UsersPagination.tsx";
import { getClassNames, getSearchParams } from "@/utils";
import { useFetch } from "@/hooks";
import { UserApi } from "@/http";

import s from "./Users.module.css";

const Users = () => {
  const [users, setUsers] = useState<ResponseUserFromList[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const [order, setOrder] = useState("desc");

  const { fetchData, isLoading, error } = useFetch(async () => {
    const q = searchParams.get("q");
    const page = Number(searchParams.get("page")) ?? 0;

    const response = await UserApi.getList(
      getSearchParams({
        q,
        sort: "repositories",
        per_page: 9,
        page,
        order,
      })
    );

    setUsers(response.items);
    setTotalCount(response.total_count);

    if (!response.items.length) {
      throw new Error("There are no users on GitHub with that name");
    }
  });

  const onChangeOrder = (order: string) => {
    setOrder(order);
  };

  useEffect(() => {
    fetchData();
  }, [searchParams, order]);

  if (error) return <ErrorPage message={error} />;

  return (
    <Container>
      {isLoading && (
        <>
          <Skeleton className={s.skeletonTitle} />
          <div className={s.list}>
            {Array(9)
              .fill(null)
              .map((_, index) => (
                <Skeleton key={index} />
              ))}
          </div>
        </>
      )}
      {!isLoading && (
        <>
          <div className={s.titleBlock}>
            <h1 className={s.title}>Found {totalCount} users</h1>
            <div className={s.sort}>
              Sort by number of repositories:
              <button
                className={getClassNames(s.sortButton, {
                  [s.active]: order === "asc",
                })}
                onClick={() => onChangeOrder("asc")}
              >
                ascending
              </button>
              <button
                className={getClassNames(s.sortButton, {
                  [s.active]: order === "desc",
                })}
                onClick={() => onChangeOrder("desc")}
              >
                descending
              </button>
            </div>
          </div>
          <div className={s.list}>
            {users.map((user) => (
              <UserCard
                key={user.login}
                login={user.login}
                type={user.type}
                avatar_url={user.avatar_url}
              />
            ))}
          </div>
        </>
      )}
      <UsersPagination
        className={s.pagination}
        current={Number(searchParams.get("page")) || 1}
        totalCount={totalCount}
        onClick={(page) =>
          setSearchParams(getSearchParams({ q: searchParams.get("q"), page }))
        }
        limit={9}
      />
    </Container>
  );
};

export default Users;
