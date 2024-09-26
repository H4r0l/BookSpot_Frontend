
function App() {

  return (
    <>
      <nav className="navbar navbar-toggle bg-dark d-flex align-content-between text-dark" id="">
        <div className="badge text-color-primary text-wrap">
          Navbar
        </div>
      </nav>
      <div className="container-fluid" id="sidebar">
        <div className="row h-100">
          <div className="col-2 bg-subtle-dark d-none d-md-block h-100 sidebar">
            <ul>
              <li><a href="#">Menu Item 1</a></li>
              <li><a href="#">Menu Item 2</a></li>
              <li><a href="#">Menu Item 3</a></li>
            </ul>
          </div>
          <div className="col-md-10 col-12 p-0 main-content">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">Main Content Header</a>
              </div>
            </nav>
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
