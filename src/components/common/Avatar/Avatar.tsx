import s from "./Avatar.module.css";
import React from "react";

interface AvatarProps {
  src?: string;
  alt: string;
}

const Avatar: React.FC<AvatarProps> = ({
  src = "./images/icons/avatar.svg",
  alt,
}) => {
  return (
    <div className={s.avatar}>
      <img className={s.avatarImage} src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
