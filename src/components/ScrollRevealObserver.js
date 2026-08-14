'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function ScrollRevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    if (!revealEls.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      revealEls.forEach((el) => el.classList.add('visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealEls.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-run when pathname changes

  return null;
}
