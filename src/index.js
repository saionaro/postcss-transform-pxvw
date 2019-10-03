const postcss = require("postcss");

const pxvw = (pixels, pageWidth) => {
  const width = parseInt(pageWidth, 10);
  const widthPercent = width / 100;
  const vw = parseInt(pixels, 10) / widthPercent;

  return `${vw}vw`;
};

const DETECTION_REGEX = /pxvw/;
const PARAMS_FIND_REGEX = /pxvw\((.*)\)/;

module.exports = postcss.plugin(
  "postcss-transform-pxvw",
  (
    options = {
      deviceWidth: 1200
    }
  ) => root => {
    root.walkDecls(decl => {
      if (DETECTION_REGEX.test(decl.value)) {
        const groups = PARAMS_FIND_REGEX.exec(decl.value);

        if (groups[1]) {
          const [pixels, width] = groups[1].split(",");

          decl.value = pxvw(pixels, width || options.deviceWidth);
        }
      }
    });
  }
);
