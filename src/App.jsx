import Navbar from "./Components/Navbar.jsx"

function App() {

  return (
    <>
      <Navbar/>

      <div className="container-fluid" id="sidebar">
        <div className="row h-100">
          <div className="col-md-10 col-12 p-0 main-content">
            <div className="p-4">
              <h1>Main Content</h1>
              <p>This is the main content area.</p>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default App
