// create global application provide
import React, { useContext } from 'react';
import { createCtx } from './createCtx';
import { useIntl } from 'react-intl';
// import type {ApplicationContext } from './types';
// import applicationContext from "./createCtx";

const [ctx, Provider] = createCtx();


// expose context outside
// the hook is a save guard preventing an access directly to the context of the application.
// It exposures the state of the context and update functions
export const useApplicationContext = () => {
    const context = useContext(ctx);

    const {
        locale,
        defaultLocale,
        timeZone,
    } = useIntl();

    if(!context.state) {
        throw new Error('ApplicationProvider is not ');
    }

    // function updateTimezone(tz: string) {
    //     // context.dispatch({ locale: context.state?.locale || 'en', dateLocale: 'tttt', timezone: tz });
    //     context.dispatch({ type: 'tz', payload: tz});
    // }

    const updateTimezone = (tz: string) => context.dispatch({ type: 'tz', payload: tz});

    return {
        // ...context.state,
        locale,
        defaultLocale,
        timezone: timeZone,
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


