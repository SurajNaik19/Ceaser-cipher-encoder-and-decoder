function caesarShift(text, shift, mode = 'encode') {
    if (mode === 'decode') shift = -shift;
    let result = '';
  
    for (let char of text) {
      if (/[a-zA-Z]/.test(char)) {
        let base = char === char.toUpperCase() ? 65 : 97;
        let code = ((char.charCodeAt(0) - base + shift + 26) % 26) + base;
        result += String.fromCharCode(code);
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  function encodeText() {
    const text = document.getElementById('encodeInput').value;
    const shift = parseInt(document.getElementById('encodeShift').value);
    if (!shift || shift < 1 || shift > 25) {
      alert("Please enter a valid shift (1-25).");
      return;
    }
    const output = caesarShift(text, shift, 'encode');
    document.getElementById('encodeOutput').textContent = output;
  }
  
  function decodeText() {
    const text = document.getElementById('decodeInput').value;
    const shift = parseInt(document.getElementById('decodeShift').value);
    if (!shift || shift < 1 || shift > 25) {
      alert("Please enter a valid shift (1-25).");
      return;
    }
    const output = caesarShift(text, shift, 'decode');
    document.getElementById('decodeOutput').textContent = output;
  }
  
  function bruteForceDecode() {
    const text = document.getElementById('decodeInput').value;
    let result = '';
    for (let shift = 1; shift <= 25; shift++) {
      result += `Shift ${shift}: ${caesarShift(text, shift, 'decode')}\n`;
    }
    document.getElementById('decodeOutput').textContent = result;
  }
  