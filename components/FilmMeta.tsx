import { Credit } from '@/lib/types';

interface FilmMetaProps {
  year:      string;
  category:  string;
  format:    string;
  duration:  string;
  director:  string;
  credits:   Credit[];
}

export default function FilmMeta({ year, category, format, duration, director, credits }: FilmMetaProps) {
  const specs = [
    { label: 'Year',     value: year     },
    { label: 'Category', value: category },
    { label: 'Format',   value: format   },
    { label: 'Duration', value: duration },
  ];

  return (
    <div className="flex flex-col gap-12">
      {/* Specs row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-y border-black/10 py-6">
        {specs.map(({ label, value }) => (
          <div key={label}>
            <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] block mb-1">{label}</span>
            <span className="font-sans text-sm font-medium text-[#0A0A0A]">{value}</span>
          </div>
        ))}
      </div>

      {/* Credits */}
      <div>
        <h3 className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] mb-5">Film Credits</h3>
        <div className="divide-y divide-black/6 border-t border-b border-black/6">
          {credits.map((c, i) => (
            <div key={i} className="py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-1">
              <span className="font-sans text-xs text-[#8A8A8A]">{c.role}</span>
              <span className="font-sans text-xs font-semibold text-[#0A0A0A]">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
