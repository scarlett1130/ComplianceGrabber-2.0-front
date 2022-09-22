import axios from "axios";
import fetchMouser, {
  fetchDigiKey,
  fetchFutureElectronics,
} from "./ApiHandlers";

const suppliersList = [
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
async function getLiveSupplier(supplier: string, partnumber: string) {
  if (supplier == "Molex") {
    try {
      const response = await axios.get(
        `https://fastapi0013.herokuapp.com/molex/${partnumber}`
      );
      if (response?.data?.mpn == !"not found") {
        return "molex";
      }
      return;
    } catch (e) {
      return;
    }
  } else if (supplier == "Wago") {
    try {
      const response = await axios.get(
        `https://fastapi0013.herokuapp.com/wago/${partnumber}`
      );
      if (response.data.PartName !== "not found") {
        return "wago";
      }
      return;
    } catch (error) {
      throw new Error(`${error}`);
      return;
    }
  } else if (supplier == "Te") {
    try {
      const response = await axios.get(
        `https://fastapi0013.herokuapp.com/te/${partnumber}`
      );
      if (response?.data.tcpn !== "not found") {
        return "Te";
      }
      return;
    } catch (error) {
      throw new Error(`${error}`);
      return;
    }
  } else if (supplier == "Mouser") {
    try {
      const response = await fetchMouser(partnumber);

      if (response && response?.data?.status != "not found") {
        return "Mouser";
      }
      return;
    } catch (error) {
      throw new Error(`${error}`);
      return;
    }
  } else if (supplier == "Digikey") {
    try {
      const response = await fetchDigiKey(partnumber);
      if (response && response?.status != "not found") {
        return "Digikey";
      }
      return;
    } catch (error) {
      throw new Error(`${error}`);
      return;
    }
  } else if (supplier == "Phoenix") {
    try {
      const response = await axios.get(
        `https://fastapi0013.herokuapp.com/phoenix/${partnumber}`
      );
      if (response?.data.results.status === 200) {
        return "Phoenix";
      }
      return;
    } catch (error) {
      throw new Error(`${error}`);
      return;
    }
  } else if (supplier == "Maxim") {
    try {
      const response = await axios.get(
        `https://fastapi0013.herokuapp.com/maxim/${partnumber}`
      );
      if (response?.data.Rohs_Compliance !== "not found") {
        return "Maxim";
      }
    } catch (error) {
      throw new Error(`${error}`);
      return;
    }
  } else if (supplier == "Rs-components") {
    try {
      const response = await axios.get(
        `https://fastapi0013.herokuapp.com/rscomponents/${partnumber}`
      );
      if (response?.data.mpn !== "not found") {
        return "Rs-components";
      }
    } catch (error) {
      throw new Error(`${error}`);
    }
  } else if (supplier == "Future Electronics") {
    try {
      const response = await fetchFutureElectronics(partnumber);

      if (response && response[0]?.status !== "not found") {
        return "Future Electronics";
      }
      return;
    } catch (error) {
      throw new Error(`${error}`);
      return;
    }
  }
}

async function SearchForSupplier(partnumber: string) {
  const suppliers: string[] = [];
  await Promise.all(
    suppliersList.map(async (supplier) => {
      try {
        const response = await getLiveSupplier(supplier, partnumber);
        if (response !== undefined) {
          suppliers.push(response);
        }
      } catch (err) {}
    })
  );
  return suppliers;
}

export default SearchForSupplier;
