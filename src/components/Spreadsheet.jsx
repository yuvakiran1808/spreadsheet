import { useState } from "react";
import "handsontable/styles/handsontable.min.css";
import "handsontable/styles/ht-theme-main.min.css";
import "handsontable/dist/handsontable.full.css";
import { HotTable } from "@handsontable/react-wrapper";
import "../utils/register";
import "../styles/spreadsheet.scss";
import HyperFormula from "hyperformula";
import Bottomnav from "./Bottomnav";

const Spreadsheet = () => {
  const totalRows = 100;
  const totalCols = 26;
  const hfInstance = HyperFormula.buildEmpty(); // Create a HyperFormula instance

  const generateColumnHeaders = (num) => {
    const headers = [];
    for (let i = 0; i < num; i++) {
      let label = "";
      let n = i;
      while (n >= 0) {
        label = String.fromCharCode((n % 26) + 65) + label;
        n = Math.floor(n / 26) - 1;
      }
      headers.push(label);
    }
    return headers;
  };

  // State to store multiple sheets
  const [sheets, setSheets] = useState([
    {
      id: 1,
      name: "Sheet 1",
      data: Array.from({ length: totalRows }, () =>
        new Array(totalCols).fill("")
      ),
    },
  ]);
  const [activeSheet, setActiveSheet] = useState(1); // Track active sheet

  // Add a new sheet
  const addNewSheet = () => {
    const newSheetId = sheets.length + 1;
    setSheets([
      ...sheets,
      {
        id: newSheetId,
        name: `Sheet ${newSheetId}`,
        data: Array.from({ length: totalRows }, () =>
          new Array(totalCols).fill("")
        ),
      },
    ]);
    setActiveSheet(newSheetId);
  };

  // Remove a sheet
  const removeSheet = (id) => {
    if (sheets.length === 1) return; // Prevent deleting the last sheet

    const newSheets = sheets.filter((sheet) => sheet.id !== id);
    setSheets(newSheets);

    // If the deleted sheet was active, switch to the nearest previous sheet
    if (activeSheet === id) {
      const newActiveSheet = newSheets[newSheets.length - 1]?.id || 1;
      setActiveSheet(newActiveSheet);
    }
  };

  const handleAfterCreateCol = (index, amount) => {
    setSheets((prevSheets) =>
      prevSheets.map((sheet) =>
        sheet.id === activeSheet
          ? {
              ...sheet,
              data: sheet.data.map((row) => [
                ...row,
                ...new Array(amount).fill(""),
              ]),
            }
          : sheet
      )
    );
  };

  const handleAfterRemoveCol = (index, amount) => {
    setSheets((prevSheets) =>
      prevSheets.map((sheet) =>
        sheet.id === activeSheet
          ? { ...sheet, data: sheet.data.map((row) => row.slice(0, -amount)) }
          : sheet
      )
    );
  };

  return (
    <div className="spreadsheet">

      {/* Handsontable for Active Sheet */}
      {sheets.map((sheet) =>
        sheet.id === activeSheet ? (
          <HotTable
            key={sheet.id}
            data={sheet.data}
            rowHeaders={true}
            colHeaders={generateColumnHeaders(sheet.data[0].length)}
            manualColumnResize={true}
            manualRowResize={true}
            colWidths={120}
            dropdownMenu={true}
            filters={true}
            width="100%"
            height="auto"
            formulas={{
              engine: hfInstance,
            }}
            contextMenu={true}  
            trimWhitespace={false}
            autoWrapRow={true}
            autoWrapCol={true}
            afterCreateCol={handleAfterCreateCol}
            afterRemoveCol={handleAfterRemoveCol}
            className="customfilter"
            licenseKey="non-commercial-and-evaluation"
          />
        ) : null
      )}
      <Bottomnav addNewSheet = {addNewSheet} setActiveSheet = {setActiveSheet} activeSheet = {activeSheet} sheets = {sheets} />
    </div>
  );
};

export default Spreadsheet;
