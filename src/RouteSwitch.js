import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from './App';
import PageMainContent from "./components/PageMainContent";

function RouteSwitch() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/2-dizajndreamssite" element={<Navigate replace to="/home" />} />
        <Route path='/home' element={<App />} />
        <Route path='/page1' element={<App />} />
        <Route path='/page2' element={<App />} />
        <Route path='/page3' element={<App />} />
      </Routes>
    </BrowserRouter>
  )
}
export default RouteSwitch