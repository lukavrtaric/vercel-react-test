/* eslint-env node */

'use strict';

module.exports = {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    process(sourceText, sourcePath, options) {
        return {
            code: `module.exports = {};`,
        };
    },
    getCacheKey() {
        // The output is always the same.
        return 'cssTransform';
    },
};
