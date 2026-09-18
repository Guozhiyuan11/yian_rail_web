/**
 * Inline SVG icon set.
 *
 * All icons are 24x24, stroke-based and inherit `currentColor`, so they pick up
 * text colour automatically. Keeping them here avoids repeating markup across
 * components and keeps the client bundle free of an icon dependency.
 */
export const icons = {
  globe:
    '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 3.8 5.6 3.8 9S14.5 18.4 12 21c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z"/>',
  shield:
    '<path d="M12 3l7 3v5.5c0 4.4-2.9 7.9-7 9.5-4.1-1.6-7-5.1-7-9.5V6z"/><path d="m9 12 2 2 4-4"/>',
  package:
    '<path d="M21 8.5 12 3.5 3 8.5v7L12 20.5l9-5z"/><path d="M3 8.5 12 13l9-4.5"/><path d="M12 13v7.5"/>',
  truck:
    '<path d="M3 7h11v9H3z"/><path d="M14 10h4l3 3v3h-7z"/><circle cx="7" cy="18.5" r="1.7"/><circle cx="17.5" cy="18.5" r="1.7"/>',
  factory: '<path d="M3 21h18"/><path d="M4 21V10l5 3V10l5 3V7l6 3v11z"/>',
  gear: '<circle cx="12" cy="12" r="3.2"/><path d="M12 2.5v2.6M12 18.9v2.6M2.5 12h2.6M18.9 12h2.6M5.3 5.3l1.8 1.8M16.9 16.9l1.8 1.8M18.7 5.3l-1.8 1.8M7.1 16.9l-1.8 1.8"/>',
  check: '<path d="m5 13 4 4L19 7"/>',
  doc: '<path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8z"/><path d="M14 3v5h5"/><path d="M9 13h6M9 17h4"/>',
  flame:
    '<path d="M12 2.8s5 4.4 5 8.7a5 5 0 0 1-10 0c0-1.7.7-3.1 1.5-4 .3 1.6 1.1 2.5 1.8 2.8C10.9 7.1 12 4.7 12 2.8z"/>',
  search: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.6-3.6"/>',
  ruler:
    '<rect x="3" y="8.5" width="18" height="7" rx="1"/><path d="M7 8.5v2.5M11 8.5v2.5M15 8.5v2.5M19 8.5v2.5"/>',
  pin: '<path d="M12 21s-6.5-5.8-6.5-10.5a6.5 6.5 0 1 1 13 0C18.5 15.2 12 21 12 21z"/><circle cx="12" cy="10.5" r="2.4"/>',
  mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 7.2 8.5 5.8 8.5-5.8"/>',
  phone:
    '<path d="M4.5 4h4l2 5-2.4 1.4a12.5 12.5 0 0 0 5.5 5.5L15 13.5l5 2v4a1 1 0 0 1-1.1 1A16.5 16.5 0 0 1 3.5 5.1 1 1 0 0 1 4.5 4z"/>',
  whatsapp:
    '<path d="M12 3.2a8.8 8.8 0 0 0-7.5 13.3L3.3 20.7l4.3-1.1A8.8 8.8 0 1 0 12 3.2z"/><path d="M9 8.6c0 3.1 2.7 5.8 5.8 5.8l.9-1.5-2-.9-.9.8a4.7 4.7 0 0 1-2.1-2.1l.8-.9-.9-2z"/>',
  linkedin:
    '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M7.5 10.5V17M7.5 7.4v.01"/><path d="M11 17v-3.6a2 2 0 0 1 4 0V17"/>',
  youtube: '<rect x="3" y="6" width="18" height="12" rx="3"/><path d="m11 9.8 4 2.2-4 2.2z"/>',
  x: '<path d="M4.5 4.5 19.5 19.5M19.5 4.5 4.5 19.5"/>',
  arrowRight: '<path d="M4 12h15"/><path d="m13 6 6 6-6 6"/>',
  filter: '<path d="M3 5h18M6 12h12M10 19h4"/>',
  close: '<path d="M6 6l12 12M18 6 6 18"/>',
  menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  download: '<path d="M12 3v12"/><path d="m7 11 5 5 5-5"/><path d="M4 21h16"/>',
  trendingUp: '<path d="M3 17l6-6 4 4 8-8"/><path d="M17 7h4v4"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 2"/>',
  layers: '<path d="m12 3 9 4.8-9 4.8L3 7.8z"/><path d="m3 12.5 9 4.8 9-4.8"/>',
  ship: '<path d="M3 14l1.5 5.5h15L21 14"/><path d="M12 4v4"/><path d="M5 13l7-3 7 3"/><path d="M9 4h6"/>',
  clipboard:
    '<rect x="6" y="4.5" width="12" height="16" rx="2"/><path d="M9.5 4.5V3h5v1.5"/><path d="M9 10h6M9 13.5h6M9 17h4"/>',
  beaker:
    '<path d="M9 3v6l-4 8a2 2 0 0 0 1.8 3h10.4A2 2 0 0 0 19 17l-4-8V3"/><path d="M8 3h8"/><path d="M7.5 14h9"/>',
  eye: '<path d="M2.5 12S6 6.2 12 6.2 21.5 12 21.5 12 18 17.8 12 17.8 2.5 12 2.5 12z"/><circle cx="12" cy="12" r="2.6"/>',
  building:
    '<path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16"/><path d="M15 9h3a2 2 0 0 1 2 2v10"/><path d="M8 7h3M8 11h3M8 15h3"/>',
  users:
    '<circle cx="9" cy="8" r="3.2"/><path d="M3 19a6 6 0 0 1 12 0"/><path d="M16 5.6a3 3 0 0 1 0 5.4M17.5 19a5.5 5.5 0 0 0-1.8-4"/>',
  send: '<path d="M21 3 10.5 13.5"/><path d="M21 3 14 21l-3.5-7.5L3 10z"/>',
  railSection: '<path d="M7 4h10v3.2h-3.4v9.6H17V20H7v-3.2h3.4V7.2H7z"/>',
} as const;

export type IconName = keyof typeof icons;
