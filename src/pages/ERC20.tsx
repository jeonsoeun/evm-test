import Page from "../components/page/Page";

import GetERC20Data from "../views/ERC20/GetERC20Data";
import TransferToken from "../views/ERC20/TransferToken";

const ERC20: React.FC = () => {
  return (
    <Page>
      <GetERC20Data />
      <TransferToken />
    </Page>
  );
};

export default ERC20;
