'use client';
import { motion } from 'framer-motion';

const row1 = [
  { emoji: '🎬', label: 'Generate video ads instantly' },
  { emoji: '🛍️', label: 'Product showcase creatives' },
  { emoji: '🪔', label: 'Diwali & festival campaigns' },
  { emoji: '📱', label: 'Instagram Reels ready' },
  { emoji: '🎯', label: 'Hook-optimised scripts' },
  { emoji: '🇮🇳', label: 'Hindi voiceovers' },
  { emoji: '⚡', label: 'Ads in under 2 minutes' },
  { emoji: '🎨', label: 'Pick from 50+ templates' },
  { emoji: '📦', label: 'D2C product storytelling' },
  { emoji: '🤖', label: 'AI-written ad copy' },
];

const row2 = [
  { emoji: '🎞️', label: 'YouTube & Facebook exports' },
  { emoji: '💸', label: '10–50x cheaper than agencies' },
  { emoji: '🏪', label: 'Amazon & Flipkart sellers' },
  { emoji: '🔁', label: 'A/B creative variants' },
  { emoji: '🎙️', label: 'Auto voiceover & subtitles' },
  { emoji: '📊', label: 'Platform-specific framing' },
  { emoji: '🏷️', label: 'Offer countdown creatives' },
  { emoji: '🧠', label: 'Multi-model AI routing' },
  { emoji: '🚀', label: 'Launch everywhere instantly' },
];

// Duplicate for seamless loop
const track1 = [...row1, ...row1];
const track2 = [...row2, ...row2];

const Card = ({ emoji, label }: { emoji: string; label: string }) => (
  <div
    style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '10px 18px',
      borderRadius: 12,
      background: 'rgba(255,252,249,0.85)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      border: '1px solid rgba(232,98,42,0.15)',
      boxShadow: `
        0 1px 0 rgba(255,255,255,0.9) inset,
        0 2px 8px rgba(0,0,0,0.06),
        0 4px 16px rgba(232,98,42,0.06)
      `,
      whiteSpace: 'nowrap',
      flexShrink: 0,
      cursor: 'default',
      transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
    }}
    onMouseEnter={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderColor = 'rgba(232,98,42,0.40)';
      el.style.boxShadow = '0 1px 0 rgba(255,255,255,0.9) inset, 0 4px 20px rgba(232,98,42,0.15)';
      el.style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={(e) => {
      const el = e.currentTarget as HTMLDivElement;
      el.style.borderColor = 'rgba(232,98,42,0.15)';
      el.style.boxShadow = '0 1px 0 rgba(255,255,255,0.9) inset, 0 2px 8px rgba(0,0,0,0.06), 0 4px 16px rgba(232,98,42,0.06)';
      el.style.transform = 'translateY(0)';
    }}
  >
    <span style={{ fontSize: 15 }}>{emoji}</span>
    <span
      style={{
        fontFamily: 'monospace',
        fontSize: 12.5,
        fontWeight: 600,
        color: '#374151',
        letterSpacing: '0.01em',
      }}
    >
      {label}
    </span>
  </div>
);

const SlidingWindow = () => {
  return (
    <section
      style={{
        padding: '64px 0 72px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: 'center',
          marginBottom: 52,
          padding: '0 24px',
        }}
      >
        <div
          style={{
            display: 'inline-flex',
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
            What your agent can do
          </span>
          <div
            style={{
              width: 28,
              height: 2,
              background: 'linear-gradient(90deg, #f5b942, #e8622a)',
              borderRadius: 2,
            }}
          />
        </div>

        <h2
          style={{
            fontFamily: 'monospace',
            fontSize: 'clamp(30px, 5vw, 56px)',
            fontWeight: 800,
            lineHeight: 1.08,
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
          One agent,{' '}
          <span
            style={{
              color: '#e8622a',
              textShadow: '0 2px 12px rgba(232,98,42,0.25), 0 8px 32px rgba(232,98,42,0.15)',
            }}
          >
            endless
          </span>
          <br />
          possibilities.
        </h2>
      </div>

      {/* Scrolling tracks */}
      <div
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: 12,
          // Fade edges
          maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)',
        }}
      >
        {/* Row 1 — scrolls RIGHT */}
        <motion.div
          style={{
            display: 'flex',
            gap: 10,
            width: 'max-content',
          }}
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 32,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {track1.map((item, i) => (
            <Card key={`r1-${i}`} emoji={item.emoji} label={item.label} />
          ))}
        </motion.div>

        {/* Row 2 — scrolls LEFT */}
        <motion.div
          style={{
            display: 'flex',
            gap: 10,
            width: 'max-content',
          }}
          animate={{ x: ['-50%', '0%'] }}
          transition={{
            duration: 28,
            ease: 'linear',
            repeat: Infinity,
          }}
        >
          {track2.map((item, i) => (
            <Card key={`r2-${i}`} emoji={item.emoji} label={item.label} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SlidingWindow;