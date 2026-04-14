'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LangSwitch() {
  const pathname = usePathname();

  const isAR = pathname.startsWith('/ar');

  return (
    <div dir='ltr' className="flex items-center gap-2 z-10 bg-gray-100 p-1 rounded-full w-fit">
      
      {/* FR */}
      <Link
        href="/"
        className={`px-4 py-1 rounded-full text-sm transition ${
          !isAR ? 'bg-[#6E1F2A] text-white' : 'text-gray-600'
        }`}
      >
        FR
      </Link>

      {/* AR */}
      <Link
        href="/ar"
        className={`px-4 py-1 rounded-full text-sm transition ${
          isAR ? 'bg-[#6E1F2A] text-white' : 'text-gray-600'
        }`}
      >
        AR
      </Link>

    </div>
  );
}