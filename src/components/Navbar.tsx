












import { useState, useEffect, useRef } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // Close menu on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div style={{ padding: isMobile ? '16px 20px' : '20px 80px', position: 'relative', zIndex: 50 }}>
      <nav
        style={{
          backgroundColor: 'rgba(255, 252, 249, 0.82)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(232, 98, 42, 0.15)',
          borderRadius: '18px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 20px 10px 16px',
          width: '100%',
          boxSizing: 'border-box',
          boxShadow: `
            0 1px 0 0 rgba(255,255,255,0.9) inset,
            0 8px 32px -4px rgba(0, 0, 0, 0.12),
            0 2px 8px -2px rgba(232, 98, 42, 0.10),
            0 0 0 1px rgba(255,255,255,0.6) inset
          `,
          position: 'relative',
        }}
      >
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
          <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 5 C4 3, 3 6, 4.5 9 C5.5 11, 8 12, 10 12.5" stroke="#e8622a" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <path d="M28 5 C30 3, 31 6, 29.5 9 C28.5 11, 26 12, 24 12.5" stroke="#e8622a" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
            <ellipse cx="17" cy="21" rx="9" ry="8" fill="#e8622a"/>
            <ellipse cx="17" cy="25.5" rx="5.5" ry="3.5" fill="#c4501f"/>
            <circle cx="15" cy="25.8" r="1.2" fill="#0d0d0d" opacity="0.6"/>
            <circle cx="19" cy="25.8" r="1.2" fill="#0d0d0d" opacity="0.6"/>
            <circle cx="13" cy="19" r="1.6" fill="#0d0d0d"/>
            <circle cx="21" cy="19" r="1.6" fill="#0d0d0d"/>
            <circle cx="13.6" cy="18.4" r="0.5" fill="white"/>
            <circle cx="21.6" cy="18.4" r="0.5" fill="white"/>
          </svg>
          <span style={{ fontSize: '20px', fontWeight: '700', color: '#1a1a1a', letterSpacing: '-0.3px', fontFamily: 'monospace' }}>
            Ae<span style={{ color: '#e8622a' }}>vora</span>
          </span>
        </div>

        {/* Center links — desktop only */}
        {!isMobile && (
          <div style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}>
            {['How it works', 'Compare', 'FAQ'].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  color: '#5a5a5a',
                  fontSize: '13.5px',
                  fontWeight: '500',
                  textDecoration: 'none',
                  fontFamily: 'monospace',
                  transition: 'color 0.2s, background 0.2s',
                  padding: '6px 14px',
                  borderRadius: '8px',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = '#1a1a1a';
                  e.currentTarget.style.background = 'rgba(0,0,0,0.05)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = '#5a5a5a';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link}
              </a>
            ))}
          </div>
        )}

        {/* Right side */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>

          {/* CTA button — always visible */}
          <button
            style={{
              background: 'linear-gradient(135deg, #f07040 0%, #e8622a 60%, #d4521e 100%)',
              color: '#ffffff',
              border: '1px solid rgba(255,255,255,0.25)',
              padding: isMobile ? '9px 12px' : '9px 20px',
              borderRadius: '10px',
              fontSize: isMobile ? '12px' : '13.5px',
              fontWeight: '700',
              cursor: 'pointer',
              fontFamily: 'monospace',
              letterSpacing: '0.2px',
              transition: 'transform 0.15s, box-shadow 0.15s',
              boxShadow: '0 2px 8px rgba(232, 98, 42, 0.40), 0 1px 2px rgba(0,0,0,0.15)',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-1px)';
              e.currentTarget.style.boxShadow = '0 6px 16px rgba(232, 98, 42, 0.45), 0 2px 4px rgba(0,0,0,0.15)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(232, 98, 42, 0.40), 0 1px 2px rgba(0,0,0,0.15)';
            }}
          >
            {isMobile ? 'Join →' : 'Join Waitlist →'}
          </button>

          {/* Square sandwich icon — mobile only */}
          {isMobile && (
            <div ref={menuRef} style={{ position: 'relative' }}>
              <button
                onClick={() => setMenuOpen(o => !o)}
                style={{
                  width: 38,
                  height: 38,
                  borderRadius: 10,
                  border: '1px solid rgba(0,0,0,0.1)',
                  background: menuOpen ? 'rgba(232,98,42,0.08)' : 'rgba(0,0,0,0.04)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 5,
                  padding: 0,
                  transition: 'background 0.2s, border-color 0.2s',
                  borderColor: menuOpen ? 'rgba(232,98,42,0.3)' : 'rgba(0,0,0,0.1)',
                  flexShrink: 0,
                }}
                aria-label="Menu"
              >
                {/* Three lines that animate to X */}
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    style={{
                      display: 'block',
                      width: 16,
                      height: 1.8,
                      borderRadius: 2,
                      background: menuOpen ? '#e8622a' : '#374151',
                      transition: 'transform 0.22s ease, opacity 0.22s ease, background 0.2s',
                      transformOrigin: 'center',
                      transform: menuOpen
                        ? i === 0 ? 'translateY(6.8px) rotate(45deg)'
                        : i === 2 ? 'translateY(-6.8px) rotate(-45deg)'
                        : 'scaleX(0)'
                        : 'none',
                      opacity: menuOpen && i === 1 ? 0 : 1,
                    }}
                  />
                ))}
              </button>

              {/* Dropdown menu */}
              <div
                style={{
                  position: 'absolute',
                  top: 'calc(100% + 10px)',
                  right: 0,
                  width: 200,
                  background: 'rgba(255,252,249,0.96)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(232,98,42,0.15)',
                  borderRadius: 14,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(232,98,42,0.08)',
                  overflow: 'hidden',
                  // animate in/out
                  opacity: menuOpen ? 1 : 0,
                  transform: menuOpen ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.97)',
                  transformOrigin: 'top right',
                  transition: 'opacity 0.2s ease, transform 0.2s ease',
                  pointerEvents: menuOpen ? 'auto' : 'none',
                  zIndex: 100,
                }}
              >
                {['How it works', 'Compare', 'FAQ'].map((link, i) => (
                  <a
                    key={link}
                    href="#"
                    onClick={() => setMenuOpen(false)}
                    style={{
                      display: 'block',
                      padding: '13px 18px',
                      fontFamily: 'monospace',
                      fontSize: 13.5,
                      fontWeight: 600,
                      color: '#374151',
                      textDecoration: 'none',
                      borderBottom: i < 2 ? '1px solid rgba(0,0,0,0.06)' : 'none',
                      transition: 'background 0.15s, color 0.15s',
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = 'rgba(232,98,42,0.06)';
                      e.currentTarget.style.color = '#e8622a';
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = '#374151';
                    }}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;