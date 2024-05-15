import React from "react";
import feature_1 from "../assets/feature-1.png";
import feature_2 from "../assets/feature-2.png";
import feature_3 from "../assets/feature-3.png";
import feature_4 from "../assets/feature-4.png";

const Featured = () => {
    return (
        <section className="bg-light py-6 md:py-8 lg:py-10">
            <div className="container">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <div className="space-y-4">
                        <img src={feature_1} alt="" />
                        <div className="space-y-2">
                            <h3 className="font-rancho text-xl font-semibold text-primary md:text-3xl lg:text-4xl">Awesome Aroma</h3>
                            <p>You will definitely be a fan of the design & aroma of your coffee</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <img src={feature_2} alt="" />
                        <div className="space-y-2">
                            <h3 className="font-rancho text-xl font-semibold text-primary md:text-3xl lg:text-4xl">High Quality</h3>
                            <p>We served the coffee to you maintaining the best quality</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <img src={feature_3} alt="" />
                        <div className="space-y-2">
                            <h3 className="font-rancho text-xl font-semibold text-primary md:text-3xl lg:text-4xl">Pure Grades</h3>
                            <p>The coffee is made of the green coffee beans which you will love</p>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <img src={feature_4} alt="" />
                        <div className="space-y-2">
                            <h3 className="font-rancho text-xl font-semibold text-primary md:text-3xl lg:text-4xl">Proper Roasting</h3>
                            <p>Your coffee is brewed by first roasting the green coffee beans</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Featured;
