


interface ApplicationClientConfig {
    locale?: string;
    dateLocale?: string;
}

class ApplicationClient {
    private locale: string;
    private dateLocale: string;

    constructor(config: ApplicationClientConfig = {}) {
        this.locale = config.locale || 'en';
        this.dateLocale = config.dateLocale || 'en-GB';
    }

}

export default ApplicationClient;