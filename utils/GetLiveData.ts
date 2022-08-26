import {
  generateDigiKeyTable,
  generateMouserTableData,
  generateTableData,
} from "./TableGenerator";
import Papa from "papaparse";
import axios from "axios";
import fetchMouser, {
  fetchDigiKey,
  fetchFutureElectronics,
} from "./ApiHandlers";

interface liveDataProps {
  supplier: string;
  partnumbers: string[];
}
export default async function getLiveManufacturerData({
  supplier,
  partnumbers,
}: liveDataProps) {
  if (supplier == "Molex") {
    try {
      let rawData: any = [];
      await Promise.all(
        partnumbers.map(async (keyword: string) => {
          const response = await axios.get(
            `https://fastapi0013.herokuapp.com/molex/${keyword}`
          );
          if (response) {
            rawData = [...rawData, ...[response.data]];
          }
        })
      );
      const csv_data = Papa.unparse(rawData);

      const LiveData = generateTableData(rawData);

      return { csv_data, LiveData };
    } catch (error) {
      throw new Error(`${error}`);
    }
  } else if (supplier == "Wago") {
    try {
      let rawData: any = [];
      await Promise.all(
        partnumbers.map(async (keyword: string) => {
          const response = await axios.get(
            `https://fastapi0013.herokuapp.com/wago/${keyword}`
          );
          if (response) {
            rawData = [...rawData, ...[response.data]];
          }
        })
      );
      const csv_data = Papa.unparse(rawData);

      const LiveData = generateTableData(rawData);

      return { csv_data, LiveData };
    } catch (error) {
      throw new Error(`${error}`);
    }
  } else if (supplier == "Te") {
    try {
      let rawData: any = [];
      await Promise.all(
        partnumbers.map(async (keyword: string) => {
          const response = await axios.get(
            `https://fastapi0013.herokuapp.com/te/${keyword}`
          );
          if (response) {
            rawData = [...rawData, ...[response.data]];
          }
        })
      );
      const csv_data = Papa.unparse(rawData);

      const LiveData = generateTableData(rawData);

      return { csv_data, LiveData };
    } catch (error) {
      throw new Error(`${error}`);
    }
  }
}
export async function getLiveDistributersData({
  supplier,
  partnumbers,
}: liveDataProps) {
  if (supplier == "Mouser") {
    let rawData: any[] = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await fetchMouser(partnumber);

        if (response && response?.data.status != "not found") {
          rawData = [...rawData, ...response];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateMouserTableData(rawData);
    console.log("ddddd", LiveData);
    return { csv_data, LiveData };
  } else if (supplier == "Digikey") {
    let rawData: any[] = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await fetchDigiKey(partnumber);
        if (response && response?.status != "not found") {
          rawData = [...rawData, ...response];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateDigiKeyTable(rawData);
    return { csv_data, LiveData };
  } else if (supplier == "Phoenix") {
    let rawData: any[] = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await axios.get(
          `https://fastapi0013.herokuapp.com/phoenix/${partnumber}`
        );
        if (response) {
          rawData = [...rawData, ...[response.data]];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    return { csv_data, LiveData };
  } else if (supplier == "Maxim") {
    let rawData: any[] = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await axios.get(
          `https://fastapi0013.herokuapp.com/maxim/${partnumber}`
        );
        if (response) {
          rawData = [...rawData, ...[response.data]];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    return { csv_data, LiveData };
  } else if (supplier == "Rs-components") {
    let rawData: any[] = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await axios.get(
          `https://fastapi0013.herokuapp.com/rscomponents/${partnumber}`
        );
        if (response) {
          rawData = [...rawData, ...[response.data]];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    return { csv_data, LiveData };
  } else if (supplier == "Future Electronics") {
    let rawData: any[] = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await fetchFutureElectronics(partnumber);

        if (response && response[0]?.status !== "not found") {
          rawData = [...rawData, ...response];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    return { csv_data, LiveData };
  }
}
