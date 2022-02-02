import React from 'react'
import { Routes, Route } from "react-router-dom"
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
import Fp2 from "./pages/fp2"
import Fp3 from "./pages/fp3"

import Fp11_1 from "./pages/fp11_1"

import Fp20 from "./pages/fp20"
import Fp21 from "./pages/fp21"
import Fp22 from "./pages/fp22"
import Fp23 from "./pages/fp23"
import Fp24 from "./pages/fp24"
import Fp25 from "./pages/fp25"
import Fp26 from "./pages/fp26"
import Fp27 from "./pages/fp27"
import Fp28 from "./pages/fp28"
import Fp29 from "./pages/fp29"

import Fp32 from "./pages/fp32"
import Fp33 from "./pages/fp33"
import Fp34 from "./pages/fp34"
import Fp35 from "./pages/fp35"
import Fp36 from "./pages/fp36"
import Fp37 from "./pages/fp37"
import Fp38 from "./pages/fp38"
import Fp39 from "./pages/fp39"
import Fp40 from "./pages/fp40"

import Fp43 from "./pages/fp43"
import Fp44 from "./pages/fp44"
import Fp45 from "./pages/fp45"

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
        <Route path="Fp2" element={<Fp2/>} />
        <Route path="Fp3" element={<Fp3/>} />
        <Route path="Fp11_1" element={<Fp11_1/>} />
        <Route path="Fp20" element={<Fp20/>} />
        <Route path="Fp21" element={<Fp21/>} />
        <Route path="Fp22" element={<Fp22/>} />
        <Route path="Fp23" element={<Fp23/>} />
        <Route path="Fp24" element={<Fp24/>} />
        <Route path="Fp25" element={<Fp25/>} />
        <Route path="Fp26" element={<Fp26/>} />
        <Route path="Fp27" element={<Fp27/>} />
        <Route path="Fp28" element={<Fp28/>} />
        <Route path="Fp29" element={<Fp29/>} />
        <Route path="Fp32" element={<Fp32/>} />
        <Route path="Fp33" element={<Fp33/>} />
        <Route path="Fp34" element={<Fp34/>} />
        <Route path="Fp35" element={<Fp35/>} />
        <Route path="Fp36" element={<Fp36/>} />
        <Route path="Fp37" element={<Fp37/>} />
        <Route path="Fp38" element={<Fp38/>} />
        <Route path="Fp39" element={<Fp39/>} />
        <Route path="Fp40" element={<Fp40/>} />
        <Route path="Fp43" element={<Fp43/>} />
        <Route path="Fp44" element={<Fp44/>} />
        <Route path="Fp45" element={<Fp45/>} />
      </Routes>
    </div>
  )
}

export default App