// // import { useState } from "react";
// import "./App.css";
// import { Todos } from "./components/ToDo";

// function App() {
//   // const [count, setCount] = useState(0);

//   return (
//     <div>
//       {/* <Todos /> */}

//     </div>
//     // <>
//     //   <div className="shadow-md drop-shadow-lg rounded-lg bg-fuchsia-800">
//     //     <h1 className=" p-4 font-medium text-slate-50">To Do List</h1>
//     //   </div>

//     //   <div className=" mt-8">
//     //     <form className="mb-4 font-primary w-full">
//     //       <input
//     //         type="text"
//     //         className="outline-none bg-transparent border border-gray-500 rounded-full p-2"
//     //       />
//     //       <button className="cursor-pointer border-none pt-2 pb-2 rounded-lg px-20  bg-fuchsia-300 min-w-32 mx-4">
//     //         Add
//     //       </button>
//     //     </form>
//     //   </div>

//     //   <div className="form">
//     //     {/* <button onClick={() => setCount((count) => count + 1)}>
//     //       count is {count}
//     //     </button> */}
//     //   </div>
//     // </>
//   );
// }

import { Route, Routes, useRoutes } from "react-router-dom";
import UserRouter from "./routers/UserRouter";
import AuthRouter from "./routers/AuthRouter";

const App = () => {
  const UserRouting = useRoutes(UserRouter);
  const AuthRouting = useRoutes(AuthRouter);
  return (
    <div>
      <Routes>
        <Route path="/*" element={UserRouting} />
        <Route path="/auth/*" element={AuthRouting} />
      </Routes>
    </div>
  );
};

export default App;
