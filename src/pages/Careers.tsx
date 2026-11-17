import { Link } from 'react-router-dom';
import { ArrowRight, Mail, ShieldCheck, Heart, Users } from 'lucide-react';

const minimum = [
  'A genuine commitment to professional, nurturing care',
  'Relevant Blue Card (QLD) or Ochre Card (NT) eligibility where applicable',
  'Childcare First Aid + CPR + Anaphylaxis (or equivalent)',
  'Annual Police Check',
  'Reliable transport and the ability to meet role-specific requirements',
  'Strong communication, punctuality and respect for family privacy',
];
const opportunities = [
  {icon:Heart, title:'Babysitting & Family Care',desc:'Help families with occasional, recurring, in-home or accommodation-based care.'},
  {icon:Users, title:'Weddings & Events',desc:'Support children at thoughtfully curated weddings, private celebrations and community events.'},
  {icon:ShieldCheck, title:'Defence Family Support',desc:'Provide flexible care to families navigating the demands of Defence and Emergency Services life.'},
];
export default function Careers(){ return <main className="lw-careers-page">
  <header className="page-hero"><p className="eyebrow">Little Wonders</p><h1>Join Our Wonder Team</h1><p>Thoughtful people. Warm hearts. Professional care.</p></header>
  <section className="lw-editorial-container">
    <div className="lw-editorial-intro"><p className="eyebrow">Careers at Little Wonders</p><h2>Come create little moments that matter.</h2><p>We're always interested in hearing from passionate, creative carers who share our commitment to high-quality childcare and meaningful family connections.</p><p>Our team works across private family care, carefully styled wedding and event childcare, and support for Defence families. Current roles and regions are confirmed individually.</p></div>
    <div className="lw-editorial-cards">{opportunities.map(o=><article key={o.title}><o.icon size={28} strokeWidth={1.5}/><h3>{o.title}</h3><p>{o.desc}</p></article>)}</div>
    <section className="lw-editorial-panel"><h2>What we look for</h2><ul>{minimum.map(m=><li key={m}>{m}</li>)}</ul><p>Requirements and employment or contractor arrangements vary by location and role. Contact our team for current application requirements and available opportunities.</p></section>
    <section className="lw-editorial-cta"><h2>Interested in joining us?</h2><p>Send us a note introducing yourself and outlining your relevant experience. Our team can provide current application information and next steps.</p><a className="button" href="mailto:admin@littlewondersaustralia.com?subject=Wonder%20Team%20Career%20Enquiry"><Mail size={17}/> Email Our Team</a><Link className="button outline" to="/wonder-team">Meet Our Wonder Team <ArrowRight size={16}/></Link></section>
  </section>
</main>; }
