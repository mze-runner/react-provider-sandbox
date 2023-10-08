import React, { FC } from 'react';
import { useApplicationContext } from '../../@phnx';


const ExamplePage: FC = () => {
    const { locale, dateLocale, timezone, updateTimezone } = useApplicationContext();

    const onUpdateTimezoneClick =() => {
        if (timezone === 'SG') {
            updateTimezone('CET');
            return;
        }
        updateTimezone('SG');
    };

    return (
        <>
            <p>this is an example page</p>
            <p>Locale: {locale}</p>
            <p>Date Locale: {dateLocale}</p>
            <p>Timezone: {timezone}</p>
            <button onClick={onUpdateTimezoneClick}>Update Timezone</button>
        </>
    );
};

export default ExamplePage;