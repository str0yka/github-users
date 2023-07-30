import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import Container from "@components/common/Container/Container.tsx";
import ErrorPage from "@/pages/Error/Error.tsx";
import Loading from "@components/common/Loading/Loading.tsx";
import Avatar from "@components/common/Avatar/Avatar.tsx";
import { useFetch } from "@/hooks";
import { UserApi } from "@/http";

import s from "./User.module.css";

const User = () => {
  const { login } = useParams();
  const [user, setUser] = useState<ResponseUser | null>(null);
  const navigate = useNavigate();

  const { fetchData, isLoading, error } = useFetch(async () => {
    if (!login) {
      throw new Error("Choose user that you need");
    }

    const response = await UserApi.getOne(login);

    setUser(response);
  });

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <Loading />;
  if (error || !user) return <ErrorPage message={error} />;

  return (
    <Container>
      <button className={s.backLink} onClick={() => navigate(-1)}>
        Go back
      </button>
      <div className={s.user}>
        <Avatar src={user.avatar_url} login={user.login} />
        <div className={s.userInfoBlock}>
          <div className={s.userName}>
            <h1 className={s.login}>{user.login}</h1>
            {user.name && <span className={s.name}>{user.name}</span>}
          </div>
          <div className={s.userInfo}>
            {user.bio && <span className={s.info}>Bio: {user.bio}</span>}
            {user.company && (
              <span className={s.info}>Company: {user.company}</span>
            )}
            {user.email && <span className={s.info}>Email: {user.email}</span>}
            <span className={s.info}>
              Public repositories: {user.public_repos}
            </span>
          </div>
        </div>
      </div>
      <Link className={s.githubLink} to={user.html_url}>
        Go to GitHub profile
      </Link>
    </Container>
  );
};

export default User;
