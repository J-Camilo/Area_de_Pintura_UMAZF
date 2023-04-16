// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { useState, useEffect } from "react";
// import env from "react-dotenv";
// import axios from "axios";
// import React from 'react'

// // /*------------------ components ------------------- */
// import { All_Users } from "../Components/page/All_Users/All_Users"


// export const Users = () => {

//     // variables 
//     const [Users_, setUsers_] = useState("");

//     const baseURL = env.REACT_APP_KEY_USERS;
//     useEffect(() => {
//         axios.get(baseURL).then((response) => {
//             setUsers_(response.data)
//         });
//     }, []);

//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route path=":r/Usecaso" element={<All_Users Users_={Users_} />} />

//                 </Routes>
//             </BrowserRouter>
//         </>
//         // <All_Users Users_={Users_} />
//     )
// }
