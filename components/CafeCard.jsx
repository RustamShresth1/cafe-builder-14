import { Crown, MapPin, Star } from "lucide-react";
import { useState } from "react";
import { addReview } from "../api/cafeApi";
import { useCafes } from "../context/CafeContext";
import toast from "react-hot-toast";

export default function CafeCard({ cafe }) {
  const [text, setText] = useState("");
  const [rating, setRating] = useState(5);
  const { refetchCafes } = useCafes();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addReview(cafe._id, { text, rating });
      toast.success("Review added!");
      setText("");
      setRating(5);
      refetchCafes();
    } catch (err) {
      toast.error("Failed to add review");
    }
  };

  return (
    <div className={`rounded-lg overflow-hidden border-2 ${
      cafe.plan === "featured" 
        ? "border-yellow-400 bg-coffee-800" 
        : "border-steam-400 bg-espresso-800"
    }`}>
      <img 
        src={cafe.image || "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb"} 
        alt={cafe.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-serif text-steam-100">{cafe.name}</h3>
          {cafe.plan === "featured" && (
            <Crown className="text-yellow-400 w-6 h-6" />
          )}
        </div>
        
        <div className="flex items-center gap-1 text-steam-300 mt-1">
          <MapPin className="w-4 h-4" />
          <span className="text-sm">{cafe.location}</span>
        </div>

        <div className="flex items-center gap-1 mt-2">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <span className="text-steam-100 font-bold">{cafe.rating.toFixed(1)}</span>
          <span className="text-steam-400 text-sm">({cafe.reviews.length} reviews)</span>
        </div>

        <form onSubmit={handleSubmit} className="mt-4 space-y-2">
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Write a review..."
            className="w-full px-3 py-2 bg-espresso-900 text-steam-100 rounded border border-steam-500"
            required
          />
          <div className="flex gap-2">
            <select
              value={rating}
              onChange={(e) => setRating(Number(e.target.value))}
              className="px-3 py-2 bg-espresso-900 text-steam-100 rounded border border-steam-500"
            >
              {[5,4,3,2,1].map(n => <option key={n} value={n}>{n} stars</option>)}
            </select>
            <button 
              type="submit"
              className="flex-1 bg-coffee-500 hover:bg-coffee-600 text-white py-2 rounded font-bold"
            >
              Post Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
