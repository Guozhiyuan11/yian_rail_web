/**
 * Global site configuration.
 *
 * Anything in here that is not yet confirmed by the project owner is marked
 * with `TODO` and left `null` so it can be hidden in the UI rather than faked.
 * See docs/项目大纲与架构.md §13 for the pending-asset checklist.
 */

export interface SocialLinks {
  linkedin: string | null;
  youtube: string | null;
  x: string | null;
}

export const site = {
  name: 'YIAN Tech Global',
  nameUpper: 'YIAN TECH GLOBAL',
  legalNameEn: 'YIAN Tech Global',
  legalNameZh: '奕安聚合科技公司',

  /** Production domain — keep in sync with `site` in astro.config.mjs. */
  domain: 'rail.yiantechglobal.com',
  url: 'https://rail.yiantechglobal.com',

  contact: {
    email: 'hang@yiantechglobal.com',
    /** Displayed exactly as supplied. */
    whatsapp: '+61 0410983877',
    /**
     * wa.me requires full international digits with no domestic trunk zero,
     * so the link is built from +61 410 983 877 rather than from the display
     * string above.
     */
    whatsappHref: 'https://wa.me/61410983877' as string | null,
    // TODO: office address not yet supplied.
    address: null as string | null,
  },

  social: {
    linkedin: null,
    youtube: null,
    x: null,
  } as SocialLinks,
} as const;

/**
 * Development-only flag. When true, missing data is surfaced with a quiet
 * "TODO" marker so the skeleton is easy to review. It resolves to `false` in
 * every production build, so no placeholder marker can ever ship to users.
 */
export const isDev: boolean = import.meta.env.DEV;

/** Build a fully-qualified URL for a site-relative path. */
export function absoluteUrl(path: string): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return new URL(clean, site.url).href;
}
