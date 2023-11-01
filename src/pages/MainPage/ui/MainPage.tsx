import { CurrencySelect, CurrencyViewer } from "@/entities/Currency";
import { useGetAllCurrenciesQuery } from "@/features/Currency";
import { useActions } from "@/shared/libs/hooks/useActions/useActions";
import { useAppSelector } from "@/shared/libs/hooks/useAppSelector/useAppSelector";
import { Page } from "@/widgets/Page";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const { data: currencies, isSuccess } = useGetAllCurrenciesQuery();
  const name = useAppSelector((state) => state.currency.name);
  const { setCurrency } = useActions();

  return (
    <Page data-testid="MainPage">
      <div className={styles.mainPage}>
        <div className={styles.selectWrapper}>
          {isSuccess && (
            <CurrencySelect
              currencies={currencies}
              onChange={setCurrency}
              className={styles.select}
            />
          )}
        </div>
        <div className={styles.info}>
          <CurrencyViewer name={name} />
        </div>
      </div>
    </Page>
  );
};

export default MainPage;
