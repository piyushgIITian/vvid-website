import vvidLogo from './assets/vvid-logo.svg'
import './App.css'

function App() {
  return (
    <div className="app">
      <div className="container">
        <div className="logo-section">
          <img src={vvidLogo} alt="VVID" className="logo" />
        </div>
        
        <div className="content">
          <h1 className="coming-soon">Coming Soon</h1>
          <p className="brand-description">Premium Sneaker Brand</p>
        </div>
      </div>
    </div>
  )
}

export default App
