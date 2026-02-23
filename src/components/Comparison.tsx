const leftRows = [
  { label: 'Learn video editing tools', time: '1–5 days' },
  { label: 'Source & shoot product footage', time: '2–3 days' },
  { label: 'Write ad scripts manually', time: '3–6 hrs' },
  { label: 'Edit & sync audio/visuals', time: '4–8 hrs' },
  { label: 'Export for each platform', time: '1–2 hrs' },
  { label: 'A/B test creatives', time: 'weeks' },
  { label: 'Redo when it underperforms', time: '???' },
];

const rightRows = [
  'Upload your product image',
  'Pick a video template',
  'Generate with Kling 2.0 + Sora 2',
  'Launch everywhere instantly',
];

const Comparison = () => {
  return (
    <section
      style={{
        padding: '60px 24px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Section header */}
      <div style={{ width: '100%', maxWidth: 960, marginBottom: 48 }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 10,
            marginBottom: 16,
          }}
        >
          <div
            style={{
              width: 28,
              height: 2,
              background: 'linear-gradient(90deg, #e8622a, #f5b942)',
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.16em',
              color: '#e8622a',
              textTransform: 'uppercase',
            }}
          >
            Why Aevora?
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(32px, 5vw, 58px)',
            fontWeight: 800,
            lineHeight: 1.05,
            letterSpacing: '-0.02em',
            color: '#111111',
            margin: 0,
            textShadow: `
              0 -1px 0 rgba(255,255,255,0.95),
              0 2px 8px rgba(0,0,0,0.10),
              0 8px 24px rgba(0,0,0,0.07)
            `,
          }}
        >
          Skip the{' '}
          <span
            style={{
              color: '#e8622a',
              textShadow: `
                0 2px 12px rgba(232,98,42,0.25),
                0 8px 32px rgba(232,98,42,0.15)
              `,
            }}
          >
            suffering.
          </span>
        </h2>
      </div>

      {/* Cards row */}
      <div
        style={{
          width: '100%',
          maxWidth: 960,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 16,
          alignItems: 'start',
        }}
      >
        {/* LEFT — doing it yourself */}
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            background: 'rgba(255,252,249,0.75)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(0,0,0,0.08)',
            boxShadow: `
              0 1px 0 0 rgba(255,255,255,0.9) inset,
              0 0 0 1px rgba(255,255,255,0.6) inset,
              0 4px 6px -1px rgba(0,0,0,0.06),
              0 12px 36px -4px rgba(0,0,0,0.09)
            `,
          }}
        >
          {/* Card header */}
          <div
            style={{
              padding: '24px 28px 20px',
              borderBottom: '1px solid rgba(0,0,0,0.06)',
            }}
          >
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#9ca3af',
                textTransform: 'uppercase',
                margin: '0 0 10px',
              }}
            >
              Doing it yourself
            </p>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 'clamp(38px, 6vw, 52px)',
                fontWeight: 800,
                color: '#374151',
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              ~1 week
            </p>
          </div>

          {/* Rows */}
          <div style={{ padding: '8px 0 8px' }}>
            {leftRows.map((row, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '12px 28px',
                  borderBottom:
                    i < leftRows.length - 1
                      ? '1px solid rgba(0,0,0,0.05)'
                      : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 13,
                    fontWeight: 500,
                    color: '#6b7280',
                  }}
                >
                  {row.label}
                </span>
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 11,
                    fontWeight: 700,
                    color: '#9ca3af',
                    background: 'rgba(0,0,0,0.05)',
                    border: '1px solid rgba(0,0,0,0.08)',
                    borderRadius: 6,
                    padding: '3px 10px',
                    whiteSpace: 'nowrap',
                    letterSpacing: '0.04em',
                  }}
                >
                  {row.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — with Aevora */}
        <div
          style={{
            borderRadius: 18,
            overflow: 'hidden',
            background: 'rgba(255,252,249,0.92)',
            backdropFilter: 'blur(14px)',
            WebkitBackdropFilter: 'blur(14px)',
            border: '1px solid rgba(232,98,42,0.22)',
            boxShadow: `
              0 1px 0 0 rgba(255,255,255,0.95) inset,
              0 0 0 1px rgba(255,255,255,0.7) inset,
              0 4px 6px -1px rgba(0,0,0,0.07),
              0 12px 40px -4px rgba(0,0,0,0.11),
              0 2px 16px -2px rgba(232,98,42,0.12)
            `,
          }}
        >
          {/* Orange accent top bar */}
          <div
            style={{
              height: 3,
              background: 'linear-gradient(90deg, #f07040, #e8622a, #d4521e)',
            }}
          />

          {/* Card header */}
          <div
            style={{
              padding: '24px 28px 20px',
              borderBottom: '1px solid rgba(232,98,42,0.10)',
            }}
          >
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: '0.18em',
                color: '#e8622a',
                textTransform: 'uppercase',
                margin: '0 0 10px',
              }}
            >
              With Aevora
            </p>
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 'clamp(38px, 6vw, 52px)',
                fontWeight: 800,
                color: '#e8622a',
                margin: 0,
                letterSpacing: '-0.02em',
                lineHeight: 1,
                textShadow: '0 4px 16px rgba(232,98,42,0.22)',
              }}
            >
              &lt;2 min
            </p>
          </div>

          {/* Checklist */}
          <div style={{ padding: '16px 28px 20px', display: 'flex', flexDirection: 'column', gap: 12 }}>
            {rightRows.map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                }}
              >
                {/* Checkbox */}
                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    background: 'linear-gradient(135deg, #f07040, #e8622a)',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(232,98,42,0.30)',
                  }}
                >
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M2 6.5L4.5 9L10 3"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 13.5,
                    fontWeight: 700,
                    color: '#1f2937',
                  }}
                >
                  {item}
                </span>
              </div>
            ))}

            {/* Subtext */}
            <p
              style={{
                fontFamily: 'monospace',
                fontSize: 12,
                fontWeight: 500,
                color: '#9ca3af',
                lineHeight: 1.75,
                margin: '8px 0 0',
                paddingTop: 12,
                borderTop: '1px solid rgba(232,98,42,0.10)',
              }}
            >
              Drop a product image, pick a template, and your
              video ad is ready to launch — no editing skills,
              no software, no waiting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;