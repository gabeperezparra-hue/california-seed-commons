export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h1 className="text-6xl font-light text-emerald-900 mb-6">California Seed Commons</h1>
      <p className="text-2xl text-stone-600 mb-12">Seeds for all.</p>
      
      <a href="/seeds" 
         className="inline-block px-10 py-5 bg-emerald-800 text-white text-xl hover:bg-emerald-900">
        Browse Seeds →
      </a>
    </div>
  );
}
