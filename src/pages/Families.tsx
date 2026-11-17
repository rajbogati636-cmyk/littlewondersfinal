import { useState } from 'react';
import './Families.css';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Download, Heart, Users } from 'lucide-react';

type FamilyCareOption = {
  title: string;
  image: string;
  alt: string;
  paragraphs: string[];
  href?: string;
  linkLabel?: string;
  defence?: boolean;
  id?: string;
};

const careOptions: FamilyCareOption[] = [
  {
    title: 'Babysitting',
    image: '/assets/care-babysitting.jpg',
    alt: 'Caregiver playing with a young child at home',
    paragraphs: [
      'Perfect for casual, as needed care, most commonly for appointments, date nights and special functions.',
      'Enjoy your time away while your children are whisked into a world of blanket forts, stories and sensory experiences! Our caring team will ensure your little ones are entertained, engaged and well looked after.',
    ],
  },
  {
    title: 'Household Management',
    image: '/assets/childcare-tent.jpg',
    alt: 'Little Wonders caregiver spending time with a child in a play space',
    paragraphs: [
      'Designed for parents who simply need that little bit of extra help!',
      'Your dedicated team member is a wonderful mix of babysitter and an extra set of hands around the home. Alongside caring for your children, they can help keep your household running smoothly.',
      "Common tasks include resetting toys and play areas, tidying the kitchen and putting on a load of laundry. It's all about taking a little pressure off your day!",
    ],
  },
  {
    title: 'Defence Family Support',
    image: '/assets/defence-care-client-photo-2026.png',
    alt: 'Australian Defence service member with a young child',
    paragraphs: [
      'We offer a range of specialised care options for Defence families, both on and off base.',
      'Our services include in-home care, care in community houses and centres, as well as support for Defence functions and events.',
      "Our mission is to ensure Defence families experience as little interruption to their usual at-home care arrangements as possible, providing reliable and flexible support when it's needed most.",
    ],
    href: '/defence-care',
    linkLabel: 'Explore Defence Care',
    defence: true,
  },
  {
    title: 'Group Babysitting Bookings',
    id: 'group-babysitting',
    image: '/assets/service-corporate.jpg',
    alt: 'Children enjoying a celebration with colourful balloons and activities',
    paragraphs: [
      "Perfect for families and groups of friends wanting to enjoy a celebration without worrying about keeping the kids entertained!",
      "Whether it's a friends' night, a celebration, weekend BBQ or Christmas party, we'll take care of the children with fun activities, games and plenty of entertainment while you relax and enjoy hosting.",
      'Travelling together? We can also coordinate care at suitable accommodation, including for families attending a destination wedding.',
    ],
  },
];

const bookingSteps = [
  {
    title: 'Connect With Us',
    copy: 'Message us for more information or to book. Once we know more about your care needs, we can give you more accurate pricing and details about your specific booking requirements.',
  },
  {
    title: 'Registration',
    copy: "Register your family's details at any time during this process so we have all the information needed to provide the best childcare for your family.",
    href: '/parent-registration',
    linkLabel: 'Parent Registration',
  },
  {
    title: 'Choose & Connect With Your Babysitter',
    copy: 'Once we\'ve done a private call-out within our team, we will send you some profiles of the team members who might be keen to connect.',
  },
  {
    title: 'Prepayment',
    copy: "Once your booking is confirmed, we'll arrange prepayment to secure your childcare team and booking.",
  },
  {
    title: 'Enjoy!',
    copy: "Relax and enjoy your time knowing your children are in caring, capable hands. We'll take care of the rest!",
  },
];

type FamilyReview = { category: string; quote: string; name?: string; stars: 4 | 5 };

const reviews: FamilyReview[] = [
  {
    category: 'Wedding Childcare', stars: 5, name: 'Chloe',
    quote: 'We wanted our parents to enjoy our wedding without having to run around after our kiddos all night. Hiring our own personal babysitter was the perfect solution. Nicole [the owner] supported us through the process from start to finish. The mini kids set up was adorable and the kids had a wonderful time showing us all their creations the next morning. Being parents it hard not to worry about your kids, but our day was perfect. Our babysitter was so fun and caring, we have booked her for a monthly date night each month since. Thank you for making our lives better! x',
  },
  {
    category: 'Everyday Babysitting', stars: 5, name: 'Hannah',
    quote: 'Our kids are always excited to see what our babysitter is bringing along for their play date! Little Wonders takes the stress out of us finding someone who is safe and who we can trust for our family.',
  },
  {
    category: 'Date Nights & Relationships', stars: 5, name: 'Erica',
    quote: 'As parents, we really struggled to connect harder and harder when our life focused around the kids 24/7. A friend suggested LW to us and it’s been so helpful. We love our kids, but we can now go out on a date and talk a little more about us. We’ve even done a double date with our friends who recommended your service whilst they had one of your babysitters too!',
  },
  {
    category: 'Defence Family Support', stars: 5,
    quote: 'Being an ADF family, means often we are away from our family and friends. We connected with the Little Wonders while in Darwin and are now posted in Brisbane! We have been able to connect with wonderful babysitters to support us - one of our sitters (also an ADF spouse from NT) posted to Brisbane too, so it was lovely to reconnect with her! We recommend your service to all our ADF friends - the peace of mind we have is such a relief!',
  },
  {
    category: 'ADF & Date Nights', stars: 4,
    quote: "Hubby and I didn't understand the importance of date night...until he joined the navy...we experienced deployments...we had kids...we experienced more deployments....it's been rough! A friend recommended Little Wonders and it's the best choice we've made as a couple! Hubby now looks forward to our date nights or date days! We've been on fishing charters, to the movies and out with friends! Thank you!",
  },
  {
    category: 'Household Management & Babysitting', stars: 5,
    quote: "Having babysitting help at home has meant so much for us as parents - one less basket of washing to fold, once less bench to wipe and one less piece of lego to step on at night. Our kiddos are just as excited as us when we tell them we've booked their favourite!",
  },
  {
    category: 'Business Partnerships', stars: 5,
    quote: 'As a business we are able to register all our work events with Little Wonders free of charge and all our team get a handy babysitting discount! This is fabulous especially when it comes to encouraging our team to attend workshops and end of year celebrations. We also hired Little Wonders for our staff Christmas party so the kids could come along last year and the children had a blast, the team always go over and above to ensure our business is supported. Thank you!',
  },
  {
    category: 'The Kids Loved Georgia', stars: 5,
    quote: 'The kids loved Georgia. In fact, we woke up in the morning to E and M running into our room telling us to go away, they wanted their baby sitter back....!',
  },
  {
    category: 'A Wonderful Trial Night', stars: 5,
    quote: 'Hannah was amazing. When she came on the trial night a few nights before the planned day of care, she gave us so much confidence that she would take great care of our little ones. She was able to build a trusting relationship with M straight away (she knew all the Paw Patrol characters), and was able to put him to bed with no problems',
  },
  {
    category: 'Travelling from New Zealand', stars: 5,
    quote: "Travelling for weddings with kids is stressful enough, let alone finding a babysitter to trust in locations we have never been before! Nicole (owner) made the process so easy for us. We could finally enjoy the wedding knowing our kiddos were having fun. We've used their service in both Toowoomba & Darwin now..highly recommend!",
  },
];

function ReviewCarousel() {
  const [active, setActive] = useState(0);
  const review = reviews[active];
  const goTo = (direction: number) => setActive(current => (current + direction + reviews.length) % reviews.length);

  return (
    <section className="families-reviews" aria-labelledby="families-reviews-title">
      <div className="families-section-heading">
        <p className="eyebrow">Kind words from families</p>
        <h2 id="families-reviews-title">Reviews from Real Families</h2>
        <p>We believe the best way to share what Little Wonders is all about is through the experiences of the families we support. We only publish genuine reviews from real families who have shared their feedback with us. Every review below comes from a family's own experience with Little Wonders and our care team.</p>
      </div>
      <div className="families-review-shell" role="region" aria-roledescription="carousel" aria-label="Reviews from real families">
        <button type="button" className="families-review-arrow" onClick={() => goTo(-1)} aria-label="Previous review"><ArrowLeft size={22} /></button>
        <article className="families-review-card" aria-live="polite" aria-atomic="true" key={active}>
          <span className="families-review-quote-mark" aria-hidden="true">“</span>
          <p className="families-review-category">{review.category}</p>
          <p className="families-review-stars" role="img" aria-label={`${review.stars} out of 5 stars`}>{'★'.repeat(review.stars)}<span className="families-review-empty-stars">{'☆'.repeat(5 - review.stars)}</span></p>
          <blockquote>{review.quote}</blockquote>
          {review.name && <p className="families-review-author">— {review.name}</p>}
        </article>
        <button type="button" className="families-review-arrow" onClick={() => goTo(1)} aria-label="Next review"><ArrowRight size={22} /></button>
      </div>
      <p className="families-review-counter" aria-live="polite">{active + 1} of {reviews.length} reviews</p>
    </section>
  );
}

export default function Families() {
  return (
    <main className="families-page">
      <header className="families-hero">
        <div className="families-hero-inner">
          <p className="eyebrow">Welcome to Little Wonders</p>
          <h1>Families</h1>
          <p className="families-hero-tagline">The care options we provide</p>
          <p>We offer a range of flexible childcare options to support families, whether you need a helping hand at home, care for a special occasion or entertainment for the children while you enjoy some well deserved time away.</p>
          <Link className="button" to="/contact">Connect With Us <ArrowRight size={17} /></Link>
        </div>
      </header>

      <section className="families-options" aria-labelledby="families-options-title">
        <div className="families-section-heading">
          <p className="eyebrow">The care options we provide</p>
          <h2 id="families-options-title">Our Care Options</h2>
        </div>
        <div className="families-care-grid">
          {careOptions.map((option, index) => (
            <article className={`families-care-card${option.defence ? ' families-care-card-defence' : ''}`} key={option.title} id={option.id}>
              <div className="families-care-photo"><img src={option.image} alt={option.alt} loading={index > 1 ? 'lazy' : 'eager'} /></div>
              <h3>{option.title}</h3>
              {option.paragraphs.map(p => <p key={p}>{p}</p>)}
              {option.href && <Link className="families-card-link" to={option.href}>{option.linkLabel} <ArrowRight size={16} /></Link>}
            </article>
          ))}
        </div>
      </section>

      <section className="families-specialties" aria-label="Weddings and private functions">
        <article className="families-specialty">
          <img src="/assets/care-wedding-connect-four.webp" alt="Children enjoying wedding activities and a giant Connect Four game" loading="lazy" />
          <div>
            <p className="eyebrow">Our specialty</p>
            <h2>Weddings + Functions</h2>
            <p>This is our specialty and one of our favourite services!</p>
            <p>We specialise in creating the perfect wedding childcare experience for brides and grooms, ensuring all children are included and cared for on their special day.</p>
            <p>For couples who don't like the idea of anyone missing out on the celebrations, let us take care of the little ones so your friends and family can truly relax and enjoy your once-in-a-lifetime occasion.</p>
            <p>From dedicated childcare spaces to fun-filled activities, we tailor our wedding care to suit your day and your guests.</p>
            <Link className="button" to="/wedding-childcare">Wedding Childcare <ArrowRight size={17} /></Link>
          </div>
        </article>
        <article className="families-specialty families-specialty-reverse">
          <img src="/assets/families-private-functions.jpg" alt="A child and an older guest sharing a meal at a private celebration" loading="lazy" />
          <div>
            <p className="eyebrow">Celebrate together</p>
            <h2>Private Functions</h2>
            <p>Perfect for private celebrations, whether it's Christmas parties, birthdays or anniversaries!</p>
            <p>We'll customise the perfect care package to include exactly what you need: a professional childcare team, loads of fun and all the little comforts the children need to make it a party to remember.</p>
            <p>You enjoy the celebration, and we'll keep the little ones happy, entertained and cared for!</p>
            <Link className="button outline" to="/functions">Explore Private Functions <ArrowRight size={17} /></Link>
          </div>
        </article>
      </section>

      <section className="families-booking" aria-labelledby="families-booking-title">
        <div className="families-section-heading">
          <p className="eyebrow">Simple, thoughtful support</p>
          <h2 id="families-booking-title">Steps to Booking Your Babysitter</h2>
        </div>
        <ol className="families-steps">
          {bookingSteps.map((step, index) => (
            <li key={step.title}>
              <span className="families-step-num" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <div><h3>{step.title}</h3><p>{step.copy}</p>{step.href && <Link className="families-card-link" to={step.href}>{step.linkLabel} <ArrowRight size={16} /></Link>}</div>
            </li>
          ))}
        </ol>
        <div className="families-resource-actions">
          <a className="button" href="/assets/little-wonders-care-guide-2026-27.pdf" download="Little-Wonders-Care-Guide-2026-27.pdf">Download Our Care Guide <Download size={17} /></a>
          <Link className="button outline" to="/wonder-team">Learn More About Our Team <Users size={17} /></Link>
        </div>
      </section>

      <ReviewCarousel />

      <section className="families-final-cta">
        <Heart size={30} strokeWidth={1.4} aria-hidden="true" />
        <h2>Wonderful care, more time for what matters.</h2>
        <p>Tell us a little about your family and the care you're looking for. We'd love to hear from you.</p>
        <Link to="/contact" className="button">Connect With Us <ArrowRight size={17} /></Link>
      </section>
    </main>
  );
}
