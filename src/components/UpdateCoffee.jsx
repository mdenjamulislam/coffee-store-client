import { Link, useLoaderData } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import { data } from "autoprefixer";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const { _id, coffeeName, price, supplier, taste, category, details, photoUrl } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;

        const coffeeName = form.coffee_name.value;
        const price = form.price.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photoUrl = form["photo-url"].value;

        const updatecoffee = { coffeeName, price, supplier, taste, category, details, photoUrl };

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Update it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/coffee/${_id}`, {
                    method: "PUT",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(updatecoffee),
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.modifiedCount > 0) {
                            Swal.fire({
                                title: "Updated!",
                                text: "Your file has been midified.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };

    return (
        <div className="container pb-10 md:pb-16 lg:pb-24">
            <div className="py-8 md:py-10 lg:py-12">
                <Link to="/" className="inline-flex items-center gap-4 text-primary hover:text-accent">
                    <FaArrowLeftLong className="text-xl md:text-3xl lg:text-4xl" />
                    <span className="font-rancho text-xl font-bold md:text-3xl lg:text-4xl">Back To Home</span>
                </Link>
            </div>

            <div className="space-y-6 bg-light p-4 md:space-y-8 md:px-12 md:py-10 lg:px-28 lg:py-16">
                <div className="space-y-4 text-center lg:px-20">
                    <h1 className="text-center font-rancho text-xl font-bold text-primary md:text-3xl lg:text-5xl">Update Existing Coffee Details</h1>
                    <p className="text-text-primary">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                </div>
                <form onSubmit={handleUpdateCoffee} className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2.5">
                        <label className="block text-base font-medium text-text-primary md:text-lg">Name</label>
                        <input type="text" name="coffee_name" placeholder="Enter coffee name" defaultValue={coffeeName} className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="block text-base font-medium text-text-primary md:text-lg">Price</label>
                        <input type="text" name="price" placeholder="Enter coffee price" defaultValue={price} className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="block text-base font-medium text-text-primary md:text-lg">Supplier</label>
                        <input type="text" name="supplier" placeholder="Enter coffee supplier" defaultValue={supplier} className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="block text-base font-medium text-text-primary md:text-lg">Taste</label>
                        <input type="text" name="taste" placeholder="Enter coffee taste" defaultValue={taste} className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="block text-base font-medium text-text-primary md:text-lg">Category</label>
                        <input type="text" name="category" placeholder="Enter coffee category" defaultValue={category} className="form-field" />
                    </div>
                    <div className="space-y-2.5">
                        <label className="block text-base font-medium text-text-primary md:text-lg">Photo</label>
                        <input type="url" name="photo-url" placeholder="Enter photo url" defaultValue={photoUrl} className="form-field" />
                    </div>
                    <div className="col-span-full space-y-2.5">
                        <label className="block text-base font-medium text-text-primary md:text-lg">Details</label>
                        <textarea type="text" name="details" placeholder="Enter coffee details" defaultValue={details} className="form-field h-32"></textarea>
                    </div>

                    <button type="submit" className="btn--filled col-span-full w-full">
                        Update Coffee Details
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;
