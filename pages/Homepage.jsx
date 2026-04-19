import { Link } from "react-router-dom";
import { Coffee, Crown } from "lucide-react";
import { useCafes } from "../context/CafeContext";
import CafeCard from "../components/CafeCard";
import MapView from "../components/MapView";

export default function Homepage() {
  const { cafes, loading } = useCafes();

  if (loading) return <div className="text-center p-8 text-steam-300">Loading cafes...</div>;

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Coffee className="w-8 h-8 text-coffee-400" />
          <h1 className="text-3xl font-serif text-steam-100">Cafe Reviews</h1>
        </div>
        <div className="flex gap-4">
          <Link to="/featured" className="text-yellow-400 hover:text-yellow-300 flex items-center gap-1">
            <Crown className="w-5 h-5" /> Featured
          </Link>
          <Link to="/admin" className="text-steam-300 hover:text-steam-100">Admin</Link>
        </div>
      </header>

      <MapView />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {cafes.map(cafe => <CafeCard key={cafe._id} cafe={cafe} />)}
      </div>
    </div>
  );
}
