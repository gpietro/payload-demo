import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Patients from './collections/Patients';

export default buildConfig({
  serverURL: 'http://localhost:3000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Patients
  ],
  localization: {
    locales: ['en', 'de'],
    defaultLocale: 'de'
  },
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts')
  },
});
