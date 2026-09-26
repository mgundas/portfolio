import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.75,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const ArrowUpRight = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDown = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const ArrowUp = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <path d="M12 19V5M6 11l6-6 6 6" />
  </svg>
);

export const Copy = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
  </svg>
);

export const Check = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <path d="m5 12 5 5 9-10" />
  </svg>
);

export const Mail = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

export const FileText = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8z" />
    <path d="M14 3v5h5M9 13h6M9 17h6" />
  </svg>
);

export const Hash = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <path d="M5 9h14M5 15h14M10 3 8 21M16 3l-2 18" />
  </svg>
);

export const Search = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
);

export const Menu = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <path d="M4 8h16M4 16h16" />
  </svg>
);

export const GitHub = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}>
    <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.37-3.88-1.37-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.77 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.42-2.7 5.39-5.26 5.68.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
  </svg>
);

export const LinkedIn = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor" {...p}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
  </svg>
);

export const Globe = (p: IconProps) => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" {...stroke} {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </svg>
);
