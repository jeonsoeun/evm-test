const GALAXY_FOLD = "692px";
const WIDE_DESKTOP = "1730px";

export const deviceSize = {
  mobile: GALAXY_FOLD,
  desktop: GALAXY_FOLD,
  wideDesktop: WIDE_DESKTOP,
};
export const device = {
  mobile: `screen and (max-width: ${deviceSize.mobile})`,
  desktop: `screen and (min-width: ${deviceSize.mobile})`,
  wideDesktop: `screen and (min-width: ${deviceSize.wideDesktop})`,
};
export const MIN_WIDTH_AT_BROWSER = "808px";
export const hover = "(hover: hover) and (pointer: fine)";
