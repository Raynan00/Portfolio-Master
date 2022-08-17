import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'z3yz7o20',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skAK2uGZoGGDK0QfQFBdFJDyk85sK2DgK7GGMqIYf858uPgOtYEmdUPWJxp9q1tw4vnAXc86EHN8Z5XdPt8tReQABtBf8jZMKEMebJfUzjHmyADJlBLj232ryQJSiMAtNqyCkbKa7uelvgwKzAqHUPMI0sdAwWOv8IVL3Gzcf0jqJNmrMZc4',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
