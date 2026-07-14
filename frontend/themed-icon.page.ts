import { $, AutoloadPage, addPage, getTheme } from "@hydrooj/ui-default";

addPage(
  new AutoloadPage("themed-icon", void 0, () => {
    $("img.nav__logo").attr(
      "src",
      `${UiContext.cdn_prefix}nav_logo_v2_${getTheme()}.svg`,
    );
  }),
);
