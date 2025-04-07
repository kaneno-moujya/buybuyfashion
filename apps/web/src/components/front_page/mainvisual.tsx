import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { css } from "@styled-system/css";

import Image01 from "~/media/front_page/mainvisual/img-01.jpg?jsx";
import Image02 from "~/media/front_page/mainvisual/img-02.jpg?jsx";

import Arrow01 from "~/media/common/icn-arrow-01.svg?raw";
import Text01 from "~/media/front_page/mainvisual/txt-01.svg?raw";

export default component$(() => {
  const wrapperStyle = css({
    pc: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "center",
      pos: "relative",
      zIndex: "1",
      w: {
        pc: "960rem",
      },
      h: {
        pc: "100dvh",
      },
      m: "0 auto",
    },
  });

  const anchorStyle = css({
    overflow: "hidden",
    display: "block",
    pos: "relative",
    w: {
      pc: "50%",
    },
    "& img": {
      transition: "transform .4s ease",
    },
    "&:hover": {
      "& img": {
        transform: "scale(1.1)",
      },
    },
  });

  const textStyle = css({
    display: "flex",
    alignItems: "baseline",
    gap: {
      pc: "0 12rem",
    },
    pos: "absolute",
    bottom: {
      pc: "-2rem",
    },
    left: {
      pc: "4rem",
    },
    color: {
      pc: "#ffffff",
    },
    lineHeight: {
      pc: 38 / 29,
    },
    fontSize: {
      pc: "29",
    },
    fontFamily: "en2",
    "& svg": {
      display: "block",
      overflow: "visible",
      w: {
        pc: "21rem",
      },
      "& path": {
        fill: "#ffffff",
      },
    },
  });

  const tickerStyle = css({
    overflow: "hidden",
    display: "flex",
    pos: "absolute",
    top: "50%",
    left: "0",
    zIndex: "0",
    minW: "100%",
    width: "min-content",
    opacity: "0.05",
    transform: "translate3d(0, -50%, 0)",
    animation: "ticker 60s linear infinite",
    "& span": {
      pr: {
        pc: "100rem",
      },
    },
  });

  return (
    <div>
      <div class={wrapperStyle}>
        <Link class={anchorStyle} href="#">
          <Image01 />
          <p class={textStyle}>
            Ladies
            <span dangerouslySetInnerHTML={Arrow01} />
          </p>
        </Link>
        <Link class={anchorStyle} href="#">
          <Image02 />
          <p class={textStyle}>
            Mens
            <span dangerouslySetInnerHTML={Arrow01} />
          </p>
        </Link>
      </div>
      <div class={tickerStyle}>
        <span dangerouslySetInnerHTML={Text01} />
        <span dangerouslySetInnerHTML={Text01} />
      </div>
      <div class="hoge">bokeboke</div>
    </div>
  );
});
