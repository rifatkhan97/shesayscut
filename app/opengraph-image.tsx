import { ImageResponse } from 'next/og';

export const runtime = 'nodejs';
export const alt = 'She Says Cut — Independent Film Studio — Brussels, Belgium';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#F5F4F0',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '80px 90px',
          fontFamily: 'sans-serif',
          color: '#0A0A0A',
        }}
      >
        {/* Top header bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 24, fontWeight: 900, letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              SHE SAYS CUT
            </span>
            <span style={{ fontSize: 13, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#8A8A8A', marginTop: 4 }}>
              BRUSSELS · FILM STUDIO
            </span>
          </div>
          <span style={{ fontSize: 13, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#8A8A8A', border: '1px solid #D0CEC7', padding: '6px 16px' }}>
            INDEPENDENT CINEMA
          </span>
        </div>

        {/* Main title block */}
        <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '900px' }}>
          <h1
            style={{
              fontSize: 60,
              fontWeight: 900,
              letterSpacing: '-0.03em',
              lineHeight: 1.05,
              margin: 0,
              color: '#0A0A0A',
            }}
          >
            Introspective narrative cinema & sensory storytelling.
          </h1>
        </div>

        {/* Bottom metadata footer */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderTop: '1px solid #D0CEC7', paddingTop: 28 }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: '#0A0A0A' }}>
              Maria Lückerath
            </span>
            <span style={{ fontSize: 13, color: '#8A8A8A', marginTop: 2 }}>
              Film Director & Studio Founder
            </span>
          </div>
          <span style={{ fontSize: 13, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8A8A8A' }}>
            Brussels, Belgium · shesayscut.com
          </span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
