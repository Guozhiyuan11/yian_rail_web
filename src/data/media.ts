import type { ApplicationKey } from './rails/types';

/**
 * Image asset map.
 *
 * Every file lives in `public/images/` and is named after its number in the
 * source library (`攀钢钢轨素材库_20260917/01_图片素材`), so a picture on the
 * site can always be traced back to its provenance record in
 * `03_文案与来源清单/图片素材来源清单.csv`.
 *
 *   rail-033.webp  ←  033_制造与质量_pg7116_4.jpg   (攀钢集团官网)
 *
 * Images that carried a third-party company name, a third party's contact
 * details, a customer name, or non-photographic content were excluded from the
 * build — see docs/素材清理记录.md for the full list and reasons.
 */
export const media = {
  /* ---- Homepage ---------------------------------------------------------- */
  hero: '/images/rail-033.webp',
  role: '/images/rail-042.webp',

  /* ---- Manufacturing ----------------------------------------------------- */
  manufacturing: '/images/rail-007.webp',
  manufacturingProcess: '/images/rail-011.webp',
  manufacturingGallery: [
    '/images/rail-013.webp',
    '/images/rail-018.webp',
    '/images/rail-010.webp',
    '/images/rail-016.webp',
    '/images/rail-022.webp',
    '/images/rail-026.webp',
    '/images/rail-029.webp',
    '/images/rail-034.webp',
  ],

  /* ---- Export & delivery ------------------------------------------------- */
  exportDelivery: '/images/rail-041.webp',
  exportShipment: '/images/rail-037.webp',
  exportGallery: [
    '/images/rail-009.webp',
    '/images/rail-012.webp',
    '/images/rail-021.webp',
    '/images/rail-050.webp',
  ],

  /* ---- About ------------------------------------------------------------- */
  aboutCompany: '/images/rail-001.webp',
  aboutPangang: '/images/rail-002.webp',
} as const;

/** Image for each application card (homepage + applications page). */
export const applicationImages: Record<ApplicationKey, string> = {
  heavyHaul: '/images/rail-055.webp',
  highSpeed: '/images/rail-036.webp',
  metro: '/images/rail-067.webp',
  mining: '/images/rail-003.webp',
  craneRail: '/images/rail-049.webp',
  generalRailway: '/images/rail-045.webp',
  mainline: '/images/rail-057.webp',
  freight: '/images/rail-060.webp',
  industrial: '/images/rail-074.webp',
  ports: '/images/rail-040.webp',
};

/** Cross-section drawing for each rail, used as the product cover image. */
export const railDrawing = (slug: string) => `/images/rails/${slug}.webp`;
