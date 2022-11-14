import { useContext } from "react";
import { TranstacionsContext } from "../contexts/TransactionContexts";

export function useSummary() {
  const { transactions } = useContext(TranstacionsContext);

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "income") {
        acc.incomes += transaction.price;
        acc.total += transaction.price;
      } else {
        acc.outcomes += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    },
    {
      incomes: 0,
      outcomes: 0,
      total: 0,
    }
  );

  return summary;
}
