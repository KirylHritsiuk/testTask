import { StylesConfig, Theme, ThemeConfig } from "react-select";
import { Option } from "./CurrencySelector.types";

export const customTheme: ThemeConfig = (theme: Theme) => ({
  ...theme,
  borderRadius: 10,
  fontFamily: "var(--font-family-main)",
  fontSize: "var(--font-size-label)",
  fontWeight: 300,
  color: "var(--color-dark)",
  colors: {
    ...theme.colors,
    primary: "var(--color-pick-currency)",
    primary25: "var(--color-pick-currency)",
  },
});

export const customStyles: StylesConfig<Option> = {
  option: (defaultStyles) => ({
    ...defaultStyles,
    color: "var(--color-dark)",
    border: "1px solid #dad6d6",
  }),
  control: (defaultStyles) => ({
    ...defaultStyles,
  }),
  menu: (defaultStyles) => ({
    ...defaultStyles,
    borderRadius: 0,
  }),
  indicatorSeparator: (defaultStyles) => ({
    ...defaultStyles,
    display: "none",
  }),
};