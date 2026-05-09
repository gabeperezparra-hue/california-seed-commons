export default function RequestListPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-medium mb-8">Your Request List</h1>
      <div className="border border-dashed border-stone-300 p-12 text-center rounded-none">
        <p className="text-stone-500">Your request list is empty.</p>
        <a href="/seeds" className="text-emerald-700 hover:underline mt-4 inline-block">Browse Seeds →</a>
      </div>
    </div>
  );
}
