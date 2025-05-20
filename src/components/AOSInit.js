
'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function AOSInit() {
  const pathname = usePathname();

  useEffect(() => {
    const initAOS = () => {
      if (typeof window !== 'undefined' && window.AOS) {
        window.AOS.init({
          duration: 1000,
          once: true,
        });

        setTimeout(() => {
          window.AOS.refresh();
        }, 100);
      }
    };

    // Delay to allow DOM + external scripts to load
    const timeout = setTimeout(initAOS, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
