const DETECTION_REGEX = /pxvw/;

const PARAMS_FIND_REGEX = /pxvw\((.*?)\)/g;

const REPLACE_REGEX = /pxvw|\(|\)|\(/g;

const DEFAULT_OPTIONS = {
  defaultPageWidth: 1200,
  digitsCount: 3
};

module.exports = {
  DETECTION_REGEX,
  PARAMS_FIND_REGEX,
  REPLACE_REGEX,
  DEFAULT_OPTIONS
};
