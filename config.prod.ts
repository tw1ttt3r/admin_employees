import 'dotenv/config';
import { writeFile } from 'fs';
const { version: VERSION } = require('./package.json');
const targetPathProd = './src/environments/environment.prod.ts';
const targetPath = './src/environments/environment.ts';

const {
  AUTH_SERVICE,
  GRAL_ADMON_SERVICE,
  ATTENDANCE_SERVICE,
  REPORTS_SERVICE
} = process.env;

// content
const content = `VERSION: '${VERSION}',
  AUTH_SERVICE: '${AUTH_SERVICE}',
  GRAL_ADMON_SERVICE: '${GRAL_ADMON_SERVICE}',
  ATTENDANCE_SERVICE: '${ATTENDANCE_SERVICE}',
  REPORTS_SERVICE: '${REPORTS_SERVICE}'
`;

// Environment variables definition
const envConfigFileProd = `export const environment = {
  production: true,
  ${content}
}`;

const envConfigFile = `export const environment = {
  production: false,
  ${content}
}`;

console.group('environment variables endpoints:')
  console.log('VERSION:', VERSION)
  console.log('AUTH_SERVICE:', AUTH_SERVICE)
  console.log('GRAL_ADMON_SERVICE:', GRAL_ADMON_SERVICE)
  console.log('ATTENDANCE_SERVICE:', ATTENDANCE_SERVICE)
  console.log('REPORTS_SERVICE:', REPORTS_SERVICE)
console.groupEnd


writeFile(targetPathProd, envConfigFileProd, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
writeFile(targetPath, envConfigFile, 'utf-8', (err) => {
  if (err) {
    console.error(err);
  }
});
