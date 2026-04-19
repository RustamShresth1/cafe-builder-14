import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Crown } from "lucide-react";
import { useCafes } from "../context/CafeContext";
import { updatePlan } from "../api/cafeApi";
import toast from "react-hot-toast";

export default function Admin() {
  const { cafes, refetchCafes } = useCafes();
  const [loading, setLoading] = useState(false);

  const togglePlan = async (id, currentPlan) => {
    setLoading(true);
    const newPlan = currentPlan === "featured" ? "free" : "featured";
    try {
      await updatePlan(id, newPlan);
      toast.success(`Cafe set to ${newPlan}`);
      refetchCafes();
    } catch (err) {
      toast.error("Failed to update plan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen p-4 max-w-4xl mx-auto">
      <header className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-steam-300 hover:text-steam-100">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <h1 className="text-3xl font-serif text-steam-100">Admin Panel</h1>
      </header>

      <div className="bg-espresso-800 rounded-lg border border-steam-400">
        <table className="w-full">
          <thead className="bg-espresso-900">
            <tr>
              <th className="text-left p-3 text-steam-200">Name</th>
              <th className="text-left p-3 text-steam-200">Location</th>
              <th className="text-left p-3 text-steam-200">Plan</th>
              <th className="text-left p-3 text-steam-200">Action</th>
            </tr>
          </thead>
          <tbody>
            {cafes.map(cafe => (
              <tr key={cafe._id} className="border-t border-steam-500">
                <td className="p-3 text-steam-100">{cafe.name}</td>
                <td className="p-3 text-steam-300">{cafe.location}</td>
                <td className="p-3">
                  {cafe.plan === "featured" ? (
                    <span className="text-yellow-400 flex items-center gap-1">
                      <Crown className="w-4 h-4" /> Featured
                    </span>
                  ) : (
                    <span className="text-steam-400">Free</span>
                  )}
                </td>
                <td className="p-3">
                  <button
                    onClick={() => togglePlan(cafe._id, cafe.plan)}
                    disabled={loading}
                    className={`px-3 py-1 rounded text-sm font-bold ${
                      cafe.plan === "featured"
                        ? "bg-steam-500 text-espresso-900"
                        : "bg-yellow-400 text-espresso-900"
                    }`}
                  >
                    {cafe.plan === "featured" ? "Make Free" : "Make Featured"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
