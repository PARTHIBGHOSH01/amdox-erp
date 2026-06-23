import { useState } from "react";
import toast from "react-hot-toast";
import { createInventory } from "../../services/inventoryService";

const InventoryForm = () => {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const inventoryItem = {
    item,
    quantity,
  };

  try {
  console.log("Sending:", inventoryItem);

  const result = await createInventory(inventoryItem);

  console.log("Result:", result);

  toast.success("Inventory Item Added");

  setItem("");
  setQuantity("");
} catch (error) {
  console.error(error);
  toast.error("Failed to add item");
}
};

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">

      <h2 className="text-2xl font-bold text-white mb-6">
        📦 Add Inventory Item
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
          type="text"
          placeholder="Item Name"
          value={item}
          onChange={(e) => setItem(e.target.value)}
          className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700"
        />

        <input
          type="number"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          className="w-full bg-slate-800 text-white px-4 py-3 rounded-xl border border-slate-700"
        />

        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl"
        >
          Add Item
        </button>

      </form>

    </div>
  );
};

export default InventoryForm;