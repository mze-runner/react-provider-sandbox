// create global application provide
import React from 'react';

export function createCtx<T>(defaultValue: T) {
    type UpdateType = React.Dispatch<React.SetStateAction<T>>;
    const defaultUpdate: UpdateType = () => defaultValue;
    type ApplicationContext = { state: T; update: UpdateType; };
    const ctx = React.createContext<ApplicationContext>({state: defaultValue, update: defaultUpdate});

    function Provider({ children }: React.PropsWithChildren) {
        const [state, update] = React.useState<T>(defaultValue);
        return <ctx.Provider value={{state, update}}>{children}</ctx.Provider>;
    }
    // <Context.Provider value={client}>{children}</Context.Provider>
    return [ctx, Provider] as const;
}

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