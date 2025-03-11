import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
// import NewToWebSite from "../components/new-to-website";
// import Login from "../pages/auth/login";
// import Home from "../pages/home";
import { lazy, Suspense } from "react";
import DataFetchApi from "../pages/data-fetch";
import { localValue } from "../lib/local-storage-service";
import Payment from "../pages/authenticated/payment";
import AllProductDetails from "../pages/authenticated/product/details-page/all-product-details";


const HomePage = lazy(() => import("../pages/home"));
const LogInPage = lazy(() => import("../pages/auth/login"));
const NewToWebSite = lazy(() => import("../components/new-to-website"));
const ProductPage = lazy(()=> import("../pages/product"))

//make common suspence functoin for all route
export const CommonSuspence = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense
      fallback={
        <div>
          <p className="flex items-center justify-center text-4xl font-bold">
            {" "}
            U are in LAZY Suspence{" "}
          </p>
        </div>
      }
    >
      {children}
    </Suspense>
  );
};


export const Route = createBrowserRouter([
  {
    path: "*",
    element: (
      <div className="flex items-center justify-center h-screen text-3xl font-bold text-red-500">
        Page Not Found
      </div>
    ),
  },

  {

    loader:()=>{
        console.log("loader is calling");
        localStorage.removeItem(localValue.storage_key);
        return true
    },
    path: "/",
    element: (
      <CommonSuspence>
        <NewToWebSite />
      </CommonSuspence>
    ),
    
  },

  {
    path: "login",
    element: (
      <CommonSuspence>
        <LogInPage />
      </CommonSuspence>
    ),
  },
  {
    loader :()=>{
        console.log("loader is calling");
        const user = localStorage.getItem(localValue.storage_key);
        if(!user){
          return redirect("/");
        }
        return true;
      },
    path: "home",
    element: (
      <CommonSuspence>
        <HomePage />
      </CommonSuspence>
      
    ),
  },
  {
    loader :()=>{
        console.log("loader is calling");
        const user = localStorage.getItem(localValue.storage_key);
        if(!user){
          return redirect("/");
        }
        return true;
      },
    path: "product",
    element: (
      <CommonSuspence>
        <ProductPage />
      </CommonSuspence>
      
    ),
  },

  // {
  //   loader :()=>{
  //       console.log("loader is calling");
  //       const user = localStorage.getItem(localValue.storage_key);
  //       if(!user){
  //         return redirect("/");
  //       }
  //       return true;
  //     },
  //   path: "data-fetch",
  //   element: (
  //     <CommonSuspence>
  //       <DataFetchApi/>
  //     </CommonSuspence>
      
  //   ),
  // },

  {
    loader :()=>{
        console.log("loader is calling");
        const user = localStorage.getItem(localValue.storage_key);
        if(!user){
          return redirect("/");
        }
        return true;
      },
    path: "payment",
    element: (
      <CommonSuspence>
        <Payment/>
      </CommonSuspence>
      
    ),
  },




  {path:"data-fetch",
    loader :()=>{
      console.log("loader is calling");
      const user = localStorage.getItem(localValue.storage_key);
      if(!user){
        return redirect("/");
      }
      return true;
    },
    element: (
      <CommonSuspence>
        <DataFetchApi/>
      </CommonSuspence>
      
    ),
    
  },

  
  {
    path: "data-fetch/:pid",
    loader :()=>{
      console.log("loader is calling");
      const user = localStorage.getItem(localValue.storage_key);
      if(!user){
        return redirect("/");
      }
      return true;
    },
    element:(
      <CommonSuspence>
        <AllProductDetails/>
      </CommonSuspence>
    )
    


  },
]);

export function Routing() {
  return <RouterProvider router={Route} />;
}
