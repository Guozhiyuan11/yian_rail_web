import type { RailProduct } from './types';

/** 75kg/m — UIC rail. Technical values pending project-owner verification. */
export const rail75kg: RailProduct = {
  id: '75kg',
  name: '75kg/m',
  slug: '75kg',

  railProfile: '75kg/m',
  standardKey: 'uic',
  steelGrade: null,
  heatTreatmentKey: null,
  unitWeight: null,
  dimensions: null,
  length: null,
  tolerance: null,
  applicationKeys: ['mainline', 'industrial'],

  packaging: null,
  leadTime: null,

  coverImage: '/images/rails/75kg.webp',
  productSheet: '/images/rails/75kg-sheet.webp',
  dimensionDrawing: '/images/rails/75kg-dims.webp',
  gallery: [],
  datasheet: null,
  drawing: null,

  seoTitle: '75kg/m Rail — UIC Rail | YIAN Tech Global',
  seoDescription:
    '75kg/m UIC rail for mainline and industrial railway projects, manufactured by Pangang. Send your specification and request a quote.',
  seoTitleEs: 'Riel 75kg/m — Riel UIC | YIAN Tech Global',
  seoDescriptionEs:
    'Riel 75kg/m UIC para proyectos ferroviarios de línea principal e industrial, fabricado por Pangang. Envíe su especificación y solicite una cotización.',

  featured: true,
  published: true,
  pendingFields: ['standardKey', 'applicationKeys'],
};
