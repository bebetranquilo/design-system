/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { useState } from "react";

const STATUS = {
  HOVERED: "hovered",
  NORMAL: "normal",
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ComponenteTeste({ page, children }: any) {
  const [status, setStatus] = useState(STATUS.NORMAL);

  const onMouseEnter = () => {
    setStatus(STATUS.HOVERED);
  };

  const onMouseLeave = () => {
    setStatus(STATUS.NORMAL);
  };

  return (
    <a
      className={status}
      href={page || "#"}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </a>
  );
}
