import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeList from "../../components/CoffeeList";
import { BsCupHot } from "react-icons/bs";
import CoffeeCard from "../../components/CoffeeCard";

const Home = () => {
    const coffeeLoaderData = useLoaderData();
    const [coffees, setCoffees] = useState(coffeeLoaderData);
    return (
        <main>
            <section className="bg-watermark-1 my-5 bg-left-top bg-no-repeat md:my-8 lg:my-14">
                <div className="bg-watermark-2 bg-right-bottom bg-no-repeat">
                    <div className="container">
                        <div className="mb-7 flex flex-col items-center gap-4 md:mb-12 md:gap-6">
                            <div className="space-y-2 text-center">
                                <span>--- Sip & Savor ---</span>
                                <h2 className="font-rancho text-3xl font-bold text-primary md:text-4xl lg:text-5xl">Our Polular Coffee</h2>
                            </div>
                            <Link to="/addcoffee">
                                <button className="btn--filled flex items-center gap-3">
                                    Add Coffee
                                    <BsCupHot />
                                </button>
                            </Link>
                        </div>
                        {/* Coffee List */}
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
                            {coffees.map((coffee) => (
                                <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;
