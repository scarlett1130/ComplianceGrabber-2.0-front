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
export async function getLiveManufacturerData({
  supplier,
  partnumbers,
}: liveDataProps) {
  if (supplier == "Molex") {
    try {
      let rawData: any = [];
      let failedData: any = [];
      await Promise.all(
        partnumbers.map(async (keyword: string) => {
          const response = await axios.get(
            `https://compliancegrabber.herokuapp.com/molex/${keyword}`
          );

          if (response && response.data.status !== 404) {
            rawData = [...rawData, ...[response.data]];
          } else {
            failedData = [...failedData, keyword];
          }
        })
      );

      const csv_data = Papa.unparse(rawData);
      const LiveData = generateTableData(rawData);

      return { csv_data, LiveData, failedData };
    } catch (error) {
      throw new Error(`${error}`);
    }
  } else if (supplier.toLowerCase() == "onsemi") {
    try {
      let rawData: any = [];
      let failedData: any = [];
      await Promise.all(
        partnumbers.map(async (keyword: string) => {
          const response = await axios.get(
            `https://compliancegrabber.herokuapp.com/onsemi/${keyword}`
          );

          if (response && response.data.status !== 404) {
            rawData = [...rawData, ...[response.data]];
          } else {
            failedData = [...failedData, keyword];
          }
        })
      );
      const csv_data = Papa.unparse(rawData);

      const LiveData = generateTableData(rawData);
      console.log(LiveData);
      return { csv_data, LiveData, failedData };
    } catch (error) {
      throw new Error(`${error}`);
    }
  } else if (supplier.toLowerCase() == "omron") {
    try {
      let rawData: any = [];
      let failedData: any = [];
      await Promise.all(
        partnumbers.map(async (keyword: string) => {
          const response = await axios.get(
            `https://compliancegrabber.herokuapp.com/omron/${keyword}`
          );

          if (response && response.data.status !== 404) {
            rawData = [...rawData, ...[response.data]];
          } else {
            failedData = [...failedData, keyword];
          }
        })
      );
      const csv_data = Papa.unparse(rawData);

      const LiveData = generateTableData(rawData);
      console.log(LiveData);

      return { csv_data, LiveData, failedData };
    } catch (error) {
      throw new Error(`${error}`);
    }
  } else if (supplier == "Wago") {
    try {
      let rawData: any = [];
      let failedData: any = [];
      await Promise.all(
        partnumbers.map(async (keyword: string) => {
          const response = await axios.get(
            `https://compliancegrabber.herokuapp.com/wago/${keyword}`
          );
          if (response && response.data.status !== 404) {
            rawData = [...rawData, ...[response.data]];
          } else {
            failedData = [...failedData, keyword];
          }
        })
      );
      const csv_data = Papa.unparse(rawData);

      const LiveData = generateTableData(rawData);
      console.log(LiveData);

      return { csv_data, LiveData, failedData };
    } catch (error) {
      throw new Error(`${error}`);
    }
  } else if (supplier == "Te") {
    try {
      let rawData: any = [];
      let failedData: any = [];
      await Promise.all(
        partnumbers.map(async (keyword: string) => {
          const response = await axios.get(
            `https://compliancegrabber.herokuapp.com/te/${keyword}`
          );
          if (response && response.data.status !== 404) {
            rawData = [...rawData, ...[response.data]];
          } else {
            failedData = [...failedData, keyword];
          }
        })
      );
      const csv_data = Papa.unparse(rawData);

      const LiveData = generateTableData(rawData);

      return { csv_data, LiveData, failedData };
    } catch (error) {
      throw new Error(`${error}`);
    }
  } else if (supplier == "Phoenix") {
    let rawData: any[] = [];
    let failedData: any = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await axios.get(
          `https://compliancegrabber.herokuapp.com/phoenix/${partnumber}`
        );
        console.log(response.data);
        if (response && response.data.status !== 404) {
          rawData = [...rawData, ...[response.data]];
        } else {
          failedData = [...failedData, partnumber];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    return { csv_data, LiveData, failedData };
  }
}

export async function getLiveDistributersData({
  supplier,
  partnumbers,
}: liveDataProps) {
  if (supplier == "Mouser") {
    let rawData: any[] = [];
    let failedData: any = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        // const response = await fetchMouser(partnumber);
        const response = await axios.get(
          `https://compliancegrabber.herokuapp.com/mouser/${partnumber}`
        );
        if (response && response.data.status !== 404) {
          rawData = [...rawData, ...[response.data]];
        } else {
          failedData = [...failedData, partnumber];
        }
        // if (response && response?.data?.status != "not found") {
        //   rawData = [...rawData, ...response];
        // } else {
        //   failedData = [...failedData, partnumber];
        // }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateMouserTableData(rawData);

    return { csv_data, LiveData, failedData };
  } else if (supplier == "Digikey") {
    let rawData: any[] = [];
    let failedData: any = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await fetchDigiKey(partnumber);
        if (response && response?.status != "not found") {
          rawData = [...rawData, ...response];
        } else {
          failedData = [...failedData, partnumber];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateDigiKeyTable(rawData);
    return { csv_data, LiveData, failedData };
  } else if (supplier.toLowerCase() == "arrow") {
    let rawData: any[] = [];
    let failedData: any = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await axios.get(
          `https://compliancegrabber.herokuapp.com/arrow/${partnumber}`
        );
        if (response && response.data.status !== 404) {
          rawData = [...rawData, ...[response.data]];
        } else {
          failedData = [...failedData, partnumber];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    console.log(LiveData);
    return { csv_data, LiveData, failedData };
  } else if (supplier == "Maxim") {
    let rawData: any[] = [];
    let failedData: any = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        partnumber = partnumber.replace(/\//g, ":");
        const response = await axios.get(
          `https://compliancegrabber.herokuapp.com/maxim/${partnumber}`
        );
        if (response && response.data.status !== 404) {
          rawData = [...rawData, ...[response.data]];
        } else {
          failedData = [...failedData, partnumber];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    console.log(LiveData);
    return { csv_data, LiveData, failedData };
  } else if (supplier == "Rs-components") {
    let rawData: any[] = [];
    let failedData: any = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await axios.get(
          `https://compliancegrabber.herokuapp.com/rscomponents/${partnumber}`
        );

        if (response && response.data.status !== 404) {
          rawData = [...rawData, ...[response.data]];
        } else {
          failedData = [...failedData, partnumber];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    return { csv_data, LiveData, failedData };
  } else if (supplier == "Future Electronics") {
    let rawData: any[] = [];
    let failedData: any = [];
    await Promise.all(
      partnumbers.map(async (partnumber) => {
        const response = await fetchFutureElectronics(partnumber);
        console.log("herr", response);
        if (response && response[0]) {
          rawData = [...rawData, ...response];
        } else {
          failedData = [...failedData, partnumber];
        }
      })
    );
    const csv_data = Papa.unparse(rawData);
    const LiveData = generateTableData(rawData);
    console.log(LiveData);
    return { csv_data, LiveData, failedData };
  }
}

interface LiveDataProps {
  type: string;
  supplier: string;
  partnumbers: string[];
}

export default async function GetLiveData({
  type,
  supplier,
  partnumbers,
}: LiveDataProps) {
  if (type.toLowerCase() === "manufacturer") {
    const response = await getLiveManufacturerData({ supplier, partnumbers });

    return response;
  } else {
    const response = await getLiveDistributersData({ supplier, partnumbers });
    return response;
  }
}
