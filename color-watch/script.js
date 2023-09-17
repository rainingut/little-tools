// https://stackoverflow.com/q/46432335
// https://css-tricks.com/converting-color-spaces-in-javascript/
const colorPicker = document.getElementById('colorPicker');
const board = document.getElementById('board');
colorPicker.addEventListener('input', function(e){
    setContent(this.value);
} );

function newPElm(text){
    const p = document.createElement('p');
    p.innerText = text;
    return p;
}

function setContent(hex){
    const {r,g,b,rgb} = hexToRGB(hex);
    const {h,s,l:light,hsl} = hexToHSL(hex);
    board.style.cssText = `
        background: ${hex};
        color: ${light > 50 ? 'black': 'white'};
    `;
    
    board.innerHTML = ``;
    board.appendChild(newPElm(`HEX: ${hex}`));
    board.appendChild(newPElm(`RGB: ${rgb}`));
    board.appendChild(newPElm(`hsl: ${hsl}`));
}

function xxxhexToHsl(hex) {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

    let _r=r = parseInt(result[1], 16),
        _g=g = parseInt(result[2], 16),
        _b=b = parseInt(result[3], 16);

    r /= 255, g /= 255, b /= 255;
    const max = Math.max(r, g, b), 
          min = Math.min(r, g, b);
    let h, s, l = (max + min) / 2;

    if(max == min){
        h = s = 0; // achromatic
    } else {
        const d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch(max) {
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
            default: break;
        }
        h /= 6;
    }
    s = s*100;
    s = Math.round(s);
    l = l*100;
    l = Math.round(l);
    h = Math.round(360*h);
    const obj = {
        hex,
        rgb: `rgb(${_r}, ${_g}, ${_b})`,
        hsl: `hsl(${h}, ${s}%, ${l}%)`,
        light: l
    };
    setContent(obj);
}
// xxxhexToHsl(colorPicker.value);

function hexToRGB(hex) {
    let r = 0, g = 0, b = 0;
    // 3 digits
    if (hex.length == 4) {
      r = `0x${hex[1]}${hex[1]}`;
      g = `0x${hex[2]}${hex[2]}`;
      b = `0x${hex[3]}${hex[3]}`;
    // 6 digits
    } else if (hex.length == 7) {
      r = `0x${hex[1]}${hex[2]}`;
      g = `0x${hex[3]}${hex[4]}`;
      b = `0x${hex[5]}${hex[6]}`;
    }
    return {
        r,g,b,
        rgb:`rgb(${ +r}, ${ +g}, ${ +b})`
    };
}

function hexToHSL(hex) {
    // Convert hex to RGB first
    let = { r,g,b } = hexToRGB(hex);
    // Then to HSL
    r /= 255;
    g /= 255;
    b /= 255;
    let cmin = Math.min(r,g,b),
        cmax = Math.max(r,g,b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;
  
    if (delta == 0)
      h = 0;
    else if (cmax == r)
      h = ((g - b) / delta) % 6;
    else if (cmax == g)
      h = (b - r) / delta + 2;
    else
      h = (r - g) / delta + 4;
  
    h = Math.round(h * 60);
  
    if (h < 0)
      h += 360;
  
    l = (cmax + cmin) / 2;
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);
  
    return {
        h,s,l,
        hsl: `hsl(${h}, ${s}%, ${l}%)`
    };
}

setContent(colorPicker.value);
