export default function AdminLayout({ children }) {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="bg-emerald-900 text-white p-6">
        <h1 className="text-xl">California Seed Commons — Admin</h1>
      </div>
      {children}
    </div>
  );
}
