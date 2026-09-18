import type { en } from './en';

type TranslationKeys = keyof typeof en;

/**
 * Spanish UI strings — a real localised version (not runtime machine
 * translation). Mirrors `en.ts` key-for-key; the Record type below makes the
 * build fail if any key is missing.
 */
export const es: Record<TranslationKeys, string> = {
  // ---- Brand ------------------------------------------------------------
  'brand.name': 'YIAN Tech Global',
  'brand.nameUpper': 'YIAN TECH GLOBAL',
  'brand.claim': 'Conectamos Proyectos Ferroviarios Globales',
  'brand.values': 'Confiable · Profesional · Global · Sostenible',
  'brand.tagline': 'Forjando juntos el futuro',

  // ---- Language switcher -------------------------------------------------
  'lang.label': 'Idioma',
  'lang.en': 'English',
  'lang.es': 'Español',
  'lang.switch': 'Cambiar idioma',

  // ---- Navigation --------------------------------------------------------
  'nav.home': 'Inicio',
  'nav.railProducts': 'Productos de Riel',
  'nav.applications': 'Aplicaciones',
  'nav.manufacturing': 'Fabricación',
  'nav.exportDelivery': 'Exportación y Entrega',
  'nav.about': 'Nosotros',
  'nav.contact': 'Contacto',
  'nav.openMenu': 'Abrir menú',
  'nav.closeMenu': 'Cerrar menú',
  'nav.primary': 'Navegación principal',
  'nav.skipToContent': 'Ir al contenido',

  // ---- Calls to action ---------------------------------------------------
  'cta.projectInfo': 'Información del proyecto',
  'cta.readReport': 'Leer reportaje',
  'cta.requestQuote': 'Solicitar Cotización',
  'cta.viewRailProducts': 'Ver Productos de Riel',
  'cta.viewDetails': 'Ver Detalles',
  'cta.quoteShort': 'Cotizar',
  'cta.requestShort': 'Cotizar',
  'cta.emailUs': 'Escríbanos',
  'cta.whatsapp': 'WhatsApp',
  'cta.contactSales': 'Contactar Ventas',
  'cta.downloadDatasheet': 'Descargar Ficha Técnica',
  'cta.learnMore': 'Más Información',
  'cta.learnMoreRole': 'Conozca Nuestro Rol',
  'cta.submitRequest': 'Enviar Solicitud',
  'cta.clearFilters': 'Limpiar Filtros',
  'cta.viewAllProducts': 'Ver Todos los Productos',
  'cta.exploreManufacturing': 'Ver Fabricación',
  'cta.contactUs': 'Contáctenos',
  'cta.backHome': 'Volver al Inicio',
  'cta.filters': 'Filtros',
  'cta.applyFilters': 'Aplicar Filtros',
  'cta.close': 'Cerrar',
  'cta.viewProject': 'Conozca Su Proyecto',
  'cta.viewApplications': 'Ver Aplicaciones',

  // ---- Common ------------------------------------------------------------
  'common.home': 'Inicio',
  'common.railProducts': 'Productos de Riel',
  'common.products': 'productos',
  'common.product': 'producto',
  'common.required': 'Obligatorio',
  'common.optional': 'Opcional',
  'common.all': 'Todos',
  'common.search': 'Buscar',
  'common.sortBy': 'Ordenar por',
  'common.sortFeatured': 'Destacados',
  'common.sortNameAsc': 'Nombre (A–Z)',
  'common.todo': 'PENDIENTE — por confirmar',
  'common.imagePlaceholder': 'Imagen de referencia',
  'common.breadcrumb': 'Ruta de navegación',

  // ---- Home · hero -------------------------------------------------------
  'home.hero.eyebrow': 'Carril Ferroviario Chino',
  'home.hero.title': 'Carril Ferroviario Chino para Proyectos Globales',
  'home.hero.subtitle':
    'Ventas internacionales y coordinación de proyectos para carril ferroviario suministrado a proyectos en todo el mundo.',

  // ---- Home · trust strip ------------------------------------------------
  'home.trust.railSteel.title': 'Acero Ferroviario de Alta Calidad',
  'home.trust.railSteel.desc': 'Rieles fabricados bajo estándares ferroviarios internacionales.',
  'home.trust.export.title': 'Capacidad de Exportación',
  'home.trust.export.desc': 'Documentación de exportación y coordinación logística.',
  'home.trust.quality.title': 'Control de Calidad',
  'home.trust.quality.desc': 'Inspección, ensayos y documentación de calidad.',
  'home.trust.delivery.title': 'Soporte de Entrega Global',
  'home.trust.delivery.desc': 'Coordinación de entrega hasta su obra.',

  // ---- Home · our role ---------------------------------------------------
  'home.role.eyebrow': 'Nuestro Rol',
  'home.role.title': 'Su Socio para Carril Ferroviario de Calidad de Exportación',
  'home.role.lead':
    'YIAN Tech Global es el contacto de ventas internacionales y coordinación de proyectos para carril ferroviario producido en China y suministrado a proyectos en todo el mundo.',
  'home.role.point1':
    'Gestionamos la comunicación con clientes internacionales y equipos de proyecto.',
  'home.role.point2': 'Coordinamos la selección de productos según sus requisitos.',
  'home.role.point3': 'El carril se produce en China según normas ferroviarias reconocidas.',
  'home.role.point4':
    'Los detalles de suministro, técnicos, comerciales y de exportación se confirman durante el proceso real del proyecto.',

  // ---- Home · featured products -----------------------------------------
  'home.featured.eyebrow': 'Productos',
  'home.featured.title': 'Productos de Riel Destacados',
  'home.featured.subtitle':
    'Una primera selección de perfiles de riel disponibles para proyectos ferroviarios internacionales.',

  // ---- Home · why --------------------------------------------------------
  'home.why.eyebrow': 'Por qué este carril',
  'home.why.title': 'Por Qué los Compradores Eligen Carril Ferroviario Chino',
  'home.why.subtitle':
    'Producción de carril a gran escala en China, coordinada internacionalmente por YIAN Tech Global para compradores del exterior.',
  'home.why.item1.title': 'Capacidad de Exportación',
  'home.why.item1.desc': 'Experiencia y documentación de exportación internacional.',
  'home.why.item2.title': 'Cobertura de Perfiles',
  'home.why.item2.desc': 'Múltiples perfiles y estándares internacionales de riel.',
  'home.why.item3.title': 'Estándares Globales',
  'home.why.item3.desc': 'Rieles producidos bajo estándares ferroviarios reconocidos.',
  'home.why.item4.title': 'Tratamiento Térmico',
  'home.why.item4.desc': 'Capacidad de tratamiento térmico para aplicaciones exigentes.',
  'home.why.item5.title': 'Inspección y Ensayos',
  'home.why.item5.desc': 'Inspección en proceso y ensayos de laboratorio.',
  'home.why.item6.title': 'Múltiples Aplicaciones',
  'home.why.item6.desc': 'Carga pesada, alta velocidad, metro e industria.',

  // ---- Home · manufacturing ---------------------------------------------
  'home.mfg.eyebrow': 'Fabricación y Calidad',
  'home.mfg.title': 'Fabricación y Calidad',
  'home.mfg.subtitle':
    'La producción y el control de calidad recorren toda la línea, con inspección y ensayos registrados en cada etapa.',
  'home.mfg.item1.title': 'Laminación',
  'home.mfg.item1.desc': 'Laminación de rieles en líneas de producción modernas.',
  'home.mfg.item2.title': 'Tratamiento Térmico',
  'home.mfg.item2.desc': 'Tratamiento térmico para rieles críticos.',
  'home.mfg.item3.title': 'Inspección',
  'home.mfg.item3.desc': 'Múltiples métodos de inspección en producción.',
  'home.mfg.item4.title': 'Ensayos',
  'home.mfg.item4.desc': 'Ensayos de laboratorio y mecánicos.',
  'home.mfg.item5.title': 'Documentos de Calidad',
  'home.mfg.item5.desc': 'Documentación que acompaña el suministro.',

  // ---- Home · standards --------------------------------------------------
  'home.standards.eyebrow': 'Estándares y Aplicaciones',
  'home.standards.title': 'Estándares y Aplicaciones',
  'home.standards.standardsLabel': 'Estándares Internacionales',
  'home.standards.applicationsLabel': 'Aplicaciones Típicas',
  'home.standards.note':
    'La disponibilidad de estándares se confirma según el requisito del proyecto. Contáctenos con su especificación.',

  // ---- Home · export -----------------------------------------------------
  'home.export.eyebrow': 'Exportación y Entrega',
  'home.export.title': 'Exportación y Entrega',
  'home.export.subtitle':
    'Soporte práctico de exportación y logística desde la confirmación del pedido hasta la entrega en su obra.',
  'home.export.item1.title': 'Calificación de Exportación',
  'home.export.item1.desc': 'Habilitado para la exportación de productos ferroviarios.',
  'home.export.item2.title': 'Embalaje',
  'home.export.item2.desc': 'Embalaje estándar de exportación.',
  'home.export.item3.title': 'Documentación',
  'home.export.item3.desc': 'Documentación completa de exportación.',
  'home.export.item4.title': 'Logística',
  'home.export.item4.desc': 'Arreglos de embarque flexibles.',
  'home.export.item5.title': 'Coordinación de Entrega',
  'home.export.item5.desc': 'Coordinación de entrega de principio a fin.',

  // ---- Home · process ----------------------------------------------------
  'home.process.eyebrow': 'Proceso de Cooperación',
  'home.process.title': 'Nuestro Proceso de Cooperación',
  'home.process.step1.title': 'Enviar RFQ',
  'home.process.step1.desc': 'Cuéntenos su requisito.',
  'home.process.step2.title': 'Confirmación Técnica y Comercial',
  'home.process.step2.desc': 'Producto, cantidad, precio y entrega.',
  'home.process.step3.title': 'Coordinación de Suministro',
  'home.process.step3.desc': 'Producción y gestión de exportación.',
  'home.process.step4.title': 'Exportación y Entrega',
  'home.process.step4.desc': 'Hasta su destino.',

  // ---- Home · final CTA --------------------------------------------------
  'home.finalCta.title': 'Cuéntenos su Requisito de Riel',
  'home.finalCta.subtitle': 'Nuestro equipo le responderá lo antes posible.',

  // ---- Products listing --------------------------------------------------
  'products.eyebrow': 'Productos de Riel',
  'products.title': 'Productos de Riel',
  'products.subtitle': 'Carril ferroviario de alta calidad para proyectos en todo el mundo.',
  'products.searchLabel': 'Buscar productos de riel',
  'products.searchPlaceholder': 'Busque por perfil, estándar o aplicación…',
  'products.filterTitle': 'Filtrar por',
  'products.filterRailProfile': 'Perfil de Riel',
  'products.filterStandard': 'Estándar',
  'products.filterApplication': 'Aplicación',
  'products.filterHeatTreatment': 'Tratamiento Térmico',
  'products.results': '{count} productos',
  'products.resultOne': '1 producto',
  'products.empty.title': 'Ningún producto coincide con sus filtros',
  'products.empty.text': 'Pruebe limpiar uno o más filtros para ver más resultados.',
  'products.notListed.title': '¿Necesita un producto no listado?',
  'products.notListed.text':
    'Contáctenos con su requisito. Podemos conseguir más perfiles de carril.',
  'products.sidebarAria': 'Filtros de productos',

  // ---- Product detail ----------------------------------------------------
  'detail.tabs.overview': 'Resumen',
  'detail.tabs.dimensions': 'Dimensiones',
  'detail.tabs.quality': 'Calidad y Documentos',
  'detail.tabs.applications': 'Aplicaciones',
  'detail.tabs.related': 'Productos Relacionados',
  'detail.section.overview': 'Resumen del Producto',
  'detail.section.dimensions': 'Sección y Dimensiones',
  'detail.section.quality': 'Calidad y Documentos',
  'detail.section.manufacturedBy': 'Fabricado por Pangang',
  'detail.section.applications': 'Aplicaciones',
  'detail.section.related': 'Productos Relacionados',
  'detail.spec.railProfile': 'Perfil de Riel',
  'detail.spec.standard': 'Estándar',
  'detail.spec.unitWeight': 'Peso Unitario',
  'detail.spec.dimensions': 'Dimensiones',
  'detail.spec.steelGrade': 'Grado de Acero',
  'detail.spec.heatTreatment': 'Tratamiento Térmico',
  'detail.spec.length': 'Longitud',
  'detail.spec.tolerance': 'Tolerancia',
  'detail.spec.application': 'Aplicación',
  'detail.spec.packaging': 'Embalaje',
  'detail.spec.leadTime': 'Plazo de Entrega',
  'detail.specification': 'Especificación clave',
  'detail.drawingPending': 'Plano por proporcionar',
  'detail.drawingNote': 'Consulte el plano de planta para el perfil con dimensiones completas.',
  'detail.manufacturedByText':
    'Este riel es fabricado por Pangang. YIAN Tech Global coordina las ventas internacionales, la selección técnica y la comunicación de exportación para clientes del exterior.',
  'detail.quality.millTest.title': 'Certificado de Colada',
  'detail.quality.millTest.desc': 'Certificado de material que acompaña el suministro.',
  'detail.quality.inspection.title': 'Inspección y Ensayos',
  'detail.quality.inspection.desc': 'Inspección y ensayos en proceso.',
  'detail.quality.thirdParty.title': 'Inspección de Terceros',
  'detail.quality.thirdParty.desc': 'Disponible a solicitud cuando se requiera.',
  'detail.quality.packaging.title': 'Embalaje',
  'detail.quality.packaging.desc': 'Embalaje de exportación según el requisito del proyecto.',
  'detail.quality.exportDocs.title': 'Documentación de Exportación',
  'detail.quality.exportDocs.desc': 'Documentos preparados para la exportación.',
  'detail.quality.qa.title': 'Aseguramiento de Calidad',
  'detail.quality.qa.desc': 'Gestión de calidad durante el proceso productivo.',
  'detail.rfq.title': 'Solicitar Cotización de {name}',
  'detail.rfq.subtitle':
    'Cuéntenos su requisito de proyecto. Nuestro equipo le acompañará en el proceso.',

  // ---- RFQ form ----------------------------------------------------------
  'rfq.section.requirement': 'Requisito de Riel',
  'rfq.section.company': 'Empresa y Contacto',
  'rfq.section.details': 'Detalles Adicionales',
  'rfq.product': 'Producto / Perfil de Riel',
  'rfq.productPlaceholder': 'p. ej. 136RE, 60E1…',
  'rfq.standard': 'Estándar / Grado',
  'rfq.standardPlaceholder': 'p. ej. AREMA, EN, UIC…',
  'rfq.specification': 'Especificación',
  'rfq.quantity': 'Cantidad',
  'rfq.quantityPlaceholder': 'p. ej. 500',
  'rfq.unit': 'Unidad',
  'rfq.unitTons': 'Toneladas métricas',
  'rfq.unitMeters': 'Metros',
  'rfq.unitPieces': 'Piezas',
  'rfq.destinationCountry': 'País de Destino',
  'rfq.destinationPort': 'Puerto de Destino',
  'rfq.deliveryDate': 'Fecha de Entrega Requerida',
  'rfq.application': 'Aplicación',
  'rfq.technical': 'Requisito Técnico',
  'rfq.technicalPlaceholder':
    'Comparta los detalles de su proyecto, requisitos técnicos o consultas.',
  'rfq.attachment': 'Adjunto',
  'rfq.chooseFile': 'Elegir Archivo',
  'rfq.noFileChosen': 'Ningún archivo seleccionado',
  'rfq.fileHint': 'Máx. 10 MB. PDF, DOCX, JPG o PNG.',
  'rfq.company': 'Empresa',
  'rfq.contactPerson': 'Persona de Contacto',
  'rfq.email': 'Correo Electrónico',
  'rfq.phone': 'Teléfono / WhatsApp',
  'rfq.country': 'País / Región',
  'rfq.selectCountry': 'Seleccione un país',
  'rfq.captcha': 'No soy un robot',
  'rfq.captchaNote': 'La protección captcha se activará antes del lanzamiento.',
  'rfq.requiredNote': 'Los campos marcados con * son obligatorios.',
  'rfq.submit': 'Enviar Solicitud',
  'rfq.notice':
    'El envío del formulario se conectará en una etapa posterior. Por ahora, utilice el correo electrónico o WhatsApp.',

  // ---- Manufacturing page -----------------------------------------------
  'mfgPage.eyebrow': 'Fabricación',
  'mfgPage.title': 'Fabricación y Calidad',
  'mfgPage.subtitle':
    'Líneas de producción avanzadas, control de calidad estricto y ensayos integrales garantizan rieles de alto rendimiento para mercados globales.',
  'mfgPage.process.title': 'Proceso de Fabricación',
  'mfgPage.process.text':
    'La fabricación se realiza en Pangang. A continuación se detallan las etapas; hay documentación adicional disponible a solicitud.',
  'mfgPage.quality.title': 'Aseguramiento de Calidad',
  'mfgPage.quality.text':
    'La gestión de calidad abarca desde la materia prima hasta el riel terminado, con inspección y ensayos registrados durante el proceso.',
  'mfgPage.gallery.title': 'Producción e Inspección',
  'mfgPage.cta.title': 'Consulte un Requisito de Fabricación',
  'mfgPage.cta.text': 'Comparta su especificación y nuestro equipo le dará seguimiento.',

  // ---- Export & Delivery page -------------------------------------------
  'exportPage.eyebrow': 'Exportación y Entrega',
  'exportPage.title': 'Exportación y Entrega',
  'exportPage.subtitle':
    'Capacidad de exportación confiable y soporte logístico profesional para clientes globales.',
  'exportPage.capabilities.title': 'Capacidad de Exportación',
  'exportPage.shipment.title': 'Soporte de Entrega Global',
  'exportPage.shipment.text':
    'Coordinamos la gestión de exportación y la entrega durante el proceso del proyecto para que su material llegue al destino acordado.',
  'exportPage.galleryTitle': 'Embalaje, Almacenaje y Carga',
  'exportPage.cta.title': 'Planifique su Embarque',
  'exportPage.cta.text': 'Indíquenos su destino y requisito de entrega.',

  // ---- About page --------------------------------------------------------
  'aboutPage.eyebrow': 'Nosotros',
  'aboutPage.title': 'Acerca de YIAN Tech Global',
  'aboutPage.subtitle': 'Conectamos proyectos globales con materiales confiables.',
  'aboutPage.company.title': 'Nuestra Empresa',
  'aboutPage.company.text':
    'YIAN Tech Global es una empresa internacional de ventas y coordinación de proyectos enfocada en rieles ferroviarios fabricados por Pangang. Nos comunicamos con clientes del exterior, coordinamos la selección de productos y apoyamos los requisitos del proyecto.',
  'aboutPage.role.title': 'Nuestro Rol',
  'aboutPage.role.item1.title': 'Atención a Consultas Globales',
  'aboutPage.role.item1.desc': 'Primer punto de contacto para compradores internacionales.',
  'aboutPage.role.item2.title': 'Coordinación Técnica y Comercial',
  'aboutPage.role.item2.desc': 'Ajuste de productos a los requisitos del proyecto.',
  'aboutPage.role.item3.title': 'Coordinación de Suministro',
  'aboutPage.role.item3.desc': 'Coordinación del suministro con Pangang.',
  'aboutPage.role.item4.title': 'Exportación y Entrega a Mercados Globales',
  'aboutPage.role.item4.desc': 'Apoyo al proceso de exportación de principio a fin.',
  'aboutPage.pangang.title': 'Sobre Pangang',
  'aboutPage.pangang.text':
    'Pangang es la fuente de fabricación de los rieles ferroviarios ofrecidos en este sitio web. La fabricación y la ejecución de exportación se realizan a través de Pangang según el acuerdo comercial real.',
  'aboutPage.commitment.title': 'Nuestro Compromiso',
  'aboutPage.commitment.item1.title': 'Servicio Profesional',
  'aboutPage.commitment.item1.desc': 'Comunicación clara y ágil.',
  'aboutPage.commitment.item2.title': 'Cadena de Suministro Confiable',
  'aboutPage.commitment.item2.desc': 'Coordinada desde la acería hasta el embarque.',
  'aboutPage.commitment.item3.title': 'Cooperación a Largo Plazo',
  'aboutPage.commitment.item3.desc': 'Construimos relaciones duraderas.',
  'aboutPage.commitment.item4.title': 'Soporte Global',
  'aboutPage.commitment.item4.desc': 'Apoyo a clientes en distintos mercados.',
  'aboutPage.cta.title': 'Construyamos Juntos un Ferrocarril Más Fuerte',
  'aboutPage.cta.text': 'Contáctenos para conversar sobre su proyecto.',

  // ---- Contact page ------------------------------------------------------
  'contactPage.eyebrow': 'Contacto',
  'contactPage.title': 'Cuéntenos su Requisito de Riel',
  'contactPage.subtitle': 'Le responderemos lo antes posible.',
  'contactPage.form.title': 'Envíenos una Consulta',
  'contactPage.other.title': 'Otras Formas de Contactarnos',
  'contactPage.location.title': 'Nuestra Ubicación',
  'contactPage.mapPlaceholder': 'Mapa de referencia',
  'contactPage.servingNote': 'Al Servicio de Proyectos Ferroviarios Globales',

  // ---- Privacy / 404 -----------------------------------------------------
  'privacyPage.title': 'Política de Privacidad',
  'privacyPage.updated': 'Última actualización: por confirmar',
  'privacyPage.todo':
    'El texto de la política de privacidad está pendiente de revisión legal y será proporcionado por el propietario del proyecto antes del lanzamiento.',
  'notFound.title': 'Página no encontrada',
  'notFound.text': 'La página que busca no existe o ha sido movida.',

  // ---- Footer ------------------------------------------------------------
  'footer.quickLinks': 'Enlaces Rápidos',
  'footer.contactUs': 'Contáctenos',
  'footer.followUs': 'Síganos',
  'footer.rights': '© 2026 YIAN Tech Global. Todos los derechos reservados.',
  'footer.privacy': 'Política de Privacidad',
  'footer.terms': 'Términos de Uso',

  // ---- Standards (labels) ------------------------------------------------
  'standard.arema': 'AREMA',
  'standard.en': 'EN',
  'standard.uic': 'UIC',
  'standard.bs': 'BS',
  'standard.as': 'AS',
  'standard.tb': 'TB',

  // ---- Applications (labels) --------------------------------------------
  'application.heavyHaul': 'Carga Pesada',
  'application.highSpeed': 'Alta Velocidad',
  'application.metro': 'Metro',
  'application.mining': 'Minería',
  'application.craneRail': 'Riel de Grúa',
  'application.generalRailway': 'Ferrocarril General',
  'application.mainline': 'Línea Principal',
  'application.freight': 'Carga',
  'application.industrial': 'Industrial',
  'application.ports': 'Puertos',

  // ---- Heat treatment (labels) ------------------------------------------
  'heatTreatment.headHardened': 'Cabeza Endurecida',
  'heatTreatment.wholeHardened': 'Endurecido Total',
  'heatTreatment.others': 'Otros',
  // ---- Projects / track record -------------------------------------------
  'nav.projects': 'Proyectos',
  'home.projects.eyebrow': 'Trayectoria',
  'home.projects.title': 'Carril en Servicio en Todo el Mundo',
  'home.projects.subtitle':
    'El carril producido en China circula en líneas de alta velocidad, carga pesada y metro en China y en el exterior.',
  'home.projects.cta': 'Ver Proyectos',
  'projectsPage.eyebrow': 'Trayectoria',
  'projectsPage.title': 'Carril en Servicio en Todo el Mundo',
  'projectsPage.subtitle':
    'Líneas de referencia suministradas con carril producido en China: desde proyectos de alta velocidad en el sudeste asiático hasta líneas de carga pesada y metro.',
  'projectsPage.attribution':
    'El carril al que se refiere esta página fue fabricado por Pangang. YIAN Tech Global coordina las ventas internacionales y la comunicación de proyectos; los proyectos citados no son proyectos de YIAN. Las cifras proceden de informes públicos.',
  'projectsPage.featuredTitle': 'Líneas Insignia',
  'projectsPage.otherTitle': 'Otras Referencias',
  'projectsPage.col.project': 'Proyecto',
  'projectsPage.col.country': 'País',
  'projectsPage.col.year': 'Año',
  'projectsPage.col.scope': 'Carril suministrado',
  'projectsPage.ctaTitle': 'Consulte un Requisito de Proyecto',
  'projectsPage.ctaText': 'Envíenos su especificación y le responderemos de forma coordinada.',
  'projects.stat.countries': 'Países y regiones alcanzados',
  'projects.stat.continents': 'Continentes',
  'projects.stat.tonnes': 'Carril exportado en total',
  // ---- Hero carousel -----------------------------------------------------
  'hero.label': 'Destacados',
  'hero.prev': 'Diapositiva anterior',
  'hero.next': 'Diapositiva siguiente',
  'hero.goTo': 'Ir a la diapositiva {n}',
  'hero.hint': 'Pase el cursor por el titular para ver el detalle',

  'hero.s1.eyebrow': 'Carril Ferroviario — Exportación',
  'hero.s1.title': 'Carril Ferroviario Chino para Proyectos Globales',
  'hero.s1.lead':
    'Ventas internacionales y coordinación de proyectos para carril ferroviario destinado a líneas de alta velocidad, carga pesada y metro en todo el mundo.',
  'hero.s1.detail':
    'Perfiles según AREMA, EN, UIC, BS, AS y TB. La documentación de exportación, los registros de inspección y la logística se coordinan desde la acería hasta la obra.',

  'hero.s2.eyebrow': 'Indonesia · 2023',
  'hero.s2.title': 'Ferrocarril de Alta Velocidad Yakarta–Bandung',
  'hero.s2.lead':
    '38.000 t de carril largo de longitud fija para el primer ferrocarril de alta velocidad del sudeste asiático.',
  'hero.s2.detail':
    'Diseñado para 350 km/h y construido según normas chinas: la primera exportación a gran escala de carril largo de alta velocidad de norma china.',

  'hero.s3.eyebrow': 'China / Laos · 2021',
  'hero.s3.title': 'Ferrocarril China–Laos',
  'hero.s3.lead':
    'Más de 120.000 t — todo el carril de desvío y el suministro completo del tramo nacional.',
  'hero.s3.detail':
    'Una línea de 1.035 km trazada a través de terreno montañoso difícil, que conecta Kunming con Vientián.',

  'hero.s4.eyebrow': 'Trayectoria',
  'hero.s4.title': 'Carril en Servicio en Cinco Continentes',
  'hero.s4.lead':
    '36 países y regiones alcanzados, con más de 3.000.000 t de carril exportadas en total.',
  'hero.s4.detail':
    'Líneas de carga pesada, alta velocidad, metro e industriales en África, Asia, Europa y América.',

  // ---- Rail profiles mention ---------------------------------------------
  'home.profiles.title': 'Seis Perfiles Listos para Cotizar',

  // ---- Manufacturing evidence --------------------------------------------
  'home.mfg.evidenceEyebrow': 'Desde la Acería',
  'home.mfg.evidenceTitle': 'Lo Que Podemos Mostrarle',
  'home.mfg.evidenceText':
    'Fotografías de la línea de producción. Los detalles de proceso, tolerancias y registros de ensayo se entregan con cada cotización.',

  // ---- Why (reveal list) --------------------------------------------------
  'home.why.hint': 'Pase el cursor por una fila para ver el detalle',
  // ---- Extended technical copy -------------------------------------------
  'products.intro.eyebrow': 'Fundamentos del riel',
  'products.intro.title': 'Cómo se especifica un carril ferroviario',
  'products.intro.p1':
    'Un carril ferroviario es un perfil de acero laminado en caliente con tres partes: la cabeza, que soporta la carga de la rueda; el alma, el elemento vertical que une cabeza y patín; y el patín, que reparte la carga sobre las traviesas o la losa. El carril se describe por su perfil y por su masa por metro: un carril de 60 kg/m tiene una masa teórica de unos 60 kilogramos por metro de longitud.',
  'products.intro.p2':
    'Las familias de perfiles se desarrollaron región por región, y por eso un mismo servicio puede cubrirse con secciones distintas según el país. Las redes norteamericanas trabajan con perfiles AREMA como el 115RE y el 136RE. Las europeas trabajan con la EN 13674-1, donde los perfiles se designan por masa por metro, como el 60E1. Las redes chinas trabajan con la serie TB. Por eso un carril se especifica como una familia de perfiles más un grado de acero, no una sin el otro.',
  'products.intro.p3':
    'Hoy la mayor parte del carril se tiende como carril soldado continuo: las barras largas se sueldan en una sola vía sobre el terreno, lo que elimina las juntas que antes eran la principal fuente de cargas de impacto. Eso desplaza el énfasis a la rectitud, la constancia de la sección y la soldabilidad del acero, propiedades que importan tanto como el número de perfil del plano.',
  'standard.arema.desc':
    'Práctica norteamericana, publicada por la American Railway Engineering and Maintenance-of-Way Association. Los perfiles suelen designarse por peso en libras por yarda: 115RE, 136RE y similares.',
  'standard.en.desc':
    'Norma europea EN 13674-1, que cubre carril de patín plano de 46 kg/m y superiores. Los perfiles se designan por masa por metro.',
  'standard.uic.desc':
    'Perfiles definidos originalmente por la Unión Internacional de Ferrocarriles. La sección UIC de 60 kg/m sigue siendo una referencia habitual en las redes europeas.',
  'standard.bs.desc':
    'Secciones de carril según norma británica, usadas históricamente en el Reino Unido y en redes de la Commonwealth.',
  'standard.as.desc':
    'Norma australiana AS 1085.1, que cubre las secciones empleadas en las redes de Australia.',
  'standard.tb.desc':
    'Norma de la industria ferroviaria china, que cubre las secciones usadas en la red nacional de China.',
  'application.heavyHaul.desc':
    'Cargas por eje elevadas y tonelaje acumulado muy alto. La resistencia al desgaste y una superficie de rodadura dura importan más que la velocidad.',
  'application.highSpeed.desc':
    'Rectitud, baja tensión residual y sección constante, para que las barras largas soldadas se mantengan alineadas a alta velocidad.',
  'application.metro.desc':
    'Curvas cerradas con aceleraciones y frenadas frecuentes. El control del desgaste y del corrugado determina la elección del grado.',
  'application.mining.desc':
    'Condiciones abrasivas y cargas pesadas, a menudo en vías de planta de difícil acceso para el mantenimiento.',
  'application.craneRail.desc':
    'Cabeza ancha y plana para las ruedas de grúa, en grados endurecidos para las cargas concentradas de una vía de rodadura.',
  'application.generalRailway.desc':
    'Tráfico mixto sobre un trazado estándar, donde el perfil se elige para encajar con el resto de la red.',
  'application.mainline.desc':
    'Carril soldado continuo en un corredor que transporta tanto pasajeros como mercancías.',
  'application.freight.desc':
    'Cargas por eje elevadas a larga distancia, donde la vida frente al desgaste fija el intervalo de mantenimiento.',
  'application.industrial.desc':
    'Vías de planta y apartaderos, normalmente con curvas más cerradas y velocidades menores que una línea principal.',
  'application.ports.desc':
    'Vías de grúa y patio de contenedores, donde la grúa concentra cargas muy altas en un tramo corto de carril.',
  'home.mfg.item1.long':
    'El acero se cuela en desbastes, que se recalentan y pasan por una serie de cilindros acanalados que conforman la sección del carril de forma progresiva. Cada pasada acerca el desbaste al perfil final.',
  'home.mfg.item2.long':
    'En el carril con cabeza endurecida, la cabeza se recalentan y se templa, de modo que la superficie de rodadura queda más dura que el resto de la sección mientras el alma y el patín conservan tenacidad para soportar la flexión.',
  'home.mfg.item3.long':
    'Los controles dimensionales, la inspección superficial y la medición de rectitud acompañan a la producción, de modo que una sección que se sale de tolerancia se detecta antes de salir de la línea.',
  'home.mfg.item4.long':
    'Los ensayos mecánicos y químicos confirman que el acero cumple el grado solicitado. Los resultados se registran con el número de colada, de modo que una entrega puede rastrearse hasta la colada de origen.',
  'home.mfg.item5.long':
    'Cada partida se entrega con documentos de inspección que recogen composición química, propiedades mecánicas y dimensiones, para que el comprador pueda contrastar el carril con la especificación de compra.',
  'exportPage.intro':
    'El carril es una carga difícil. Las barras largas deben manipularse sin doblarse, la elevación debe repartirse para no sobrecargar la sección, y la documentación debe coincidir con el certificado que viaja con el acero.',
  'mfgPage.intro':
    'Esta página explica cómo se fabrica y se verifica el carril ferroviario. Es información general sobre el proceso, ofrecida para que el comprador pueda leer una especificación con confianza.',
};
