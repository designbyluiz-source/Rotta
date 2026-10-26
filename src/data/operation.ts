export type Status = 'rota' | 'parado' | 'atrasado';

export const statusLabel: Record<Status, string> = {
  rota: 'Em rota',
  parado: 'Parado',
  atrasado: 'Atrasado',
};

export interface RouteRow {
  id: string;
  driver: string;
  area: string;
  done: number;
  total: number;
  status: Status;
  eta: string;
  note?: string;
}

export const routes: RouteRow[] = [
  { id: 'RT-01', driver: 'Carlos Mendes', area: 'Batel e Água Verde', done: 18, total: 26, status: 'rota', eta: '16:40' },
  { id: 'RT-02', driver: 'Ana Ribeiro', area: 'Centro Cívico', done: 22, total: 30, status: 'rota', eta: '16:15' },
  { id: 'RT-03', driver: 'Paulo Siqueira', area: 'Portão e Novo Mundo', done: 9, total: 24, status: 'atrasado', eta: '18:05', note: '+18 min' },
  { id: 'RT-04', driver: 'Juliana Prado', area: 'Bigorrilho', done: 27, total: 32, status: 'rota', eta: '15:50' },
  { id: 'RT-05', driver: 'Rafael Costa', area: 'Rebouças', done: 14, total: 20, status: 'parado', eta: '16:30', note: 'parado há 6 min' },
  { id: 'RT-06', driver: 'Bruna Alves', area: 'Cabral e Juvevê', done: 31, total: 38, status: 'rota', eta: '16:20' },
  { id: 'RT-07', driver: 'Diego Nunes', area: 'CIC', done: 19, total: 28, status: 'parado', eta: '17:10', note: 'parado há 11 min' },
  { id: 'RT-08', driver: 'Lívia Torres', area: 'Boa Vista', done: 24, total: 34, status: 'rota', eta: '16:55' },
];

export const totals = routes.reduce(
  (acc, r) => ({ done: acc.done + r.done, total: acc.total + r.total }),
  { done: 0, total: 0 },
);

export const countBy = (s: Status) => routes.filter((r) => r.status === s).length;
