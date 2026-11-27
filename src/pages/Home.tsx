import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, Palette, UsersRound, Gift, ArrowRight, Phone, CheckCircle2, Briefcase } from 'lucide-react';
import { useEffect, useRef } from 'react';
import InstagramFeed from '@/components/InstagramFeed';

const weddingFeatures = [
  'Personalised care tailored to your celebration',
  'Play spaces styled to match your wedding colours',
  'We connect with your little guests before the big day',
  'Low ratios, qualified educators & elevated safety',
];

const corporateFeatures = [
  'Onsite, offsite or in-home care options',
  'Recurring or one-off bookings',
  'Online event and guest registration',
  'Flexible care for any business size',
];

const defenceFeatures = [
  'Trusted childcare for Defence families',
  'Flexible solutions across Queensland',
  'On-base, off-base & community events',
  'Security clearance coordination',
];

export default function Home() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    rootRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <main id="top" ref={rootRef}>
      {/* Full-bleed hero */}
      <section className="hero-full">
        <div className="hero-full-image" role="img" aria-label="Wedding guests playing garden Connect Four" />
        <div className="hero-full-content">
          <p className="eyebrow">Premium wedding &amp; event childcare<br />across Southern Queensland</p>
          <h1>Trusted Childcare for<br />Little Guests.<br /><em>Peace of Mind for You.</em></h1>
          <p>Thoughtfully tailored childcare experiences for families, weddings and events across Southern Queensland, so you can be fully present — knowing the littlest guests are safe, happy and creating memories of their own.</p>
          <div className="actions">
            <Link className="button" to="/contact">
              Request a Connection Call <ArrowRight size={16} strokeWidth={1.8} />
            </Link>
            <a className="button outline" href="#services">Explore Our Services</a>
          </div>
        </div>
      </section>

      {/* Features strip */}
      <section className="features reveal">
        <div><ShieldCheck size={30} strokeWidth={1.5} /><b>Safe Hands</b><p>Low ratios, qualified educators &amp; elevated safety standards.</p></div>
        <div><Heart size={30} strokeWidth={1.5} /><b>Warm Hearts</b><p>We genuinely get to know every family and every child.</p></div>
        <div><Award size={30} strokeWidth={1.5} /><b>Professional Care</b><p>Experienced, reliable &amp; dedicated to exceptional service.</p></div>
        <div><Palette size={30} strokeWidth={1.5} /><b>Beautifully Styled</b><p>We style our play spaces to match your wedding colours at no extra cost.</p></div>
        <div><UsersRound size={30} strokeWidth={1.5} /><b>Guest Connect</b><p>We connect with your little guests before the big day.</p></div>
        <div><Gift size={30} strokeWidth={1.5} /><b>Memories to Keep</b><p>Every child takes home their own special memories.</p></div>
      </section>

      <div id="services" className="home-services-heading"><h2>Exceptional Childcare for Extraordinary Occasions</h2></div>
      <section className="alt-section reveal">
        <div className="alt-image">
          <div className="alt-image-bg" role="img" aria-label="Children enjoying a wedding celebration together outdoors" style={{ backgroundImage: "url('/assets/home-wedding-group-2026.webp')" }} />
          <div className="alt-image-badge"><Heart size={18} strokeWidth={1.5} /> Wedding Childcare</div>
        </div>
        <div className="alt-copy cream">
          <h2>Wedding Childcare</h2>
          <p>From intimate gatherings to grand celebrations, we create personalised wedding childcare experiences across Southern Queensland so you can relax, celebrate and enjoy every moment.</p>
          <ul className="alt-features">
            {weddingFeatures.map((f) => (
              <li key={f}><CheckCircle2 size={17} strokeWidth={1.8} /> {f}</li>
            ))}
          </ul>
          <div className="actions">
            <Link className="button" to="/wedding-childcare">Learn more <ArrowRight size={15} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </section>

      {/* Corporate Care — alternating row (flipped) */}
      <section className="alt-section flip reveal home-corporate-section">
        <div className="alt-image">
          <div className="alt-image-bg" role="img" aria-label="Three children on a tree swing at an outdoor celebration" style={{ backgroundImage: "url('/assets/home-events-swing-2026.webp')" }} />
          <div className="alt-image-badge"><Briefcase size={18} strokeWidth={1.5} /> Private &amp; Corporate</div>
        </div>
        <div className="alt-copy sky">
          <h2>Private &amp; Corporate Events</h2>
          <p>Conferences, corporate events and private functions. Flexible childcare solutions designed for families, businesses and special occasions.</p>
          <ul className="alt-features">
            {corporateFeatures.map((f) => (
              <li key={f}><CheckCircle2 size={17} strokeWidth={1.8} /> {f}</li>
            ))}
          </ul>
          <div className="actions">
            <Link className="button" to="/functions">Learn more <ArrowRight size={15} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </section>

      {/* Defence Care — alternating row (Defence olive/tan palette) */}
      <section className="alt-section reveal defence-home-section">
        <div className="alt-image">
          <div className="alt-image-bg" style={{ backgroundImage: "url('/assets/defence-care-client-photo-2026.png')" }} />
          <div className="alt-image-badge"><ShieldCheck size={18} strokeWidth={1.5} /> Defence Care</div>
        </div>
        <div className="alt-copy dark">
          <h2>Defence Care &amp; Support</h2>
          <p>Proudly supporting Australian Defence families with trusted, flexible childcare solutions — wherever you need us across Queensland.</p>
          <ul className="alt-features">
            {defenceFeatures.map((f) => (
              <li key={f}><CheckCircle2 size={17} strokeWidth={1.8} /> {f}</li>
            ))}
          </ul>
          <div className="actions">
            <Link className="button light" to="/defence-care">Learn more <ArrowRight size={15} strokeWidth={1.8} /></Link>
          </div>
        </div>
      </section>

      {/* Venues — split pane */}
      <section className="venues-band reveal" id="about">
        <div className="venues-band-content">
          <p className="eyebrow">We travel to</p>
          <h2>Extraordinary Venues.</h2>
          <p>From the rolling hills of Maleny and the Sunshine Coast Hinterland to Toowoomba, Greater Brisbane and Tamborine Mountain, we bring exceptional childcare to Queensland's most beautiful wedding and event locations. We're also planning future coverage in Warwick, Stanthorpe and the Southern Downs for 2027–28, subject to demand.</p>
          <div className="regions">
            <Link to="/locations/maleny">Maleny &amp; Hinterland</Link>
            <Link to="/locations/sunshine-coast">Sunshine Coast &amp; Noosa</Link>
            <Link to="/locations/brisbane">Greater Brisbane</Link>
            <Link to="/locations/toowoomba">Toowoomba &amp; Darling Downs</Link>
            <Link to="/locations/southern-downs">Warwick, Stanthorpe &amp; Southern Downs</Link>
            <Link to="/locations/tamborine">Tamborine Mountain</Link>
            <Link to="/locations">More Regions</Link>
          </div>
        </div>
        <div className="venues-band-image" role="img" aria-label="Maleny hinterland landscape" />
      </section>

      {/* Connect CTA */}
      <section className="connect reveal" id="contact">
        <p className="eyebrow centered">Let's connect</p>
        <h2>Book Your Complimentary Connection Call</h2>
        <p>Send us an enquiry and Nicole will arrange a complimentary 15–30 minute chat about your celebration.</p>
        <Link className="button" to="/contact">
          Request Your Call <ArrowRight size={16} strokeWidth={1.8} />
        </Link>
        <p style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-soft)' }}>
          Or call us directly&nbsp;
          <a href="tel:0488233252" style={{ color: 'var(--ocean)', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
            <Phone size={13} strokeWidth={1.8} /> 0488 233 252
          </a>
        </p>
      </section>

      <InstagramFeed />
    </main>
  );
}
