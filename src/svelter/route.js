import { pathToRegexp } from 'path-to-regexp';

const defaultOptions = { exact: false, strict: false, sensitive: false };
const regexCache = {};

const matchPath = (pathname, path, { exact = false, strict = false, sensitive = false } = defaultOptions) => {
    let { pathRegex, keys } = regexCache[path] || {};

    if (pathRegex === undefined) {
        const keys = [];
        pathRegex = pathToRegexp(path, keys, { end: exact, strict, sensitive });
        regexCache[path] = { pathRegex, keys };
    }

    const match = pathRegex.exec(pathname);

    if (match) {
        const [matchedPath, ...keyValues] = match;
        const params = {};
        keys.forEach((v, i) => {
            params[v] = keyValues[i];
        });

        return {
            matchedPath,
            params,
        };
    }

    return null;
};

export default matchPath;
