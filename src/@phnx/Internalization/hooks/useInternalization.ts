import { useIntl } from 'react-intl';
import { ValuesField } from '../types';
import { defaultMessageBuilder } from '../helpers';

interface FormatMessageParams {
	messageId: string;
	defaultMessage?: string;
	values?: ValuesField;
}

type FormatMessageFnc = (p: FormatMessageParams) => string

const useInternalization = () => {
    const {
        formatMessage:  ReactIntlFormatMessage
    } = useIntl();

    const formatMessage: FormatMessageFnc = ({ messageId, defaultMessage, values  }): string => {
        const msg = ReactIntlFormatMessage(
            {
                id: messageId,
                defaultMessage: defaultMessage || defaultMessageBuilder(messageId),
            }, values);

        return msg;
    };

    return {
        formatMessage
    };
};

export default useInternalization;