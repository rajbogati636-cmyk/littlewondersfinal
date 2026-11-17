import policy from '@/content/privacy-policy.txt?raw';
import { Link } from 'react-router-dom';

export default function PrivacyPolicy() {
  return (
    <main>
      <header className="page-hero">
        <h1>Privacy Policy</h1>
        <p>How we handle and protect personal information.</p>
      </header>
      <div className="legal-copy">
        <p><Link to="/privacy-notice">Read the separate Privacy Notice →</Link></p>
        {policy.trim().split(/\n{2,}|(?=^## )/m).filter(Boolean).map((block, index) => {
          if (!block.startsWith('## ')) return <p key={index}>{block}</p>;
          const [heading, ...body] = block.trim().split('\n');
          return <section key={index}><h2>{heading.slice(3)}</h2>{body.length > 0 && <p>{body.join('\n')}</p>}</section>;
        })}
      </div>
    </main>
  );
}
