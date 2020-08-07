import glob from 'glob';
import path from 'path';

export default glob
    .sync(path.join('i18n', 'messages', '*.json'))
    .map(file => ({
        [path.parse(file).name]: require(path.resolve(file)),
    }))
    .reduce((result, current) => Object.assign(result, current), {});
