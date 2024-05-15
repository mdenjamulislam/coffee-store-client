import { FaEye, FaPencilAlt } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
    const { _id, coffeeName, price, supplier, taste, category, details, photoUrl } = coffee;

    const handleDeleteCoffee = (_id) => {
        console.log("Delete coffee", _id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className="flex flex-col items-center justify-between gap-5 rounded-lg bg-light p-4 md:flex-row md:p-5 lg:p-7">
            <img src={photoUrl} alt={coffeeName} className="h-auto w-full rounded-lg object-cover md:w-32 lg:w-44" />
            <div className="space-y-2">
                <p>
                    <strong className="text-secondary">Name:</strong> <span>{coffeeName}</span>
                </p>
                <p>
                    <strong className="text-secondary">Supplier:</strong> <span>{supplier}</span>
                </p>
                <p className="space-x-1">
                    <strong className="text-secondary">Price:</strong>
                    <span>{price ? `Tk-${price}` : "Not available"}</span>
                </p>
            </div>
            <div className="flex flex-row items-center gap-3 md:flex-col md:gap-4">
                <button className="flex h-10 w-10 items-center justify-center rounded bg-orange-200 text-white hover:bg-accent">
                    <FaEye className="text-xl text-white" />
                </button>
                <button className="flex h-10 w-10 items-center justify-center rounded bg-dark text-white hover:bg-primary">
                    <FaPencilAlt className="text-xl text-white" />
                </button>
                <button onClick={() => handleDeleteCoffee(_id)} className="flex h-10 w-10 items-center justify-center rounded bg-accent2 text-white hover:bg-accent">
                    <MdDelete className="text-xl text-white" />
                </button>
            </div>
        </div>
    );
};

export default CoffeeCard;
