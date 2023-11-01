import { memo, useCallback, useMemo, useState } from "react";
import { CurrencySchema } from "../../model/types";
import Select, { SingleValue } from "react-select";

interface CurrencySelectProps {
  className?: string;
  currencies: CurrencySchema[];
  onChange?: (value: string) => void;
}
interface Option {
  label: string;
  value: string;
}

export const CurrencySelect = memo(
  ({ className, onChange, currencies }: CurrencySelectProps) => {
    const [selectedValue, setSelectedValue] = useState<Option | null>(null);

    const handleCurrencyChange = useCallback(
      (value: SingleValue<Option>) => {
        onChange?.(value?.value ?? "");
        setSelectedValue(value);
      },
      [onChange]
    );

    const options: Option[] = useMemo(
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
        value={selectedValue || options[0]}
        onChange={(item) => handleCurrencyChange(item)}
        maxMenuHeight={175}
      />
    );
  }
);
