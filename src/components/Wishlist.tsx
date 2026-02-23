import { useState, useEffect } from 'react';

const APPS_SCRIPT_URL = import.meta.env.VITE_APPS_SCRIPT_URL as string;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Waitlist = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [signupCount, setSignupCount] = useState<number>(0);

  // Fetch live signup count on mount
  useEffect(() => {
    fetch(APPS_SCRIPT_URL)
      .then((res) => res.json())
      .then((data) => {
        if (typeof data.count === 'number') {
          setSignupCount(data.count);
        }
      })
      .catch(() => {
        // Silently fall back to 0
      });
  }, []);

  const handleSubmit = async () => {
    setError('');

    if (!email || !EMAIL_REGEX.test(email)) {
      setError('Invalid email format');
      return;
    }

    setLoading(true);

    try {
      const saveRes = await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        body: JSON.stringify({ email }),
      });
      const saveData = await saveRes.json();

      if (typeof saveData.count === 'number') {
        setSignupCount(saveData.count);
      }

      setLoading(false);
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again.');
      setLoading(false);
    }
  };

  return (
    <section
      id="waitlist"
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        overflow: 'hidden',
      }}
    >
      {/* Floating card */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: 580,
          background: 'rgba(255,250,247,0.76)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderRadius: 22,
          border: '1px solid rgba(232,98,42,0.14)',
          boxShadow: `
            0 1px 0 rgba(255,255,255,0.95) inset,
            0 8px 40px rgba(232,98,42,0.10),
            0 24px 80px rgba(232,98,42,0.07),
            0 2px 12px rgba(232,98,42,0.08),
            0 0 0 1px rgba(255,255,255,0.6) inset
          `,
          padding: '44px 40px 40px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          gap: 0,
        }}
      >
        {/* Live spot counter badge */}
        <div style={{ marginBottom: 22 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 14px',
              borderRadius: 999,
              border: '1px solid rgba(0,0,0,0.08)',
              background: 'rgba(0,0,0,0.03)',
            }}
          >
            <span
              style={{
                width: 7, height: 7,
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 7px 2px rgba(34,197,94,0.5)',
                flexShrink: 0,
                display: 'inline-block',
              }}
            />
            <span style={{ fontFamily: 'monospace', fontSize: 12, fontWeight: 600, color: '#4b5563', letterSpacing: '0.03em', whiteSpace: 'nowrap' }}>
              {signupCount === 0
                ? 'Be the first to join'
                : `${signupCount} ${signupCount === 1 ? 'person' : 'people'} joined`}
            </span>
          </span>
        </div>

        {/* Headline */}
        {!submitted && (
          <h2
            style={{
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize: 'clamp(24px, 4vw, 36px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              color: '#111111',
              margin: '0 0 8px',
              textShadow: `
                0 -1px 0 rgba(255,255,255,0.95),
                0 1px 2px rgba(0,0,0,0.15),
                0 4px 10px rgba(0,0,0,0.10)
              `,
            }}
          >
            Deploy your{' '}
            <span style={{
              color: '#e8622a',
              textShadow: `0 -1px 0 rgba(255,200,160,0.5), 0 1px 2px rgba(0,0,0,0.2), 0 4px 12px rgba(232,98,42,0.28)`,
            }}>
              Aevora
            </span>{' '}
            agent
          </h2>
        )}

        {/* Subtext */}
        {!submitted && (
          <p style={{
            fontFamily: 'monospace',
            fontSize: 13,
            fontWeight: 500,
            color: '#6b7280',
            margin: '0 0 28px',
            lineHeight: 1.7,
          }}>
            Free credits included · No credit card required
          </p>
        )}

        {/* Form or success */}
        {!submitted ? (
          <>
            <div
              style={{
                display: 'flex',
                alignItems: 'stretch',
                gap: 10,
                width: '100%',
                flexWrap: 'wrap',
              }}
            >
              <input
                type="email"
                placeholder="you@email.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (error) setError('');
                }}
                onKeyDown={(e) => e.key === 'Enter' && !loading && handleSubmit()}
                disabled={loading}
                style={{
                  fontFamily: 'monospace',
                  fontSize: 13.5,
                  color: '#374151',
                  background: 'rgba(255,255,255,0.60)',
                  border: `1px solid ${error ? 'rgba(239,68,68,0.5)' : 'rgba(0,0,0,0.12)'}`,
                  borderRadius: 10,
                  padding: '13px 18px',
                  flex: 1,
                  minWidth: 180,
                  outline: 'none',
                  caretColor: '#e8622a',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                  transition: 'border-color 0.2s, background 0.2s',
                  opacity: loading ? 0.6 : 1,
                }}
                onFocus={(e) => {
                  if (!error) {
                    e.currentTarget.style.borderColor = 'rgba(232,98,42,0.5)';
                  }
                  e.currentTarget.style.background = 'rgba(255,255,255,0.85)';
                }}
                onBlur={(e) => {
                  if (!error) {
                    e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
                  }
                  e.currentTarget.style.background = 'rgba(255,255,255,0.60)';
                }}
              />
              <button
                onClick={handleSubmit}
                disabled={loading}
                style={{
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  fontSize: 13.5,
                  letterSpacing: '0.01em',
                  color: '#ffffff',
                  background: loading
                    ? 'linear-gradient(135deg, #c0896a 0%, #b87050 55%, #a05a38 100%)'
                    : 'linear-gradient(135deg, #f07040 0%, #e8622a 55%, #d4521e 100%)',
                  border: 'none',
                  borderRadius: 10,
                  padding: '13px 26px',
                  cursor: loading ? 'not-allowed' : 'pointer',
                  whiteSpace: 'nowrap',
                  boxShadow: '0 2px 16px rgba(232,98,42,0.35), 0 1px 3px rgba(0,0,0,0.12)',
                  transition: 'transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease',
                  opacity: loading ? 0.75 : 1,
                }}
                onMouseEnter={(e) => {
                  if (loading) return;
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.transform = 'translateY(-1px)';
                  b.style.boxShadow = '0 6px 24px rgba(232,98,42,0.5), 0 2px 6px rgba(0,0,0,0.12)';
                  b.style.filter = 'brightness(1.08)';
                }}
                onMouseLeave={(e) => {
                  if (loading) return;
                  const b = e.currentTarget as HTMLButtonElement;
                  b.style.transform = 'translateY(0)';
                  b.style.boxShadow = '0 2px 16px rgba(232,98,42,0.35), 0 1px 3px rgba(0,0,0,0.12)';
                  b.style.filter = 'brightness(1)';
                }}
              >
                {loading ? 'Checking…' : 'Join the Waitlist →'}
              </button>
            </div>

            {/* Error message */}
            {error && (
              <p
                style={{
                  fontFamily: 'monospace',
                  fontSize: 12.5,
                  fontWeight: 600,
                  color: '#dc2626',
                  margin: '10px 0 0',
                  alignSelf: 'flex-start',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 5,
                }}
              >
                <span style={{ fontSize: 14 }}>⚠</span> {error}
              </p>
            )}
          </>
        ) : (
          /* Success state */
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14, padding: '8px 0' }}>
            <div
              style={{
                width: 52, height: 52,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #f07040 0%, #e8622a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 20px rgba(232,98,42,0.4)',
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 11l5 5 9-9" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <p style={{ fontFamily: 'monospace', fontWeight: 800, fontSize: 18, color: '#111', margin: 0 }}>
              You're on the list!
            </p>
            <p style={{ fontFamily: 'monospace', fontSize: 13, fontWeight: 500, color: '#6b7280', margin: 0 }}>
              We'll reach out when your spot opens up.
            </p>
          </div>
        )}

      </div>
    </section>
  );
};

export default Waitlist;