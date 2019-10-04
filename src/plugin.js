const { pxvw } = require("./pxvw");
const {
  PARAMS_FIND_REGEX,
  DETECTION_REGEX,
  DEFAULT_OPTIONS
} = require("./constants");
/**
 * Plugin function
 * @param {object} opts Params object
 * @param {number} opts.defaultPageWidth The page width which will be used for
 * calculations when second pxvw() argument not provided
 * @param {number} opts.digitsCount The digits number which stay after decimal dot in vw value
 * @return {function}
 */
const plugin = (opts = {}) => {
  const options = { ...DEFAULT_OPTIONS, ...opts };

  return root => {
    root.walkDecls(decl => {
      if (DETECTION_REGEX.test(decl.value)) {
        const groups = PARAMS_FIND_REGEX.exec(decl.value);

        if (groups[1]) {
          const [pixels, width] = groups[1].split(",");

          decl.value = pxvw(pixels, {
            digits: options.digitsCount,
            pageWidth: width || options.defaultPageWidth
          });
        }
      }
    });
  };
};

module.exports = { plugin };
