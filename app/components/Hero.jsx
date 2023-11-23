import {PrimaryButton} from '~/components/PrimaryButton';
import {SecondaryButton} from '~/components/SecondaryButton';
import {Bokeh} from '~/components/Bokeh';

export function Hero(props) {
    const collection = props
    console.log(collection.collection.image)

    return (
        <div className="hero-wrapper">
            <Bokeh/>
            <div className="container">
                <div className="hero-left">
                    <h1>
                        Order your 2024 Wildlife Calendar Today!
                    </h1>
                    <div className="btns background">
                        <PrimaryButton text="Shop Collections"></PrimaryButton>
                        <SecondaryButton text="Contact"></SecondaryButton>
                    </div>
                </div>
                <div className="hero-right">
                </div>
            </div>
        </div>
    );
}