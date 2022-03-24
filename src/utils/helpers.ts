export class APICalls {
    private static call(endpoint: string, method: string, body: string, headers: {}): Promise<any> {
        return new Promise(((resolve, reject) => {
            fetch(endpoint, {
                method,
                body,
                headers
            }).then(res => res.ok ? res.json() : reject(res)).then(json => resolve(json));
        }));
    }

    public static get(endpoint: string, headers?: {}): Promise<any> {
        return new Promise((resolve, reject) => {
           fetch(endpoint, { headers }).then(data => data.json()).then(json => resolve(json));
        });
    }

    public static post(endpoint: string, body: string, headers?: {}): Promise<any> {
        return this.call(endpoint, "POST", body, headers);
    }

    public static patch(endpoint: string, body: string, headers?: {}): Promise<any> {
        return this.call(endpoint, "PATCH", body, headers);
    }

    public static delete(endpoint: string, body: string, headers?: {}): Promise<any> {
        return this.call(endpoint, "DELETE", body, headers);
    }
}
