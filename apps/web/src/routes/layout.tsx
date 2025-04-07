import { $, component$, Slot, useOnWindow } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

import Header from "../components/header";
import Settings from "../config/settings";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.dev/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};

export default component$(() => {
  const root = document.documentElement;

  useOnWindow(
    ["DOMContentLoaded", "resize"],
    $(() => {
      const contentWidth = root.clientWidth;
      if (
        window.matchMedia(`(max-width: ${Settings.breakpoint.lv1}px)`).matches
      ) {
        console.log("hoge");
        root.style.fontSize =
          (contentWidth / Settings.design.sp.size) * Settings.font.baseSize +
          "px";
      } else if (
        window.matchMedia(`(max-width: ${Settings.breakpoint.lv2}px)`).matches
      ) {
        root.style.fontSize =
          (contentWidth / Settings.design.pc.size) * Settings.font.baseSize +
          "px";
      } else {
        root.style.fontSize = Settings.font.baseSize + "px";
      }
    }),
  );

  return (
    <>
      <Header />;
      <Slot />;
    </>
  );
});
