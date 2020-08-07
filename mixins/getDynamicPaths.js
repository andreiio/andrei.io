import path from 'path';
import glob from 'glob';

/* https://github.com/jake-101/bael-template */
export default function(urlFilepathTable) {
    return [].concat(
        ...Object.keys(urlFilepathTable).map(url => {
            var filepathGlob = urlFilepathTable[url];
            return glob
                .sync(filepathGlob, { cwd: 'content' })
                .map(filepath => `${url}/${path.basename(filepath, '.md')}/`);
        })
    );
}
