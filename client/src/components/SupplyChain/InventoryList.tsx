import { useEffect, useState } from "react";
import { getInventory } from "../../services/supplyChainService";

const InventoryList = () => {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    const fetchInventory = async () => {
      const data = await getInventory();
      setItems(data);
    };

    fetchInventory();
  }, []);

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        📦 Inventory Management
      </h2>

      <table className="w-full text-left">

        <thead>
          <tr className="border-b border-slate-700 text-slate-400">
            <th>ID</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody className="text-white">

          {items.map((item) => (
            <tr
              key={item.id}
              className="border-b border-slate-800"
            >
              <td className="py-4">{item.id}</td>
              <td>{item.item}</td>
              <td>{item.quantity}</td>

              <td
                className={
                  item.status === "In Stock"
                    ? "text-green-400"
                    : "text-yellow-400"
                }
              >
                {item.status}
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
};

export default InventoryList;