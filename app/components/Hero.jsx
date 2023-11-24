import {PrimaryButton} from '~/components/PrimaryButton';
import {SecondaryButton} from '~/components/SecondaryButton';
import {Bokeh} from '~/components/Bokeh';
import {Link} from '@remix-run/react';
import {Image} from '@shopify/hydrogen';


export function Hero(props) {
    const collection = props
    return (
        <div className="hero-wrapper">
            <Bokeh/>
            <div className="container">
                <div className="hero-left">
                    <h1>
                        Vibrant and realistic colored pencil Art
                    </h1>
                    <p>Original Artwork, Prints, Greeting Cards, and more ways to bring <strong>Art</strong> into your home</p>
                    <div className="btns background">
                        <PrimaryButton text="Shop Collections"></PrimaryButton>
                        <SecondaryButton text="Contact"></SecondaryButton>
                    </div>
                </div>
                <div className="hero-right">
                    <Link
                        key={collection.collection.id}
                        to={`/collection/${collection.collection.handle}`}
                        className='feature-hero-link'
                        >
                        <Image
                            className = "featured-image"
                            data={collection.collection.image}
                            width='60%'
                        />
                    </Link>
                    <h2>2024 Wildlife Calendars Available!</h2>
                </div>
            </div>
        </div>
    );
}