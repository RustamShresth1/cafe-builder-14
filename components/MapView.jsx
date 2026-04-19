import { useCafes } from "../context/CafeContext";

export default function MapView() {
  const { cafes } = useCafes();
  
  return (
    <div className="bg-espresso-800 rounded-lg p-4 border-steam-400">
      <h3 className="text-lg font-serif text-steam-100 mb-2">Cafe Locations</h3>
      <div className="h-64 bg-espresso-900 rounded flex items-center justify-center text-steam-400">
        <p>Map coming soon! For now: {cafes.length} cafes loaded.</p>
      </div>
    </div>
  );
}
