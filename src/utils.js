export default {
  /**
   * @desc 在数组 arr 中取出随机 count 项
   * @param {*} arr 数组
   * @param {*} count 要出的数据长度
   */
  getRandomArraySlice(arr, count) {
    const newArr = [].concat(arr);
    for (let i = 0, len = newArr.length; i < len; i++) {
      const x = Math.floor(Math.random()) * count;
      // swap
      const tmp = newArr[x];
      newArr[x] = newArr[i];
      newArr[i] = tmp;
    }
    return newArr.slice(0, count);
  },

  /**
   * arrayChunk 方法，把一个数据切分成 size 份数，支持不够的时候自动取随机数进行填充
   * @param {*} arr 数组
   * @param {*} size 要切割的 chunk size
   * @param {*} options 一些拓展参数。比如是否进行自动补全
   */
  arrayChunk(arr = [], size = 4, options) {
    let groups = [];
    if (arr && arr.length > 0) {
      groups = arr.map((e, i) => (i % size === 0 ? arr.slice(i, i + size) : null)).filter(e => e);
    }

    if (options && options.autoComplete) {
      const lastIndex = groups.length - 1;
      if (lastIndex >= 0) {
        groups[lastIndex] = groups[lastIndex].concat(
          this.getRandomArraySlice(arr.slice(0, size * lastIndex), size - groups[lastIndex].length)
        );
      }
    }
    return groups;
  },

};
