import Avatar from "@components/common/Avatar/Avatar.tsx";

import s from "./UserCard.module.css";
import React from "react";
import { Link } from "react-router-dom";

type UserCardProps = Pick<
  ResponseUserFromList,
  "login" | "avatar_url" | "type"
>;

const UserCard: React.FC<UserCardProps> = ({ login, avatar_url, type }) => {
  return (
    <article className={s.card}>
      <Link to={"/user/" + login}>
        <Avatar src={avatar_url} alt={`${login} avatar`} />
      </Link>
      <div className={s.cardInfo}>
        <h2 className={s.title}>
          <Link to={"/user/" + login}>{login}</Link>
        </h2>
        <p className={s.subtitle}>{type}</p>
      </div>
    </article>
  );
};

export default UserCard;
