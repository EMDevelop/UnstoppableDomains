function UnstoppableDomains() {
  sheet.getRange("A2:D7000").clearContent();

  //get spreadsheet
  //get sheet 1
  //get value from vell to add to URL
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName("Price Check");
  var startFrom = sheet.getRange("J1").getValue();
  var loopNumber = sheet.getRange("A1").getValue() - startFrom;
  var row = 3 + startFrom;
  var domainValue = sheet.getRange(row, 1).getValue();
  var domainType = ".crypto";

  for (var i = 0; i < loopNumber; i++) {
    var domainValue = sheet.getRange(row, 1).getValue();

    var domainType = ".crypto";
    var response = UrlFetchApp.fetch(
      "https://unstoppabledomains.com/api/search?q=" + domainValue + domainType
    );
    var json = JSON.parse(response);

    // .crypto paste values
    sheet.getRange(row, 3).setValue(json.exact[0].price / 100);
    sheet.getRange(row, 4).setValue(json.exact[0].status);

    sheet.getRange(row, 2).setValue(json.exact[0].productCode);

    var domainType = ".zil";
    var response = UrlFetchApp.fetch(
      "https://unstoppabledomains.com/api/search?q=" + domainValue + domainType
    );
    var json = JSON.parse(response);

    // .zil paste values
    sheet.getRange(row, 7).setValue(json.exact[0].price / 100);
    sheet.getRange(row, 8).setValue(json.exact[0].status);

    sheet.getRange(row, 6).setValue(json.exact[0].productCode);

    row++;
  }
}

function Clear() {
  var sheet = SpreadsheetApp.getActive().getSheetByName("Price Check");

  sheet.getRange("A3:D6000").clearContent();
  sheet.getRange("F3:H6000").clearContent();
}
