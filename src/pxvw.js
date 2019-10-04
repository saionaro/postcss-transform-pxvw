/**
 * Transforms pixels to vw
 * @param {string|number} pixels
 * @param {object} options Params object
 * @param {number} options.pageWidth Requested page width
 * @param {number} options.digits How much digits stay after decimal dot
 * @return {string} vw-value
 */
const pxvw = (pixels, options) => {
  const width = parseInt(options.pageWidth, 10);
  const widthPercent = width / 100;
  const vw = parseInt(pixels, 10) / widthPercent;

  return `${vw.toFixed(options.digits)}vw`;
};

module.exports = { pxvw };
