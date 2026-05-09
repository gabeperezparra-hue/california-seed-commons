'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const update = () => {
      const list = JSON.parse(localStorage.getItem('requestList') || '[]');
      setCount(list.length);
    };
    update();
    window.addEventListener('storage', update);
    return () => window.removeEventListener('storage', update);
  }, []);

  return (
    <nav className="bg-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold text-emerald-900">California Seed Commons</Link>
        
        <div className="flex gap-8 text-sm">
          <Link href="/" className="hover:text-emerald-700">Home</Link>
          <Link href="/about" className="hover:text-emerald-700">About</Link>
          <Link href="/seeds" className="hover:text-emerald-700">Browse Seeds</Link>
          <Link href="/request-list" className="hover:text-emerald-700 flex items-center gap-1">
            Request List {count > 0 && <span className="bg-emerald-700 text-white text-xs px-2 py-0.5 rounded-full">{count}</span>}
          </Link>
        </div>
      </div>
    </nav>
  );
}
