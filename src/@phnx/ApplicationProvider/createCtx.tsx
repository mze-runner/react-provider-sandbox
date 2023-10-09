// create global application provide
import React, { useEffect, FC, PropsWithChildren, Reducer, useReducer } from 'react';
import { IntlProvider } from 'react-intl';
import { RouterProvider } from 'react-router-dom';
// import type { ApplicationContext } from './types';
import type { DateLocaleCode, LanguageLocaleCode, Messages } from '../Internalization/types';
import { OnErrorFn } from '@formatjs/intl/src/types';
import { ApplicationRouter } from '../router/types';

export interface ApplicationContext {
    locale: LanguageLocaleCode;
    dateLocale: DateLocaleCode;
    timezone?: string;
}

interface ApplicationContextProviderProps {
    locale: LanguageLocaleCode;
    dateLocale?: DateLocaleCode;
    timezone?: string;
    messages: Messages;
    defaultLocale?: LanguageLocaleCode;
    // router object
    router: ApplicationRouter;
}

function isValidTimeZone(tz: string): boolean | never {
    if (!Intl || !Intl.DateTimeFormat().resolvedOptions().timeZone) {
        throw new Error('Time zones are not available in this environment');
    }
    try {
        Intl.DateTimeFormat(undefined, {timeZone: tz});
        return true;
    }
    catch (ex) {
        return false;
    }
}

const onIntlError: OnErrorFn = (err) => {
    console.log(err);
};

interface ReducerAction {
    type: 'tz';
    payload: string;
}


export function createCtx() {
    // type UpdateType = React.Dispatch<React.SetStateAction<ApplicationContext>>;
    type UpdateType = React.Dispatch<React.ReducerAction<Reducer<ApplicationContext, ReducerAction>>>;
    const defaultUpdate: UpdateType = () => null;
    // console.log(defaultUpdate);
    type ApplicationCtx = { state: ApplicationContext | null; dispatch: UpdateType; };
    const ctx = React.createContext<ApplicationCtx>({ state: null, dispatch: defaultUpdate });
    // const IntlProvider: FC<PropsWithChildren<IntlProviderProps>> = (

    const ApplicationProvider: FC<PropsWithChildren<ApplicationContextProviderProps>> = (
        {
            dateLocale = 'en-GB',
            locale = 'en',
            messages,
            timezone,
            defaultLocale = 'en',
            router
            // children
        }) => {
        function reducer(state: ApplicationContext, action: ReducerAction): ApplicationContext {
            switch (action.type) {
            case 'tz': {
                return {...state, timezone: action.payload };
            }
            default:
                throw Error('Unknown action: ' + action.type);
            }
            // per documentation
            // throw Error('Unknown action: ' + action.type);
        }

        // const [state, update] = React.useState<ApplicationContext>({ locale, dateLocale, timezone: timezone || 'tz_holder'});
        const [state, dispatch] = useReducer<Reducer<ApplicationContext, ReducerAction>>(reducer, { locale, dateLocale, timezone: timezone || ''});

        useEffect(() => {
            if(!timezone){
                // set default browser timezone
                const _tz = Intl.DateTimeFormat().resolvedOptions();
                // update({ ...state, timezone: _tz.timeZone });
                dispatch({ type: 'tz', payload: _tz.timeZone});
            }
            if(timezone) {
                // validate tz received from outside and ensure is valid otherwise add default one
                // isValidTimeZone(timezone) ? update({ ...state, timezone }) : update( { ...state, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone });
                isValidTimeZone(timezone) ? dispatch({ type: 'tz', payload: timezone}) : dispatch( { type: 'tz', payload: Intl.DateTimeFormat().resolvedOptions().timeZone });
            }
        }, [timezone]);

        return (
            <ctx.Provider value={{state, dispatch }}>
                <IntlProvider
                    key={state.locale}
                    locale={state.locale}
                    timeZone={state.timezone}
                    messages={messages}
                    defaultLocale={defaultLocale}
                    onError={onIntlError}
                >
                    <RouterProvider router={router} />
                </IntlProvider>
            </ctx.Provider>
        );
    };
    // <Context.Provider value={client}>{children}</Context.Provider>
    return [ctx, ApplicationProvider] as const;
}


// <ReactIntlProvide
//     key={locale}
//     locale={locale}
//     timeZone={tz}
//     messages={messages}
//     defaultLocale={defaultLocale}
//     onError={onIntlError}
// >
//     <MUILocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={localeAdapter}>
//         {children}
//     </MUILocalizationProvider>
// </ReactIntlProvide>


// export function createCtx<A>(defaultValue: A) {
//     type UpdateType = React.Dispatch<React.SetStateAction<typeof defaultValue>>;
//     const defaultUpdate: UpdateType = () => defaultValue;
//     const ctx = React.createContext({ state: defaultValue, update: defaultUpdate });
//     function Provider(props: React.PropsWithChildren<{}>) {
//         const [state, update] = React.useState(defaultValue);
//         return <ctx.Provider value={{ state, update }} {...props} />;
//     }
//     return [ctx, Provider] as const;
// }



// function Provider({ locale, dateLocale, timezone, children }: React.PropsWithChildren<ApplicationContextProviderProps>) {
//
//     const [state, update] = React.useState<ApplicationContext>({ locale, dateLocale, timezone: timezone || 'tz_holder'});
//
//     useEffect(() => {
//         if(!timezone){
//             // set default browser timezone
//             const _tz = Intl.DateTimeFormat().resolvedOptions();
//             // setTz(_tz.timeZone);
//             update({ ...state, timezone: _tz.timeZone });
//         }
//         if(timezone) {
//             // validate tz received from outside and ensure is valid otherwise add default one
//             isValidTimeZone(timezone) ? update({ ...state, timezone }) : update( { ...state, timezone: Intl.DateTimeFormat().resolvedOptions().timeZone });
//         }
//     }, [timezone]);
//
//     return <ctx.Provider value={{state, update}}>{children}</ctx.Provider>;
// }