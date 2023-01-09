import Page from "../components/page/Page";
import CreateKeySection from "../views/MainPage/CreateKeySection";
import GetAddressFromPKSection from "../views/MainPage/GetAddressFromPKSection";

const MainPage: React.FC = () => {
  return (
    <Page>
      <CreateKeySection />
      <GetAddressFromPKSection />
    </Page>
  );
};

export default MainPage;
