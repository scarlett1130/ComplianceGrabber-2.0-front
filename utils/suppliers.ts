interface Supliers {
  manufacturers: string[];
  distributers: string[];
}

const manufacturers: string[] = [
  "Onsemi",
  "Te",
  "Molex",
  "Murata",
  "Littelfusse",
  "Mmm",
  "We-online",
  "Yago",
  "Eaton",
  "Maximintegrated",
  "Wago",
];

const distributers: string[] = [
  "Mouser",
  "Anixter",
  "Digikey",
  "Ttiinc",
  "Phoenix",
  "Maxim",
  "Future Electronics",
  "Heilind",
  "Alliedelec",
  "Newark",
  "Farnell",
  "Rs-components",
  "Sager",
  "Rshughes",
];

const suppliersList: Supliers = {
  manufacturers,
  distributers,
};
export default suppliersList;
