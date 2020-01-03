export default class Fields {
  constructor(data) {
    const Fie = data.reduce((result, Component) => {
      const res = result;
      let { INDEX } = Component;
      if (!INDEX) {
        throw Error('缺乏索引，动态字段组件不能注册');
      }
      if (!Array.isArray(INDEX)) {
        INDEX = [INDEX];
      }
      INDEX.forEach((item) => {
        if (res[item]) {
          throw Error('重复的索引，动态字段组件不能注册');
        }
        res[item] = Component;
      });
      return res;
    }, {});

    Object.keys(Fie).forEach((key) => {
      this[Fields.getKey(key)] = Fie[key];
    });
  }

  static getKey(origin) {
    return `X-${origin}`;
  }
}
