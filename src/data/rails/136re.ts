import type { RailProduct } from './types';

/**
 * 136RE — AREMA rail.
 *
 * Only the profile name, standard family and application categories are taken
 * from the supplied UI reference. Every numeric / technical value is left
 * `null` on purpose: see `pendingFields` and docs/项目大纲与架构.md §13.
 */
export const rail136re: RailProduct = {
  id: '136re',
  name: '136RE',
  slug: '136re',

  railProfile: '136RE',
  standardKey: 'arema',
  steelGrade: null,
  heatTreatmentKey: null,
  unitWeight: null,
  dimensions: null,
  length: null,
  tolerance: null,
  applicationKeys: ['heavyHaul', 'mainline'],

  packaging: null,
  leadTime: null,

  coverImage: '/images/rails/136re.webp',
  productSheet: '/images/rails/136re-sheet.webp',
  dimensionDrawing: '/images/rails/136re-dims.webp',
  gallery: [],
  datasheet: null,
  drawing: null,

  seoTitle: '136RE Rail — AREMA Heavy-Haul Rail | YIAN Tech Global',
  seoDescription:
    '136RE AREMA rail for heavy-haul and mainline railway projects, manufactured by Pangang. Send your specification and request a quote.',
  seoTitleEs: 'Riel 136RE — Riel AREMA para Carga Pesada | YIAN Tech Global',
  seoDescriptionEs:
    'Riel 136RE AREMA para proyectos ferroviarios de carga pesada y línea principal, fabricado por Pangang. Envíe su especificación y solicite una cotización.',

  featured: true,
  published: true,
  pendingFields: ['standardKey', 'applicationKeys'],
};
