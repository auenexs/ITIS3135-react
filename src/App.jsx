import { Routes, Route } from 'react-router'
import './App.css'

// Layouts
import RootLayout from './layouts/RootLayout'
import CourseLayout from './layouts/CourseLayout'

// Root Pages
import RootHome from './pages/RootHome'
import Introduction from './pages/Introduction'

// Course Pages
import Home from './pages/Home'
import Contract from './pages/Contract'
import WebsiteEvaluations from './pages/WebsiteEvaluations'
import Survey from './pages/Survey'
import Gallery from './pages/Gallery'
import Inventory from './pages/Inventory'
import Instructions from './pages/Instructions'
import Highlight from './pages/Highlight'
import Hobby from './pages/Hobby'
import IntroForm from './pages/IntroForm'
import CrappyWebpage from './pages/CrappyWebpage'
import Slideshow from './pages/Slideshow'

function App() {
  return (
    <Routes>
      {/* Root Site */}
      <Route element={<RootLayout />}>
        <Route path="/" element={<RootHome />} />
        <Route path="/introduction" element={<Introduction />} />
      </Route>

      {/* Course Site */}
      <Route path="/itis3135" element={<CourseLayout />}>
        <Route index element={<Home />} />
        <Route path="contract" element={<Contract />} />
        <Route path="website-evaluations" element={<WebsiteEvaluations />} />
        <Route path="survey" element={<Survey />} />
        <Route path="gallery" element={<Gallery />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="instructions" element={<Instructions />} />
        <Route path="highlight" element={<Highlight />} />
        <Route path="hobby" element={<Hobby />} />
        <Route path="intro-form" element={<IntroForm />} />
        <Route path="crappy-webpage" element={<CrappyWebpage />} />
        <Route path="slideshow" element={<Slideshow />} />
      </Route>
    </Routes>
  )
}

export default App
