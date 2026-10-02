"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const links = [
    { name: "Home", path: "/" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <header className="header">
      <div className="logo">MY PORTFOLIO</div>

      <nav className="nav">
        {links.map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`nav-link ${
              pathname === link.path ? "active" : ""
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}