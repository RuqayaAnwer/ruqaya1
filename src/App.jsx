import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesData from "./ServicesData";
import Organizer1 from "./pages/Organizer1";
import Layout from "./Layout/Layout";
import Form from "./pages/Form";
import ContactUs from "./components/navbar/contact/ContactUs";
function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="ContactUs" element={<ContactUs/>} />
          <Route path="/services/:city" element={<ServicesData />} />
          <Route path="/orginiser/:city/:id" element={<Organizer1 />} />
          <Route path="/orginiser/form/:city/:id" element={   <Form />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
