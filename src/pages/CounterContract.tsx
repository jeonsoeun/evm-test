import Page from "../components/page/Page";
import PlusMinusCounterNumber from "../views/CounterContract/PlusMinusCounterNumber";
import PrintCounterNumber from "../views/CounterContract/PrintCounterNumber";

const CounterContract: React.FC = () => {
  return (
    <Page>
      <PrintCounterNumber />
      <PlusMinusCounterNumber />
    </Page>
  );
};

export default CounterContract;
