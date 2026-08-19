import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="w-full min-h-screen bg-[#F5F4F0] flex flex-col items-center justify-center px-6 text-center">
      <span className="font-sans text-[9px] tracking-[0.22em] uppercase text-[#8A8A8A] mb-4">404 · Frame Not Found</span>
      <h1 className="font-sans font-black text-6xl sm:text-8xl text-[#0A0A0A] leading-none tracking-tighter mb-6">
        Lost<br />Sequence.
      </h1>
      <p className="font-sans text-sm text-[#8A8A8A] max-w-sm leading-relaxed mb-10">
        The film frame or document you are seeking does not exist in the She Says Cut archives.
      </p>
      <Link
        href="/cinema"
        className="font-sans text-[10px] tracking-[0.2em] uppercase bg-[#0A0A0A] text-white px-8 py-4 font-bold hover:bg-[#333] transition-colors"
      >
        Return to Cinema Archive →
      </Link>
    </div>
  );
}
