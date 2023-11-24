import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';


export function Collections(props) {
    const collections = props
    console.log(collections)
    return (
        <div className="collection-wrapper">
            <h1>Shop</h1>
            {({collections}) => (
            <div className="recommended-products-grid">
              {collections.collections.edges.nodes.map((collection) => (
                <h2>collection.node.title</h2>
              ))}
            </div>
          )}
        </div>
    );
}