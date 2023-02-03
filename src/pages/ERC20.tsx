import Page from "../components/page/Page";
import Approve from "../views/ERC20/Approve";
import GetAllowence from "../views/ERC20/GetAllowence";

import GetERC20Data from "../views/ERC20/GetERC20Data";
import TransferFromToken from "../views/ERC20/TransferFromToken ";
import TransferToken from "../views/ERC20/TransferToken";

const ERC20: React.FC = () => {
  return (
    <Page>
      <GetERC20Data />
      <TransferToken />
      <TransferFromToken />
      <GetAllowence />
      <Approve />
    </Page>
  );
};

export default ERC20;
