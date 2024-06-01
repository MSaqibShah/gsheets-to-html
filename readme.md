# G-Sheets to Html Project

This project demonstrates how to retrieve data from a Google Sheet and display it on a web page without using any API keys. The project uses Google Apps Script to create a web service that converts Google Sheet data into JSON format, which can be fetched and displayed in an HTML frontend.

## Contents

1. [Introduction](#introduction)
2. [Google Apps Script (Code.gs)](#google-apps-script-codegs)
3. [HTML Frontend (index.html)](#html-frontend-indexhtml)
4. [How to Use](#how-to-use)
5. [License](#license)

## Introduction

This project consists of two main components:

1. **Google Apps Script**: Converts Google Sheet data to JSON and exposes it through a public URL.
2. **HTML Frontend**: Fetches the JSON data from the public URL and displays it in a table format.

## Google Apps Script (Code.gs)

This script should be added to your Google Sheet as an Apps Script project. It converts the sheet data into JSON format and serves it through a web URL.

## HTML Frontend (index.html)

This HTML file fetches the JSON data from the public URL provided by the Apps Script and displays it in a table.

## How to Use

1. **Set up the Google Sheet**:

   - Create a new Google Sheet and add your data.
   - Open the script editor by clicking `Extensions > Apps Script`.
   - Copy and paste the content of `Code.gs` into the script editor and save it.

2. **Deploy the script**:

   - Click on the `Deploy` button and select `New deployment`.
   - Choose `Web app` as the deployment type.
   - Set the access level to `Anyone` and deploy.
   - Copy the provided URL. This will be the URL your HTML frontend will call to fetch the data.

3. **Set up the HTML frontend**:
   - Create a new HTML file and copy the content of `index.html` into it.
   - Replace the `url` in the script with the URL you copied from the Apps Script deployment.
   - Open the HTML file in a web browser to see the data from your Google Sheet displayed in a table.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
