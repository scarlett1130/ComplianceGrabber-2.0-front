interface Supliers {
  manufacturers: string[];
  distributers: string[];
}

const manufacturers: string[] = [
  "Omron",
  "Onsemi",
  "TE",
  "Molex",
  // "Murata",
  // "Littelfusse",
  // "Mmm",
  // "We-online",
  // "Yago",
  // "Eaton",
  "Maximintegrated",
  "Wago",
  "Phoenix",
];

const distributers: string[] = [
  "Mouser",
  "Arrow",
  // "Anixter",
  "Digikey",
  // "Ttiinc",
  // "Maxim",
  "Future Electronics",
  // "Heilind",
  // "Alliedelec",
  // "Newark",
  // "Farnell",
  "Rs-components",
  // "Sager",
  // "Rshughes",
];

const suppliersList: Supliers = {
  manufacturers,
  distributers,
};
export default suppliersList;
