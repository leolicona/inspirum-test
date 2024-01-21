export interface Countries {
  name: Name
  currencies: Record<string, Currency>
  capital: string[]
  population: number
  continents: Continent[]
}

export enum Continent {
  Africa = 'Africa',
  Antarctica = 'Antarctica',
  Asia = 'Asia',
  Europe = 'Europe',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  SouthAmerica = 'South America',
}

export interface Currency {
  name: string
  symbol: string
}

export interface Name {
  common: string
  official: string
  nativeName: Record<string, NativeName>
}

export interface NativeName {
  official: string
  common: string
}

export interface Country {
  country: string
  capital: string
  population: number
  currency: string
  continent: string
}
