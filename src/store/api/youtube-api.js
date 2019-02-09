// This is the youtube api boiler plate

export function buildApiRequest(requestMethod, path, params, properties) {
    params = removeEmptyParams(params);
    let request;

    if (properties) {
        let resource = createResource(properties);
        request = window.gapi.client.request({
            'body': resource,
            'method': requestMethod,
            'path': path,
            'params': params
        });
    } else {
        request = window.gapi.client.request({
            'method': requestMethod,
            'path': path,
            'params': params
        });
    }
    return request
}

function removeEmptyParams(params) {
    for (let p in params) {
        if (!params[p] || params[p] === 'undefined') {
            delete params[p];
        }
    }
    return params;
}

function createResource(properties) {

    const resource = {};
    const normalizedProps = properties;

    for (let p in properties) {
        const value = properties[p];

        if (p && p.substr(-2, 2) === '[]') {
            const adjustedName = p.replace('[]', '');

            if (value) {
                normalizedProps[adjustedName] = value.split('');
            }

            delete normalizedProps[p];
        }
    }

    for (let prop in normalizedProps) {
        //Leave properties that don't have values out of inserted resource
        if (normalizedProps.hasOwnProperty(prop) && normalizedProps[prop]) {
            const propArray = prop.split('.');
            const ref = resource;

            for (let pa = 0; pa < propArray.length; pa++) {
                const key = propArray[pa];

                if (pa === propArray.length - 1) {
                    ref[key] = normalizedProps[prop];
                } else {
                    ref = ref[key] = ref[key] || {};
                }
            }
        };
    };
    return resource
}