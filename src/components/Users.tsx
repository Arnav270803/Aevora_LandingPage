// import { useEffect, useState, useRef } from 'react';

// const TOTAL_SIGNED = 1307;
// const MAX_CAPACITY = 1325;
// const SPOTS_LEFT = 18;

// const BATCHES = [
//   { label: 'Batch 1', limit: 50,   pct: (50 / MAX_CAPACITY) * 100,   done: true  },
//   { label: 'Batch 2', limit: 400,  pct: (400 / MAX_CAPACITY) * 100,  done: true  },
//   { label: 'Batch 3', limit: 1325, pct: 100,                          done: false },
// ];

// const fillPct = (TOTAL_SIGNED / MAX_CAPACITY) * 100;

// const Users = () => {
//   const [visible, setVisible] = useState(false);
//   const [counted, setCounted] = useState(0);
//   const [barFilled, setBarFilled] = useState(false);
//   const ref = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
//       { threshold: 0.25 }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, []);

//   useEffect(() => {
//     if (!visible) return;
//     let current = 0;
//     const duration = 1400;
//     const interval = 16;
//     const increment = TOTAL_SIGNED / (duration / interval);
//     const timer = setInterval(() => {
//       current += increment;
//       if (current >= TOTAL_SIGNED) { setCounted(TOTAL_SIGNED); clearInterval(timer); }
//       else setCounted(Math.floor(current));
//     }, interval);
//     setTimeout(() => setBarFilled(true), 150);
//     return () => clearInterval(timer);
//   }, [visible]);

//   const fadeStyle = (delay: number): React.CSSProperties => ({
//     opacity: visible ? 1 : 0,
//     transform: visible ? 'translateY(0)' : 'translateY(20px)',
//     transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
//   });

//   return (
//     <section
//       ref={ref}
//       style={{
//         position: 'relative',
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         padding: '0 24px 100px',
//         overflow: 'hidden',
//       }}
//     >
//       <div
//         style={{
//           position: 'relative',
//           zIndex: 10,
//           width: '100%',
//           maxWidth: 580,
//           display: 'flex',
//           flexDirection: 'column',
//           alignItems: 'center',
//         }}
//       >

//         {/* Big count */}
//         <div style={fadeStyle(0)}>
//           <span
//             style={{
//               fontFamily: 'monospace',
//               fontWeight: 800,
//               fontSize: 'clamp(64px, 11vw, 100px)',
//               color: '#111111',
//               lineHeight: 1,
//               letterSpacing: '-0.03em',
//               textShadow: `
//                 0 -1px 0 rgba(255,255,255,0.95),
//                 0 1px 2px rgba(0,0,0,0.18),
//                 0 4px 10px rgba(0,0,0,0.12),
//                 0 10px 32px rgba(0,0,0,0.08)
//               `,
//             }}
//           >
//             {counted.toLocaleString()}
//           </span>
//         </div>

//         {/* Sub-label */}
//         <div style={{ ...fadeStyle(0.1), marginTop: 10, marginBottom: 40 }}>
//           <span
//             style={{
//               fontFamily: 'monospace',
//               fontWeight: 600,
//               fontSize: 11,
//               letterSpacing: '0.2em',
//               color: '#9ca3af',
//               textTransform: 'uppercase',
//             }}
//           >
//             · People signed up ·
//           </span>
//         </div>

//         {/* Progress bar */}
//         <div style={{ ...fadeStyle(0.2), width: '100%' }}>
//           {/* Track */}
//           <div
//             style={{
//               position: 'relative',
//               width: '100%',
//               height: 10,
//               borderRadius: 999,
//               background: 'rgba(0,0,0,0.08)',
//               boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
//               overflow: 'hidden',
//             }}
//           >
//             {/* Fill */}
//             <div
//               style={{
//                 position: 'absolute',
//                 top: 0, bottom: 0, left: 0,
//                 width: barFilled ? `${fillPct}%` : '0%',
//                 borderRadius: 999,
//                 background: 'linear-gradient(90deg, #2dd4a0 0%, #f97316 60%, #e8622a 100%)',
//                 boxShadow: '0 0 14px rgba(232,98,42,0.5)',
//                 transition: 'width 1.3s cubic-bezier(0.4,0,0.2,1)',
//               }}
//             />
//             {/* Batch tick lines */}
//             {BATCHES.slice(0, 2).map((b) => (
//               <div
//                 key={b.label}
//                 style={{
//                   position: 'absolute',
//                   top: 0, bottom: 0,
//                   left: `${b.pct}%`,
//                   width: 1.5,
//                   background: 'rgba(255,255,255,0.6)',
//                   zIndex: 2,
//                 }}
//               />
//             ))}
//           </div>

//           {/* Tick labels */}
//           <div style={{ position: 'relative', width: '100%', marginTop: 12, height: 20 }}>
//             {BATCHES.map((b, i) => (
//               <div
//                 key={b.label}
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: i === 2 ? 'auto' : `${b.pct}%`,
//                   right: i === 2 ? 0 : 'auto',
//                   transform: i === 1 ? 'translateX(-50%)' : 'none',
//                 }}
//               >
//                 <span
//                   style={{
//                     fontFamily: 'monospace',
//                     fontSize: 11,
//                     fontWeight: 700,
//                     whiteSpace: 'nowrap',
//                     color: !b.done ? '#e8622a' : '#9ca3af',
//                   }}
//                 >
//                   {b.label} ({b.limit.toLocaleString()})
//                 </span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Status pill */}
//         <div style={{ ...fadeStyle(0.35), marginTop: 40, marginBottom: 20 }}>
//           <span
//             style={{
//               display: 'inline-block',
//               fontFamily: 'monospace',
//               fontWeight: 700,
//               fontSize: 'clamp(13px, 1.5vw, 15px)',
//               color: '#e8622a',
//               background: 'rgba(255,255,255,0.75)',
//               backdropFilter: 'blur(8px)',
//               WebkitBackdropFilter: 'blur(8px)',
//               borderRadius: 10,
//               padding: '10px 20px',
//               textShadow: '0 1px 3px rgba(255,255,255,0.6)',
//             }}
//           >
//             Batch 3 filling up — {SPOTS_LEFT} spots left
//           </span>
//         </div>

//         {/* Batch pills */}
//         <div
//           style={{
//             ...fadeStyle(0.45),
//             display: 'flex',
//             flexWrap: 'wrap',
//             justifyContent: 'center',
//             gap: 10,
//           }}
//         >
//           {[
//             { label: 'Batch 1 full',                        done: true  },
//             { label: 'Batch 2 full',                        done: true  },
//             { label: `Batch 3 — ${SPOTS_LEFT} spots left`, done: false },
//           ].map((b) => (
//             <div
//               key={b.label}
//               style={{
//                 display: 'flex',
//                 alignItems: 'center',
//                 gap: 6,
//                 fontFamily: 'monospace',
//                 fontWeight: 600,
//                 fontSize: 12.5,
//                 padding: '8px 16px',
//                 borderRadius: 10,
//                 background: 'rgba(255,255,255,0.75)',
//                 backdropFilter: 'blur(8px)',
//                 WebkitBackdropFilter: 'blur(8px)',
//                 border: b.done
//                   ? '1px solid rgba(0,0,0,0.08)'
//                   : '1px solid rgba(232,98,42,0.35)',
//                 color: b.done ? '#9ca3af' : '#e8622a',
//                 boxShadow: b.done
//                   ? '0 1px 4px rgba(0,0,0,0.06)'
//                   : '0 2px 12px rgba(232,98,42,0.15)',
//                 whiteSpace: 'nowrap',
//               }}
//             >
//               {b.done && (
//                 <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
//                   <path d="M2 6l3 3 5-5" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
//                 </svg>
//               )}
//               {b.label}
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Users;
























import { useEffect, useState, useRef } from 'react';

const TOTAL_SIGNED = 10;
const MAX_CAPACITY = 50;
const SPOTS_LEFT = 40;

const BATCHES = [
  { label: 'Batch 1', limit: 50, pct: 100, done: false },
];

const fillPct = (TOTAL_SIGNED / MAX_CAPACITY) * 100;

const Users = () => {
  const [visible, setVisible] = useState(false);
  const [counted, setCounted] = useState(0);
  const [barFilled, setBarFilled] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.25 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    let current = 0;
    const duration = 1400;
    const interval = 16;
    const increment = TOTAL_SIGNED / (duration / interval);
    const timer = setInterval(() => {
      current += increment;
      if (current >= TOTAL_SIGNED) { setCounted(TOTAL_SIGNED); clearInterval(timer); }
      else setCounted(Math.floor(current));
    }, interval);
    setTimeout(() => setBarFilled(true), 150);
    return () => clearInterval(timer);
  }, [visible]);

  const fadeStyle = (delay: number): React.CSSProperties => ({
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(20px)',
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px 24px 80px',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          maxWidth: 580,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        {/* Big count */}
        <div style={fadeStyle(0)}>
          <span
            style={{
              fontFamily: 'monospace',
              fontWeight: 800,
              fontSize: 'clamp(64px, 11vw, 100px)',
              color: '#111111',
              lineHeight: 1,
              letterSpacing: '-0.03em',
              textShadow: `
                0 -1px 0 rgba(255,255,255,0.95),
                0 1px 2px rgba(0,0,0,0.18),
                0 4px 10px rgba(0,0,0,0.12),
                0 10px 32px rgba(0,0,0,0.08)
              `,
            }}
          >
            {counted.toLocaleString()}
          </span>
        </div>

        {/* Sub-label */}
        <div style={{ ...fadeStyle(0.1), marginTop: 10, marginBottom: 40 }}>
          <span
            style={{
              fontFamily: 'monospace',
              fontWeight: 600,
              fontSize: 11,
              letterSpacing: '0.2em',
              color: '#9ca3af',
              textTransform: 'uppercase',
            }}
          >
            · People signed up ·
          </span>
        </div>

        {/* Progress bar */}
        <div style={{ ...fadeStyle(0.2), width: '100%' }}>
          {/* Track */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 10,
              borderRadius: 999,
              background: 'rgba(0,0,0,0.08)',
              boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.1)',
              overflow: 'hidden',
            }}
          >
            {/* Fill */}
            <div
              style={{
                position: 'absolute',
                top: 0, bottom: 0, left: 0,
                width: barFilled ? `${fillPct}%` : '0%',
                borderRadius: 999,
                background: 'linear-gradient(90deg, #2dd4a0 0%, #f97316 60%, #e8622a 100%)',
                boxShadow: '0 0 14px rgba(232,98,42,0.5)',
                transition: 'width 1.3s cubic-bezier(0.4,0,0.2,1)',
              }}
            />
            {/* Batch tick lines */}
            {BATCHES.slice(0, 2).map((b) => (
              <div
                key={b.label}
                style={{
                  position: 'absolute',
                  top: 0, bottom: 0,
                  left: `${b.pct}%`,
                  width: 1.5,
                  background: 'rgba(255,255,255,0.6)',
                  zIndex: 2,
                }}
              />
            ))}
          </div>

          {/* Tick labels */}
          <div style={{ position: 'relative', width: '100%', marginTop: 12, height: 20 }}>
            {BATCHES.map((b, i) => (
              <div
                key={b.label}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: i === 2 ? 'auto' : `${b.pct}%`,
                  right: i === 2 ? 0 : 'auto',
                  transform: i === 1 ? 'translateX(-50%)' : 'none',
                }}
              >
                <span
                  style={{
                    fontFamily: 'monospace',
                    fontSize: 11,
                    fontWeight: 700,
                    whiteSpace: 'nowrap',
                    color: !b.done ? '#e8622a' : '#9ca3af',
                  }}
                >
                  {b.label} ({b.limit.toLocaleString()})
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Status pill */}
        <div style={{ ...fadeStyle(0.35), marginTop: 40, marginBottom: 20 }}>
          <span
            style={{
              display: 'inline-block',
              fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: 'clamp(13px, 1.5vw, 15px)',
              color: '#e8622a',
              background: 'rgba(255,255,255,0.75)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
              borderRadius: 10,
              padding: '10px 20px',
              textShadow: '0 1px 3px rgba(255,255,255,0.6)',
            }}
          >
            Batch 1 filling up — {SPOTS_LEFT} spots left
          </span>
        </div>

        {/* Batch pills */}
        <div
          style={{
            ...fadeStyle(0.45),
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 10,
          }}
        >
          {[
            { label: `Batch 1 — ${SPOTS_LEFT} spots left`, done: false },
          ].map((b) => (
            <div
              key={b.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'monospace',
                fontWeight: 600,
                fontSize: 12.5,
                padding: '8px 16px',
                borderRadius: 10,
                background: 'rgba(255,255,255,0.75)',
                backdropFilter: 'blur(8px)',
                WebkitBackdropFilter: 'blur(8px)',
                border: b.done
                  ? '1px solid rgba(0,0,0,0.08)'
                  : '1px solid rgba(232,98,42,0.35)',
                color: b.done ? '#9ca3af' : '#e8622a',
                boxShadow: b.done
                  ? '0 1px 4px rgba(0,0,0,0.06)'
                  : '0 2px 12px rgba(232,98,42,0.15)',
                whiteSpace: 'nowrap',
              }}
            >
              {b.done && (
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                  <path d="M2 6l3 3 5-5" stroke="#9ca3af" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
              {b.label}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Users;