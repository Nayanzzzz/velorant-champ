
import { ToastContainer } from "react-toastify"
import { Routing } from "./routes/route"
import { Provider } from "react-redux"
import { reduxStore } from "./redux/store"
// import DataProvider from "./context/data-fetch/data-fetch-provider"
// import { DataProviders } from "./context/data-fetch/data-fetch-context"


const App = () => {
  return (
    
    <>
    <Provider store={reduxStore}>
    <Routing/>
    <ToastContainer />
    </Provider>
    </>
    
    
    
  )
}

export default App
