const nodes = [
  [120, 140],
  [360, 80],
  [560, 220],
  [820, 120],
  [1040, 260],
  [1280, 160],
  [240, 420],
  [680, 460],
  [960, 520],
  [1220, 440],
]

const paths = [
  'M0 140 H120 L360 80 H560 V220 L820 120 H1040 V260 L1280 160 H1440',
  'M0 420 H240 L560 220 M240 420 H680 L960 520 H1220 L1440 380',
  'M680 460 V620 M1220 440 L1280 160 M360 80 V0 M1040 260 L960 520',
]

export function EnergyGridBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid-lines absolute inset-0 [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_75%)]" />
      <div className="absolute -top-40 right-[-10%] size-[640px] rounded-full bg-azure/25 blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] size-[520px] rounded-full bg-teal/20 blur-[120px]" />
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1440 620" preserveAspectRatio="xMidYMid slice" fill="none">
        {paths.map((d) => (
          <g key={d}>
            <path d={d} stroke="rgb(14 165 233 / 0.18)" strokeWidth="1.5" />
            <path d={d} stroke="rgb(255 255 255 / 0.55)" strokeWidth="1.5" className="energy-line" />
          </g>
        ))}
        {nodes.map(([cx, cy]) => (
          <g key={`${cx}-${cy}`}>
            <circle cx={cx} cy={cy} r="9" fill="rgb(0 117 255 / 0.18)" />
            <circle cx={cx} cy={cy} r="3.5" fill="#ffffff" />
          </g>
        ))}
      </svg>
    </div>
  )
}
