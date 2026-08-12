import {
  PricingRow,
  HighlightCard,
  OperatorDifferential,
  LocalNetworkOperator,
  PdfDocument
} from './types';

export const ARKOS_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 450 160'><g transform='translate(10,10)'><path d='M 55,15 L 5,125 L 30,125 L 55,65 L 80,125 L 105,125 Z' fill='%23000000'/><path d='M 30,125 C 30,95 80,95 80,125 C 70,110 40,110 30,125 Z' fill='%230E6135'/><rect x='47' y='93' width='16' height='8' rx='2' fill='%230E6135'/><text x='110' y='100' font-family='Arial, sans-serif' font-weight='900' font-size='78' fill='%230E6135' letter-spacing='-1'>ARKOS</text><text x='115' y='138' font-family='Arial, sans-serif' font-weight='400' font-size='32' fill='%23000000' letter-spacing='5'>benefícios</text></g></svg>`;
export const PLENA_LOGO_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 160'><defs><linearGradient id='pGrad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'><stop offset='0%25' stop-color='%230066B3'/><stop offset='50%25' stop-color='%238E248D'/><stop offset='100%25' stop-color='%2300A896'/></linearGradient></defs><path d='M 130,40 C 180,10 260,10 270,35 C 280,60 200,80 150,55 C 110,35 50,30 60,55 C 70,80 120,60 130,40 Z' fill='none' stroke='url(%23pGrad)' stroke-width='10' stroke-linecap='round'/><text x='10' y='135' font-family='Arial, sans-serif' font-weight='700' font-size='80' fill='%230B4893' letter-spacing='-2'>Plena</text><text x='190' y='90' font-family='Arial, sans-serif' font-weight='300' font-size='30' fill='%23808285'>Saúde</text></svg>`;
export const PORTO_LOGO_SVG = '/logos/porto.svg';
export const SULAMERICA_LOGO_SVG = '/logos/sulamerica.svg';
export const COOPERCITYSP_LOGO_SVG = '/logos/coopercitysp.svg';

export const HIGHLIGHT_CARDS: HighlightCard[] = [
  {
    id: '1',
    title: 'Transição Segura',
    description: 'Gestão e transição contínua sem prejuízo de atendimento aos colaboradores da COOPERCITYSP.',
    icon: 'fa-user-shield'
  },
  {
    id: '2',
    title: 'Saúde Ocupacional Integrada',
    description: 'Opção de inclusão de SST, exames admissionais/periódicos e PCMSO/PGR direto no contrato.',
    icon: 'fa-briefcase-medical'
  },
  {
    id: '3',
    title: 'Condição Comercial Conquistada',
    description: 'Negociação de até -16% de redução comercial aplicada sobre a tabela padrão.',
    icon: 'fa-tags'
  }
];

export const PRICING_TABLE: PricingRow[] = [
  { ageGroup: '0 a 18 anos', plenaPrice: 'R$ 139,99', portoPrice: 'R$ 187,25', sulamericaPrice: 'R$ 166,16', plenaValue: 139.99, portoValue: 187.25, sulamericaValue: 166.16 },
  { ageGroup: '19 a 23 anos', plenaPrice: 'R$ 163,99', portoPrice: 'R$ 227,08', sulamericaPrice: 'R$ 207,70', plenaValue: 163.99, portoValue: 227.08, sulamericaValue: 207.70 },
  { ageGroup: '24 a 28 anos', plenaPrice: 'R$ 163,99', portoPrice: 'R$ 273,93', sulamericaPrice: 'R$ 257,54', plenaValue: 163.99, portoValue: 273.93, sulamericaValue: 257.54 },
  { ageGroup: '29 a 33 anos', plenaPrice: 'R$ 163,99', portoPrice: 'R$ 313,60', sulamericaPrice: 'R$ 285,87', plenaValue: 163.99, portoValue: 313.60, sulamericaValue: 285.87 },
  { ageGroup: '34 a 38 anos', plenaPrice: 'R$ 163,99', portoPrice: 'R$ 339,79', sulamericaPrice: 'R$ 305,89', plenaValue: 163.99, portoValue: 339.79, sulamericaValue: 305.89 },
  { ageGroup: '39 a 43 anos', plenaPrice: 'R$ 183,99', portoPrice: 'R$ 350,92', sulamericaPrice: 'R$ 354,82', plenaValue: 183.99, portoValue: 350.92, sulamericaValue: 354.82 },
  { ageGroup: '44 a 48 anos', plenaPrice: 'R$ 183,99', portoPrice: 'R$ 419,18', sulamericaPrice: 'R$ 424,16', plenaValue: 183.99, portoValue: 419.18, sulamericaValue: 424.16 },
  { ageGroup: '49 a 53 anos', plenaPrice: 'R$ 183,99', portoPrice: 'R$ 451,26', sulamericaPrice: 'R$ 497,11', plenaValue: 183.99, portoValue: 451.26, sulamericaValue: 497.11 },
  { ageGroup: '54 a 58 anos', plenaPrice: 'R$ 183,99', portoPrice: 'R$ 557,57', sulamericaPrice: 'R$ 591,81', plenaValue: 183.99, portoValue: 557.57, sulamericaValue: 591.81 },
  { ageGroup: '59+ anos', plenaPrice: 'R$ 463,99', portoPrice: 'R$ 937,23', sulamericaPrice: 'R$ 996,91', plenaValue: 463.99, portoValue: 937.23, sulamericaValue: 996.91 }
];

export const TOTAL_PLENA = 'R$ 9.343,55';
export const TOTAL_PORTO = 'R$ 10.902,03';
export const TOTAL_SULAMERICA = 'R$ 11.012,28';
export const ORIGINAL_SULAMERICA = 'R$ 13.109,86';
export const ECONOMY_SULAMERICA = 'R$ 2.097,58/mês';

export const OPERATOR_DIFFERENTIALS: OperatorDifferential[] = [
  {
    operator: 'PORTO SAÚDE',
    planName: 'Prata Pro - Regional',
    highlightTag: 'Solução de Gestão Ocupacional & SST',
    logoAlt: 'Porto Saúde',
    logoUrl: PORTO_LOGO_SVG,
    accentColor: '#004080',
    differentials: [
      {
        title: 'Saúde Ocupacional & SST Incluso',
        description: 'Gestão de SST, exames admissionais/periódicos, PCMSO, PGR e eSocial inclusos no valor.'
      },
      {
        title: 'Telemedicina 24h & Programas de Saúde Preventiva',
        description: 'Atendimento médico online instantâneo sem deslocamento e acompanhamento preventivo completo para os colaboradores.'
      },
      {
        title: 'Seguro de Vida & Odonto Incluso',
        description: 'Capital R$ 30.000 Morte/Invalidez, R$ 5.000 Aux. Funeral + Porto Odonto Bronze 10 Nacional.'
      }
    ]
  },
  {
    operator: 'SULAMÉRICA SAÚDE',
    planName: 'Direto Nacional',
    highlightTag: 'Livre Atendimento e Cobertura em Todo o Brasil',
    logoAlt: 'SulAmérica Saúde',
    logoUrl: SULAMERICA_LOGO_SVG,
    accentColor: '#E65100',
    differentials: [
      {
        title: 'Abrangência Geográfica Nacional',
        description: 'Cobertura integral no Brasil, ideal para colaboradores e motoristas que viajam fora de SP.'
      },
      {
        title: 'Reembolso Médico Modular',
        description: 'Reembolso modular para consultas de emergência, ex: R$ 90,00 fora da rede.'
      },
      {
        title: 'Seguro de Vida & Odonto Integrado',
        description: 'Seguro de vida corporativo e plano Odonto Mais inclusos no contrato sem custo extra.'
      }
    ]
  }
];

export const LOCAL_NETWORK_OPERATORS: LocalNetworkOperator[] = [
  {
    id: 'plena',
    operator: 'Plena Saúde',
    planName: 'Blue 600 - Plano Atual',
    networkProfile: 'Básica e Limitada (14 Hospitais)',
    logoAlt: 'Plena Saúde',
    logoUrl: PLENA_LOGO_SVG,
    totalHospitals: '14 Hospitais',
    badgeColor: 'bg-sky-100 text-sky-800 border-sky-200',
    hospitalsSectionTitle: 'Cobertura Local na Zona Norte',
    hospitals: [
      {
        name: 'Hospital Previna (Taipas)',
        address: 'Av. Raimundo Pereira de Magalhães, 12367',
        details: 'PS 24h, Internação e Especialidades - Rede Própria'
      },
      {
        name: 'Hospital Presidente (Tucuruvi)',
        address: 'Av. Nova Cantareira, 2398',
        details: 'PS Geral e Internação'
      },
      {
        name: 'Hospital HSANP (Santana)',
        address: 'R. Voluntários da Pátria, 4301',
        details: 'PS, Internação e Maternidade'
      }
    ],
    diagnostics: ['Lavoisier', 'Mello Centro de Diagnóstico', 'Labi Exames'],
    attentionPoint: 'Sem acesso a hospitais de grande porte de São Paulo.'
  },
  {
    id: 'porto',
    operator: 'Porto Saúde',
    planName: 'Linha Pro - Prata Pro',
    networkProfile: 'Rede Expandida de Alta Qualidade (31 Hospitais)',
    logoAlt: 'Porto Saúde',
    logoUrl: PORTO_LOGO_SVG,
    totalHospitals: '31 Hospitais',
    badgeColor: 'bg-blue-100 text-blue-800 border-blue-200',
    hospitalsSectionTitle: 'Cobertura na Zona Norte & Hospitais Próximos de Renome',
    hospitals: [
      {
        name: 'Hospital São Camilo (Santana)',
        details: 'Referência em Alta Complexidade na ZN, PS 24h Adulto/Pediátrico e Cardiologia'
      },
      {
        name: 'Hospital Nipo-Brasileiro (Parque Novo Mundo)',
        details: 'Referência em Maternidade, Cirurgias e PS na Região'
      },
      {
        name: 'Hospital HSANP (Santana)',
        address: 'R. Voluntários da Pátria, 4301',
        details: 'PS, Internação e Ortopedia'
      },
      {
        name: 'Hospital Oswaldo Cruz (Unidade Paulista)',
        details: 'Hospital de Altíssimo Renome incluso no Prata Pro'
      },
      {
        name: 'Hospital Casa de Saúde Santa Rita (Centro/Próximo)',
        details: 'PS e Internação Geral'
      }
    ],
    diagnostics: ['A+', 'Blume', 'CDB', 'Femme (Saúde da Mulher)', 'Hermes Pardini', 'Lavoisier']
  },
  {
    id: 'sulamerica',
    operator: 'SulAmérica Saúde',
    planName: 'Direto Nacional - Exato',
    networkProfile: 'Ampla Rede Credenciada + Atendimento e Emergência Nacional (+50 Hospitais)',
    logoAlt: 'SulAmérica Saúde',
    logoUrl: SULAMERICA_LOGO_SVG,
    totalHospitals: '+50 Hospitais',
    badgeColor: 'bg-orange-100 text-orange-800 border-orange-200',
    hospitalsSectionTitle: 'Cobertura na Zona Norte & Hospitais Próximos de Renome',
    hospitals: [
      {
        name: 'Hospital HSANP (Santana)',
        address: 'R. Voluntários da Pátria, 4301',
        details: 'PS 24h, Internação Geral e Maternidade na ZN'
      },
      {
        name: 'Hospital Ipiranga Arujá (Região Próxima / Rota)',
        details: 'PS e Internação'
      },
      {
        name: 'Hospital de Clínicas Caieiras (Região Próxima / Rota ZN)',
        details: 'PS e Internação Geral'
      },
      {
        name: 'Hospital Bosque da Saúde (Ipiranga)',
        details: 'Referência em Internações'
      }
    ],
    diagnostics: ['Delboni Auriemo', 'CDB', 'Crya', 'Femme', 'Lavoisier']
  }
];

export const BOARD_DECISION_BOXES = [
  {
    id: 'sulamerica',
    operator: 'SulAmérica Saúde',
    color: 'border-orange-500 bg-orange-50/50',
    textColor: 'text-orange-950',
    badgeColor: 'bg-orange-600 text-white',
    icon: 'fa-globe-americas',
    condition: 'A cooperativa precisar de abrangência nacional para colaboradores e motoristas que viajam e necessitam de atendimento médico emergencial ou eletivo fora do Estado de SP.'
  },
  {
    id: 'porto',
    operator: 'Porto Saúde',
    color: 'border-emerald-600 bg-emerald-50/50',
    textColor: 'text-emerald-950',
    badgeColor: 'bg-emerald-700 text-white',
    icon: 'fa-notes-medical',
    condition: 'A prioridade for terceirizar e incluir a Gestão de Saúde Ocupacional (SST e exames) diretamente no contrato do plano de saúde, com atuação focada no Estado de SP.'
  }
];

export const PDF_DOCUMENTS: PdfDocument[] = [
  {
    id: 'plena-pdf',
    title: 'Rede Completa - Plena Saúde Blue 600',
    operator: 'Plena Saúde',
    logoAlt: 'Plena Saúde',
    logoUrl: PLENA_LOGO_SVG,
    fileSize: '1.8 MB',
    pages: 12
  },
  {
    id: 'porto-pdf',
    title: 'Rede Completa - Porto Seguro Linha Pro',
    operator: 'Porto Saúde',
    logoAlt: 'Porto Saúde',
    logoUrl: PORTO_LOGO_SVG,
    fileSize: '3.2 MB',
    pages: 24
  },
  {
    id: 'sulamerica-pdf',
    title: 'Rede Completa - SulAmérica Direto Nacional',
    operator: 'SulAmérica Saúde',
    logoAlt: 'SulAmérica Saúde',
    logoUrl: SULAMERICA_LOGO_SVG,
    fileSize: '2.9 MB',
    pages: 28
  }
];
