import React from 'react';
import ReactDOM from 'react-dom';
import '../src/styles/bootstraptheme.scss';
import 'tailwindcss/dist/base.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import '../src/styles/main.css';
import App from './App';
import logo from '../src/static/logo-light.png';
import { css } from 'styled-components/macro';

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
