// create global application provide
import React, { useContext } from 'react';
import { createCtx } from './createCtx';
import type {ApplicationContext } from './types';
// import applicationContext from "./createCtx";


const initialContext: ApplicationContext = {
    locale: 'locale_context',
    dateLocale: 'locale_dateLocale',
    timezone: 'locale_timezone'
};

const [ctx, Provider] = createCtx<ApplicationContext>(initialContext);


// expose context outside
// the hook is a save guard preventing an access directly to the context of the application.
// It exposures the state of the context and update functions
export const useApplicationContext = () => {
    const context = useContext(ctx);

    function updateTimezone(tz: string) {
        context.update({ ...context.state, timezone: tz });
    }

    return {
        ...context.state,
        updateTimezone
    };
};

export default Provider;


// hook to access to context
// + context mamipilation
// function useApplicationContext() {
//     const c = React.useContext(context);
//     if (!context) {
//         throw new Error(`useAuthenticatedContext must be used within a AccountContextProvider`);
//     }
//     // const { auth, setAuth} = context;
//     // setAccount // setProfile
//     return context;
//     // return {
//     //     account,
//     //     setAccount,
//     // };
// }


// export function ApplicationProvider(props: React.PropsWithChildren<{}>) {
//     const [state, update] = React.useState<>(initialContext);
//     return <applicationContext.Provider value={{ state, update }} {...props} />;
// }

// export default  {
//     ApplicationProvider
//
// }


