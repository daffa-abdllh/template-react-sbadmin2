import { useState } from 'react';
import Footer from './components/layouts/Footer';
import Sidebar from './components/layouts/Sidebar';
import Topbar from './components/layouts/Topbar';

function App() {
  const [loading, setLoading] = useState(true);
  const [style, setStyle] = useState(
    'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
  );
  const changeStyle = () => {
    if (
      style === 'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion'
    ) {
      setStyle(
        'navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled'
      );
    } else {
      setStyle('navbar-nav bg-gradient-primary sidebar sidebar-dark accordion');
    }
  };

  return (
    <div id='wrapper'>
      <Sidebar style={style} changeStyle={changeStyle} />

      <div className="d-flex flex-column" id="content-wrapper">
        <div id='content'>
          <Topbar style={style} changeStyle={changeStyle} />

          <div className='container-fluid'>
          {loading ? (
            <div className="d-flex justify-content-center align-items-center center1">
              <div className="text-center">
                <div className="spinner-border text-primary" role="status" />
                <br />
                <span>Wait a minute...</span>
              </div>
            </div>
          ) : (
            <h2>Hello World</h2>
          )}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
