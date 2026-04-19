import { Link } from "react-router-dom";
import { Crown, ArrowLeft } from "lucide-react";
import { useCafes } from "../context/CafeContext";
import CafeCard from "../components/CafeCard";

export default function Featured() {
  const { cafes, loading } = useCafes();
  const featured = cafes.filter(c => c.plan === "featured");

  if (loading) return <div className="text-center p-8 text-steam-300">Loading...</div>;

  return (
    <div className="min-h-screen p-4 max-w-6xl mx-auto">
      <header className="flex items-center gap-4 mb-6">
        <Link to="/" className="text-steam-300 hover:text-steam-100">
          <ArrowLeft className="w-6 h-6" />
        </Link>
        <Crown className="w-8 h-8 text-yellow-400" />
        <h1 className="text-3xl font-serif text-steam-100">Featured Cafes</h1>
      </header>

      {featured.length === 0 ? (
        <p className="text-steam-400 text-center">No featured cafes yet.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map(cafe => <CafeCard key={cafe._id} cafe={cafe} />)}
        </div>
      )}
    </div>
  );
}
