import { CurrencyStateSchema } from "@/entities/Currency";
import { rtkApi } from "@/shared/api/rtkApi";

export interface StateSchema {
  currency: CurrencyStateSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>;
}