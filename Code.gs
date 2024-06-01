// Function to convert sheet data to JSON format
function json(sheetName) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = spreadsheet.getSheetByName(sheetName);

  if (sheet === null) {
    return "Sheet not found";
  }

  const data = sheet.getDataRange().getValues();
  const jsonData = convertToJson(data);

  return jsonData;
}

// Function to convert a 2D array to JSON
function convertToJson(data) {
  const headers = data[0];
  const raw_data = data.slice(1);
  let json = [];

  raw_data.forEach((d) => {
    let object = {};
    for (let i = 0; i < headers.length; i++) {
      object[headers[i]] = d[i];
    }
    json.push(object);
  });

  return json;
}

// Main function to handle GET requests
function doGet(e) {
  try {
    const path = "Sheet1";
    const action = "read";
    let debugInfo = `doGet called. Path: ${path}, Action: ${action}`;

    if (action === "read") {
      const jsonData = json(path);
      return ContentService.createTextOutput(
        JSON.stringify({ debugInfo, data: jsonData })
      ).setMimeType(ContentService.MimeType.JSON);
    } else {
      return ContentService.createTextOutput(
        `Invalid action. Debug: ${debugInfo}`
      ).setMimeType(ContentService.MimeType.TEXT);
    }
  } catch (error) {
    return ContentService.createTextOutput(
      `An error occurred: ${error.toString()}`
    ).setMimeType(ContentService.MimeType.TEXT);
  }
}
