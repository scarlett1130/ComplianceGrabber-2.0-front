const config = {
  headers: {
    "Content-type": "application/json",
  },
};
interface Table {
  head: any[];
  body: any[];
}
export function generateTableData(data: any) {
  let tabledata: Table = { head: [], body: [] };

  let head: string | any[] = [];
  for (let d of data) {
    if (Object.keys(d).length > head.length) head = Object.keys(d);
  }

  tabledata.head = head;
  tabledata.body = [];
  for (let d of data) {
    // console.log(d)
    const d_arr = [];
    for (let h of head) {
      d_arr.push(d[h]);
    }
    tabledata.body.push(d_arr);
  }
  return tabledata;
}

export function generateTableFastData(data: { [x: string]: any }) {
  let tabledata: Table = { head: [], body: [] };

  let head = Object.keys(data);

  tabledata.head = head;
  tabledata.body = [];
  let temp = [];
  for (let h of head) {
    temp.push(data[h]);
  }

  tabledata.body.push(temp);
  return tabledata;
}

export function generateDigiKeyTable(data: { [x: string]: any }) {
  let tabledata: Table = { head: [], body: [] };

  tabledata.head = [
    "DigiKeyPartNumber",
    "Manufacturer",
    "ManufacturerPartNumber",
    "ProductDescription",
    "DetailedDescription",
    "PrimaryDatasheet",
    "Category",
    "Series",
    "ProductStatus",
    "RoHSStatus",
    "MoistureSensitivityLevel",
    "ECCN",
    "HTSUSCode",
  ];
  tabledata.body = [];
  let temp = [];
  for (let h of tabledata.head) {
    if (h == "Manufacturer") {
      temp.push(data["Supplier"]);
    } else if (h == "ECCN") {
      temp.push(data["ExportControlClassNumber"]);
    } else if (h == "ProductStatus") {
      temp.push(data["ProductStatus"]);
    } else if (h == "Series") {
      temp.push(data["Series"].Value);
    } else if (h == "Category") {
      temp.push(data["Category"].Value);
    } else {
      temp.push(data[h]);
      console.log(temp);
    }
  }
  console.log(tabledata);
  tabledata.body.push(temp);
  return tabledata;
}

export function generateFutureElectronicTableData(data: any) {
  let tabledata: Table = { head: [], body: [] };

  let head = ["Subcategory", "Partnumber", "Manufacturer Name"];

  try {
    tabledata.head = head;
    tabledata.body = [];

    for (let d of data) {
      const d_arr = [];
      for (let h of head) {
        if (h === "Subcategory") {
          d["categories"] = d["categories"][0].subcategory_name;
          d_arr.push(d["categories"]);
        } else if (h === "Partnumber") {
          d["part_id"] = d["part_id"]?.seller_part_number;
          d_arr.push(d["part_id"]);
        } else if (h == "Manufacturer Name") {
          d["part_attributes"] = d["part_attributes"][20].value;
          d_arr.push(d["part_attributes"]);
        }
      }
      tabledata.body.push(d_arr);
    }
    return tabledata;
  } catch (err) {
    tabledata.head = ["status"];
    tabledata.body = [["not Found"]];
  }
}

export function generateMouserTableData(data: any) {
  let tabledata: Table = { head: [], body: [] };

  let head: string | any[] = [];
  for (let d of data) {
    if (Object.keys(d).length > head.length) head = Object.keys(d);
  }

  tabledata.head = head;
  tabledata.body = [];
  for (let d of data) {
    // console.log(d)
    const d_arr = [];
    for (let h of head) {
      if (h == "ProductCompliance") {
        let compliances = [];
        for (let compliance of d[h]) {
          compliances.push(compliance.ComplianceName);
        }
        d[h] = compliances.join("-");
      } else if (h == "PriceBreaks") {
        let prices = [];
        if (d[h].length > 1) {
          for (let Pricebreak of d[h]) {
            console.log(Pricebreak.Price);
            prices.push(Number(Pricebreak.Price.replace("$", "")));
          }

          d[h] = `from ${Math.min(...prices)}$ to ${Math.max(...prices)}$`;
        } else if (d[h].length == 1) {
          d[h] = d[h][0].Price;
        } else {
          d[h] = "not found";
        }
      } else if (h == "ProductAttributes") {
        const attributes = [];
        if (d[h].length > 1) {
          for (let attribute of d[h]) {
            attributes.push(attribute.AttributeName);
          }
          d[h] = attributes.join("~");
        } else if (d[h].length == 1) {
          d[h] = d[h][0].AttributeName;
        } else {
          d[h] = "not found";
        }
      } else if (h == "UnitWeightKg") {
        d[h] = d[h]?.UnitWeight || "not found";
      }

      d_arr.push(d[h]);
    }
    tabledata.body.push(d_arr);
  }
  return tabledata;
}
