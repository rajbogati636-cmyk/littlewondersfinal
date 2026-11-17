import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const additionalCare = [
  {
    title: 'Private & Corporate Events',
    image: '/assets/legacy-care-private.webp',
    text: 'Childcare for private celebrations, corporate functions, conferences and other organised events.',
    href: '/functions',
  },
  {
    title: 'Group Bookings',
    image: '/assets/legacy-care-group.webp',
    text: 'Coordinated childcare at suitable accommodation for families travelling together, including destination wedding guests.',
    href: '/families#group-babysitting',
  },
  {
    title: 'Babysitting & Family Care',
    image: '/assets/legacy-care-family.webp',
    text: 'Occasional babysitting and regular family care, subject to location and Wonder Team availability.',
    href: '/families',
  },
  {
    title: 'Defence Care & Support',
    image: '/assets/legacy-care-defence.webp',
    text: 'Thoughtfully arranged childcare for Defence and Emergency Services families, communities and events.',
    href: '/defence-care',
  },
];

export default function CareOptions() {
  return (
    <main className="care-options-circle-page">
      <header className="page-hero">
        <h1>Care Options</h1>
        <p>Premium wedding childcare and tailored care for families and events.</p>
      </header>
      <div className="service-list-wrap">
        <section className="service-feature">
          <img src="/assets/care-wedding-connect-four.webp" alt="Children playing garden Connect Four at a wedding" />
          <div>
            <p className="eyebrow">Our flagship service</p>
            <h2>Wedding Childcare</h2>
            <p>We plan childcare at your wedding venue or at suitable nearby accommodation, around your celebration and the needs of your little guests.</p>
            <Link className="button" to="/wedding-childcare">Explore Wedding Childcare <ArrowRight size={17} /></Link>
          </div>
        </section>
        <div className="service-secondary-intro"><h2>Thoughtful care beyond your wedding day</h2></div>
        <div className="service-card-grid">
          {additionalCare.map(({ title, image, text, href }) => (
            <article key={title} className={`service-option-card${href === '/defence-care' ? ' defence-service-card' : ''}`}>
              <img src={image} alt="" loading="lazy" />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
                <Link to={href}>Explore {title} <ArrowRight size={15} /></Link>
              </div>
            </article>
          ))}
        </div>
        <div className="service-enquiry">
          <h2>Let’s find the right care for your family.</h2>
          <p>Tell us a little about your plans and we’ll talk through the options with you.</p>
          <Link className="button" to="/contact">Make an enquiry <ArrowRight size={16} /></Link>
        </div>
      </div>
    </main>
  );
}
