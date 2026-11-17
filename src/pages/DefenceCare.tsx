import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import './defence-care-original.css';

const sections = [
  {
    id: 'care-at-home',
    title: 'Care at Home',
    image: '/assets/defence-care-client-photo-2026.png',
    alt: 'Defence servicewoman holding a young child',
    paragraphs: [
      'Sometimes you just need an extra set of hands, a moment to enjoy your coffee while it’s still hot or the chance to have a shower without little ones needing you every five minutes!',
      'Our personalised in-home childcare services are designed to support Defence and Emergency Services families through everyday life, busy schedules and the unique demands of service life.',
      'Whether your serving family member is deployed, away on field exercises, attending courses or working away from home, we’re here to lend a helping hand.',
      'Our flexible care options include babysitting, mother’s helpers, nanny services, date nights, childcare for Dining-In Nights and gala dinners, overnight stays, holiday and vacation care, and temporary live-in support.',
      'We work personally with each family to understand their individual needs, routines and circumstances, creating a customised care experience that provides practical support and peace of mind.',
    ],
    ratio: 'Our standard in-home care ratio is 1 educator to 3 children, allowing us to provide attentive, personalised care for your little ones.',
  },
  {
    id: 'community-care',
    title: 'Community Care',
    image: '/assets/legacy-defence-community.webp',
    alt: 'Image from the original Community Care section',
    paragraphs: [
      'Supporting Defence families goes beyond the home. It’s about creating opportunities for families to connect, build friendships and feel supported within their Defence community.',
      'At Little Wonders Babysitting & Events Service, we collaborate with Defence Community Houses, centres and Defence support organisations to provide tailored childcare services that support the wellbeing of Defence personnel and their families.',
      'Some of the support we’ve previously provided includes crèche-style care for parent wellness retreats, Defence functions and galas, Christmas celebrations, parent workshops and training sessions.',
      'Whether it’s allowing parents to participate in wellbeing programs, connect with other families, attend community events or simply enjoy some much-needed time for themselves, our team creates a safe, welcoming and engaging environment for their little ones.',
      'We work closely with each organisation to create a childcare experience that complements each event, program or community initiative.',
    ],
    ratio: 'Our Community Care ratios range from 1 educator to 3 children through to 1 educator to 5 children, depending on the ages, individual needs and care requirements of the children attending.',
  },
  {
    id: 'barracks-care',
    title: 'Barracks & Base Care',
    image: '/assets/defence-barracks-gala.jpg',
    alt: 'A banquet table set for a gala dinner',
    paragraphs: [
      'Bringing families together is an important part of Defence life, and we’re here to make those moments a little easier for everyone involved.',
      'Our Barracks & Base Care services are fully customised to support Defence units, bases and organisations hosting functions, family gatherings and special celebrations.',
      'Our services are most popularly used for Dining-In Nights, gala dinners and Defence celebrations, allowing serving members and their families to relax, connect and enjoy their event while their little ones are safely cared for.',
      'Some of the events we’ve previously supported include Dining-In Nights, Defence gala dinners, unit celebrations, regular family gatherings, monthly community BBQs and unit BBQs.',
      'Our services can accommodate smaller groups through to larger Defence events with 30 or more children, with a minimum childcare team of two carers.',
      'We bring the childcare experience directly to your event, offering age-appropriate activities, themed crafts and engaging play experiences that can be coordinated with your event’s theme or colours.',
      'Our childcare packages can also include child-friendly furniture, comfortable floor rugs, cushions, blankets, cosy play areas and dedicated slumber spaces with portable cots for little ones needing a rest.',
      'Barracks & Base Care can also be combined with our Community Care services to provide flexible childcare support for larger Defence events and community celebrations.',
    ],
    ratio: 'Our standard staffing ratios range from 1 carer to 3 children through to 1 carer to 5 children, depending on the ages, individual needs and care requirements of the children attending.',
  },
];

export default function DefenceCare() {
  return <main className="defence-original-page">
    <header className="defence-legacy-title-band"><h1>Defence Care</h1></header>

    <section className="defence-original-opening" aria-labelledby="defence-intro-title">
      <h2 id="defence-intro-title">Little Wonders is committed to providing reliable care for Australia's most dedicated families.</h2>
      <p>Supporting Australian Defence Force and Emergency Services families with childcare designed around their circumstances, routines and unique service commitments.</p>
      <p>Explore our four types of care, with experiences thoughtfully tailored to families, communities, bases and special events.</p>
    </section>

    <nav className="defence-round-links" aria-label="Explore Defence Care services">
      <a href="#care-at-home">Care at Home</a>
      <a href="#community-care">Community Care</a>
      <a href="#barracks-care">Barracks &amp; Base Care</a>
      <a href="#public-events">Public Events &amp; Exhibitions</a>
    </nav>

    <section className="defence-circle-grid" aria-label="Defence care options">
      {sections.map((section) => <article className="defence-circle-card" id={section.id} key={section.id}>
        <div className="defence-circle-photo"><img src={section.image} alt={section.alt} loading="lazy" /></div>
        <h2>{section.title}</h2>
        {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        <p className="defence-ratio"><strong>{section.ratio}</strong></p>
      </article>)}

      <article className="defence-circle-card defence-public-card" id="public-events">
        <div className="defence-circle-photo"><img src="/assets/legacy-defence-public.webp" alt="Image from the original Defence public events section" loading="lazy" /></div>
        <h2>Public Events &amp; Exhibitions</h2>
        <p>Our Public Event services are available in two care options:</p>
        <div className="defence-care-type">
          <h3>Open Care | Supervised Family Activities</h3>
          <p>Our Open Care spaces provide children with the opportunity to explore, create and participate in activities alongside their families.</p>
          <p>Children are welcome to come and go throughout the event, with parents or accompanying adults remaining responsible for their supervision and wellbeing.</p>
          <p>This option is particularly popular for community expos, open days, family fun days and public celebrations where families can enjoy activities together.</p>
        </div>
        <div className="defence-care-type">
          <h3>Closed Care | Registered Childcare</h3>
          <p>Our Closed Care service provides a dedicated childcare space where children are signed in and out of care, allowing parents to participate in event activities, workshops or presentations without their little ones by their side.</p>
          <p>Families are required to complete a child registration form before care commences, ensuring our team has the important information needed to provide safe, personalised support.</p>
          <p>Registration can be arranged online before the event or onsite where staffing arrangements and availability permit.</p>
          <p>Our experienced team provides age-appropriate activities and attentive care, with staffing ratios tailored to the ages, individual needs and number of children attending.</p>
        </div>
      </article>
    </section>

    <section className="defence-benefits" aria-labelledby="defence-benefits-title">
      <p className="eyebrow centered">Supporting families who serve and protect</p>
      <h2 id="defence-benefits-title">Defence &amp; Emergency Services Benefits | 2026–2027</h2>
      <p>Since 2013, we've supported families who serve and protect our communities. We offer exclusive benefits for Australian Defence Force (ADF) and Emergency Services personnel across a range of our childcare services.</p>
      <div className="defence-benefit-grid">
        <article><h3>General Babysitting</h3><p>ADF and Emergency Services families can enjoy discounts of <strong>$4–$8 per hour</strong> on eligible babysitting services.</p></article>
        <article><h3>Private Celebrations</h3><p>Enjoy discounts of <strong>up to 25%</strong> on eligible childcare packages for private celebrations, including birthdays, engagements and special family occasions.</p></article>
        <article><h3>Defence Events &amp; Functions</h3><p>Childcare packages for Defence functions, including Dining-In Nights, gala dinners, unit celebrations and other official Defence events, can receive discounts of <strong>up to 25%</strong>.</p></article>
      </div>
      <p className="defence-benefit-disclaimer"><em>Discounts are subject to eligibility, booking requirements and service availability. Please enquire with our team for current rates, applicable benefits and a personalised quote.</em></p>
    </section>

    <section className="defence-guide-download">
      <p className="eyebrow centered">More detail for families and event organisers</p>
      <h2>ADF Functions &amp; Support Guide</h2>
      <p>Download our guide to care options for Defence functions, bases and community events. The guide lists earlier discounts. See the Defence &amp; Emergency Services Benefits above for current 2026–2027 offers.</p>
      <a className="button" href="/assets/little-wonders-adf-functions-support-guide.pdf" download><Download size={18} aria-hidden="true" /> Download ADF Guide</a>
    </section>

    <section className="defence-original-register" aria-labelledby="defence-register-heading">
      <p className="eyebrow">We're here to help</p>
      <h2 id="defence-register-heading">Defence Events Registration</h2>
      <div className="defence-original-actions">
        <Link className="button" to="/event-registration">Register an Event <ArrowRight size={16} aria-hidden="true"/></Link>
        <Link className="button button-outline" to="/parent-registration">Register Attendance <ArrowRight size={16} aria-hidden="true"/></Link>
      </div>
    </section>

    <section className="defence-original-contact">
      <p className="eyebrow">Let's connect</p>
      <h2>Let us help you find balance.</h2>
      <Link className="button" to="/contact">Contact Us Now <ArrowRight size={16} aria-hidden="true" /></Link>
    </section>
  </main>;
}
