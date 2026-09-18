import type { RailProduct } from '../data/rails/types';
import { applicationLabelKey, standardLabelKey } from '../data/taxonomies';
import type { ApplicationKey } from '../data/rails/types';
import type { IconName } from '../components/icons';
import type { TranslationKey } from '../i18n/ui';

export type Translate = (key: TranslationKey, vars?: Record<string, string | number>) => string;

/** A single row of the product specification table. */
export interface SpecRow {
  label: string;
  /** `null` means "not verified yet" — hidden in production. */
  value: string | null;
}

/** Icon used for each application, kept here so every page stays consistent. */
export const APPLICATION_ICONS: Record<ApplicationKey, IconName> = {
  heavyHaul: 'truck',
  highSpeed: 'trendingUp',
  metro: 'building',
  mining: 'gear',
  craneRail: 'railSection',
  generalRailway: 'layers',
  mainline: 'arrowRight',
  freight: 'package',
  industrial: 'factory',
  ports: 'ship',
};

/** Localised standard family label, or null when the field is unverified. */
export function standardLabel(product: RailProduct, t: Translate): string | null {
  return product.standardKey ? t(standardLabelKey(product.standardKey)) : null;
}

/** Localised application labels, in catalogue order. */
export function applicationLabels(product: RailProduct, t: Translate): string[] {
  return product.applicationKeys.map((key) => t(applicationLabelKey(key)));
}

/**
 * Short card tagline, e.g. "AREMA · Heavy-Haul / Mainline".
 * Only parts that exist are joined, so unverified fields simply disappear.
 */
export function productTagline(product: RailProduct, t: Translate, maxApps = 2): string {
  const standard = standardLabel(product, t);
  const apps = applicationLabels(product, t).slice(0, maxApps);
  return [standard, apps.length ? apps.join(' / ') : null].filter(Boolean).join(' · ');
}
