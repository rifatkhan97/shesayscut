interface SectionHeadingProps {
  eyebrow?:    string;
  title:       string;
  description?: string;
  className?:  string;
  dark?:       boolean; // for sections placed on dark backgrounds
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className = '',
  dark = false,
}: SectionHeadingProps) {
  const textPrimary = dark ? 'text-white'     : 'text-[#0A0A0A]';
  const textMuted   = dark ? 'text-white/50'  : 'text-[#8A8A8A]';
  const border      = dark ? 'border-white/20': 'border-black/10';

  return (
    <div className={`flex flex-col gap-3 mb-14 sm:mb-18 ${className}`}>
      {eyebrow && (
        <span className={`font-sans text-[9px] tracking-[0.22em] uppercase ${textMuted}`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`font-sans font-black text-3xl sm:text-4xl lg:text-5xl ${textPrimary} leading-tight tracking-tight`}>
        {title}
      </h2>
      {description && (
        <p className={`font-sans text-sm ${textMuted} max-w-xl leading-relaxed pt-1`}>
          {description}
        </p>
      )}
      <div className={`w-8 h-px ${border} mt-1`} />
    </div>
  );
}
