import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Root from "./routes/Root";
import Home from "./routes/Home";
import AddCard from "./routes/AddCard";

const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path="/" element={<Root />}>
<Route index element={<Home />} />
<Route path="/addcard" element={<AddCard />} />
  </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
