import React from 'react';
import { render } from 'react-dom';

/**
 * Components
 */

import CountrySelector from './components/countryselector/CountrySelector';




const app = (
    <div>
        <CountrySelector selected="cl" />
    </div>
)

render(app, document.getElementById('root'));
