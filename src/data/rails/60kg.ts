import type { RailProduct } from './types';

/** 60kg/m — UIC rail. Technical values pending project-owner verification. */
export const rail60kg: RailProduct = {
  id: '60kg',
  name: '60kg/m',
  slug: '60kg',

  railProfile: '60kg/m',
  standardKey: 'uic',
  steelGrade: null,
  heatTreatmentKey: null,
  unitWeight: null,
  dimensions: null,
  length: null,
  tolerance: null,
  applicationKeys: ['generalRailway'],

  packaging: null,
  leadTime: null,

  coverImage: '/images/rails/60kg.webp',
  productSheet: '/images/rails/60kg-sheet.webp',
  dimensionDrawing: '/images/rails/60kg-dims.webp',
  gallery: [],
  datasheet: null,
  drawing: null,

  seoTitle: '60kg/m Rail — UIC Rail | YIAN Tech Global',
  seoDescription:
    '60kg/m UIC rail for general railway projects, manufactured by Pangang. Send your specification and request a quote.',
  seoTitleEs: 'Riel 60kg/m — Riel UIC | YIAN Tech Global',
  seoDescriptionEs:
    'Riel 60kg/m UIC para proyectos ferroviarios generales, fabricado por Pangang. Envíe su especificación y solicite una cotización.',

  featured: true,
  published: true,
  pendingFields: ['standardKey', 'applicationKeys'],
};
