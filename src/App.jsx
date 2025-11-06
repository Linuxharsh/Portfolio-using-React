import React from 'react'
import Navbar from './navbar/navbar.jsx'
import Work from './work/work.jsx'
import Contact from './contact/contact.jsx'
import Footer from './footer/footer.jsx'
import About from './about/about.jsx'
import Skills from './skills/skills.jsx'
import Education from './edducation/education.jsx'
import Blurblob from './blurblob.jsx'

const App = () => {
  return (
    <div className='bg-[#050414]'>
      <Blurblob position={{top:'35%',left:'20%'}} size={{width:'30%', height:'40%'}} />

      <div className='absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]'></div>
      <div className='relative pt-20'>
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  )
}

export default App
