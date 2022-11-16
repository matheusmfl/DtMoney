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
  fetchTransactions: (query?: string) => Promise<void>;
}

interface TransactionProviderProps {
  children: ReactNode;
}

export const TranstacionsContext = createContext({} as TransactionsContext);

export function TransactionsProvider({ children }: TransactionProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL("http://localhost:3434/transactions");

    if (query) {
      url.searchParams.append("q", query);
    }

    await fetch(url)
      .then((response) => response.json())
      .then((data) => setTransactions(data));
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TranstacionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TranstacionsContext.Provider>
  );
}
