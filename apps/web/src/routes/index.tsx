import {
  component$,
  useStore,
  $,
  useVisibleTask$,
  useTask$,
  useComputed$,
  useOnWindow,
} from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { css } from "@styled-system/css";

import Mainvisual from "../components/front_page/mainvisual";

interface Props {
  hoge?: number;
}

export default component$((props: Props) => {
  const count = useStore({
    number: 0,
  });

  const style = css({
    color: {
      spOnly: "red",
      pc: "blue",
    },
    fontSize: "s",
  });

  useOnWindow(
    ["resize", "DOMContentLoaded"],
    $(() => {}),
  );

  const hoge = useComputed$(() => {
    return count.number + "秒";
  });

  const handleClick = $(() => {
    count.number++;
  });

  useVisibleTask$(() => {
    console.log("Mounted");
  });

  useTask$(({ track, cleanup }) => {
    track(() => count.number);
    console.log("Count up");
    cleanup(() => {
      console.log("unmounted");
    });
  });

  return (
    <>
      <Mainvisual />
      <h1 class={style}>Hi 👋</h1>
      <div>
        Can't wait to see what you build with qwik!
        <br />
        Happy coding.
      </div>
      <button type={"button"} onClick$={handleClick}>
        Count: {count.number}
      </button>
      <p>{hoge.value}</p>
      <Link>hoge</Link>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
