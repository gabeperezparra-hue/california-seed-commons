export default function SeedsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-medium mb-8">Browse Seeds</h1>
      <p className="text-stone-600 mb-8">Filter by category • Real data will load from database</p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="border p-6 hover:border-emerald-700">
          <div className="text-6xl mb-4 text-center">🌽</div>
          <h3 className="font-medium">Golden Bantam Corn</h3>
          <p className="text-emerald-700 text-sm mt-1">Available</p>
        </div>
      </div>
    </div>
  );
}
