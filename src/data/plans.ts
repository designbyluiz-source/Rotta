export interface Plan {
  id: string;
  name: string;
  price: number;
  summary: string;
  inherits?: string;
  features: string[];
  recommended?: boolean;
}

export const plans: Plan[] = [
  {
    id: 'basico',
    name: 'Básico',
    price: 39,
    summary: 'Para enxergar a frota e registrar cada entrega.',
    features: [
      'Mapa ao vivo com status de cada veículo',
      'App do motorista com modo offline',
      'Lista de entregas do dia com progresso',
      'Comprovante com foto e coordenadas',
      'Histórico de trajetos de 30 dias',
    ],
  },
  {
    id: 'rotas',
    name: 'Rotas',
    price: 69,
    summary: 'Para quem precisa montar rotas e cumprir horário.',
    inherits: 'Tudo do Básico, mais:',
    recommended: true,
    features: [
      'Roteirização automática das paradas',
      'Janelas de horário e capacidade por veículo',
      'Reorganização de rota durante o dia',
      'Assinatura na tela do celular',
      'Link de rastreamento para o cliente final',
    ],
  },
  {
    id: 'frota',
    name: 'Frota',
    price: 99,
    summary: 'Para operações com várias bases e equipes.',
    inherits: 'Tudo do Rotas, mais:',
    features: [
      'Múltiplas bases e centros de distribuição',
      'Relatórios de desempenho por motorista',
      'API e webhooks para ERP e e-commerce',
      'Histórico de trajetos de 12 meses',
      'Rastreadores físicos (próxima fase)',
      'Suporte prioritário',
    ],
  },
];
