export const EMPTY_FUNC = () => {};

export const mapByKey = (arr, key) => new Map(arr.map(item => [item[key], item]));