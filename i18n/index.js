import glob from 'glob';
import path from 'path';

const messagesPath = path.join('i18n', 'messages');

export default glob
    .sync('*.js', { cwd: messagesPath })
    .map(file => ({
        [path.parse(file).name]: require(path.resolve(messagesPath, file)),
    }))
    .shift();
