'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        document.getElementById('nav-toggle')?.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (e) => {
      const navMenu = document.getElementById('nav-menu');
      const navToggleBtn = document.getElementById('nav-toggle');
      if (
        isOpen &&
        navMenu &&
        !navMenu.contains(e.target) &&
        navToggleBtn &&
        !navToggleBtn.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isOpen]);

  const navLinks = [
    { href: '/servicios', label: 'Servicios' },
    { href: '/como-funciona', label: '¿Cómo funciona?' },
    { href: '/ejemplos', label: 'Ejemplos' },
    { href: '/precios', label: 'Precios' },
    { href: '/faq', label: 'FAQ' },
    { href: '/nosotros', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' },
  ];

  return (
    <header>
      <div className="wrap">
        <Link href="/" className="logo" aria-label="Axis — inicio">
          <img src="/imagenes/logo.png" alt="Logo Axis" className="logo-img" />
        </Link>
        <nav aria-label="Navegación principal">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={pathname === link.href ? 'active' : ''}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          className="btn btn-primary"
          href="https://wa.me/523112794209"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbenos
        </Link>
        <button
          className="nav-toggle"
          id="nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          aria-controls="nav-menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <nav
        className={`nav-mobile ${isOpen ? 'open' : ''}`}
        id="nav-menu"
        aria-label="Navegación móvil"
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={pathname === link.href ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
        <Link
          className="btn btn-primary"
          href="https://wa.me/523112794209"
          target="_blank"
          rel="noopener noreferrer"
        >
          Escríbenos
        </Link>
      </nav>
    </header>
  );
}
