import {useLoaderData, Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';

export async function loader({context}) {
  return await context.storefront.query(COLLECTIONS_QUERY);
}
export function Collections() {
  const {collections} = useLoaderData();
  console.log({collections})
  return (
    <section className="w-full gap-4">

    </section>
  );
}
const COLLECTIONS_QUERY = `#graphql
  query FeaturedCollections {
    collections(first: 3, query: "collection_type:smart") {
      nodes {
        id
        title
        handle
        image {
          altText
          width
          height
          url
        }
      }
    }
  }
`;