import type { RailProduct } from './types';
import { rail136re } from './136re';
import { rail115re } from './115re';
import { rail60e1 } from './60e1';
import { rail60kg } from './60kg';
import { rail75kg } from './75kg';
import { railQu120 } from './qu120';

export * from './types';

/** Catalogue order is significant — it drives listing and "featured" order. */
export const rails: RailProduct[] = [rail136re, rail115re, rail60e1, rail60kg, rail75kg, railQu120];

export const publishedRails: RailProduct[] = rails.filter((r) => r.published !== false);

export const featuredRails: RailProduct[] = publishedRails.filter((r) => r.featured);

export function getRailBySlug(slug: string): RailProduct | undefined {
  return publishedRails.find((r) => r.slug === slug);
}

/**
 * Pick related rails for a detail page: prefer rails sharing a standard or an
 * application, then fall back to the catalogue order.
 */
export function getRelatedRails(product: RailProduct, count = 4): RailProduct[] {
  const others = publishedRails.filter((r) => r.id !== product.id);
  const score = (r: RailProduct) => {
    let s = 0;
    if (product.standardKey && r.standardKey === product.standardKey) s += 2;
    s += r.applicationKeys.filter((a) => product.applicationKeys.includes(a)).length;
    return s;
  };
  return [...others].sort((a, b) => score(b) - score(a)).slice(0, count);
}
