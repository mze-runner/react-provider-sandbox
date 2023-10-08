import { ApplicationContext } from './types';
import React from 'react';

const initialContext: ApplicationContext = {
    locale: 'locale_context',
    dateLocale: 'locale_dateLocale',
    timezone: 'locale_timezone'
};

type UpdateType = React.Dispatch<React.SetStateAction<ApplicationContext>>;
const defaultUpdate: UpdateType = () => initialContext;
type Context = {
    state: ApplicationContext | undefined;
    update: UpdateType;
};

const ctx = React.createContext<Context>({ state: undefined, update: defaultUpdate });

export default ctx;


// export default