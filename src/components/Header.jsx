import { useState, useEffect } from 'react'
import './Header.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`header-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <header className="header">
        <a href="#" className="logo">
          <img src="/images/logo.png" alt="ELE-SCENT Logo" className="logo-img" />
          <span className="logo-text">ELE-SCENT</span>
        </a>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#features">Technology</a>
          <a href="#vision-mission">Vision</a>
          <a href="#data" className="nav-cta">Data Access</a>
        </nav>
      </header>
    </div>
  )
}
