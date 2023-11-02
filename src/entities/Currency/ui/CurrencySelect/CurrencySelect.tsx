import { memo, useCallback, useMemo } from "react";
import { CurrencySchema } from "../../model/types";
import { Option } from "./CurrencySelector.types";
import Select, { SingleValue } from "react-select";
import { customStyles, customTheme } from "./CurrencySelect.theme";
interface CurrencySelectProps {
  className?: string;
  currencies: CurrencySchema[];
  onChange?: (value: string) => void;
}

export const CurrencySelect = memo(
  ({ className, onChange, currencies }: CurrencySelectProps) => {
    const handleCurrencyChange = useCallback(
      (value: SingleValue<Option>) => {
        onChange?.(value?.value ?? "");
      },
      [onChange]
    );

    const options: readonly Option[] = useMemo(
      () =>
        currencies.map((currency) => ({
          label: currency.id,
          value: currency.name,
        })),
      [currencies]
    );

    return (
      <Select
        className={className}
        options={options}
        defaultValue={options[0]}
        onChange={(item) => handleCurrencyChange(item as SingleValue<Option>)}
        maxMenuHeight={175}
        theme={customTheme}
        styles={customStyles}
      />
    );
  }
);
