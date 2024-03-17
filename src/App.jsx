import { Route, Routes, } from "react-router-dom"
import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage"
import Container from "./components/Container"
import Row from "./components/Row"
import FetchCategories from "./pages/FetchCategories"
import FetchCategory from "./pages/FetchCategory"
import AxiosCategories from "./pages/axios/AxiosCategories"
import AxiosCategory from "./pages/axios/AxiosCategory"
import RTKQueryCategories from "./pages/rtk-query/RTKQueryCategories"





function App() {
  

  

  return (
    <>
      <Navbar />
      <Container className="mt-4">
        <Row>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fetch-categories" element={<FetchCategories />} />
            <Route path="/fetch-category/:catName" element={<FetchCategory />} />
            <Route path="/axios-category/:catName" element={<AxiosCategory />} />
            <Route path="/axios-categories" element={<AxiosCategories />} />
            <Route path="/rtkq-categories" element={<RTKQueryCategories />} />
            
          </Routes>
        </Row>
      </Container>

    </>
  )
}

export default App
