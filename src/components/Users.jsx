// import React, { useState } from "react";
// import useGetData from "../hooks/useGetData";
// import usePostData from "../hooks/usePostData";
// import useDeleteData from "../hooks/useDeleteData";
// import useUpdateData from "../hooks/useUpdateData";

// const Users = () => {
//   const { data: users, loading, error } = useGetData("/users");
//   const { postData } = usePostData("/users");
//   const { deleteData } = useDeleteData("/users");
//   const { updateData } = useUpdateData("/users");

//   const [newUser, setNewUser] = useState({ name: "", email: "" });

//   const handleAddUser = async () => {
//     await postData(newUser);
//   };

//   const handleDeleteUser = async (id) => {
//     await deleteData(id);
//   };

//   const handleUpdateUser = async (id) => {
//     await updateData(id, { name: "Updated User" });
//   };

//   return (
//     <div className="p-6">
//       <h1 className="text-xl font-bold mb-4">User Management</h1>

//       <div className="mb-4">
//         <input
//           type="text"
//           placeholder="Name"
//           value={newUser.name}
//           onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
//           className="border p-2 mr-2"
//         />
//         <input
//           type="email"
//           placeholder="Email"
//           value={newUser.email}
//           onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
//           className="border p-2 mr-2"
//         />
//         <button onClick={handleAddUser} className="bg-blue-500 text-white px-4 py-2">
//           Add User
//         </button>
//       </div>

//       {loading && <p>Loading...</p>}
//       {error && <p className="text-red-500">{error}</p>}
//       <ul className="space-y-2">
//         {users?.map((user) => (
//           <li key={user.id} className="flex justify-between p-2 border">
//             <span>{user.name} - {user.email}</span>
//             <div>
//               <button onClick={() => handleUpdateUser(user.id)} className="bg-yellow-500 text-white px-2 py-1 mx-2">
//                 Update
//               </button>
//               <button onClick={() => handleDeleteUser(user.id)} className="bg-red-500 text-white px-2 py-1">
//                 Delete
//               </button>
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Users;
