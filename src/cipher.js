const cipher = {

  encode: (offset, string) => {
    let textCod = '';
    if (typeof string !== 'string') {
      throw new TypeError('bad arguments');
    }
    /* if (typeof offset !== 'number') {
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
        
        /*caracteres especiales*/
      } else if(stringAscii >= 32 && stringAscii <= 64){
        let textOffset = ((stringAscii - 32 + parseInt(offset)) % 33) + 32; 
        textCod += String.fromCharCode(textOffset);
        
      }else if(stringAscii >= 91  && stringAscii <= 96){
        let textOffset = ((stringAscii - 91 + parseInt(offset)) % 6) + 91;
        textCod += String.fromCharCode(textOffset);
      }
      /*else if(stringAscii >= 123 && stringAscii <= 254){
        let textOffset = ((stringAscii - 123 + parseInt(offset)) % 132) + 123;
        textCod += String.fromCharCode(textOffset);
      }*/
    }
    return textCod;
  },

  decode: (offset, string) => {
    let textDeCod = '';
    if (typeof string !== 'string') {
      throw new TypeError('bad arguments');
    }
    /* if (typeof offset !== 'number') {
      throw new TypeError('bad arguments');
    }*/
    for (let i = 0; i < string.length; i++) {
      let stringAscii = string.charCodeAt(i);
      if (stringAscii >= 65 && stringAscii <= 90) {
        let newtext = ((stringAscii + 65 - parseInt(offset)) % 26) + 65;//parseInt() lo covierte en number
        textDeCod += String.fromCharCode(newtext);

      } else if (stringAscii >= 97 && stringAscii <= 122) {
        let newtext = ((stringAscii - 45 - parseInt(offset)) % 26) + 97; //(26*2)-97
        textDeCod += String.fromCharCode(newtext);

      } else if(stringAscii >= 32 && stringAscii <= 64){
        let newtext = ((stringAscii + 1 - parseInt(offset)) % 33) + 32; //33-32
        textDeCod += String.fromCharCode(newtext);

      }else if(stringAscii >= 91  && stringAscii <= 96){
        let newtext = ((stringAscii + 5 - parseInt(offset)) % 6) + 91;
        textDeCod += String.fromCharCode(newtext);
      }
      /*else if(stringAscii >= 123  && stringAscii <= 255){
        let newtext = ((stringAscii - 45 - parseInt(offset)) % 26) + 123; //97-(26*2)
        textDeCod += String.fromCharCode(newtext);
      }*/
    }
    return textDeCod;
  }
};

export default cipher;