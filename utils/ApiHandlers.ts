import axios from "axios";

export default async function fetchMouser(partnumber: string) {
  try {
    const resp = await axios.post(
      "https://api.mouser.com/api/v1/search/partnumber?apiKey=c8cc8913-3363-4547-a4f6-d48218731924",
      {
        SearchByPartRequest: {
          mouserPartNumber: partnumber,
        },
      }
    );

    if (resp?.data?.SearchResults?.Parts.length !== 0) {
      console.log(resp?.data?.SearchResults.Parts);
      return resp?.data?.SearchResults?.Parts;
    } else {
      console.log("Err");
      return [{ status: "not found" }];
    }
  } catch (err) {
    console.log(err);
    throw new Error(`${err}`);
  }
}

export async function fetchFutureElectronics(partnumber: string) {
  try {
    const resp = await axios.get(
      `https://api.futureelectronics.com/api/v1/pim-future/lookup/?part_number=${partnumber}`,
      {
        headers: {
          "x-orbweaver-licensekey": "GAQZI-7GNVU-QNH36-Y4QUX-607ON",
          Accept: "application/json,text/javascript",
          "Content-Type": "application/json",
        },
      }
    );

    if (resp?.data?.offers.length != 0) {
      return resp?.data?.offers;
    } else {
      return [{ status: "not found" }];
    }
  } catch (err) {
    throw new Error(`${err}`);
  }
}

export async function fetchDigiKey(partnumber: string) {
  try {
    const resp = await axios.get(
      `http://localhost:3000/api/fetch_digikey?partNumber=${partnumber}`
    );

    if (resp?.data.length != 0) {
      return resp.data;
    } else {
      return { status: "not found" };
    }
  } catch (err) {
    throw new Error(`${err}`);
  }
}
