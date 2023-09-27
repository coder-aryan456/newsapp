import React from 'react'
import Navbar from './Components/Navbar'
import Newsa from './Components/Newsa'
import { Route, Routes} from 'react-router-dom';
 const App=()=>  {

    return (
      <div style={{  backgroundColor : "#030e28"}} >
        <Navbar />
        {/* <Newsa category="general" /> */}

          <Routes>
       <Route>
       <Route path="/general" element={<Newsa key="general" category="general" />} />
       </Route>  
        <Route>
        <Route path="/technology" element={  <Newsa key="technology" category="technology" />} />
        </Route>
        <Route>
        <Route path="/sports" element={  <Newsa key="sports" category="sports" />} />
        </Route>
        <Route>
        <Route path="/health" element={  <Newsa key="health" category="health" />} />
        </Route>
        <Route>
        <Route path="/science" element={  <Newsa key="science" category="science" />} />
        </Route>
        <Route>
        <Route path="/entertainment" element={  <Newsa key="entertainment" category="entertainment" />} />
        </Route>
        <Route>
        <Route path="/business" element={  <Newsa key="business" category="business" />} />
        </Route>
        
      </Routes>
      </div>
    )
  
}
export default App
