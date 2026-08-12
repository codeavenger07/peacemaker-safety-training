import type { ReactElement } from "react";

type IconProps = { className?: string };

const base = "h-6 w-6";

export function HeartPulseIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 20.5s-7.5-4.6-10-9.4C.5 7.8 2.4 4.5 5.8 4.1c2-.2 3.7.8 4.7 2.3l.5.8.5-.8c1-1.5 2.7-2.5 4.7-2.3 3.4.4 5.3 3.7 3.8 7-2.5 4.8-10 9.4-10 9.4Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h3l1.5-3 2 5 1.5-3h6.5" />
    </svg>
  );
}

export function ShieldCheckIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3.5 5 6v5.5c0 4.6 3 7.9 7 9 4-1.1 7-4.4 7-9V6l-7-2.5Z"
      />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4.2" />
    </svg>
  );
}

export function BandageIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <rect x="3.5" y="8.5" width="17" height="7" rx="3.5" transform="rotate(-45 12 12)" />
      <path d="M9.5 9.5l5 5" strokeLinecap="round" />
      <circle cx="10.6" cy="10.6" r=".4" fill="currentColor" />
      <circle cx="13.4" cy="13.4" r=".4" fill="currentColor" />
    </svg>
  );
}

export function ClipboardCheckIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <rect x="5" y="4.5" width="14" height="16" rx="2" />
      <path strokeLinecap="round" d="M9 4V3.5a1.5 1.5 0 0 1 1.5-1.5h3A1.5 1.5 0 0 1 15 3.5V4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.5 13l2 2 4.5-4.5" />
    </svg>
  );
}

export function UsersIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <circle cx="9" cy="8.5" r="3" />
      <path strokeLinecap="round" d="M3.5 20c.7-3.3 3-5 5.5-5s4.8 1.7 5.5 5" />
      <circle cx="17" cy="9.5" r="2.3" />
      <path strokeLinecap="round" d="M15.8 12.2c2.1.2 3.7 1.7 4.2 4.3" />
    </svg>
  );
}

export function FamilyHeartIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <circle cx="7.5" cy="7" r="2.4" />
      <circle cx="16.5" cy="7" r="2.4" />
      <path strokeLinecap="round" d="M3 19c.5-3 2.2-4.7 4.5-4.7S11.5 16 12 19" />
      <path strokeLinecap="round" d="M12 19c.5-3 2.2-4.7 4.5-4.7S20.5 16 21 19" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12.5s-2.3-1.4-2.3-3c0-.9.7-1.5 1.5-1.5.5 0 .9.2 1.1.7.2-.5.6-.7 1.1-.7.8 0 1.5.6 1.5 1.5 0 1.6-2.3 3-2.3 3Z"
      />
    </svg>
  );
}

export function AlertTriangleIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4 2.5 20h19L12 4Z" />
      <path strokeLinecap="round" d="M12 10.5v4" />
      <circle cx="12" cy="17" r=".5" fill="currentColor" />
    </svg>
  );
}

export function HomeIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 11.5 12 4l8 7.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 10v9.5h12V10" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19.5v-6h4v6" />
    </svg>
  );
}

export function UserIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <circle cx="12" cy="8" r="3.5" />
      <path strokeLinecap="round" d="M4.5 20c1-4 4-6 7.5-6s6.5 2 7.5 6" />
    </svg>
  );
}

export function AwardIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <circle cx="12" cy="9" r="5.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 13.5 7.5 20l4.5-2.3 4.5 2.3-1.5-6.5" />
    </svg>
  );
}

export function TargetIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="12" cy="12" r=".8" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FlameIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21c3 0 5.5-2.2 5.5-5.5 0-2.4-1.3-3.8-2.3-5 .1 1.7-.6 2.5-1.3 2 .6-2.7-.6-5.5-2.9-8-.6 2.7-2.5 4-3.5 6-.7 1.4-1 2.5-1 3.5C6.5 18.8 9 21 12 21Z"
      />
    </svg>
  );
}

export function ChurchIcon({ className = base }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} className={className}>
      <path strokeLinecap="round" d="M12 3v3M10.5 4.5h3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.5 5 11v9h14v-9L12 6.5Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 20v-5h4v5" />
    </svg>
  );
}

export const trainingIcons: Record<string, (props: IconProps) => ReactElement> = {
  "church-safety-assessment": ClipboardCheckIcon,
  "stop-the-bleed": BandageIcon,
  "cpr-aed": HeartPulseIcon,
  "first-aid": UsersIcon,
  "friends-and-family-cpr-aed": FamilyHeartIcon,
};
