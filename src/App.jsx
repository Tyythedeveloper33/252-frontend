import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import SearchAppBar from "./components/Navigation/SearchAppBar";
import Home from "./components/Home/Home"; // Sample component
import About from "./components/About/About"; // Sample component

function Layout() {
   return (
      <>
         <SearchAppBar />
         <Outlet /> {/* This will render the child routes here */}
      </>
   );
}

const router = createBrowserRouter([
   {
      path: '/',
      element: <Layout />,
      children: [
         { path: '/', element: <Home /> }, // Home component
         { path: 'about', element: <About /> }, // About component
         { path: '*', element: <><h1>Page Not Found</h1></> } // About component
      ],
   },
]);

function App() {
   return (
      <RouterProvider router={router}/>
   );
}

export default App;
