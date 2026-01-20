import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/counter/counterSlice";
import { authApi } from "./services/api";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";


function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

 

  return (
    
    <div className="p-4">
      <Routes>
         <Route Component={Dashboard} path="/dashboard"></Route>
     </Routes>
      <h1 className="text-3xl font-bold">Hello world!</h1>

      <p className="mt-4 text-xl">Count: {count}</p>

      <button
        className="mr-2 px-4 py-2 bg-blue-500 text-white rounded"
        onClick={() => dispatch(increment())}
      >
        +
      </button>

      <button
        className="px-4 py-2 bg-red-500 text-white rounded"
        onClick={() => dispatch(decrement())}
      >
        -
</button>


        <button
        onClick={() => dispatch(incrementByAmount(4))}
           
        >
          *
        </button>
          
          <br></br>

         <button
     onClick={ () => authApi()}
>
  Google Login
</button>

        <hr></hr>
      
    </div>
  );
}

export default App;
