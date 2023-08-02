const path = require('path');
const { createClient } = require('@sanity/client');

// Fetch product data from Shopify
const graphQLproducts = `
  query {
      allShopifyProduct ( 
          filter: {
              totalInventory: {gte: 1}
              variants: {elemMatch: {price: {gte: 1}}}
          }) {
          nodes {
              shopifyId
              title
              handle
              totalInventory
              media {
                  shopifyId
                  preview {
                      image{
                          src
                      }
                  }
              }
              variants {
                  shopifyId
                  price
              }
          }
      }
  }
`

const productsQuery = `
  *[_type == 'product'] {
    'id': store.gid,
    'handle': store.slug.current,
    'title': store.title,
    'image': store.previewImageUrl,
    'status': store.status,
    'variant': store.variants[0]->{
      'id': store.id,
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

  // if (page.path.match(/^\/mycart/)) {
  //   createPage({
  //     path: '/mycart',
  //     matchPath: '/mycart/*',
  //     component: path.resolve('src/pages/mycart.js')
  //   })
  // }
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage, createRedirect } = actions;

  const products = await mySanityClient.fetch(productsQuery);
  console.log(products);

  createPage({
    path: '/products',
    component: path.resolve('./src/templates/products.js'),
    context: {
      data: products
    }
  });

  // Create a page for each product
  // products.data.allShopifyProduct.nodes.forEach(node => {
  //   createPage({
  //     path: `/products/${node.handle}`, // Set this as the path
  //     component: path.resolve('./src/templates/product-template.js'), // Use this template (component)
  //     context: node // Give the product itself as the context (props)
  //   });
  // });

  // createRedirect({
  //   fromPath: '/',
  //   toPath: '/products/',
  //   redirectInBrowser: true
  // })
}