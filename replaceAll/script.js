const mainElm = document.getElementById('main');
const tranElm = document.getElementById('myMain');

mainElm.addEventListener('input', function(e){
    const div = document.createElement('div');
    div.innerHTML = this.value;
    const result = changeWords(div);
    if(result){
        tranElm.innerHTML = '';
        tranElm.appendChild(result);
    }
});
function changeWords(dom){
    const content = dom.querySelector('#acontent')
    if(!content) return ;
    content.querySelectorAll('div').forEach(d=>d.innerText='')
    
    content.querySelectorAll('p').forEach(p => {
        p.innerText = p.innerText
          .replaceAll(' ','')
          .replaceAll('里','裡')
          .replaceAll('菲裡妮','菲里妮')
          .replaceAll('莫裡茲','莫里茲')
          .replaceAll('裡昂','里昂')
          .replaceAll('芬裡吉尼','芬里吉尼')
          .replaceAll('羅德裡希','羅德里希')
          .replaceAll('培裡孚','培里孚')
          .replaceAll('頭發','頭髮')
          .replaceAll('發色','髮色')
          .replaceAll('發簪','髮簪')
          .replaceAll('發飾','髮飾')
          .replaceAll('髮生','發生')
          .replaceAll('啰','囉')
          .replaceAll('腌制','醃製')
          .replaceAll('熏制','燻製')
          .replaceAll('悪','惡')
          .replaceAll('?','？')
          .replaceAll('!','！')
          .replaceAll(',','，')
          .replaceAll('戦','戰')
          .replaceAll('I','一')
          .replaceAll('臟污','髒污')
          .replaceAll('很臟','很髒')
          .replaceAll('柜子','櫃子')
          .replaceAll('満','滿')
          .replaceAll('暍','喝')
          .replaceAll('昵','暱')
          .replaceAll('采','採')
          .replaceAll('蔚房','廚房')
          .replaceAll('歓','歡')
          .replaceAll('(','（')
          .replaceAll(')','）')
          .replaceAll('j','」')
          .replaceAll('J','」')
          .replaceAll('專註','專注')
          .replaceAll('洒','灑')
          .replaceAll('ヵ','力')
          .replaceAll('観','觀')
          .replaceAll('軽','輕')
          .replaceAll('カ','力')
          .replaceAll('創明','說明')
          .replaceAll('エ','工')
          .replaceAll('歩','步')
          .replaceAll('創','說')
          .replaceAll('r','「')
          .replaceAll('閑','閒')
          .replaceAll('ロ','口')
          .replaceAll('険','險')
          .replaceAll('說傷','創傷')
          .replaceAll('說造','創造')
          .replaceAll('嗅','咦')
          .replaceAll('□','口')
          .replaceAll('涌','湧')
          .replaceAll('単','單')
          .replaceAll('脳','腦')
          .replaceAll('権','權')
          .replaceAll('愿','願')
          .replaceAll('种','種')
          .replaceAll('都帕裡','都帕里')
          .replaceAll('暴','暴')
          .replaceAll('綉','繡')
          .replaceAll('海茵','梅茵')
          .replaceAll('身觸','身蝕')
          .replaceAll('補靪','補丁')
          .replaceAll('好臟','好髒')
          .replaceAll('剋制','克制')
          .replaceAll('葯','藥')
          .replaceAll('帘','簾')
          .replaceAll('剋制','克制')
          .replaceAll('','')
          .replaceAll('','')
      });
    return content;
}
  
//   changeWords()