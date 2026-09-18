import type { RailProduct } from './types';

/** 115RE — AREMA rail. Technical values pending project-owner verification. */
export const rail115re: RailProduct = {
  id: '115re',
  name: '115RE',
  slug: '115re',

  railProfile: '115RE',
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

  coverImage: '/images/rails/115re.webp',
  productSheet: '/images/rails/115re-sheet.webp',
  dimensionDrawing: '/images/rails/115re-dims.webp',
  gallery: [],
  datasheet: null,
  drawing: null,

  seoTitle: '115RE Rail — AREMA Heavy-Haul Rail | YIAN Tech Global',
  seoDescription:
    '115RE AREMA rail for heavy-haul and mainline railway projects, manufactured by Pangang. Send your specification and request a quote.',
  seoTitleEs: 'Riel 115RE — Riel AREMA para Carga Pesada | YIAN Tech Global',
  seoDescriptionEs:
    'Riel 115RE AREMA para proyectos ferroviarios de carga pesada y línea principal, fabricado por Pangang. Envíe su especificación y solicite una cotización.',

  featured: true,
  published: true,
  pendingFields: ['standardKey', 'applicationKeys'],
};
