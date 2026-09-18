/**
 * Controlled vocabularies shared by the product filters, the homepage
 * "Standards & Applications" section and the product cards.
 *
 * Each key maps to an i18n label:
 *   standards   -> `standard.<key>`
 *   applications-> `application.<key>`
 *   heat        -> `heatTreatment.<key>`
 */
import {
  APPLICATION_KEYS,
  HEAT_TREATMENT_KEYS,
  STANDARD_KEYS,
  type ApplicationKey,
  type HeatTreatmentKey,
  type StandardKey,
} from './rails/types';
import type { TranslationKey } from '../i18n/ui';

export { APPLICATION_KEYS, HEAT_TREATMENT_KEYS, STANDARD_KEYS };

/** Applications shown on the homepage "Typical Applications" row. */
export const HOME_APPLICATION_KEYS = [
  'heavyHaul',
  'highSpeed',
  'metro',
  'mining',
  'craneRail',
  'generalRailway',
] as const;

/** Label key helpers — keep the `standard.*` / `application.*` naming in one place. */
export const standardLabelKey = (key: StandardKey): TranslationKey =>
  `standard.${key}` as TranslationKey;
export const applicationLabelKey = (key: ApplicationKey): TranslationKey =>
  `application.${key}` as TranslationKey;
export const heatTreatmentLabelKey = (key: HeatTreatmentKey): TranslationKey =>
  `heatTreatment.${key}` as TranslationKey;
export const standardDescKey = (key: StandardKey): TranslationKey =>
  `standard.${key}.desc` as TranslationKey;
export const applicationDescKey = (key: ApplicationKey): TranslationKey =>
  `application.${key}.desc` as TranslationKey;
