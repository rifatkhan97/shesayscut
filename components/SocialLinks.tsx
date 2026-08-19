import React from 'react';
import { SOCIAL_LINKS } from '@/lib/data';

interface SocialLinksProps {
  layout?: 'row' | 'column' | 'inline';
  className?: string;
  linkClassName?: string;
  showIcon?: boolean;
}

export default function SocialLinks({
  layout = 'column',
  className = '',
  linkClassName = '',
}: SocialLinksProps) {
  const containerClasses =
    layout === 'row'
      ? 'flex flex-wrap items-center gap-6'
      : layout === 'inline'
      ? 'inline-flex flex-wrap items-center gap-4'
      : 'flex flex-col gap-2.5';

  return (
    <nav className={containerClasses} aria-label="Social Media Channels">
      {SOCIAL_LINKS.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.ariaLabel}
          className={`font-sans text-[11px] tracking-[0.18em] uppercase transition-opacity duration-300 hover:opacity-60 focus:outline-none focus:ring-1 focus:ring-current py-1 inline-block ${linkClassName}`}
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
}
