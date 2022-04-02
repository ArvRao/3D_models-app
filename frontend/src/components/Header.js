import React from 'react'

const Header = () => {

  return (
    <header className="bg-gray-900 w-full">
      <div className="flex items-center justify-between px-7 py-4">
        <div>
          <img className="h-10" src="https://previews.123rf.com/images/sabinarahimova/sabinarahimova1808/sabinarahimova180813080/107448756-3d-modeling-vector-icon-isolated-on-transparent-background-3d-modeling-logo-concept.jpg" alt="3d model" />
        </div>
        <div className="text-white text-4xl text-justify font-semibold tracking-wide font-serif">
          <h1>3D MODELS APPLICATION</h1>
        </div>

        <div className="text-white text-xl font-light">
          {/* <Link to="/about">About</Link> */}
          {/* <a id="App">Upload</a> */}
          <a href="https://google.com" target="_blank">Upload</a>
        </div>
      </div>
    </header>
  )
}

export default Header
