import { useDispatch, useSelector } from "react-redux";
import { increment, decrement, incrementByAmount } from "./store/counter/counterSlice";
import { authApi } from "./services/api";
import { Link, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import HomePage from "./pages/HomePage";
import FormPage from "./pages/FormPage";
import { useContext, useEffect } from "react";
import { AppContext } from "./components/CustomProvider";
import { persistor } from "./store/storeConfig";
import { toggleTheme } from "./store/theme/themeReducer";


function App() {
  console.log('App rendered');
  const { obj } = useContext(AppContext);
  const count = useSelector((state) => state.count.value);
  const theme = useSelector((state) => state.theme.darkMode);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('App mounted');
    return () => console.log('App unmounted');
  }, []);
 

  return (
    
    <div className={theme ? 'dark-theme' : 'light-theme'}>
      <button onClick={() => dispatch(toggleTheme())}>theme change {theme ? 'dark' : 'light'} </button>
      <Routes>
        <Route  path='/home'  element={<HomePage />}></Route>
        <Route  path='/form'  element={<FormPage />}></Route>
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

        {obj.name} - {obj.email}

        <hr></hr>
        <Link to="/home" className="">Home</Link>
        <br></br>
        <Link to="/form">Form</Link>


        <button
        onClick={ () => persistor.purge() }
>
  Click to reset
</button>
      </div>

    
  );
}

export default App;
