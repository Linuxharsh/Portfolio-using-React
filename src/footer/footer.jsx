import React from 'react'

const footer = () => {
  const handleScroll =(sectionId) => {
    console.log('handleScroll called with sectionId:', sectionId);
    const section = document.getElementById(sectionId);
    console.log('Element found:', section);
    if(section) {
      section.scrollIntoView({behavior: 'smooth' });
      console.log('Scrolling to section:', sectionId);
    } else {
      console.log('Section not found:', sectionId);
    }
  }
  return (
    <footer className='text-white py-8 px-[12vw] md:px-[7vw] lg:px-[20vw]'>
      <div className='container mx-auto text-center'>
        <h2 className='text-xl font-semibold text-purple-500' >Harsh Pandey</h2>
        <nav className='flex flex-wrap justify-center space-x-4 sm:space-x-4 sm:space-x-6 mt-4'>
          {[
            {name:'About', id:'about'},
            {name:'Skills', id:'skills'},
            {name:'Work', id:'work'},
            {name:'Education', id:'education'},
            {name:'Contact', id:'contact'},
            ].map((item,index) => (
              <button key={index} onClick={() => handleScroll(item.id)} className='hover:text-purple-500 text-sm sm:text-base my-1'>
                {item.name}
              </button>
            ))
            }
        </nav>
      </div>
    </footer>
  )
}

export default footer
