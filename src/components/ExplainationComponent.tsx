import { useEffect, useState } from 'react';

type LogLine = {
  id: number;
  prefix: string;
  label: string;
  value?: string;
  valueStyle?: React.CSSProperties;
  delay: number;
  isSuccess?: boolean;
  isLink?: boolean;
  bold?: boolean;
};

const lines: LogLine[] = [
  {
    id: 0,
    prefix: '→',
    label: 'Selecting model...',
    value: 'Kling 2.0 Master',
    valueStyle: { color: '#9ca3af' },
    delay: 400,
  },
  {
    id: 1,
    prefix: '→',
    label: 'Loading creative engine...',
    value: 'Sora 2 + Aevora pipeline',
    valueStyle: { color: '#9ca3af' },
    delay: 900,
  },
  {
    id: 2,
    prefix: '→',
    label: 'Deploying agent...',
    value: 'done in 1.8s',
    valueStyle: { color: '#9ca3af' },
    delay: 1500,
  },
  {
    id: 3,
    prefix: '→',
    label: 'Running health check...',
    value: 'all systems go ✓',
    valueStyle: { color: '#22c55e' },
    delay: 2200,
    isSuccess: true,
    bold: true,
  },
  {
    id: 4,
    prefix: '✓',
    label: 'Agent ready —',
    value: 'drop a product image to generate your first ad',
    valueStyle: { color: '#e8622a', fontStyle: 'italic' },
    delay: 2900,
    isSuccess: true,
  },
];

const DeployTerminal = () => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [cursorVisible, setCursorVisible] = useState(true);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];

    lines.forEach((line) => {
      const t = setTimeout(() => {
        setVisibleLines((prev) => [...prev, line.id]);
      }, line.delay);
      timers.push(t);
    });

    const cursorInterval = setInterval(() => {
      setCursorVisible((v) => !v);
    }, 530);

    return () => {
      timers.forEach(clearTimeout);
      clearInterval(cursorInterval);
    };
  }, []);

  const isDone = visibleLines.length === lines.length;

  return (
    <section
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px 24px 40px',
      }}
    >
      {/* Card */}
      <div
        style={{
          width: '100%',
          maxWidth: 580,
          borderRadius: 20,
          overflow: 'hidden',
          background: 'rgba(255, 252, 249, 0.90)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          border: '1px solid rgba(232, 98, 42, 0.18)',
          boxShadow: `
            0 1px 0 0 rgba(255,255,255,0.95) inset,
            0 0 0 1px rgba(255,255,255,0.7) inset,
            0 4px 6px -1px rgba(0,0,0,0.07),
            0 16px 48px -6px rgba(0,0,0,0.13),
            0 2px 12px -2px rgba(232,98,42,0.10)
          `,
        }}
      >
        {/* Title bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            padding: '10px 16px',
            borderBottom: '1px solid rgba(232, 98, 42, 0.12)',
            background: 'rgba(248, 244, 240, 0.70)',
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            {[
              { bg: '#f97474', shadow: 'rgba(249,116,116,0.5)' },
              { bg: '#f5b942', shadow: 'rgba(245,185,66,0.5)' },
              { bg: '#4dc470', shadow: 'rgba(77,196,112,0.5)' },
            ].map(({ bg, shadow }, i) => (
              <span
                key={i}
                style={{
                  display: 'inline-block',
                  width: 11,
                  height: 11,
                  borderRadius: '50%',
                  background: bg,
                  boxShadow: `0 0 4px ${shadow}`,
                  flexShrink: 0,
                }}
              />
            ))}
          </div>

          {/* Centered title */}
          <span
            style={{
              flex: 1,
              textAlign: 'center',
              fontFamily: 'monospace',
              fontSize: 12,
              fontWeight: 600,
              color: '#9ca3af',
              letterSpacing: '0.12em',
            }}
          >
            aevora deploy
          </span>

          {/* Spacer to balance traffic lights */}
          <div style={{ width: 45 }} />
        </div>

        {/* Terminal body */}
        <div
          style={{
            padding: '24px 32px 20px',
            display: 'flex',
            flexDirection: 'column',
            gap: 10,
            minHeight: 170,
          }}
        >
          {lines.map((line) => {
            const visible = visibleLines.includes(line.id);
            const isHealthCheck = line.id === 3;

            return (
              <div
                key={line.id}
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: 6,
                  fontFamily: 'monospace',
                  fontSize: 13,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateY(0px)' : 'translateY(6px)',
                  transition: 'opacity 0.35s ease, transform 0.35s ease',
                  paddingLeft: isHealthCheck ? 0 : 24,
                  flexWrap: 'wrap',
                }}
              >
                {/* Prefix */}
                <span
                  style={{
                    fontWeight: 700,
                    flexShrink: 0,
                    color: line.isSuccess ? '#22c55e' : '#e8622a',
                    marginLeft: isHealthCheck ? 0 : -20,
                    minWidth: 14,
                  }}
                >
                  {line.prefix}
                </span>

                {/* Label */}
                <span
                  style={{
                    fontWeight: isHealthCheck ? 700 : 600,
                    color: isHealthCheck ? '#e8622a' : '#374151',
                  }}
                >
                  {line.label}
                </span>

                {/* Value */}
                {line.value && (
                  <span
                    style={{
                      fontWeight: 500,
                      ...line.valueStyle,
                    }}
                  >
                    {line.value}
                  </span>
                )}
              </div>
            );
          })}

          {/* Blinking cursor */}
          {isDone && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 6,
                fontFamily: 'monospace',
                fontSize: 13,
                paddingLeft: 4,
                marginTop: 2,
              }}
            >
              <span style={{ color: '#e8622a', fontWeight: 700 }}>$</span>
              <span
                style={{
                  display: 'inline-block',
                  width: 8,
                  height: 15,
                  borderRadius: 2,
                  background: '#e8622a',
                  opacity: cursorVisible ? 0.7 : 0,
                  transition: 'opacity 0.1s',
                  verticalAlign: 'middle',
                }}
              />
            </div>
          )}
        </div>

        {/* Status bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '7px 16px',
            borderTop: '1px solid rgba(232,98,42,0.10)',
            background: 'rgba(248,244,240,0.50)',
            fontFamily: 'monospace',
            fontSize: 11,
            color: '#9ca3af',
            letterSpacing: '0.04em',
          }}
        >
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span
              style={{
                display: 'inline-block',
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: isDone ? '#22c55e' : '#f5b942',
                boxShadow: isDone
                  ? '0 0 5px rgba(34,197,94,0.6)'
                  : '0 0 5px rgba(245,185,66,0.6)',
                flexShrink: 0,
              }}
            />
            {isDone ? 'agent deployed' : 'deploying...'}
          </span>
          <span>aevora/deploy · v1.0.0</span>
        </div>
      </div>
    </section>
  );
};

export default DeployTerminal;