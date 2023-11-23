import {PrimaryButton} from '~/components/PrimaryButton';
import {SecondaryButton} from '~/components/SecondaryButton';
import {Bokeh} from '~/components/Bokeh';

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
                    <h2>2024 Wildlife Calendars Available!</h2>
                </div>
            </div>
        </div>
    );
}