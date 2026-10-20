interface TraceabilityMapProps {
  labels: [string, string, string, string];
  className?: string;
}

export const TraceabilityMap = ({
  labels,
  className = "",
}: TraceabilityMapProps) => (
  <svg
    viewBox="0 0 640 240"
    role="img"
    aria-label={`${labels.join(" → ")}`}
    className={className}
  >
    <defs>
      <linearGradient id="trace-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="50%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
      <linearGradient id="trace-node" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1e293b" />
        <stop offset="100%" stopColor="#0f172a" />
      </linearGradient>
    </defs>

    <path
      d="M 112 120 H 208 M 272 120 H 368 M 432 120 H 528"
      stroke="url(#trace-line)"
      strokeWidth="2"
      strokeDasharray="6 8"
      opacity="0.7"
    />

    {[80, 240, 400, 560].map((x, index) => (
      <g key={x}>
        <circle
          cx={x}
          cy={120}
          r="32"
          fill="url(#trace-node)"
          stroke="#818cf8"
          strokeOpacity="0.45"
          strokeWidth="1.5"
        />
        <circle
          cx={x}
          cy={120}
          r="42"
          fill="none"
          stroke="#818cf8"
          strokeOpacity="0.12"
          strokeWidth="1"
        />
        <text
          x={x}
          y={125}
          textAnchor="middle"
          fill="#e2e8f0"
          fontSize="11"
          fontWeight="600"
        >
          0{index + 1}
        </text>
        <text
          x={x}
          y={188}
          textAnchor="middle"
          fill="#94a3b8"
          fontSize="12"
          fontWeight="600"
        >
          {labels[index]}
        </text>
      </g>
    ))}
  </svg>
);

export const CertificateSeal = ({ className = "h-16 w-16" }: { className?: string }) => (
  <svg viewBox="0 0 96 96" aria-hidden="true" className={className}>
    <defs>
      <linearGradient id="seal-face" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#fbbf24" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>
    <circle cx="48" cy="44" r="32" fill="url(#seal-face)" opacity="0.16" />
    <circle
      cx="48"
      cy="44"
      r="31"
      fill="none"
      stroke="url(#seal-face)"
      strokeWidth="2"
      strokeDasharray="4 5"
    />
    <path
      d="M48 22 L64 29 V44 C64 54 57 62 48 66 C39 62 32 54 32 44 V29 Z"
      fill="#0f172a"
      stroke="url(#seal-face)"
      strokeWidth="2"
    />
    <path
      d="M40 44 L46 50 L57 38"
      fill="none"
      stroke="#fbbf24"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M40 68 L36 84 L48 78 L60 84 L56 68" fill="url(#seal-face)" opacity="0.8" />
  </svg>
);

export const BlockchainMotif = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 420 180"
    aria-hidden="true"
    className={className}
    fill="none"
  >
    <path
      d="M42 92 L126 48 L210 92 L294 48 L378 92"
      stroke="url(#motif-line)"
      strokeWidth="1.5"
      strokeDasharray="5 7"
      opacity="0.55"
    />
    <path
      d="M42 92 L126 136 L210 92 L294 136 L378 92"
      stroke="url(#motif-line)"
      strokeWidth="1.5"
      strokeDasharray="5 7"
      opacity="0.3"
    />
    <defs>
      <linearGradient id="motif-line" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="50%" stopColor="#818cf8" />
        <stop offset="100%" stopColor="#fbbf24" />
      </linearGradient>
    </defs>
    {[
      [42, 92],
      [126, 48],
      [126, 136],
      [210, 92],
      [294, 48],
      [294, 136],
      [378, 92],
    ].map(([cx, cy]) => (
      <g key={`${cx}-${cy}`}>
        <circle cx={cx} cy={cy} r="8" fill="#0f172a" stroke="#818cf8" strokeWidth="1.5" />
        <circle cx={cx} cy={cy} r="3" fill="#fbbf24" />
      </g>
    ))}
  </svg>
);
