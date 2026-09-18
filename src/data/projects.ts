/**
 * Reference projects.
 *
 * Every fact on this page is drawn from public reporting. Sources:
 *   · 《共建"一带一路"的攀钢印记》四川日报 / 新浪财经, 2023-10-30
 *   · 《全线开通的中老铁路上，攀钢钢轨占比超6成》四川在线, 2021-12-04
 *
 * LEGAL RULE: these are references for Pangang-manufactured rail, NOT projects
 * delivered by YIAN Tech Global. The page must always carry the attribution
 * line (`projectsPage.attribution`) so the two are never conflated.
 *
 * TODO before launch: the aggregate figures (36 countries / 3,000,000 t /
 * five continents) are as reported in October 2023 — confirm they are still
 * current with the project owner.
 */

export interface Localised {
  en: string;
  es: string;
}

export interface ProjectReference {
  id: string;
  name: Localised;
  country: Localised;
  /** What Pangang supplied. */
  scope: Localised;
  summary: Localised;
  year: string;
  /** Only set where a matching photograph exists in the source library. */
  image?: string;
  imageAlt?: Localised;
  /**
   * Link to an English-language report on the project, shown as a reference
   * button. These describe the projects themselves — the tonnage figures in
   * `scope` come from the Chinese reporting listed in docs/项目文档.md §8.
   */
  moreUrl?: string;
}

/** Projects with a matching photograph — shown as cards. */
export const featuredProjects: ProjectReference[] = [
  {
    id: 'jakarta-bandung',
    moreUrl: 'http://www.china.org.cn/world/Off_the_Wire/2025-06/26/content_117949608.shtml',
    name: {
      en: 'Jakarta–Bandung High-Speed Railway',
      es: 'Ferrocarril de Alta Velocidad Yakarta–Bandung',
    },
    country: { en: 'Indonesia', es: 'Indonesia' },
    scope: {
      en: '38,000 t — the entire rail supply for the line',
      es: '38.000 t — el suministro completo de carril para la línea',
    },
    summary: {
      en: "Southeast Asia's first high-speed railway, built to Chinese standards. Pangang won the full contract for long fixed-length rail — the first large-scale export of Chinese-standard high-speed rail.",
      es: 'El primer ferrocarril de alta velocidad del sudeste asiático, construido según normas chinas. Pangang obtuvo el contrato completo de carril largo de longitud fija: la primera exportación a gran escala de carril de alta velocidad de norma china.',
    },
    year: '2023',
    image: '/images/rail-036.webp',
    imageAlt: {
      en: 'High-speed train on the Jakarta–Bandung line, Indonesia',
      es: 'Tren de alta velocidad en la línea Yakarta–Bandung, Indonesia',
    },
  },
  {
    id: 'china-laos',
    moreUrl: 'http://english.news.cn/asiapacific/20251204/01de44255bf14093a1a20531389e7a4e/c.html',
    name: { en: 'China–Laos Railway', es: 'Ferrocarril China–Laos' },
    country: { en: 'China / Laos', es: 'China / Laos' },
    scope: {
      en: '120,000+ t — all turnout rail plus the full domestic-section supply',
      es: 'Más de 120.000 t — todo el carril de desvío y el suministro completo del tramo nacional',
    },
    summary: {
      en: 'A 1,035 km line built to Chinese technical standards through difficult mountain terrain, connecting Kunming with Vientiane.',
      es: 'Una línea de 1.035 km construida según normas técnicas chinas a través de terreno montañoso difícil, que conecta Kunming con Vientián.',
    },
    year: '2021',
    image: '/images/rail-045.webp',
    imageAlt: {
      en: 'Track on the China–Laos Railway',
      es: 'Vía del ferrocarril China–Laos',
    },
  },
];

/** Further references, listed without photographs. */
export const otherProjects: ProjectReference[] = [
  {
    id: 'addis-djibouti',
    moreUrl:
      'https://thediplomat.com/2026/02/the-addis-ababa-djibouti-railway-still-growing-8-years-later/',
    name: {
      en: 'Addis Ababa–Djibouti Railway',
      es: 'Ferrocarril Adís Abeba–Yibuti',
    },
    country: { en: 'Ethiopia / Djibouti', es: 'Etiopía / Yibuti' },
    scope: {
      en: '~100,000 t — full rail supply',
      es: '~100.000 t — suministro completo de carril',
    },
    summary: {
      en: "Africa's first cross-border electrified railway, 752 km.",
      es: 'El primer ferrocarril electrificado transfronterizo de África, 752 km.',
    },
    year: '2016',
  },
  {
    id: 'mombasa-nairobi',
    moreUrl: 'https://news.cgtn.com/news/3d557a4e3341444e/index.html',
    name: {
      en: 'Mombasa–Nairobi Standard Gauge Railway',
      es: 'Ferrocarril de ancho estándar Mombasa–Nairobi',
    },
    country: { en: 'Kenya', es: 'Kenia' },
    scope: {
      en: '10,000+ t — one third of the project requirement',
      es: 'Más de 10.000 t — un tercio del requisito del proyecto',
    },
    summary: {
      en: 'The first international trunk line outside China built and operated entirely to Chinese standards.',
      es: 'La primera línea troncal internacional fuera de China construida y operada íntegramente según normas chinas.',
    },
    year: '2017',
  },
  {
    id: 'addis-light-rail',
    moreUrl: 'https://www.xinhuanet.com/english/2019-04/27/c_138015842.htm',
    name: { en: 'Addis Ababa Light Rail', es: 'Tren Ligero de Adís Abeba' },
    country: { en: 'Ethiopia', es: 'Etiopía' },
    scope: { en: 'Full rail supply', es: 'Suministro completo de carril' },
    summary: {
      en: "Africa's first modern light rail system in commercial operation.",
      es: 'El primer sistema de tren ligero moderno de África en operación comercial.',
    },
    year: '2015',
  },
  {
    id: 'sri-lanka',
    moreUrl: 'http://en.sasac.gov.cn/2019/04/15/c_1352.htm',
    name: { en: 'Sri Lanka modern railway', es: 'Ferrocarril moderno de Sri Lanka' },
    country: { en: 'Sri Lanka', es: 'Sri Lanka' },
    scope: { en: 'Rail supplied', es: 'Carril suministrado' },
    summary: {
      en: "The country's first modern railway in nearly a century.",
      es: 'El primer ferrocarril moderno del país en casi un siglo.',
    },
    year: '2019',
  },
];

/** Headline track-record figures. See TODO at the top of this file. */
export const trackRecord = [
  { value: '36', labelKey: 'projects.stat.countries' },
  { value: '5', labelKey: 'projects.stat.continents' },
  { value: '3,000,000+', labelKey: 'projects.stat.tonnes' },
] as const;
