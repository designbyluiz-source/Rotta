export const site = {
  name: 'Rotta',
  url: 'https://rottainteligence.com',
};

export interface LegalEntity {
  name: string;
  cnpj: string;
}

export const entities: LegalEntity[] = [
  { name: 'R O G Tecnologia e Sistemas LTDA', cnpj: '63.920.968/0001-56' },
  { name: 'J F R Tecnologia e Sistemas LTDA', cnpj: '63.821.127/0001-91' },
];

export const address = {
  street: 'R. Armando Andrade, 97',
  district: 'Bom Retiro',
  city: 'Joinville',
  state: 'SC',
  postalCode: '89223-066',
  country: 'BR',
};

export const addressLine = `${address.street} - ${address.district}, ${address.city} - ${address.state}, ${address.postalCode}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `${address.street}, ${address.district}, ${address.city} - ${address.state}, ${address.postalCode}`,
)}`;
