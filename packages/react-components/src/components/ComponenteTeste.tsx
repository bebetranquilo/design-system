import { useState } from "react";
import styles from "@bebetranquilo/styles/dist/ComponenteTeste2.module.scss";
const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};
export interface ComponenteTesteProps {
  page: string;
  children: string;
}
export function ComponenteTeste({ page, children }: ComponenteTesteProps) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };
  console.log(status);
  return (
    <a
      className={styles.botao}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}
