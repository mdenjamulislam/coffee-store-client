import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaEye, FaPencilAlt } from "react-icons/fa";

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    const { _id, coffeeName, price, supplier, taste, category, details, photoUrl } = coffee;
    return (
        <section className="py-8 md:py-10 lg:py-14">
            <div className="container">
                <div className="flex items-center justify-between gap-3 pb-5 md:pb-8">
                    <Link to="/" className="inline-flex items-center gap-4 text-primary hover:text-accent">
                        <FaArrowLeftLong className="text-xl md:text-3xl lg:text-4xl" />
                        <span className="font-rancho text-xl font-bold md:text-3xl lg:text-4xl">Back To Home</span>
                    </Link>
                    <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn--filled flex items-center gap-3">
                            Update Coffee
                            <FaPencilAlt />
                        </button>
                    </Link>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
                    <div>
                        <img src={photoUrl} alt={coffeeName} className="h-auto w-full rounded-lg object-cover" />
                    </div>
                    <div className="space-y-4">
                        <div>
                            <div className="flex items-center gap-3 mb-3">
                                <p className="badge badge-primary">{taste}</p>
                                <p className="badge badge-primary">{category}</p>
                            </div>
                            <h1 className="font-rancho text-3xl font-bold text-primary md:text-4xl lg:text-5xl">{coffeeName}</h1>
                            <p className="text-text-primary">Supplier: {supplier}</p>
                        </div>
                        <p className="text-xl font-bold text-text-primary md:text-2xl">Price: {price ? `Tk-${price}` : "Not available"}</p>
                        <p className="text-text-primary">{details}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CoffeeDetails;
