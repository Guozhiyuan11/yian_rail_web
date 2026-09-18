import type { RailProduct } from './types';

/**
 * QU120 — crane rail.
 *
 * The supplied reference shows no standard family for QU120, so `standardKey`
 * stays `null` and the corresponding row is hidden in the UI. This is the
 * intended behaviour for any unverified field.
 */
export const railQu120: RailProduct = {
  id: 'qu120',
  name: 'QU120',
  slug: 'qu120',

  railProfile: 'QU120',
  standardKey: null,
  steelGrade: null,
  heatTreatmentKey: null,
  unitWeight: null,
  dimensions: null,
  length: null,
  tolerance: null,
  applicationKeys: ['craneRail', 'ports', 'industrial'],

  packaging: null,
  leadTime: null,

  coverImage: '/images/rails/qu120.webp',
  productSheet: '/images/rails/qu120-sheet.webp',
  dimensionDrawing: '/images/rails/qu120-dims.webp',
  gallery: [],
  datasheet: null,
  drawing: null,

  seoTitle: 'QU120 Crane Rail | YIAN Tech Global',
  seoDescription:
    'QU120 crane rail for ports and industrial applications, manufactured by Pangang. Send your specification and request a quote.',
  seoTitleEs: 'Riel de Grúa QU120 | YIAN Tech Global',
  seoDescriptionEs:
    'Riel de grúa QU120 para puertos y aplicaciones industriales, fabricado por Pangang. Envíe su especificación y solicite una cotización.',

  featured: true,
  published: true,
  pendingFields: ['applicationKeys'],
};
