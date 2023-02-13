import { themes } from "@lokalise/louis";

const base = {
  ...themes["base"],
  fonts: {
    default: '"Noto Sans", Arial, Helvetica, sans-serif',
  },
};

const dark = {
  ...themes["dark"],
  fonts: {
    default: '"Noto Sans", Arial, Helvetica, sans-serif',
  },
};

export const customThemes = {
  base,
  dark,
};
