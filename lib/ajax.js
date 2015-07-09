export default function (options) {
    if (options.type && options.url) {
        var xhr = new window.XMLHttpRequest();
        xhr.open(options.type, options.url, true);
        if (options.headers) {
            for (var key in options.headers) {
                if (options.headers.hasOwnProperty(key)) {
                    xhr.setRequestHeader(key, options.headers[key]);
                }
            }
        }
        if (options.beforeSend) {
            options.beforeSend(xhr);
        }

        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (options.success) {
                    options.success(JSON.parse(xhr.responseText));
                }
            }
        };

        xhr.onerror = function () {
            if (options.error) {
                options.error(JSON.parse(xhr.responseText));
            }
        };

        xhr.send(JSON.stringify(options.data) || null);
    }
}
