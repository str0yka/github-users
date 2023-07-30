import s from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={s.block}>
      <div className={s.spinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading;
