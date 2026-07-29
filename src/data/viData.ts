import { Testimonial, MetricStat, ServiceCard, FaqItem, ComparisonRow, ResourceItem, RegionOffice } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    clientName: 'Ing. Fernando Valdivia',
    clientRole: 'Director de Operaciones',
    company: 'Distribuidora del Sur',
    companyCategory: 'Logística & Distribución',
    quote: 'Migramos todo nuestro historial de ventas y clientes disperso en planillas de Excel a un CRM moderno en la nube. Ahora el equipo comercial tiene trazabilidad y automatizaciones de seguimiento, incrementando los cierres en un 25%.',
    metrics: '+25% en conversión de ventas & 0 planillas perdidas',
    dotMatrixShape: 'hourglass'
  },
  {
    id: 'test-2',
    clientName: 'Dra. María Elena Ramos',
    clientRole: 'Gerente de Growth',
    company: 'FinTech Innova',
    companyCategory: 'Finanzas & E-commerce',
    quote: 'Teníamos silos de datos y reportes semanales manuales que tomaban días de trabajo repetitivo. El equipo de Six construyó nuestros dashboards de análisis en tiempo real e ingeniería de datos automática. Ahora tomamos decisiones comerciales al instante.',
    metrics: 'Dashboards 100% automatizados en Looker Studio y Power BI',
    dotMatrixShape: 'cloud-network'
  },
  {
    id: 'test-3',
    clientName: 'Carlos M. Sotomayor',
    clientRole: 'Socio Principal',
    company: 'Logística Global Co.',
    companyCategory: 'Transporte & Supply Chain',
    quote: 'Necesitábamos estructurar nuestras fuentes de datos sin pagar licencias de software prohibitivas. Six diseñó una arquitectura de datos moderna y elástica en la nube que procesa miles de pedidos diarios de forma rápida y con muy bajo costo.',
    metrics: 'Ahorro del 60% en infraestructura vs soluciones enterprise tradicionales',
    dotMatrixShape: 'data-flow'
  }
];

export const METRIC_STATS: MetricStat[] = [
  {
    id: 'stat-1',
    number: '100%',
    label: 'Propuesta Independiente',
    description: 'Buscamos la solución más práctica y accesible para tu presupuesto, libre de ataduras a licencias oficiales costosas.',
    highlightText: 'Enfoque Práctico'
  },
  {
    id: 'stat-2',
    number: '50+',
    label: 'Procesos Automatizados',
    description: 'Migraciones exitosas desde planillas de cálculo Excel hacia CRM modernos y bases de datos integradas en la nube.',
    highlightText: 'Éxito Comercial'
  },
  {
    id: 'stat-3',
    number: '-80%',
    label: 'Tiempo en Reportes',
    description: 'Adiós a la descarga y consolidación manual de datos todos los viernes. Reportes dinámicos que se actualizan solos.',
    highlightText: 'Eficiencia Directa'
  },
  {
    id: 'stat-4',
    number: '10x',
    label: 'Trazabilidad de Ventas',
    description: 'Visualiza todo el recorrido de tus clientes y el rendimiento de tus vendedores en un solo lugar estructurado.',
    highlightText: 'Control Total'
  }
];

export const SERVICES: ServiceCard[] = [
  {
    id: 'service-1',
    title: 'CRM Moderno',
    category: 'crm',
    shortDesc: 'Migra tus planillas Excel a un CRM ágil y centralizado para automatizar tu embudo de ventas, correos y seguimiento comercial.',
    fullDesc: 'Implementamos y adaptamos sistemas CRM que organizan toda la interacción con tus prospectos. Olvídate de oportunidades perdidas, planillas duplicadas y correos sin responder. Automatizamos tareas para optimizar tus procesos comerciales.',
    awsStack: ['Gestión de Leads', 'Embudo de Ventas (Pipeline)'],
    azureStack: ['WhatsApp & Email Trigger', 'Historial Comercial'],
    dotMatrixShape: 'lightning',
    features: ['Centralización completa de contactos', 'Automatización de alertas y tareas', 'Integración con correo y WhatsApp', 'Asignación inteligente de leads']
  },
  {
    id: 'service-2',
    title: 'Ingeniería de Datos & Pipelines',
    category: 'engineering',
    shortDesc: 'Automatiza el flujo de información de tus ventas, inventarios and marketing sin procesos manuales propensos a errores.',
    fullDesc: 'Construimos flujos de extracción, transformación y carga (ETL/ELT) automatizados. Sincronizamos las bases de datos de tu negocio con tu CRM y almacenes de datos, eliminando la necesidad de copiar y pegar archivos a mano.',
    awsStack: ['Pipelines Automáticos', 'Limpieza de Datos'],
    azureStack: ['Conectores API', 'Automatización Cloud'],
    dotMatrixShape: 'data-flow',
    features: ['Ingesta de múltiples fuentes', 'Limpieza y estructuración de datos', 'Monitoreo de flujos activo', 'Cero procesos manuales repetitivos']
  },
  {
    id: 'service-3',
    title: 'Arquitectura de Datos & Soluciones Nube',
    category: 'architecture',
    shortDesc: 'Diseñamos entornos de bases de datos y almacenamiento en la nube, optimizando el rendimiento y reduciendo tus costos operativos.',
    fullDesc: 'Estructuramos tus almacenes de datos y repositorios centralizados (Data Warehouses y Data Lakes) utilizando infraestructuras nube de forma independiente. Nos enfocamos en soluciones elásticas, seguras y adaptadas a tu presupuesto real.',
    awsStack: ['Almacenamiento Elástico S3', 'Bases de Datos Relacionales (RDS)'],
    azureStack: ['Servidores Cloud SQL', 'Políticas de Seguridad & Cifrado'],
    dotMatrixShape: 'lakehouse',
    features: ['Diseño de almacenes elásticos', 'Modelado y optimización de bases de datos', 'Estrategia multicloud independiente', 'Migración segura a la nube']
  },
  {
    id: 'service-4',
    title: 'Análisis y Ciencia de Datos',
    category: 'analytics',
    shortDesc: 'Dashboards automatizados e interactivos que traducen tus datos comerciales y de CRM en decisiones de negocio rentables.',
    fullDesc: 'Diseñamos tableros visuales interactivos (Power BI, Looker Studio o Streamlit) para que puedas ver el rendimiento de ventas, efectividad de embudos y tendencias de clientes en tiempo real sin abrir archivos estáticos.',
    awsStack: ['Dashboards Interactivos', 'Métricas de Negocio'],
    azureStack: ['Modelos de Proyección', 'Visualización en Vivo'],
    dotMatrixShape: 'chart',
    features: ['KPIs comerciales clave', 'Filtros dinámicos por vendedor/fecha', 'Análisis predictivo de ventas', 'Informes en PDF automáticos']
  }
];

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Seguimiento de Leads (Pipeline)',
    onPremise: {
      title: 'Hojas de Cálculo / Excel',
      description: 'Registro manual e inconexo. Pérdida de oportunidades por falta de alertas o historial disperso.',
      isAdvantage: false
    },
    cloud: {
      title: 'CRM Moderno con Nube',
      description: 'Pipeline visual en tiempo real. Alertas automáticas para contactar prospectos y automatización de seguimiento.',
      isAdvantage: true
    }
  },
  {
    feature: 'Consolidación del Dato',
    onPremise: {
      title: 'Silos de Archivos Locales',
      description: 'Varios archivos duplicados ("ventas_final_v2.xlsx"). Alto riesgo de pérdida, corrupción o sobrescritura de datos.',
      isAdvantage: false
    },
    cloud: {
      title: 'Base de Datos Única Cloud',
      description: 'Única versión de la verdad en la nube. Acceso seguro e instantáneo para todo el equipo desde cualquier dispositivo.',
      isAdvantage: true
    }
  },
  {
    feature: 'Reportes & Análisis',
    onPremise: {
      title: 'Gráficos Estáticos Manuales',
      description: 'Se requiere descargar datos, pegarlos y armar gráficos manualmente cada semana. Consume valioso tiempo de ventas.',
      isAdvantage: false
    },
    cloud: {
      title: 'Dashboards Automatizados',
      description: 'Tableros interactivos (Looker/Power BI) conectados en vivo. Análisis instantáneo de conversiones y metas.',
      isAdvantage: true
    }
  },
  {
    feature: 'Integración & Conexiones',
    onPremise: {
      title: 'Datos Aislados',
      description: 'No se conecta con bases de datos operativas de inventario, marketing o plataformas web de contacto.',
      isAdvantage: false
    },
    cloud: {
      title: 'Ecosistema Cloud Conectado',
      description: 'Sincronización automática por APIs y automatizaciones (Zapier/Cloud Functions) para unificar la operación.',
      isAdvantage: true
    }
  },
  {
    feature: 'Escalabilidad',
    onPremise: {
      title: 'Límite de Filas y Lentitud',
      description: 'A medida que crecen los registros, Excel se vuelve extremadamente lento y propenso a congelarse.',
      isAdvantage: false
    },
    cloud: {
      title: 'Almacenamiento Elástico',
      description: 'La nube escala contigo. Almacena millones de contactos y transacciones sin perder velocidad ni rendimiento.',
      isAdvantage: true
    }
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    question: '¿Cuáles son las ventajas de migrar mi gestión comercial de Excel a un CRM moderno?',
    answer: 'Excel es excelente para análisis puntuales, pero no sirve para gestionar relaciones. Un CRM moderno centraliza todas las interacciones con tus prospectos, permite automatizar recordatorios y correos de seguimiento, y genera reportes en vivo automáticamente. Esto evita que los vendedores olviden llamadas de seguimiento e incrementa la conversión de ventas de forma drástica.',
    category: 'crm'
  },
  {
    id: 'faq-2',
    question: '¿Es costoso implementar y mantener esta arquitectura en la nube?',
    answer: 'No. Al ser una startup boutique, nuestra propuesta se basa en soluciones prácticas e independientes. Diseñamos arquitecturas en la nube que aprovechan los tiers gratuitos y serverless. Esto significa que solo pagas por el volumen real que consumes y por las licencias específicas del CRM, reduciendo drásticamente los costos de infraestructura inicial.',
    category: 'general'
  },
  {
    id: 'faq-3',
    question: '¿Qué incluye la arquitectura y la ingeniería de datos end-to-end?',
    answer: 'La arquitectura de datos define la estructura de tus bases de datos, nubes y CRM para que todo esté conectado y seguro. La ingeniería de datos se encarga de construir las tuberías (pipelines) que transportan, limpian y ordenan esa información desde sus fuentes originales hasta los dashboards y el CRM de forma 100% automatizada.',
    category: 'engineering'
  },
  {
    id: 'faq-4',
    question: '¿Cómo se conectan los dashboards de análisis con el CRM y la nube?',
    answer: 'Conectamos herramientas líderes como Looker Studio, Power BI o tableros web a la base de datos centralizada de tu CRM o almacén cloud. Así, cada vez que un vendedor cierra un trato o ingresa un dato, este se refleja instantáneamente en tus reportes analíticos sin necesidad de actualizar nada a mano.',
    category: 'analytics'
  },
  {
    id: 'faq-5',
    question: 'No tenemos bases de datos complejas aún, ¿por dónde deberíamos empezar?',
    answer: 'El mejor punto de partida es un CRM moderno integrado con dashboards de ventas. Nos encargamos de auditar tus hojas de cálculo actuales, limpiar los datos, diseñar la base de datos cloud inicial e integrar todo en un pipeline de ventas ágil. Esto te da bases sólidas para crecer.',
    category: 'general'
  }
];

export const CLIENT_LOGOS = [
  { name: 'PostgreSQL', category: 'Base de Datos Relacional' },
  { name: 'Power BI', category: 'Análisis & Visualización' },
  { name: 'Looker Studio', category: 'Reportes de Negocio' },
  { name: 'Python', category: 'Ciencia de Datos & ETL' },
  { name: 'Supabase', category: 'Backend & Base de Datos CRM' },
  { name: 'AWS Cloud', category: 'Almacenamiento & Cómputo' },
  { name: 'Azure Cloud', category: 'Sincronización Cloud' },
  { name: 'Zapier', category: 'Automatización & APIs' }
];

export const REGIONS_DATA: RegionOffice[] = [
  {
    country: 'Perú',
    flag: '🇵🇪',
    city: 'Lima',
    address: 'Av. Víctor Andrés Belaúnde 147, San Isidro',
    isLaunchPartner: true,
    badgeText: 'SEDE PRINCIPAL'
  },
  {
    country: 'Chile',
    flag: '🇨🇱',
    city: 'Santiago',
    address: 'Av. Andrés Bello 2457, Providencia',
    isLaunchPartner: false
  },
  {
    country: 'Colombia',
    flag: '🇨🇴',
    city: 'Bogotá',
    address: 'Calle 93B # 13-14, Chico',
    isLaunchPartner: false
  },
  {
    country: 'México',
    flag: '🇲🇽',
    city: 'CDMX',
    address: 'Av. Paseo de la Reforma 222, Juárez',
    isLaunchPartner: false
  }
];

export const RESOURCES_LIST: ResourceItem[] = [
  {
    id: 'res-1',
    title: 'Guía Completa: Cómo Migrar de Excel a un CRM en la Nube sin Fracasar',
    type: 'Ebook',
    readingTime: '12 min lectura',
    description: 'Metodología paso a paso para estructurar las planillas de tu equipo de ventas y subirlas a un CRM moderno automatizado.',
    techStack: ['CRM', 'Bases de Datos Cloud', 'Zapier']
  },
  {
    id: 'res-2',
    title: 'Blueprint de Arquitectura de Datos de Bajo Costo para Startups',
    type: 'Blueprints',
    readingTime: '15 min lectura',
    description: 'Modelos de diagramas de arquitectura de referencia utilizando bases de datos elásticas y tiers gratuitos de almacenamiento cloud.',
    techStack: ['PostgreSQL', 'AWS S3 / ADLS Gen2', 'API Sync']
  },
  {
    id: 'res-3',
    title: 'Ebook: Los 10 KPIs Críticos para tu Dashboard de CRM',
    type: 'Ebook',
    readingTime: '10 min lectura',
    description: 'Plantillas de indicadores clave de embudo, conversión y comisiones de vendedores listos para conectar a Power BI o Looker Studio.',
    techStack: ['Looker Studio', 'Power BI', 'CRM Analytics']
  }
];
