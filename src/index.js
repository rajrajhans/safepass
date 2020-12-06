import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import '../src/styles/main.css';
import App from './App';
import logo from '../src/static/logo.png';

ReactDOM.render(
  <React.StrictMode>
    <div className={'loadingWrapper'} id={'loadingWrapper'}>
      <div className="loadingLogo">
        <img id={'loadingLogoImg'} src={logo} alt={'SafePass'} />
      </div>
    </div>

    <div className="contentWrapper">
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
