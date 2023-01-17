import Page from "../components/page/Page";
import CreateKeySection from "../views/MainPage/CreateKeySection";
import GetAddressFromPKSection from "../views/MainPage/GetAddressFromPKSection";
import SendTransaction from "../views/MainPage/SendTransaction";
import ShowBalanceSection from "../views/MainPage/ShowBalanceSection";

const MainPage: React.FC = () => {
  return (
    <Page>
      <CreateKeySection />
      <GetAddressFromPKSection />
      <ShowBalanceSection />
      <SendTransaction />
    </Page>
  );
};

export default MainPage;
