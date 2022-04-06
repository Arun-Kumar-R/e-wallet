import { Container } from "@mui/material";
import {
  AUTH_USER,
  TRANSACTION_HISTORY,
  BALANCE_AMOUNT,
} from "../Components/Config/config";
import Layout from "../Components/Shared/Layout";

export default function Dashboard() {
  const balance_amount = JSON.parse(localStorage.getItem(BALANCE_AMOUNT)!);

  const transaction =
    JSON.parse(localStorage.getItem(TRANSACTION_HISTORY)!) || [];

  return (
    <Layout>
      <Container className="dashboard-card-wrapper">
        <div className="Dashboard-card">
          <img src="" />
          <h3>{balance_amount || 0}</h3>
          <p>Balance</p>
        </div>
        <div className="Dashboard-card">
          <img src="" />
          <h3>{transaction.length}</h3>
          <p>Transactions</p>
        </div>
      </Container>
    </Layout>
  );
}
