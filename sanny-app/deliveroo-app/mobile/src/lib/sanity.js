import { createClient } from '@sanity/client'
import ImageUrlBuilder from '@sanity/image-url';

const client = createClient({
  projectId: '1tvfugsp',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2021-10-21',
});

const builder = ImageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);

// sanity cors add http://localhost:3000 API Sanity
// sanity cors add http://localhost:19000 sanity application

export default client;