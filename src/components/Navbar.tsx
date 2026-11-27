import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, CalendarHeart, Users, ChevronDown } from 'lucide-react';
import BrandMark from './BrandMark';

const navLinks: { label: string; href: string }[] = [
  { label: 'Wedding Childcare', href: '/wedding-childcare' },
  { label: 'Private & Corporate Events', href: '/functions' },
  { label: 'Families', href: '/families' },
  { label: 'Defence Care', href: '/defence-care' },
  { label: 'Venues', href: '/locations' },
];

const aboutDropdown: { label: string; href: string }[] = [
  { label: 'About Us', href: '/about' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Our Wonder Team', href: '/wonder-team' },
  { label: 'Join Our Wonder Team', href: '/careers' },
  { label: 'Values, Mission & Sustainability', href: '/values-mission-sustainability' },
  { label: 'Our Ratios', href: '/ratios' },
  { label: 'Team Safety', href: '/team-safety' },
  { label: 'FAQ', href: '/faq' },
];

const eventsDropdown: { label: string; href: string }[] = [
  { label: 'Event Registration', href: '/event-registration' },
  { label: 'Parent Registration', href: '/parent-registration' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const NAV_MOBILE_BREAKPOINT = 900;

  const isActive = (href: string) => location.pathname.replace(/\/$/, '') === href;

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);
  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 52);
    updateScroll();
    window.addEventListener('scroll', updateScroll, { passive: true });
    return () => window.removeEventListener('scroll', updateScroll);
  }, []);
  useEffect(() => {
    const closeDesktopMenu = () => { if (window.innerWidth > NAV_MOBILE_BREAKPOINT) setMenuOpen(false); };
    window.addEventListener('resize', closeDesktopMenu);
    return () => window.removeEventListener('resize', closeDesktopMenu);
  }, []);
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      {/* Registration strip scrolls away; the primary navigation stays sticky. */}
      <div className="registration-strip">
        <div className="registration-strip-inner">
          <div className="registration-strip-links">
            <Link to="/contact">Enquire</Link>
            <Link to="/event-registration">
              <CalendarHeart size={14} strokeWidth={1.8} />
              Event Registration <span aria-hidden="true">→</span>
            </Link>
            <Link to="/parent-registration">
              <Users size={14} strokeWidth={1.8} />
              Parent Registration <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
        <Link className="brand" to="/">
          <BrandMark />
        </Link>
        <button className="menu" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-controls="main-navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
        <nav id="main-navigation" aria-label="Main navigation" className={menuOpen ? 'open' : ''}>
          {navLinks.map((link) => (
            <Link key={link.label} to={link.href} aria-current={link.href === '/locations' && location.pathname.startsWith('/locations') ? 'page' : isActive(link.href) ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <div className={`nav-dropdown ${aboutOpen ? 'open' : ''}`} onMouseEnter={() => { if (window.innerWidth > NAV_MOBILE_BREAKPOINT) setAboutOpen(true); }} onMouseLeave={() => { if (window.innerWidth > NAV_MOBILE_BREAKPOINT) setAboutOpen(false); }}>
            <Link to="/about" aria-controls="about-navigation" onClick={(e) => { if (window.innerWidth <= NAV_MOBILE_BREAKPOINT) { e.preventDefault(); setAboutOpen(!aboutOpen); } }}>About Us <ChevronDown size={13} className="nav-chevron" aria-hidden="true" /></Link>
            <div className="dropdown-menu" id="about-navigation">
              {aboutDropdown.map((link) => (
                <Link key={link.href} to={link.href} aria-current={isActive(link.href) ? 'page' : undefined} onClick={() => { setMenuOpen(false); setAboutOpen(false); }}>{link.label}</Link>
              ))}
            </div>
          </div>
          <div className={`nav-dropdown event-dropdown ${eventsOpen ? 'open' : ''}`} onMouseEnter={() => { if (window.innerWidth > NAV_MOBILE_BREAKPOINT) setEventsOpen(true); }} onMouseLeave={() => { if (window.innerWidth > NAV_MOBILE_BREAKPOINT) setEventsOpen(false); }}>
            <Link to="/event-registration" aria-controls="events-navigation" aria-current={isActive('/event-registration') || isActive('/parent-registration') ? 'page' : undefined} onClick={(e) => { if (window.innerWidth <= NAV_MOBILE_BREAKPOINT) { e.preventDefault(); setEventsOpen(!eventsOpen); } }}>Events <ChevronDown size={13} className="nav-chevron" aria-hidden="true" /></Link>
            <div className="dropdown-menu" id="events-navigation">
              {eventsDropdown.map((link) => (
                <Link key={link.href} to={link.href} aria-current={isActive(link.href) ? 'page' : undefined} onClick={() => { setMenuOpen(false); setEventsOpen(false); }}>{link.label}</Link>
              ))}
            </div>
          </div>
          <Link to="/journal" onClick={() => setMenuOpen(false)}>Journal</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link className="mobile-booking-link" to="/contact" onClick={() => setMenuOpen(false)}>Request a Connection Call</Link>
        </nav>
        <Link className="button small" to="/contact" onClick={() => setMenuOpen(false)}>Request a Connection Call</Link>
      </header>
      {/* Shortcuts are always visible on a phone, without opening the hamburger menu. */}
      <div className="mobile-service-banner" aria-label="Quick navigation to Little Wonders services">
        <span className="mobile-service-label">Discover more</span>
        <nav className="mobile-service-links" aria-label="Services and careers shortcuts">
          <Link to="/wedding-childcare">Weddings</Link>
          <Link to="/functions">Events</Link>
          <Link to="/families">Families</Link>
          <Link to="/defence-care">Defence</Link>
          <Link to="/locations">Venues</Link>
          <Link to="/careers">Join our team</Link>
        </nav>
      </div>
    </>
  );
}
