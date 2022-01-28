import React from 'react'
import { useNavigate, Routes, Route } from "react-router-dom"
import Init_1 from "./pages/init1"
import Init_2 from "./pages/init2"
import Init_3 from "./pages/init3"
import Ss1 from "./pages/ss1"
import Ss1_1 from "./pages/ss1_1"
import Ss1_2 from "./pages/ss1_2"
import Ss1_3 from "./pages/ss1_3"
import Ss1_4 from "./pages/ss1_4"
import Ss1_5 from "./pages/ss1_5"
import Ss1_6 from "./pages/ss1_6"
import Ss2 from "./pages/ss2"
import Ss3 from "./pages/ss3"
import Ss4 from "./pages/ss4"
import Ss5 from "./pages/ss5"
import Ss6 from "./pages/ss6"
import Ss7 from "./pages/ss7"
import Ss8 from "./pages/ss8"
import Ss8_1 from "./pages/ss8_1"
import Ss8_1_1 from "./pages/ss8_1_1"
import Ss8_1_2 from "./pages/ss8_1_2"
import Ss8_1_3 from "./pages/ss8_1_3"
import Ss8_1_4 from "./pages/ss8_1_4"
import Ss8_1_5 from "./pages/ss8_1_5"
import Ss8_2 from "./pages/ss8_2"
import Ss8_2_1 from "./pages/ss8_2_1"
import Ss8_2_2 from "./pages/ss8_2_2"
import Ss8_2_3 from "./pages/ss8_2_3"
import Fp1 from "./pages/fp1"

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Init_1 />} />
        <Route path="Init_2" element={<Init_2 />} />
        <Route path="Init_3" element={<Init_3 />} />
        <Route path="Ss1" element={<Ss1 />} />
        <Route path="Ss1_1" element={<Ss1_1 />} />
        <Route path="Ss1_2" element={<Ss1_2 />} />
        <Route path="Ss1_3" element={<Ss1_3 />} />
        <Route path="Ss1_4" element={<Ss1_4 />} />
        <Route path="Ss1_5" element={<Ss1_5 />} />
        <Route path="Ss1_6" element={<Ss1_6 />} />
        <Route path="Ss2" element={<Ss2 />} />
        <Route path="Ss3" element={<Ss3 />} />
        <Route path="Ss4" element={<Ss4 />} />
        <Route path="Ss5" element={<Ss5 />} />
        <Route path="Ss6" element={<Ss6 />} />
        <Route path="Ss7" element={<Ss7 />} />
        <Route path="Ss8" element={<Ss8 />} />
        <Route path="Ss8_1" element={<Ss8_1 />} />
        <Route path="Ss8_1_1" element={<Ss8_1_1 />} />
        <Route path="Ss8_1_2" element={<Ss8_1_2 />} />
        <Route path="Ss8_1_3" element={<Ss8_1_3 />} />
        <Route path="Ss8_1_4" element={<Ss8_1_4 />} />
        <Route path="Ss8_1_5" element={<Ss8_1_5 />} />
        <Route path="Ss8_2" element={<Ss8_2 />} />
        <Route path="Ss8_2_1" element={<Ss8_2_1 />} />
        <Route path="Ss8_2_2" element={<Ss8_2_2 />} />
        <Route path="Ss8_2_3" element={<Ss8_2_3 />} />
        <Route path="Fp1" element={<Fp1/>} />
      </Routes>
    </div>
  )
}

export default App