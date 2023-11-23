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
            <div className="custom-shape-divider-bottom-1646606526">
                <svg
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                        className="shape-fill"
                    ></path>
                </svg>
            </div>
        </div>
    );
}