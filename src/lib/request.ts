import cookieManager from "./cookies";

class RequestManager {
    private static getBaseUrl(): string {
        const baseUrl = process.env.BASE_URL_SERVER;
        if (!baseUrl) {
            throw new Error('BASE_URL_SERVER is not defined in environment variables.');
        }
        return baseUrl;
    }

    private static async checkStatus(response: Response): Promise<Response> {
        if (response.ok) {
            return response;
        }
        const body = await response.json();
        throw new Error(body.errorMessage);
    }

    private static getHeaders(header?: Record<string, string>): Record<string, string> {
        let headers: Record<string, string> = {};
        if (cookieManager.get('authToken')) {
            headers['X-ASSIST-TOKEN'] = cookieManager.get('authToken') as string;
        }
        if (cookieManager.get('orgId')) {
            headers['X-ORG-ID'] = cookieManager.get('orgId') as string;
        }
        headers['content-type'] = 'application/json';
        if (header) {
            headers = { ...headers, ...header };
        }
        return headers;
    }

    private static async fetchJson(url: string, options: RequestInit): Promise<any> {
        console.log("RequestManager ->", url, options)
        const response = await fetch(url, options);
        await this.checkStatus(response);
        const json = await response.json();
        return json.data;
    }

    public static async get(endpoint: string): Promise<any> {
        const url = `${this.getBaseUrl()}${endpoint}`;
        const headers = this.getHeaders();
        try {
            return await this.fetchJson(url, { method: 'GET', headers });
        } catch (error) {
            console.error('Request Url ->', url);
            console.error('Request Error ->', error);
            return null;
        }
    }

    public static async post(endpoint: string, data?: any, contentType: string = 'application/json'): Promise<any> {
        const url = `${this.getBaseUrl()}${endpoint}`;
        const headers = this.getHeaders({ 'content-type': contentType });
        let body: any = data;
        if (contentType !== 'application/octet-stream') {
            body = JSON.stringify(data);
        }
        try {
            return await this.fetchJson(url, { method: 'POST', headers, body });
        } catch (error) {
            console.error('Request Url ->', url);
            console.error('Request Error ->', error);
            return null;
        }
    }
}

export default RequestManager;
