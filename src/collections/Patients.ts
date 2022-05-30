import { CollectionConfig } from 'payload/types';

// Example Collection - For reference only, this must be added to payload.config.ts to be used.
const Patients: CollectionConfig = {
  slug: 'patients',
  admin: {
    useAsTitle: 'firstname',
  },
  fields: [
    {
      name: 'firstname',
      type: 'text',
      required: true,
    },
    {
      name: 'lastname',
      type: 'text',
      required: true,
    },
    {
        name: 'email',
        type: 'email',
        required: true,
    },
    {
        name: 'birthdate',
        type: 'date',
    },
    {  
        name: 'sessionScheduled',
        type: 'checkbox'
    }
  ],
}

export default Patients;