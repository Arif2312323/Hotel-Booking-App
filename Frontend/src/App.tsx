import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import SignIN from "./pages/SignIN"
import AddHotel from "./pages/addHotel";
import { useAppContext } from "./contexts/AppContext";
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
          <Route path="/my-hotels" element = {
            <Layout>
              <AddHotel/>
            </Layout>
          }/>
        }
      </Routes>
    </Router>
  );
}

export default App;
