
const { google } = require('googleapis');
const path = require('path');
// const fs = require('fs');

const authenticateGoogle = () => {
  const keyFilePath = path.join(__dirname, '../../credentials.json');
  const scopes = ['https://www.googleapis.com/auth/spreadsheets'];

  const auth = new google.auth.GoogleAuth({
    keyFile: keyFilePath,
    scopes: scopes,
  });

  return auth;
};

const getGoogleSheetsInstance = async () => {
  const auth = await authenticateGoogle();
  const sheets = google.sheets({ version: 'v4', auth });
  return sheets;
};

module.exports = { getGoogleSheetsInstance };
