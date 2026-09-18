import type { RailProduct } from './types';

/** 60E1 — EN rail. Technical values pending project-owner verification. */
export const rail60e1: RailProduct = {
  id: '60e1',
  name: '60E1',
  slug: '60e1',

  railProfile: '60E1',
  standardKey: 'en',
  steelGrade: null,
  heatTreatmentKey: null,
  unitWeight: null,
  dimensions: null,
  length: null,
  tolerance: null,
  applicationKeys: ['mainline', 'freight'],

  packaging: null,
  leadTime: null,

  coverImage: '/images/rails/60e1.webp',
  // No product sheet supplied yet — see docs/项目文档.md.
  productSheet: null,
  dimensionDrawing: null,
  gallery: [],
  datasheet: null,
  drawing: null,

  seoTitle: '60E1 Rail — EN Standard Rail | YIAN Tech Global',
  seoDescription:
    '60E1 EN standard rail for mainline and freight railway projects, manufactured by Pangang. Send your specification and request a quote.',
  seoTitleEs: 'Riel 60E1 — Riel Estándar EN | YIAN Tech Global',
  seoDescriptionEs:
    'Riel 60E1 estándar EN para proyectos ferroviarios de línea principal y carga, fabricado por Pangang. Envíe su especificación y solicite una cotización.',

  featured: true,
  published: true,
  pendingFields: ['standardKey', 'applicationKeys'],
};
