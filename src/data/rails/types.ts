/**
 * Product data model for railway rails.
 *
 * Content is data-driven: never hard-code rail facts inside page components.
 * Any value not confirmed by the project owner stays `null` and is hidden in
 * the UI (see `pendingFields` for values that came from the UI reference and
 * still need verification).
 *
 * Legal rule: do NOT invent technical parameters, steel grades, certifications,
 * capacity, export markets, lead times or MOQ. See docs/项目大纲与架构.md §14.
 */

export const STANDARD_KEYS = ['arema', 'en', 'uic', 'bs', 'as', 'tb'] as const;
export type StandardKey = (typeof STANDARD_KEYS)[number];

export const APPLICATION_KEYS = [
  'heavyHaul',
  'highSpeed',
  'metro',
  'mining',
  'craneRail',
  'generalRailway',
  'mainline',
  'freight',
  'industrial',
  'ports',
] as const;
export type ApplicationKey = (typeof APPLICATION_KEYS)[number];

export const HEAT_TREATMENT_KEYS = ['headHardened', 'wholeHardened', 'others'] as const;
export type HeatTreatmentKey = (typeof HEAT_TREATMENT_KEYS)[number];

export interface RailProduct {
  /** Stable id, e.g. "136re". */
  id: string;
  /** Display name, e.g. "136RE". */
  name: string;
  /** URL slug used by /rail/[slug]. */
  slug: string;
  /** Profile designation shown in the specification table. */
  railProfile: string | null;
  standardKey: StandardKey | null;
  steelGrade: string | null;
  heatTreatmentKey: HeatTreatmentKey | null;
  unitWeight: string | null;
  dimensions: string | null;
  length: string | null;
  tolerance: string | null;
  applicationKeys: ApplicationKey[];
  packaging: string | null;
  leadTime: string | null;
  coverImage: string | null;
  /**
   * Full product sheet (perspective + dimensioned front view + views strip),
   * supplied by the project owner. Shown large on the product detail page.
   */
  productSheet: string | null;
  /** The dimensioned front view on its own, cropped from the product sheet. */
  dimensionDrawing: string | null;
  gallery: string[];
  /** Path under /public/documents — hidden until a real file exists. */
  datasheet: string | null;
  /** Path under /public/documents — hidden until a real file exists. */
  drawing: string | null;
  seoTitle: string;
  seoDescription: string;
  /** Spanish SEO overrides; fall back to the English values when omitted. */
  seoTitleEs?: string;
  seoDescriptionEs?: string;
  /** Shown in the homepage "Featured Rail Products" grid. */
  featured?: boolean;
  /** Set to false to keep a rail out of the public catalogue. */
  published?: boolean;
  /**
   * Field names whose current value came from the supplied UI reference and
   * must be verified by the project owner before launch. In development these
   * render with a quiet "TODO" marker; the marker never ships to production.
   */
  pendingFields?: string[];
}
