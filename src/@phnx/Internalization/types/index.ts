import { MessageFormatElement } from 'react-intl';
import { languageLocaleCode, dateLocaleCode } from '../cost';

export type Messages = Record<string, string> | Record<string, MessageFormatElement[]>
// Record<MessageIds, string> | Record<MessageIds, MessageFormatElement[]>;

export type LanguageLocaleCode = typeof languageLocaleCode[number];
export type DateLocaleCode = typeof dateLocaleCode[number];

export type ValuesField =  {
	[key: string]: string
};