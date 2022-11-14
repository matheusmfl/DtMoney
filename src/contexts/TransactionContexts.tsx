import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string;
}

interface TransactionsContext {
  transactions: Transaction[];
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TranstacionsContext = createContext({} as TransactionsContext);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  useEffect(() => {
    async function catchData() {
      await fetch("http://localhost:3434/transactions")
        .then((response) => response.json())
        .then((data) => setTransactions(data));
    }
    catchData();
  }, []);

  return (
    <TranstacionsContext.Provider value={{ transactions }}>
      {children}
    </TranstacionsContext.Provider>
  );
}
