import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { css } from "@styled-system/css";

import Frame from "../components/frame";

export default component$(() => {
  const headerStyle = css({
    pos: {
      pc: "absolute",
    },
    top: {
      pc: "0",
    },
    left: {
      pc: "0",
    },
    zIndex: {
      pc: "9999",
    },
    w: {
      pc: "100%",
    },
    pt: {
      pc: "40rem",
    },
  });

  const frameStyle = css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
  });

  const logoStyle = css({
    lineHeight: 58 / 50,
    fontSize: "50px",
    fontWeight: "700",
  });

  const navigationStyle = css({
    fontFamily: "en2",
  });

  const navigationSubListStyle = css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: "0 30px",
    mt: {
      pc: "2rem",
    },
  });

  const navigationSubItemStyle = css({
    color: "#707070",
    lineHeight: 16 / 12,
    letterSpacing: (20 / 1000) * 1 + "em",
    fontSize: {
      pc: "12rem",
    },
  });

  const navigationMainListStyle = css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-end",
    gap: "0 30px",
    mt: {
      pc: "8rem",
    },
  });

  const navigationMainItemStyle = css({
    lineHeight: 32 / 16,
    letterSpacing: (20 / 1000) * 1 + "em",
    fontSize: {
      pc: "16rem",
    },
  });

  const navigationItems = {
    sub: [
      {
        anchor: {
          href: "#",
        },
        text: "Shoplist",
      },
      {
        anchor: {
          href: "#",
        },
        text: "About",
      },
    ],
    main: [
      {
        anchor: {
          href: "#",
        },
        text: "Ladies",
      },
      {
        anchor: {
          href: "#",
        },
        text: "Mens",
      },
      {
        anchor: {
          href: "#",
        },
        text: "Kids & Baby & Maternity",
      },
      {
        anchor: {
          href: "#",
        },
        text: "Unisex",
      },
      {
        anchor: {
          href: "#",
        },
        text: "Sport & Others",
      },
    ],
  };

  return (
    <header class={headerStyle}>
      <Frame class={frameStyle}>
        <div class={logoStyle}>
          <Link href="/">
            BUY
            <br />
            BUY
            <br />
            FASHION
          </Link>
        </div>
        <nav class={navigationStyle}>
          <ul class={navigationSubListStyle}>
            {navigationItems.sub.map((item) => {
              return (
                <li class={navigationSubItemStyle}>
                  <Link href={item.anchor.href}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
          <ul class={navigationMainListStyle}>
            {navigationItems.main.map((item) => {
              return (
                <li class={navigationMainItemStyle}>
                  <Link href={item.anchor.href}>{item.text}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </Frame>
    </header>
  );
});
