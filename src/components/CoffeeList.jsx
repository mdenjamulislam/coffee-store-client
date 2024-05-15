import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const CoffeeList = ({ coffees }) => {
    return (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 lg:gap-8">
            {coffees.map((coffee) => {
                return (
                    <div className="flex flex-col items-center justify-between gap-5 rounded-lg bg-light p-4 md:flex-row md:p-5 lg:p-7">
                        <img src={coffee.photoUrl} alt={coffee.coffeeName} className="h-auto w-full rounded-lg object-cover md:w-32 lg:w-44" />
                        <div className="space-y-2">
                            <p>
                                <strong className="text-secondary">Name:</strong> <span>{coffee.coffeeName}</span>
                            </p>
                            <p>
                                <strong className="text-secondary">Supplier:</strong> <span>{coffee.supplier}</span>
                            </p>
                            <p>
                                <strong className="text-secondary">Price:</strong> <span>{coffee.price}</span>
                            </p>
                        </div>
                        <div className="flex flex-row items-center gap-3 md:flex-col md:gap-4">
                            <button className="flex h-10 w-10 items-center justify-center rounded bg-orange-200 text-white hover:bg-accent">
                                <FaEye className="text-xl text-white" />
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded bg-dark text-white hover:bg-primary">
                                <FaPencilAlt className="text-xl text-white" />
                            </button>
                            <button className="flex h-10 w-10 items-center justify-center rounded bg-accent2 text-white hover:bg-accent">
                                <MdDelete className="text-xl text-white" />
                            </button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CoffeeList;
