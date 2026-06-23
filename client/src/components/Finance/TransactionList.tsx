import { useEffect, useState } from "react";
import { getTransactions } from "../../services/financeService";

const TransactionList = () => {
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactions();
      setTransactions(data);
    };

    fetchTransactions();
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">
          💰 Recent Transactions
        </h2>

        <button className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-white">
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">

          <thead>
            <tr className="border-b border-slate-700 text-slate-400">
              <th className="pb-4">ID</th>
              <th>Client</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody className="text-white">

            {transactions.map((txn) => (
              <tr
                key={txn.id}
                className="border-b border-slate-800"
              >
                <td className="py-4">{txn.id}</td>
                <td>{txn.client}</td>
                <td>{txn.amount}</td>

                <td
                  className={
                    txn.status === "Paid"
                      ? "text-green-400"
                      : "text-yellow-400"
                  }
                >
                  {txn.status}
                </td>
              </tr>
            ))}

          </tbody>

        </table>
      </div>

    </div>
  );
};

export default TransactionList;