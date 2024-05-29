import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import SignIN from "./pages/SignIN"
import AddHotel from "./pages/AddHotel";
import { useAppContext } from "./contexts/AppContext";
import MyHotels from "./pages/MyHotels";
function App() {
  const {isLoggedIn} = useAppContext();
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout>
          <p>Home-page</p>
        </Layout>}/>
        <Route path="/search" element = {
          <Layout>
            <p>Search</p>
          </Layout>
        }/>
        <Route path="/register" element = {
          <Layout>
            <Register/>
          </Layout>
        }/>
        <Route path="/sign-in" element = {
          <Layout>
            <SignIN/>
          </Layout>
        }/>
        {isLoggedIn && 
          <Route path="/add-hotel" element = {
            <Layout>
              <AddHotel/>
            </Layout>
          }/>
        }
        {isLoggedIn && 
          <Route path="/my-hotels" element = {
            <Layout>
              <MyHotels/>
            </Layout>
          }/>
        }
      </Routes>
    </Router>
  );
}

export default App;
