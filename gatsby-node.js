const path = require('path');
const { createClient } = require('@sanity/client');

// Fetch product data from Shopify
const productsQuery = `
  *[_type == 'product'] {
    'id': store.gid,
    'handle': store.slug.current,
    'title': store.title,
    'image': store.previewImageUrl,
    'status': store.status,
    'variant': store.variants[0]->{
      'id': store.gid,
      'price': store.price,
    },
  }
`

const mySanityClient = createClient({
  projectId: '9nscosxo',
  dataset: 'production',
  // useCdn: true,
});

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  if (page.path.match(/^\/mycart/)) {
    createPage({
      path: '/mycart',
      matchPath: '/mycart/*',
      component: path.resolve('./src/pages/mycart.js')
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  const products = await mySanityClient.fetch(productsQuery);

  createPage({
    path: '/products',
    component: path.resolve('./src/templates/products.js'),
    context: {
      data: products
    }
  });

  // Create a page for each product
  products.forEach(product => {
    createPage({
      path: `/products/${product.handle}`, // Set this as the path
      component: path.resolve('./src/templates/product-template.js'), // Use this template (component)
      context: product // Give the product itself as the context (props)
    });
  });

//   createRedirect({
//     fromPath: '/',
//     toPath: '/products/',
//     redirectInBrowser: true
//   })
}