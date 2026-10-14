// src/utils.js
const CONTENTFUL_SPACE = import.meta.env.VITE_CONTENTFUL_SPACE;
const CONTENTFUL_ACCESS_TOKEN = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

// Fetch entries from the Contentful Delivery API, replacing asset links (e.g. images)
// with the assets themselves so fields look the same as they did with the SDK.
// The token goes in the query string rather than a header to avoid a CORS preflight request.
const getEntries = async (contentType) => {
  const params = new URLSearchParams({ content_type: contentType, access_token: CONTENTFUL_ACCESS_TOKEN });
  const response = await fetch(`https://cdn.contentful.com/spaces/${CONTENTFUL_SPACE}/environments/master/entries?${params}`);
  if (!response.ok) {
    throw new Error(`Contentful request failed: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  const assets = Object.fromEntries((data.includes?.Asset ?? []).map((asset) => [asset.sys.id, asset]));
  const resolveLink = (value) => (value?.sys?.linkType === 'Asset' ? assets[value.sys.id] : value);

  return data.items.map((item) => ({
    ...item,
    fields: Object.fromEntries(Object.entries(item.fields).map(([key, value]) => [key, resolveLink(value)])),
  }));
};

// Retrieve the list of blog posts from Contentful
export const getBlogPosts = () => getEntries('blogPost');

// Retrieve the list of portfolio items from Contentful
export const getPortfolioItems = () => getEntries('portfolio');

// Build a resized, compressed image URL using the Contentful Images API.
// Contentful returns protocol-relative URLs ("//images.ctfassets.net/..."), so force https.
export const getImageUrl = (image, { width, height, format = 'webp', quality = 75 }) => {
  const params = new URLSearchParams({ w: width, h: height, fit: 'fill', fm: format, q: quality });
  return `https:${image.fields.file.url}?${params}`;
};
