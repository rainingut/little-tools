
var wrap    = document.getElementById('wrap')


// URL轉base64
var theInput  = document.getElementById('theInput')
function urlToBase64(url=theInput.value) {//theImage
  let canvas  = document.createElement("canvas");
  let ctx     = canvas.getContext("2d");
  let img     = new Image();
  img.src     = url
  img.setAttribute("crossOrigin",'Anonymous') // 🟨很重要~~
  img.addEventListener('load',()=>{
    canvas.width  = img.width
    canvas.height = img.height 
    ctx.drawImage(img,0,0)
    let dataURL = canvas.toDataURL("image/jpeg");
    whenTheImgLoad(dataURL)
  })
}


// 上傳IMG轉base64===================
var theFile = document.getElementById('theFile')
function upFileLoad(){
  Array.from(theFile.files).map(item=> fileChange(item))
}

function fileChange(file) {
  let readFile = new FileReader();
  readFile.readAsDataURL(file);
  readFile.addEventListener('load', () => {
    whenTheImgLoad(readFile.result)
  });
}

function whenTheImgLoad(res){
  // 文字
  let input   = document.createElement('input')
  input.value = res
  input.setAttribute('readOnly','true')
  input.addEventListener('click',()=>{input.select()})
  //hint
  let p       = document.createElement('p')
  p.innerText = `${res.length.toLocaleString('en-US')} texts`
  
  //圖片
  let img = document.createElement('img')
  img.src = res
  
  wrap.appendChild(img)
  wrap.appendChild(input)
  wrap.appendChild(p)
}

theFile.onchange = upFileLoad;


// base64轉IMG====================
const theTextArea = document.getElementById('theTextArea')
const theBaseImg  = document.getElementById('theBaseImg')
const theBaseImgArea  = document.getElementById('theBaseImgArea')
function convertToImg(){
  // theBaseImg.src = theTextArea.value;
  const img = document.createElement('img');
  img.src = theTextArea.value;
  theBaseImgArea.appendChild(img);
}