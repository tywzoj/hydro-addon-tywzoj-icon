import { $, AutoloadPage, addPage, getTheme } from "@hydrooj/ui-default";

addPage(
  new AutoloadPage("themed-icon", () => {
    $("img.nav__logo").attr(
      "src",
      UiContext.cdn_prefix +
        (getTheme() === "dark" ? "nav_logo_dark.svg" : "nav_logo_light.svg"),
    );
  }),
);
