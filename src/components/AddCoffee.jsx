import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";

const AddCoffee = () => {
    return (
        <div className="container pb-10 md:pb-16 lg:pb-24">
            <div className="py-8 md:py-10 lg:py-12">
                <Link to="/" className="inline-flex items-center gap-4 text-primary hover:text-accent">
                    <FaArrowLeftLong className="text-xl md:text-3xl lg:text-4xl" />
                    <span className="text-xl md:text-3xl lg:text-4xl font-bold font-rancho">Back To Home</span>
                </Link>
            </div>

            <div className="bg-light space-y-6 p-4 md:space-y-8 md:px-12 md:py-10 lg:px-28 lg:py-16">
                <div className="space-y-4 text-center lg:px-20">
                    <h1 className="font-rancho font-bold text-center text-xl text-primary md:text-3xl lg:text-5xl">Add New Coffee</h1>
                    <p className="text-text-primary">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2.5">
                        <label className="text-text-primary block text-base font-medium md:text-lg">Name</label>
                        <input type="text" name="coffee-name" placeholder="Enter coffee name" className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="text-text-primary block text-base font-medium md:text-lg">Chef</label>
                        <input type="text" name="chef" placeholder="Enter coffee chef" className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="text-text-primary block text-base font-medium md:text-lg">Supplier</label>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="text-text-primary block text-base font-medium md:text-lg">Taste</label>
                        <input type="text" name="taste" placeholder="Enter coffee taste" className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="text-text-primary block text-base font-medium md:text-lg">Category</label>
                        <input type="text" name="category" placeholder="Enter coffee category" className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="text-text-primary block text-base font-medium md:text-lg">Details</label>
                        <input type="text" name="details" placeholder="Enter coffee details" className="form-field" />
                    </div>
                    <div className="col-span-full space-y-2.5">
                        <label className="text-text-primary block text-base font-medium md:text-lg">Photo</label>
                        <input type="url" name="photo-url" placeholder="Enter photo url" className="form-field" />
                    </div>
                    <button type="submit" className="w-full col-span-full btn--filled">Add Coffee</button>
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;
