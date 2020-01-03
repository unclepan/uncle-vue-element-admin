

export function getPropObject(suggestion = () => ({})) {
  return {
    type: Object,
    default: suggestion,
  };
}
export function getPropArray(suggestion = () => []) {
  return {
    type: Array,
    default: suggestion,
  };
}
export function getPropString(suggestion = '') {
  return {
    type: String,
    default: suggestion,
  };
}
export function getPropNumber(suggestion = 0) {
  return {
    type: Number,
    default: suggestion,
  };
}
export function getPropBoolean(suggestion = false) {
  return {
    type: Boolean,
    default: suggestion,
  };
}
export function getPropFunction(suggestion = () => {}) {
  return {
    type: Function,
    default: suggestion,
  };
}
