const cipher = {

  encode: (offset, string) => {
    let textCod = "";
    if (typeof string !== "string") {
      throw new TypeError('bad arguments');
    }
    /* if (typeof offset !== "number") {
      throw new TypeError('bad arguments');
    }*/
    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);

      if (stringAscii >= 65 && stringAscii <= 90) {
        let textOffset = ((stringAscii - 65 + parseInt(offset)) % 26) + 65;
        textCod += String.fromCharCode(textOffset);

      } else if (stringAscii >= 97 && stringAscii <= 122) {
        let textOffset = ((stringAscii - 97 + parseInt(offset)) % 26) + 97;
        textCod += String.fromCharCode(textOffset);
      } else {
        textCod += String.fromCharCode(stringAscii)
      }
    }
    return textCod;
  },

  decode: (offset, string) => {
    let textDeCod = "";
    if (typeof string !== "string") {
      throw new TypeError('bad arguments');
    }
    /* if (typeof offset !== "number") {
      throw new TypeError('bad arguments');
    }*/
    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);
      if (stringAscii >= 65 && stringAscii <= 90) {
        let textSet = ((stringAscii + 65 - parseInt(offset)) % 26) + 65;//parseInt() lo covierte en number
        textDeCod += String.fromCharCode(textSet);

      } else if (stringAscii >= 97 && stringAscii <= 122) {
        let textSet = ((stringAscii - 45 - parseInt(offset)) % 26) + 97; //97-(26*2)
        textDeCod += String.fromCharCode(textSet);
      } else {
        textDeCod += String.fromCharCode(stringAscii)
      }
    }
    return textDeCod;
  }
};

export default cipher;