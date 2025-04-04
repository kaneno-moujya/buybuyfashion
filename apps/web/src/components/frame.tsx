import { component$, Slot, type HTMLAttributes } from "@builder.io/qwik";
import { css, cx } from "@styled-system/css";
import { token } from "@styled-system/tokens";

import Settings from "../config/settings";

interface Props {
  class?: HTMLAttributes<HTMLDivElement>["class"];
}

export default component$<Props>((props) => {
  const frameStyle = css({
    w: {
      spOnly: `${Settings.design.sp.size}rem`,
      pc: `${Settings.design.pc.size}rem`,
    },
    m: "0 auto",
    p: {
      spOnly: "0 20rem",
      pc: "0 40rem",
    },
  });

  return (
    <div class={`${frameStyle} ${props.class}`}>
      <Slot />
    </div>
  );
});
