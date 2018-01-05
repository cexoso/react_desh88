import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Route';
import registerServiceWorker from './registerServiceWorker';
import {I18nextProvider} from 'react-i18next';
import i18n from './service/I18n';

ReactDOM.render(<I18nextProvider i18n={i18n}>{Routes()}</I18nextProvider>, document.getElementById('root'));
registerServiceWorker();
