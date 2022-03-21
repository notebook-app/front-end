import React from 'react';
import App from './App';
import {render} from 'react-dom';
import './styles/index.css';
import './components/ContextMenu'
import {Provider} from "react-redux";
import {store} from "./utils/store";

render(<Provider store={store}><App/></Provider>, document.querySelector('#root'));
