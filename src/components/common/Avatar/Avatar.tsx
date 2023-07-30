import React from "react";

import s from "./Avatar.module.css";

interface AvatarProps {
  src?: string;
  login: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src = "./images/icons/avatar.svg",
  login,
}) => {
  return (
    <div className={s.avatar}>
      <img className={s.avatarImage} src={src} alt={`${login} avatar`} />
    </div>
  );
};

export default Avatar;
