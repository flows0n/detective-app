export interface IRiddle {
  id: number;
  name: string;
  passwrd: string;
  hint: string;
  person: string;
}

export const data: IRiddle[] = [
  {
    id: 1,
    name: "śmiertelna gra",
    passwrd: "hazard",
    hint: "Idę o zakład, że nie zgadniecie...",
    person: "An. Gabrysi",
  },
  {
    id: 2,
    name: "chciwość",
    passwrd: "scrooge",
    hint: "Opowieść wigilijna...",
    person: "An. Agnieszki",
  },
  {
    id: 3,
    name: "niecierpliwość",
    passwrd: "porywczość",
    hint: "To jest nam bardzo bliskie...",
    person: "An. Weroniki",
  },
  {
    id: 4,
    name: "Nie zabijaj",
    passwrd: "nie kradnij",
    hint: "To tylko 1 z 10...",
    person: "Ks. Pawła",
  },
  {
    id: 5,
    name: "Winda",
    passwrd: "elevator",
    hint: "Inne języki też znacie? :)",
    person: "An. Bartka",
  },
  {
    id: 6,
    name: "Płaczący mężczyźni",
    passwrd: "rzadkość",
    hint: "Przyznacie, że to nie zdarza się częscto...",
    person: "An. Oli",
  },
];
