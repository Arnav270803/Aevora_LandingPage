const Footer = () => {
  return (
    <footer
      style={{
        borderTop: '1px solid rgba(232, 98, 42, 0.15)',
        background: 'rgba(255, 252, 249, 0.60)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        padding: '20px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
      }}
    >
      {/* Left — brand + copyright */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        {/* Mini logo mark */}
        <svg width="20" height="20" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
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

        <span
          style={{
            fontFamily: 'monospace',
            fontSize: 13,
            fontWeight: 600,
            color: '#6b7280',
            letterSpacing: '0.01em',
          }}
        >
          Ae<span style={{ color: '#e8622a' }}>vora</span>
          <span
            style={{
              marginLeft: 10,
              color: '#d1d5db',
              fontWeight: 400,
            }}
          >
            ·
          </span>
          <span
            style={{
              marginLeft: 10,
              color: '#9ca3af',
              fontWeight: 500,
              fontSize: 12,
            }}
          >
            © 2026
          </span>
        </span>
      </div>

      {/* Center — tagline */}
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: 11,
          fontWeight: 600,
          color: '#d1d5db',
          letterSpacing: '0.10em',
          textTransform: 'uppercase',
        }}
      >
        ship video ads in under 2 minutes
      </span>

      {/* Right — built by */}
      <a
        href="https://www.hayarnav.xyz/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          textDecoration: 'none',
          fontFamily: 'monospace',
          fontSize: 12,
          fontWeight: 600,
          color: '#9ca3af',
          padding: '5px 12px',
          borderRadius: 8,
          border: '1px solid rgba(0,0,0,0.07)',
          background: 'rgba(255,255,255,0.55)',
          transition: 'color 0.2s, border-color 0.2s, background 0.2s',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.color = '#e8622a';
          el.style.borderColor = 'rgba(232,98,42,0.3)';
          el.style.background = 'rgba(232,98,42,0.05)';
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement;
          el.style.color = '#9ca3af';
          el.style.borderColor = 'rgba(0,0,0,0.07)';
          el.style.background = 'rgba(255,255,255,0.55)';
        }}
      >
        {/* Person icon */}
        <svg
          width="13"
          height="13"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
        built by founder
        {/* External link arrow */}
        <svg
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ opacity: 0.5 }}
        >
          <path d="M7 17L17 7M17 7H7M17 7v10"/>
        </svg>
      </a>
    </footer>
  );
};

export default Footer;