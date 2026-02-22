
// import { useEffect, useState } from 'react';

// const Hero = () => {
//   const [visible, setVisible] = useState(false);
//   const [signed, setSigned] = useState(false);
//   const [email, setEmail] = useState('');

//   useEffect(() => {
//     const t = setTimeout(() => setVisible(true), 100);
//     const s = setTimeout(() => setSigned(true), 900);
//     return () => { clearTimeout(t); clearTimeout(s); };
//   }, []);

//   const fade = (delay: number): React.CSSProperties => ({
//     opacity: visible ? 1 : 0,
//     transform: visible ? 'translateY(0px)' : 'translateY(16px)',
//     transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
//   });

//   return (
//     <section
//       style={{
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//         textAlign: 'center',
//         padding: '0 24px 0',
//         minHeight: 'calc(100vh - 88px)',
//         overflow: 'hidden',
//       }}
//     >
//       <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 780 }}>

//         {/* Badge */}
//         <div style={{ ...fade(0), marginBottom: 32 }}>
//           <span
//             style={{
//               display: 'inline-flex',
//               alignItems: 'center',
//               gap: 8,
//               padding: '5px 16px',
//               borderRadius: 999,
//               border: '1px solid rgba(0,0,0,0.1)',
//               background: 'rgba(0,0,0,0.04)',
//             }}
//           >
//             <span
//               style={{
//                 display: 'inline-block',
//                 width: 7,
//                 height: 7,
//                 borderRadius: '50%',
//                 background: '#22c55e',
//                 boxShadow: '0 0 7px 2px rgba(34,197,94,0.5)',
//                 flexShrink: 0,
//               }}
//             />
//             <span
//               style={{
//                 fontFamily: 'monospace',
//                 fontSize: 13,
//                 fontWeight: 600,
//                 color: '#4b5563',
//                 letterSpacing: '0.03em',
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               Launching soon — deploy your Aevora agent
//             </span>
//           </span>
//         </div>

//         {/* Headline */}
//         <h1
//           style={{
//             ...fade(0.12),
//             fontFamily: 'monospace',
//             fontWeight: 800,
//             fontSize: 'clamp(34px, 5.5vw, 72px)',
//             lineHeight: 1.02,
//             letterSpacing: '-0.02em',
//             color: '#111111',
//             margin: '0 0 4px',
//             textShadow: `
//               0 -1px 0 rgba(255,255,255,0.95),
//               0 1px 2px rgba(0,0,0,0.18),
//               0 4px 10px rgba(0,0,0,0.14),
//               0 10px 32px rgba(0,0,0,0.10)
//             `,
//           }}
//         >
//           Your{' '}
//           <span style={{ position: 'relative', display: 'inline-block' }}>
//             Aevora
//             <svg
//               aria-hidden="true"
//               viewBox="0 0 260 18"
//               xmlns="http://www.w3.org/2000/svg"
//               style={{
//                 position: 'absolute',
//                 left: '50%',
//                 transform: 'translateX(-50%)',
//                 bottom: '-10px',
//                 width: '106%',
//                 height: 'auto',
//                 overflow: 'visible',
//                 pointerEvents: 'none',
//               }}
//             >
//               <path
//                 d="M4,11 C40,4 80,16 130,9 C180,2 220,14 256,7"
//                 fill="none"
//                 stroke="#e8622a"
//                 strokeWidth="2.4"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 style={{
//                   strokeDasharray: 265,
//                   strokeDashoffset: signed ? 0 : 265,
//                   transition: signed
//                     ? 'stroke-dashoffset 0.72s cubic-bezier(0.4, 0, 0.2, 1)'
//                     : 'none',
//                   opacity: 0.8,
//                   filter: 'drop-shadow(0 1px 5px rgba(232,98,42,0.4))',
//                 }}
//               />
//             </svg>
//           </span>
//           {' '}agent,
//           <br />
//           live in{' '}
//           <span
//             style={{
//               color: '#e8622a',
//               textShadow: `
//                 0 -1px 0 rgba(255,200,160,0.5),
//                 0 1px 2px rgba(0,0,0,0.2),
//                 0 4px 12px rgba(232,98,42,0.28),
//                 0 10px 32px rgba(232,98,42,0.16)
//               `,
//             }}
//           >
//             under 2
//           </span>
//           <br />
//           <span
//             style={{
//               color: '#e8622a',
//               textShadow: `
//                 0 -1px 0 rgba(255,200,160,0.5),
//                 0 1px 2px rgba(0,0,0,0.2),
//                 0 4px 12px rgba(232,98,42,0.28),
//                 0 10px 32px rgba(232,98,42,0.16)
//               `,
//             }}
//           >
//             minutes.
//           </span>
//         </h1>

//         {/* Subtitle — frosted glass backdrop */}
//         <p
//           style={{
//             ...fade(0.24),
//             fontFamily: 'monospace',
//             fontWeight: 600,
//             fontSize: 'clamp(13px, 1.3vw, 15px)',
//             lineHeight: 1.85,
//             color: '#374151',
//             maxWidth: 480,
//             margin: '0 auto 44px',
//             background: 'rgba(255,255,255,0.70)',
//             backdropFilter: 'blur(8px)',
//             WebkitBackdropFilter: 'blur(8px)',
//             borderRadius: 10,
//             padding: '14px 24px',
//           }}
//         >
//           Deploy your own Aevora agent that writes content, does research, clears
//           your inbox, and sends you a morning briefing. Pick a model, connect a
//           channel, go live.
//         </p>

//         {/* Email + CTA */}
//         <div
//           style={{
//             ...fade(0.36),
//             display: 'flex',
//             alignItems: 'stretch',
//             justifyContent: 'center',
//             gap: 10,
//             marginBottom: 16,
//             flexWrap: 'wrap',
//           }}
//         >
//           <input
//             type="email"
//             placeholder="you@email.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             style={{
//               fontFamily: 'monospace',
//               fontSize: 13.5,
//               color: '#374151',
//               background: 'rgba(255,255,255,0.55)',
//               border: '1px solid rgba(0,0,0,0.12)',
//               borderRadius: 10,
//               padding: '12px 18px',
//               width: 250,
//               outline: 'none',
//               caretColor: '#e8622a',
//               backdropFilter: 'blur(6px)',
//               boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
//             }}
//             onFocus={(e) => {
//               e.currentTarget.style.borderColor = 'rgba(232,98,42,0.5)';
//               e.currentTarget.style.background = 'rgba(255,255,255,0.75)';
//             }}
//             onBlur={(e) => {
//               e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
//               e.currentTarget.style.background = 'rgba(255,255,255,0.55)';
//             }}
//           />
//           <button
//             style={{
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               fontSize: 13.5,
//               letterSpacing: '0.01em',
//               color: '#ffffff',
//               background: 'linear-gradient(135deg, #f07040 0%, #e8622a 55%, #d4521e 100%)',
//               border: 'none',
//               borderRadius: 10,
//               padding: '12px 24px',
//               cursor: 'pointer',
//               whiteSpace: 'nowrap',
//               boxShadow: '0 2px 16px rgba(232,98,42,0.35), 0 1px 3px rgba(0,0,0,0.12)',
//               transition: 'transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease',
//             }}
//             onMouseEnter={(e) => {
//               const b = e.currentTarget as HTMLButtonElement;
//               b.style.transform = 'translateY(-1px)';
//               b.style.boxShadow = '0 6px 24px rgba(232,98,42,0.5), 0 2px 6px rgba(0,0,0,0.12)';
//               b.style.filter = 'brightness(1.08)';
//             }}
//             onMouseLeave={(e) => {
//               const b = e.currentTarget as HTMLButtonElement;
//               b.style.transform = 'translateY(0)';
//               b.style.boxShadow = '0 2px 16px rgba(232,98,42,0.35), 0 1px 3px rgba(0,0,0,0.12)';
//               b.style.filter = 'brightness(1)';
//             }}
//           >
//             Join the Waitlist →
//           </button>
//         </div>

//         {/* Trust line — same frosted treatment, tighter pill */}
//         <p
//           style={{
//             ...fade(0.46),
//             fontFamily: 'monospace',
//             fontWeight: 600,
//             fontSize: 12,
//             color: '#4b5563',
//             letterSpacing: '0.06em',
//             display: 'inline-block',
//             background: 'rgba(255,255,255,0.70)',
//             backdropFilter: 'blur(8px)',
//             WebkitBackdropFilter: 'blur(8px)',
//             borderRadius: 8,
//             padding: '6px 16px',
//           }}
//         >
//           Free credits to start · No code needed · No subscription
//         </p>

//       </div>
//     </section>
//   );
// };

// export default Hero;

























import { useEffect, useState } from 'react';

const Hero = () => {
  const [visible, setVisible] = useState(false);
  const [signed, setSigned] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 100);
    const s = setTimeout(() => setSigned(true), 900);
    return () => { clearTimeout(t); clearTimeout(s); };
  }, []);

  const fade = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0px)' : 'translateY(16px)',
    transition: `opacity 0.65s ease ${delay}s, transform 0.65s ease ${delay}s`,
  });

  return (
    <section
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '40px 24px 60px',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'relative', zIndex: 10, width: '100%', maxWidth: 780 }}>

        {/* Badge */}
        <div style={{ ...fade(0), marginBottom: 16 }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '5px 16px',
              borderRadius: 999,
              border: '1px solid rgba(0,0,0,0.1)',
              background: 'rgba(0,0,0,0.04)',
            }}
          >
            <span
              style={{
                display: 'inline-block',
                width: 7,
                height: 7,
                borderRadius: '50%',
                background: '#22c55e',
                boxShadow: '0 0 7px 2px rgba(34,197,94,0.5)',
                flexShrink: 0,
              }}
            />
            <span
              style={{
                fontFamily: 'monospace',
                fontSize: 13,
                fontWeight: 600,
                color: '#4b5563',
                letterSpacing: '0.03em',
                whiteSpace: 'nowrap',
              }}
            >
              Launching soon — deploy your Aevora agent
            </span>
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            ...fade(0.12),
            fontFamily: 'monospace',
            fontWeight: 800,
            fontSize: 'clamp(34px, 5.5vw, 72px)',
            lineHeight: 1.02,
            letterSpacing: '-0.02em',
            color: '#111111',
            margin: '0 0 4px',
            textShadow: `
              0 -1px 0 rgba(255,255,255,0.95),
              0 1px 2px rgba(0,0,0,0.18),
              0 4px 10px rgba(0,0,0,0.14),
              0 10px 32px rgba(0,0,0,0.10)
            `,
          }}
        >
          Your{' '}
          <span style={{ position: 'relative', display: 'inline-block' }}>
            Aevora
            <svg
              aria-hidden="true"
              viewBox="0 0 260 18"
              xmlns="http://www.w3.org/2000/svg"
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                bottom: '-10px',
                width: '106%',
                height: 'auto',
                overflow: 'visible',
                pointerEvents: 'none',
              }}
            >
              <path
                d="M4,11 C40,4 80,16 130,9 C180,2 220,14 256,7"
                fill="none"
                stroke="#e8622a"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{
                  strokeDasharray: 265,
                  strokeDashoffset: signed ? 0 : 265,
                  transition: signed
                    ? 'stroke-dashoffset 0.72s cubic-bezier(0.4, 0, 0.2, 1)'
                    : 'none',
                  opacity: 0.8,
                  filter: 'drop-shadow(0 1px 5px rgba(232,98,42,0.4))',
                }}
              />
            </svg>
          </span>
          {' '}agent,
          <br />
          live in{' '}
          <span
            style={{
              color: '#e8622a',
              textShadow: `
                0 -1px 0 rgba(255,200,160,0.5),
                0 1px 2px rgba(0,0,0,0.2),
                0 4px 12px rgba(232,98,42,0.28),
                0 10px 32px rgba(232,98,42,0.16)
              `,
            }}
          >
            under 2
          </span>
          <br />
          <span
            style={{
              color: '#e8622a',
              textShadow: `
                0 -1px 0 rgba(255,200,160,0.5),
                0 1px 2px rgba(0,0,0,0.2),
                0 4px 12px rgba(232,98,42,0.28),
                0 10px 32px rgba(232,98,42,0.16)
              `,
            }}
          >
            minutes.
          </span>
        </h1>

        {/* Subtitle — frosted glass backdrop */}
        <p
          style={{
            ...fade(0.24),
            fontFamily: 'monospace',
            fontWeight: 600,
            fontSize: 'clamp(13px, 1.3vw, 15px)',
            lineHeight: 1.85,
            color: '#374151',
            maxWidth: 480,
            margin: '0 auto 44px',
            background: 'rgba(255,255,255,0.70)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: 10,
            padding: '14px 24px',
          }}
        >
          Deploy your own Aevora agent that writes content, does research, clears
          your inbox, and sends you a morning briefing. Pick a model, connect a
          channel, go live.
        </p>

        {/* Email + CTA */}
        <div
          style={{
            ...fade(0.36),
            display: 'flex',
            alignItems: 'stretch',
            justifyContent: 'center',
            gap: 10,
            marginBottom: 8,
            flexWrap: 'wrap',
          }}
        >
          <input
            type="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              fontFamily: 'monospace',
              fontSize: 13.5,
              color: '#374151',
              background: 'rgba(255,255,255,0.55)',
              border: '1px solid rgba(0,0,0,0.12)',
              borderRadius: 10,
              padding: '12px 18px',
              width: 250,
              outline: 'none',
              caretColor: '#e8622a',
              backdropFilter: 'blur(6px)',
              boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = 'rgba(232,98,42,0.5)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.75)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = 'rgba(0,0,0,0.12)';
              e.currentTarget.style.background = 'rgba(255,255,255,0.55)';
            }}
          />
          <button
            style={{
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 13.5,
              letterSpacing: '0.01em',
              color: '#ffffff',
              background: 'linear-gradient(135deg, #f07040 0%, #e8622a 55%, #d4521e 100%)',
              border: 'none',
              borderRadius: 10,
              padding: '12px 24px',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 16px rgba(232,98,42,0.35), 0 1px 3px rgba(0,0,0,0.12)',
              transition: 'transform 0.15s ease, box-shadow 0.15s ease, filter 0.15s ease',
            }}
            onMouseEnter={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.transform = 'translateY(-1px)';
              b.style.boxShadow = '0 6px 24px rgba(232,98,42,0.5), 0 2px 6px rgba(0,0,0,0.12)';
              b.style.filter = 'brightness(1.08)';
            }}
            onMouseLeave={(e) => {
              const b = e.currentTarget as HTMLButtonElement;
              b.style.transform = 'translateY(0)';
              b.style.boxShadow = '0 2px 16px rgba(232,98,42,0.35), 0 1px 3px rgba(0,0,0,0.12)';
              b.style.filter = 'brightness(1)';
            }}
          >
            Join the Waitlist →
          </button>
        </div>

        {/* Trust line — same frosted treatment, tighter pill */}
        <p
          style={{
            ...fade(0.46),
            fontFamily: 'monospace',
            fontWeight: 600,
            fontSize: 12,
            color: '#4b5563',
            letterSpacing: '0.06em',
            display: 'inline-block',
            background: 'rgba(255,255,255,0.70)',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            borderRadius: 8,
            padding: '6px 16px',
          }}
        >
          Free credits to start · No code needed · No subscription
        </p>

      </div>
    </section>
  );
};

export default Hero;