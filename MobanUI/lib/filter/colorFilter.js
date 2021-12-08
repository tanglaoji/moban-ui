const colorFilter = [
  /**
 * @description 根据心理学公式判断深浅色，g 越小表示颜色越深
 * @param {array} rgb
 * @returns dark | light
 */
  {
    name: "judgingTheShade",
    func: (rgb) => {
      if (typeof rgb !== "object") return;
      let g = rgb[0] * 0.299 + rgb[1] * 0.587 + rgb[2] * 0.114;
      if (g >= 192) return "dark";// 深色
      else return "light";// 浅色
    }
  },
  /**
   * @description 将hex格式转换成rgb格式
   * @param {string} hex 
   * @returns [0, 0, 0]
   */
  {
    name: "hexToRgb",
    func: (hex) => {
      if (typeof hex !== "string") return;
      // 16进制颜色值的正则
      let reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
      // 把颜色值变成小写
      let color = hex.toLowerCase();
      if (reg.test(color)) {
        // 如果只有三位的值，需变成六位，如：#fff => #ffffff
        if (color.length === 4) {
          let colorNew = "#";
          for (let i = 1; i < 4; i += 1) {
            colorNew += color.slice(i, i + 1).concat(color.slice(i, i + 1));
          }
          color = colorNew;
        }
        // 处理六位的颜色值，转为RGB
        let colorChange = [];
        for (let j = 1; j < 7; j += 2) {
          colorChange.push(parseInt("0x" + color.slice(j, j + 2)));
        }
        return colorChange;
      } else {
        return color;
      }
    }
  }
]

export default colorFilter;