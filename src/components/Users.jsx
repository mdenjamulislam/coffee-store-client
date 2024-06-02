import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-one-hazel.vercel.app/users/${id}`, {
                    method: "DELETE",
                    headers: {
                        "content-type": "application/json",
                    },
                })
                    .then((res) => res.json())
                    .then((data) => {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                        const newUser = users.filter((user) => user._id !== id);
                        setUsers(newUser);
                    });
            }
        });
    };

    return (
        <section className="section--padding">
            <div className="container">
                <h1 className="mb-4 text-center font-rancho text-3xl font-bold text-primary">Users</h1>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Created</th>
                                <th>Last Login</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {users.map((user) => (
                                <tr key={user._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt={user.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>
                                        <span>{user.createAt}</span>
                                    </td>
                                    <td>
                                        <span>{user.lastSignInTime}</span>
                                    </td>
                                    <th className="space-x-2">
                                        <button className="btn btn-success btn-xs">Update</button>
                                        <button onClick={() => handleDelete(user._id)} className="btn btn-error btn-xs">
                                            Delete
                                        </button>
                                    </th>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
};

export default Users;
