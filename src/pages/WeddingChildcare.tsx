import { Link } from 'react-router-dom';
import { ArrowRight, Heart, MapPin, UsersRound, Palette, Clock, Download, CheckCircle2 } from 'lucide-react';
import './WeddingChildcareUpdates.css';
const items=[
 {icon:MapPin,title:'Onsite or offsite',desc:'We can care for children at your wedding venue or in suitable nearby accommodation, including holiday homes, hotels and Airbnbs.'},
 {icon:UsersRound,title:'Guest Connect',desc:'We connect with parents before your celebration to learn about routines, allergies, interests and comfort needs.'},
 {icon:Palette,title:'Beautifully considered spaces',desc:'Where possible, our play areas and comfort spaces can reflect your wedding colours and styling at no extra charge.'},
 {icon:Clock,title:'Care shaped around your day',desc:'Custom packages start from a four-hour minimum, with staffing and care hours determined by the ages and needs of children attending.'},
];
const weddingJourney = [
  {
    title: 'Connect & Confirm',
    text: "Send us an enquiry and we’ll arrange your complimentary Connection Call. We’ll chat about your wedding plans, explore childcare options that best suit your celebration and prepare your personalised quote. Once you're ready, secure your wedding date with your booking deposit.",
  },
  {
    title: 'Register Your Event',
    text: 'Complete your event registration so we can gather all the important details about your celebration. This helps us begin planning a personalised childcare experience that complements your wedding day.',
  },
  {
    title: 'Final Event Consultation',
    text: "As your wedding approaches, we'll reconnect to finalise your childcare arrangements, confirm event details and discuss any special requests. Together, we'll ensure everything is thoughtfully planned for your celebration.",
  },
  {
    title: 'Guest Registration & Guest Connect Service',
    text: "Guest registration opens, allowing families attending your wedding to register their children and share important care information. Approximately 2 to 4 weeks before your wedding, our Guest Connect Service begins. We'll personally connect with registered families to learn about their children, routines, individual needs and anything that will help them feel comfortable and cared for.",
  },
  {
    title: 'Relax & Enjoy Your Celebration!',
    text: "It's time to celebrate! Our experienced team will take care of the little details and create a safe, engaging and memorable experience for your youngest guests. You can relax, celebrate and soak up every special moment knowing your little guests are in caring hands.",
  },
];

const weddingPackageInclusions = [
  'Care for children from birth to 12 years, from one child to groups of 30 or more, with staffing planned individually',
  'Care onsite at your wedding venue or offsite at suitable accommodation or a private home',
  'Child-free moments, entire child-free celebrations or more relaxed care to suit your plans',
  'Activities designed around children’s ages and interests, including crafts, sensory and imaginative play, books, construction, dress-ups and games',
  'Comfort styling including child-friendly furniture, rugs, cushions, blankets, teepees, bean bags and cosy play areas',
  'Slumber spaces with suitable cots or mattresses, bedding, linen and blankets',
  'Individual care requirements and additional support needs discussed during planning',
  "Temporary tattoos, piñatas, ball pits, scavenger hunts and disco parties",
  'Offsite catering and limited transport may be arranged where suitable',
  'For offsite care, updates for parents approximately every two hours, with photos where possible and appropriate',
  'Our Guest Connect consultations with registered families before your wedding',
  'Peace of mind with care from our experienced and appropriately screened Wonder Team',
];

const weddingExtras = [
  'Baby resources and age-appropriate technology that can be used without Wi-Fi',
  'Comfortable, beautifully styled play and rest spaces',
  'Onsite care at a wedding venue or offsite care at suitable accommodation',
];

export default function WeddingChildcare(){return <main className="wedding-updates-page"><section className="service-detail-hero"><div><p className="eyebrow">Our flagship service</p><h1>Wedding Childcare</h1><p>Designed around your celebration. Curated with care for your children.</p><p>From intimate gatherings to extraordinary destination weddings, Little Wonders creates personalised onsite and offsite childcare experiences so every guest can be fully present.</p><Link className="button" to="/contact">Enquire About Wedding Childcare <ArrowRight size={16}/></Link></div><img className="wedding-hero-photo" src="/assets/wedding-guests-outdoors.jpg" alt="Children playing outdoors with balloons at a wedding" width={2579} height={2333} /></section>
 <div className="service-details-body"><p className="eyebrow centered">Care with intention</p><h2>Beautiful moments for little guests, too.</h2><p className="service-details-lead">Our Wonder Team offers warm, professional care, carefully selected play resources and comfortable spaces planned around the children and the rhythm of your day.</p><div className="service-details-grid">{items.map(item=><div key={item.title}><item.icon size={28} strokeWidth={1.4}/><h3>{item.title}</h3><p>{item.desc}</p></div>)}</div>
 <section className="service-inset"><h2>Every wedding is different.</h2><p>Ratios are planned individually, typically from 1:3 up to 1:5 depending on ages, needs and the environment. Overnight wedding care may be considered specifically for the celebrating couple’s children. All arrangements are discussed individually.</p><Link to="/faq">Read wedding childcare FAQs <ArrowRight size={15}/></Link></section>
 <section className="wedding-package-inclusions" aria-labelledby="wedding-package-heading">
   <p className="eyebrow centered">Beautifully considered, all-inclusive care</p>
   <h2 id="wedding-package-heading">Customised Wedding Care Packages</h2>
   <p>Every celebration is different. We work with you to create a care experience centred on your event, your guests and the children attending. Depending on the care arrangement, packages can include:</p>
   <ul>{weddingPackageInclusions.map(inc => <li key={inc}><CheckCircle2 size={19} aria-hidden="true" /><span>{inc}</span></li>)}</ul>
   <p className="wedding-package-note">Package contents, staff ratios, eligibility and final inclusions are confirmed in your personalised quote. We can style the children’s area to complement your wedding colours at no extra charge.</p>
 </section>
 <section className="wedding-extras" aria-labelledby="wedding-extras-title">
   <p className="eyebrow centered">Care, activities & little extras</p>
   <h2 id="wedding-extras-title">A wonderful celebration for every guest.</h2>
   <p>Care experiences and activity options are tailored to the children attending and the requirements of your wedding. Depending on your package, these may include:</p>
   <ul>{weddingExtras.map(extra => <li key={extra}><CheckCircle2 size={19} aria-hidden="true" />{extra}</li>)}</ul>
 </section>
 <section className="wedding-journey" aria-labelledby="wedding-journey-heading">
   <p className="eyebrow centered">A thoughtful process, from first hello to your big day</p>
   <h2 id="wedding-journey-heading">Your Wedding Childcare Journey</h2>
   <ol className="wedding-journey-steps">{weddingJourney.map((step, index) =>
     <li key={step.title}><span className="wedding-step-number" aria-hidden="true">{String(index + 1).padStart(2,'0')}</span><div><h3>{step.title}</h3><p>{step.text}</p>{index === 1 && <Link className="wedding-step-link" to="/event-registration">Register your event <ArrowRight size={15} aria-hidden="true" /></Link>}{index === 3 && <Link className="wedding-step-link" to="/parent-registration">Register as a parent or guardian <ArrowRight size={15} aria-hidden="true" /></Link>}</div></li>
   )}</ol>
   <div className="wedding-guide-actions">
     <a className="button" href="/assets/little-wonders-wedding-care-guide.pdf" download><Download size={17} aria-hidden="true" /> Download Our Wedding Guide</a>
     <Link className="button outline" to="/event-registration">Event Registration <ArrowRight size={16} aria-hidden="true" /></Link>
   </div>
 </section>
 <section className="wedding-real-gallery" aria-label="Little Wonders wedding care gallery">
   <h2>Wedding moments, thoughtfully styled</h2>
   <p>Photographs from the Little Wonders Wedding Care Guide.</p>
   <div className="wedding-real-gallery-grid">
     <img src="/assets/little-wonders-original-setup.jpg" alt="Wedding children's styled play space" loading="lazy" />
     <img src="/assets/little-wonders-children-party.jpg" alt="Children playing at a wedding celebration" loading="lazy" />
     <img src="/assets/little-wonders-styled-event.jpg" alt="Cosy decorated children's activity space" loading="lazy" />
   </div>
 </section>
 <section className="service-enquiry"><Heart size={28}/><h2>Let's talk about your celebration.</h2><p>Send us an enquiry and we’ll arrange a complimentary Connection Call to discuss care for your wedding guests.</p><Link to="/contact" className="button">Request a Connection Call <ArrowRight size={16}/></Link></section></div></main>}
