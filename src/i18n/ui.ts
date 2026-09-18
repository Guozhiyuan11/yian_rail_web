import { en } from './en';
import { es } from './es';

export const languages = {
  en: 'English',
  es: 'Español',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'en';

export const ui = { en, es } as const;

export type TranslationKey = keyof typeof en;

/**
 * Resolve the active language from the current URL.
 * English lives at the root ("/", "/about"); Spanish under "/es/...".
 */
export function getLangFromUrl(url: URL): Lang {
  const [, firstSegment] = url.pathname.split('/');
  if (firstSegment in ui) return firstSegment as Lang;
  return defaultLang;
}

/**
 * Returns a translate function bound to `lang`, falling back to the default
 * language when a key is missing from the active locale.
 *
 * Supports a single `{token}` interpolation, e.g. t('products.results', { count: '6' }).
 */
export function useTranslations(lang: Lang) {
  return function t(key: TranslationKey, vars?: Record<string, string | number>): string {
    const table = ui[lang] as Record<string, string>;
    const fallback = ui[defaultLang] as Record<string, string>;
    let value = table[key] ?? fallback[key] ?? key;
    if (vars) {
      for (const [name, replacement] of Object.entries(vars)) {
        value = value.replaceAll(`{${name}}`, String(replacement));
      }
    }
    return value;
  };
}

/**
 * Prefix an internal path with the active locale.
 * English keeps clean URLs:  localizePath('/about', 'en')  -> '/about'
 * Spanish is prefixed:       localizePath('/about', 'es')  -> '/es/about'
 */
export function localizePath(path: string, lang: Lang): string {
  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return normalized;
  return normalized === '/' ? `/${lang}` : `/${lang}${normalized}`;
}
