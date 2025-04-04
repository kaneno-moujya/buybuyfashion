import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { css } from "@styled-system/css";

import Image01 from "~/media/front_page/mainvisual/img-01.jpg?jsx";
import Image02 from "~/media/front_page/mainvisual/img-02.jpg?jsx";

export default component$(() => {
  const wrapperStyle = css({
    pc: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      w: {
        pc: "960rem",
      },
      m: "0 auto",
    },
  });

  const anchorStyle = css({
    display: "block",
    w: {
      pc: "50%",
    },
  });

  return (
    <>
      <div class={wrapperStyle}>
        <Link class={anchorStyle} href="#">
          <Image01 />
        </Link>
        <Link class={anchorStyle} href="#">
          <Image02 />
        </Link>
      </div>
    </>
  );
});
