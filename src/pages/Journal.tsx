import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import posts from '@/content/journal.json';

const dateFormat = new Intl.DateTimeFormat('en-AU', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

export default function Journal() {
  return (
    <main>
      <header className="page-hero">
        <h1>Journal</h1>
        <p>Stories and practical advice from Little Wonders.</p>
      </header>
      <section className="lw-editorial-container journal-grid" aria-label="Little Wonders articles">
        {posts.map(post => (
          <article className="journal-card" key={post.slug}>
            <img src={post.image} alt="" loading="lazy" />
            <div>
              <time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time>
              <h2><Link to={`/journal/${post.slug}`}>{post.title}</Link></h2>
              <Link to={`/journal/${post.slug}`} aria-label={`Read ${post.title}`}>Read article <ArrowRight size={15} aria-hidden="true" /></Link>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export function JournalArticle() {
  const { slug } = useParams();
  const post = posts.find(item => item.slug === slug);
  if (!post) return <NotFound />;

  const body: { items: string[]; paragraph?: string }[] = [];
  for (const block of post.body) {
    if (block.type === 'item') {
      const previous = body[body.length - 1];
      if (previous && previous.paragraph === undefined) previous.items.push(block.text);
      else body.push({ items: [block.text] });
    } else {
      body.push({ paragraph: block.text, items: [] });
    }
  }

  return (
    <main>
      <header className="page-hero">
        <h1>{post.title}</h1>
        <p><time dateTime={post.date}>{dateFormat.format(new Date(post.date))}</time></p>
      </header>
      <article className="journal-article">
        <Link to="/journal"><ArrowLeft size={16} aria-hidden="true" /> Back to Journal</Link>
        <img src={post.image} alt="" />
        {body.map(({ paragraph, items }, index) => paragraph !== undefined ? <p key={index}>{paragraph}</p> :
          <ol key={index}>{items.map(item => <li key={item}>{item}</li>)}</ol>)}
      </article>
    </main>
  );
}

export function NotFound() {
  return (
    <main>
      <header className="page-hero">
        <h1>Page not found</h1>
        <p>This page may have moved.</p>
      </header>
      <div className="lw-editorial-container lw-editorial-buttons">
        <Link className="button" to="/">Return home</Link>
        <Link className="button outline" to="/contact">Contact Little Wonders</Link>
      </div>
    </main>
  );
}
