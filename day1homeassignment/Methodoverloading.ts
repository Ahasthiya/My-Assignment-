class APIClient {
    sendRequest(endpoint: string): void;
    sendRequest(endpoint: string,requestBody: string,requestStatus: boolean): void;
    sendRequest(endpoint: string,requestBody?: string, requestStatus?: boolean): void {

        if (requestBody === undefined) {
            console.log(`The endpoint is ${endpoint}`);
        }
        else {
            console.log(`The endpoint is ${endpoint}`);
            console.log(`The request body is ${requestBody}`);

            if (requestStatus === true) {
                console.log("The request is successful");
            }
            else {
                console.log("The request is not successful");
            }
        }
    }
}

const br = new APIClient();
br.sendRequest("user");
br.sendRequest("user", "ahasthiya", true);