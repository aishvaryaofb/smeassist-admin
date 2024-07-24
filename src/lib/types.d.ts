declare module '*.module.css';
declare module '*.module.scss';

declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.gif';

declare module '*.svg';
declare module '*.svg?url';
declare module '*.svg?base64';

interface Window {
	__PRELOADED_STATE__: any;
	dataLayer: any;
	google: any;
}

declare const NO_SSR: boolean;
declare const AUTH_TOKEN: string;
declare const SERVER_PORT: number;
declare const IS_DEV: boolean;
declare const SME_API_URL: string;
declare const PLATFORM: string;
declare const LOG_PATH: string;
declare const ENV: string;

declare module 'tcomb-form' {
	const Form: any;
	export default Form;
}
