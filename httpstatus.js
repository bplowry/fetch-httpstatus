var runTests = async () => {
    var statuses = [
        200, 201, 202, 203, 204, 205, 206,
        300, 301, 302, 303, 304, 305, 306, 307, 308,
        400, 401, 402, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 417, 418, 422, 428, 429, 431, 451,
        500, 501, 502, 503, 504, 505, 511, 520, 522, 524
    ];

    for (const status of statuses) {
        await testStatus(status); 
    }
}

var handleResponse = (resp) => {
    if (!resp.ok) throw Error("response was not ok");
    return resp;
}

testStatus = async (status) => {
    try {
        await fetch(`https://httpstat.us/${status}`, { method: 'GET', mode: 'cors' })
            .then(handleResponse); // comment out this line to see native `fetch` behaviour
        console.log(`${status} is good`);        
    } catch (err) {
        console.error(`${status} is bad`);
    }
}