import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ApplicationProvider } from '../@phnx';

function App() {
    return (
        <ApplicationProvider>
            <RouterProvider router={router}/>
        </ApplicationProvider>
    );
}

export default App;
