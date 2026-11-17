import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import EventRegistration from '@/pages/EventRegistration';
import ParentRegistration from '@/pages/ParentRegistration';
import Contact from '@/pages/Contact';
import WonderTeam from '@/pages/WonderTeam';
import Functions from '@/pages/Functions';
import OurStory from '@/pages/OurStory';
import ValuesMissionSustainability from '@/pages/ValuesMissionSustainability';
import Ratios from '@/pages/Ratios';
import TeamSafety from '@/pages/TeamSafety';
import FAQ from '@/pages/FAQ';
import CareOptions from '@/pages/CareOptions';
import WeddingChildcare from '@/pages/WeddingChildcare';
import Families from '@/pages/Families';
import DefenceCare from '@/pages/DefenceCare';
import Locations from '@/pages/Locations';
import VenueRegionPage from '@/pages/VenueRegionPage';
import Journal, { JournalArticle, NotFound } from '@/pages/Journal';
import PrivacyPolicy from '@/pages/PrivacyPolicy';
import PrivacyNotice from '@/pages/PrivacyNotice';
import Careers from '@/pages/Careers';
import ExposCommunityDays from '@/pages/ExposCommunityDays';

const legacyRoutes = {
  '/weddings': '/wedding-childcare',
  '/private-functions': '/functions',
  '/small-business-corporate': '/functions',
  '/blog': '/journal',
  '/letter-from-the-director': '/our-story',
  '/our-team': '/wonder-team',
  '/our-wonder-team': '/wonder-team',
  '/our-values-mission-footprint': '/values-mission-sustainability',
  '/our-ratio': '/ratios',
  '/for-venues-and-planners': '/locations',
  '/events-register': '/event-registration',
  '/event-registration/register-event': '/event-registration',
  '/parent-event-registration': '/parent-registration',
  '/the-top-3-things-to-check-before-you-hire-a-babysitter': '/journal/the-top-3-things-to-check-before-you-hire-a-babysitter',
  '/the-top-3-things-to-check-before-you-hire-a-babysitter-2': '/journal/the-top-3-things-to-check-before-you-hire-a-babysitter',
  '/what-to-look-for-in-a-babysitter': '/journal/what-to-look-for-in-a-babysitter',
  '/what-to-look-for-in-a-babysitter-2': '/journal/what-to-look-for-in-a-babysitter',
  '/the-importance-of-reliability-attitude-and-references-when-it-comes-to-babysitters-2': '/journal/the-importance-of-reliability-attitude-and-references-when-it-comes-to-babysitters',
  '/the-importance-of-reliability-attitude-and-references-when-it-comes-to-babysitters-3': '/journal/the-importance-of-reliability-attitude-and-references-when-it-comes-to-babysitters',
};

function PageNavigation() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const heading = document.querySelector('main h1')?.textContent?.trim();
    document.title = pathname === '/' || !heading
      ? 'Little Wonders | Premium Wedding & Event Childcare'
      : `${heading} | Little Wonders`;

    let anchor = hash.slice(1);
    try { anchor = decodeURIComponent(anchor); } catch { /* Ignore an invalid escape in the URL. */ }
    const target = anchor ? document.getElementById(anchor) : null;
    if (target) target.scrollIntoView({ block: 'start' });
    else window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <div className="registration-page">
        <Navbar />
        <PageNavigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/wonder-team" element={<WonderTeam />} />
          <Route path="/values-mission-sustainability" element={<ValuesMissionSustainability />} />
          <Route path="/ratios" element={<Ratios />} />
          <Route path="/team-safety" element={<TeamSafety />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/care-options" element={<CareOptions />} />
          <Route path="/functions" element={<Functions />} />
          <Route path="/wedding-childcare" element={<WeddingChildcare />} />
          <Route path="/families" element={<Families />} />
          <Route path="/group-bookings" element={<Navigate to="/families#group-babysitting" replace />} />
          <Route path="/defence-care" element={<DefenceCare />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/locations/:regionId" element={<VenueRegionPage />} />
          <Route path="/journal" element={<Journal />} />
          <Route path="/journal/:slug" element={<JournalArticle />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path="/event-registration" element={<EventRegistration />} />
          <Route path="/parent-registration" element={<ParentRegistration />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/expos-community-days" element={<ExposCommunityDays />} />
          <Route path="/contact" element={<Contact />} />
          {Object.entries(legacyRoutes).map(([from, to]) => (
            <Route key={from} path={from} element={<Navigate to={to} replace />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
