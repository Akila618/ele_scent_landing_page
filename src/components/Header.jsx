import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src="/images/logo.png" alt="ELE-SCENT Logo" className="logo-img" />
          <span className="logo-text">ELE-SCENT</span>
        </div>
        <nav className="nav">
          <a href="#about">About</a>
          <a href="#vision">Our Vision</a>
          <a href="#mission">Our Mission</a>
          <a href="#contact">Contact Us</a>
        </nav>
      </div>
    </header>
  )
}
