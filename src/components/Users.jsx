import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers);

    return (
        <section>
            <div className="container">
                <h2>{loadedUsers.length}</h2>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Address</th>
                                <th>Created Date/Time</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {loadedUsers.map((user) => (
                                <tr key={user._id}>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png" alt={ user.name} />
                                                </div>
                                            </div>
                                            <div>
                                                <div className="font-bold">{ user.name}</div>
                                                <div className="text-sm opacity-50">{ user.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td>
                                        Zemlak, Daniel and Leannon
                                        <br />
                                        <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>
                                        <span>{ user.createAt}</span>
                                    </td>
                                    <th>
                                        <button className="btn btn-success btn-xs">Update</button>
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
