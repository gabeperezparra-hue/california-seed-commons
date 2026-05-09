export default function SeedCard({ seed }) {
  return (
    <div className="border p-6 hover:border-emerald-700 cursor-pointer">
      <div className="text-6xl mb-4 text-center">🌱</div>
      <h3 className="font-medium text-lg">{seed.name}</h3>
      <p className="text-emerald-700 text-sm">{seed.available ? 'Available' : 'Not Available'}</p>
    </div>
  );
}
