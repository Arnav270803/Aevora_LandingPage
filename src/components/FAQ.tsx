import { useState } from 'react';

const faqs = [
  {
    q: 'What exactly is Aevora?',
    a: 'Aevora is an AI-powered video ad platform for Indian D2C brands. Upload a product image, pick a template, and get a ready-to-publish video ad in under 2 minutes — script, voiceover, subtitles included.',
  },
  {
    q: 'How is this different from hiring an agency?',
    a: 'Agencies charge ₹30,000–₹1,00,000 per video and take weeks. Aevora does the same in under 2 minutes at a fraction of the cost, making weekly creative testing finally possible.',
  },
  {
    q: 'Do I need design or editing skills?',
    a: 'Zero. Upload an image, type a sentence, and the AI handles everything — scripting, scenes, video, music, subtitles, and export.',
  },
  {
    q: 'Which AI models power the generation?',
    a: 'Aevora runs on a smart multi-model routing system powered by the latest industry-leading video generation models. Rather than locking you into one model, Aevora automatically selects the best one for your use case, quality target, and budget tier — all handled behind the scenes.',
  },
  {
    q: 'Does Aevora support Hindi & Indian languages?',
    a: 'Yes — Hindi voiceovers, vernacular scripts, and pre-built templates for Diwali, Holi, Eid, and other Indian festivals are core to the platform.',
  },
  {
    q: 'How does pricing work?',
    a: 'Credit-based SaaS. Start free (watermarked), then upgrade to SMB, Agency, or Enterprise based on volume. No hidden fees.',
  },
  {
    q: 'When does Aevora launch?',
    a: "We're onboarding early users in batches. Join the waitlist now for early access, founding pricing, and bonus credits.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="faq"
      style={{
        padding: '48px 24px 60px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      {/* Header */}
      <div style={{ width: '100%', maxWidth: 640, marginBottom: 28 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
          <div
            style={{
              width: 24,
              height: 2,
              background: 'linear-gradient(90deg, #e8622a, #f5b942)',
              borderRadius: 2,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'monospace',
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: '0.16em',
              color: '#e8622a',
              textTransform: 'uppercase',
            }}
          >
            Questions?
          </span>
        </div>

        <h2
          style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(24px, 3.5vw, 40px)',
            fontWeight: 800,
            lineHeight: 1.08,
            letterSpacing: '-0.02em',
            color: '#111111',
            margin: 0,
            textShadow: '0 2px 8px rgba(0,0,0,0.08)',
          }}
        >
          Frequently{' '}
          <span style={{ color: '#e8622a', textShadow: '0 2px 12px rgba(232,98,42,0.22)' }}>
            asked.
          </span>
        </h2>
      </div>

      {/* Card wrapping all accordion rows */}
      <div
        style={{
          width: '100%',
          maxWidth: 640,
          borderRadius: 20,
          background: 'rgba(255,252,249,0.90)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgba(232,98,42,0.16)',
          boxShadow: `
            0 1px 0 rgba(255,255,255,0.95) inset,
            0 0 0 1px rgba(255,255,255,0.65) inset,
            0 4px 6px -1px rgba(0,0,0,0.06),
            0 16px 48px -6px rgba(0,0,0,0.11),
            0 2px 12px -2px rgba(232,98,42,0.08)
          `,
          overflow: 'hidden',
        }}
      >
        {faqs.map((faq, i) => {
          const isOpen = openIndex === i;
          const isLast = i === faqs.length - 1;

          return (
            <div
              key={i}
              style={{
                borderBottom: isLast ? 'none' : '1px solid rgba(0,0,0,0.06)',
                background: isOpen ? 'rgba(232,98,42,0.04)' : 'transparent',
                transition: 'background 0.25s',
              }}
            >
              {/* Question row */}
              <button
                onClick={() => toggle(i)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '16px 20px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 13,
                    fontWeight: 700,
                    color: isOpen ? '#e8622a' : '#1f2937',
                    lineHeight: 1.35,
                    transition: 'color 0.2s',
                  }}
                >
                  {faq.q}
                </span>

                <span
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 22,
                    height: 22,
                    borderRadius: 6,
                    flexShrink: 0,
                    background: isOpen
                      ? 'linear-gradient(135deg, #f07040, #e8622a)'
                      : 'rgba(0,0,0,0.05)',
                    border: isOpen ? '1px solid transparent' : '1px solid rgba(0,0,0,0.08)',
                    transition: 'background 0.2s, transform 0.25s',
                    transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)',
                    boxShadow: isOpen ? '0 2px 8px rgba(232,98,42,0.28)' : 'none',
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M6 1v10M1 6h10"
                      stroke={isOpen ? 'white' : '#6b7280'}
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </button>

              {/* Answer */}
              <div
                style={{
                  maxHeight: isOpen ? 200 : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.25s ease',
                }}
              >
                <p
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 12,
                    fontWeight: 500,
                    color: '#4b5563',
                    lineHeight: 1.8,
                    margin: 0,
                    padding: '0 48px 16px 20px',
                  }}
                >
                  {faq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;