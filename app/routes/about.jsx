import { Link } from '@remix-run/react';
import {Image} from '@shopify/hydrogen';


export function About(props) {

    const collections = props.collections.collections.edges

    return (
        <div className='collections-wrapper'>
            <h1 className="section-title"> Shop More Art </h1>

            <div className='container'>
            {collections.map((collection) => 
                    <Link
                        key={collection.node.id}
                        className="collection-card"
                        to={`/collections/${collection.node.handle}`}
                    >
                        <Image
                        data={collection.node.image}
                        width='100px'
                        />
                        <h2>{collection.node.title}</h2>
                        <p>{collection.node.description}</p>
                    </Link>                
                )
            }
            </div>
        </div>
    )
}