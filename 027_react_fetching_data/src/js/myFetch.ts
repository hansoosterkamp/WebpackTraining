 //-----------------------------------------------------------------
 // generic fetch promise with retry



//export function defaultHeaders(): { [name: string]: string } {
//    return {
//        "RequestVerificationToken": getRequestVerificationToken(),
//    };
//}

//export function getRequestVerificationToken(): string {
//    const input = document.body.querySelector("input[name='__RequestVerificationToken']") as HTMLInputElement;
//    return input.value;
//}


export class MyFetch {

    public static async fetchJSON(url: string): Promise<any> {
        return MyFetch.fetchJSONRequest(url, null);
    }

    public static async fetchJSONRequest(url: string, postJsonObject: any | null): Promise<any> {
        let init: RequestInit | undefined;

        if (postJsonObject != null) {
            const headers: { [name: string]: string } = {}
            headers["Content-Type"] = "application/json";

            init = {
                method: "POST",
                body: JSON.stringify(postJsonObject),
                headers: headers
            };
        }

        let retryCount = 3;
        const boolValue = true;
        while (boolValue) {
            const response = await fetch(url, init);

            if (response.status >= 500)
                console.log(`Server responding status ${response.status}`);

            const cth = response.headers.get("Content-Type");
            const contentType = cth ? cth.split(";")[0].toLowerCase() : null;

            if (response.ok) {
                if (contentType === "application/json")
                    return response.json();
                return;
            }

            retryCount--;

            if (retryCount <= 0) {
                const msg = await MyFetch.getErrorMessage(response, contentType);
                throw new Error(msg);
            }

            await MyFetch.sleep(1000);
        }
    }

    private static async getErrorMessage(r: Response, contentType: string | null): Promise<string> {
        if (contentType != null) {
            if (contentType === "text/plain")
                return r.text();

            if (contentType === "application/json") {
                // The server returns problem details as described by RFC 7807:
                // https://datatracker.ietf.org/doc/html/rfc7807
                const details = await r.json();
                if (details)
                    return details.title;
            }
        }

        return "Unknown error";
    }

    public static sleep(ms): Promise<number> {
        return new Promise((resolve: TimerHandler): number => setTimeout(resolve, ms));
    }
}