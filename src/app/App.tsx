import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import { ApplicationProvider } from '../@phnx';
import English from '../lang/en.json';

function App() {
    return (
        <ApplicationProvider
            locale="en"
            dateLocale="en-GB"
            messages={English}
            router={router}
        />
    );
}

// <RouterProvider router={router}/>
// </ApplicationProvider>
export default App;
