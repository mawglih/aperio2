import React from 'react';
import { mount } from 'app1/App1';

const App = () => {
    const Marketing = async () => await mount();
    console.log(Marketing);
    return(
        <h1>Container</h1>
    )
}

export default App;
