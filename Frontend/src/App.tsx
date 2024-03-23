import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import Register from "./pages/Register";
import SignIN from "./pages/SignIN"
function App() {
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
      </Routes>
    </Router>
  );
}

export default App;
