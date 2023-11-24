import { defer } from '@shopify/remix-oxygen';
import { Await, useLoaderData, Link } from '@remix-run/react';
import { Suspense } from 'react';
import { Image, Money } from '@shopify/hydrogen';
import { Hero } from '~/components/Hero';
import { Collections } from '~/components/Collections';

/**
 * @type {MetaFunction}
 */
export const meta = () => {
  return [{ title: 'Hydrogen | Home' }];
};

/**
 * @param {LoaderFunctionArgs}
 */
export async function loader({ context }) {
  const { storefront } = context;
  const recommendedProducts = storefront.query(RECOMMENDED_PRODUCTS_QUERY);
  const featuredItems = await storefront.query(FEATURED_ITEMS_QUERY);
  const collections = await storefront.query(COLLECTIONS_QUERY);

  return defer({ recommendedProducts, featuredItems, collections });
}

export default function Homepage() {
  /** @type {LoaderReturnData} */
  const data = useLoaderData();
  return (
    <div className="home">
      <Hero collection={data.featuredItems} />
      <RecommendedProducts products={data.recommendedProducts} />
      <Collections collections={data.collections} />
    </div>
  );
}

/**
 * @param {{
 *   products: Promise<RecommendedProductsQuery>;
 * }}
 */
function RecommendedProducts({ products }) {
  return (
      <div className="recommended-products">
        <div className="container">
        <h1 className="section-title">What's New?</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Await resolve={products}>
            {({ products }) => (
              <div className="recommended-products-grid">
                {products.nodes.map((product) => (
                  <Link
                    key={product.id}
                    className="recommended-product"
                    to={`/products/${product.handle}`}
                  >
                    <Image
                      data={product.images.nodes[0]}
                      aspectRatio="1/1"
                      sizes="(min-width: 45em) 20vw, 50vw"
                    />
                    <h4>{product.title}</h4>
                    <small>
                      <Money data={product.priceRange.minVariantPrice} />
                    </small>
                  </Link>
                ))}
              </div>
            )}
          </Await>
        </Suspense>
        <br />
      </div>
    </div>
  );
}

const RECOMMENDED_PRODUCTS_QUERY = `#graphql
  fragment RecommendedProduct on Product {
    id
    title
    handle
    priceRange {
      minVariantPrice {
        amount
        currencyCode
      }
    }
    images(first: 1) {
      nodes {
        id
        url
        altText
        width
        height
      }
    }
  }
  query RecommendedProducts ($country: CountryCode, $language: LanguageCode)
    @inContext(country: $country, language: $language) {
    products(first: 8, sortKey: UPDATED_AT, reverse: true) {
      nodes {
        ...RecommendedProduct
      }
    }
  }
`;

const FEATURED_ITEMS_QUERY = `#graphql
  query featuredItemsQuery {
    collections(first: 10, query: "Featured") {
      edges {
        node {
          id
          title        
          handle
          image {
            altText
            width
            height
            url(transform: {maxWidth: 400})
          }
        }
      }
    }
  }
  `

  const COLLECTIONS_QUERY = `#graphql
  query CollectionsQuery {
    collections(first: 3, sortKey: ID) {
      edges {
        node {
          id
          title
          description
          handle
          image {
            altText
            width
            url(transform: {maxWidth: 400})
          }
        }
      }
    }
  }
  `

/** @typedef {import('@shopify/remix-oxygen').LoaderFunctionArgs} LoaderFunctionArgs */
/** @template T @typedef {import('@remix-run/react').MetaFunction<T>} MetaFunction */
/** @typedef {import('storefrontapi.generated').FeaturedCollectionFragment} FeaturedCollectionFragment */
/** @typedef {import('storefrontapi.generated').RecommendedProductsQuery} RecommendedProductsQuery */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
