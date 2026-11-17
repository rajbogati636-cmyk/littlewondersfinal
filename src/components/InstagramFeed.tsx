import { useEffect, useRef, useState } from 'react';

const originalWidgetId = '69b3d08d-f4d0-4494-b79d-65e4dadd82d0';
const widgetScript = 'https://apps.elfsight.com/p/platform.js';
const customFeedUrl = import.meta.env.VITE_LITTLE_WONDERS_INSTAGRAM_FEED_URL?.trim();

export default function InstagramFeed() {
  const widget = useRef<HTMLDivElement>(null);
  const [hasPosts, setHasPosts] = useState(false);

  useEffect(() => {
    const element = widget.current;
    if (!element) return;

    // A disabled widget may insert a status message without publishing any posts.
    const observer = new MutationObserver(() => {
      setHasPosts(Boolean(element.querySelector('a[href*="instagram.com/p/"], a[href*="instagram.com/reel/"], [class*="post-image"], [class*="posts-item-image"]')));
    });
    observer.observe(element, { childList: true, subtree: true, attributes: true, attributeFilter: ['href'] });

    if (!document.querySelector(`script[src="${widgetScript}"]`)) {
      const script = document.createElement('script');
      script.src = widgetScript;
      script.async = true;
      document.head.appendChild(script);
    }
    return () => observer.disconnect();
  }, []);

  const hasCustomFeed = customFeedUrl?.startsWith('https://');
  const showFeed = hasCustomFeed || hasPosts;

  return (
    <section
      className={showFeed ? 'little-wonders-social' : undefined}
      aria-labelledby={showFeed ? 'little-wonders-social-title' : undefined}
      aria-hidden={!showFeed}
    >
      {showFeed && <h2 id="little-wonders-social-title">Little Wonders on Instagram</h2>}
      <div className="lw-instagram-feed-wrapper">
        {hasCustomFeed ? (
          <iframe src={customFeedUrl} title="Little Wonders Instagram updates" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" />
        ) : (
          <div
            className={`elfsight-app-${originalWidgetId}`}
            ref={widget}
            data-elfsight-app-lazy
            style={hasPosts ? undefined : { height: 1, overflow: 'hidden' }}
          />
        )}
      </div>
    </section>
  );
}
