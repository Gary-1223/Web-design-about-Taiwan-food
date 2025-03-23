 // 小圖的 src 屬性值清單
 var imgSrcs = [
    '../image/page1.1.jpg',
    '../image/page1.2.jpg',
    '../image/page1.3.jpg',
    '../image/page1.4.jpg',
  ];
  // 每張圖片對應的介紹
  var descriptions = [
    '牛肉麵',
    '鹽酥雞',
    '紅豆餅',
    '刈包'
  ];
  // 初始化每隔3秒呼叫1次play()
  setInterval(play, 3000);
  // 用來控制每次要顯示的圖片索引
  var index = 0;
  function play() {
    // 取得大圖的 img 元素
    var bigImg = document.getElementById('big');
    index++; // 遞增索引值, 以插下一張照片
    // 若索引值超過範圍, 則設為0, 表示再重頭開始播放
    if (index >= imgSrcs.length) index = 0;
    // 將大圖 img 的 src 屬性設為小圖之 src 屬性值
    bigImg.setAttribute('src', imgSrcs[index]);
    // 更新描述
    var description = document.getElementById('description');
    description.textContent = descriptions[index];
  }
  
  // 初始化大圖的 src
  document.getElementById('big').setAttribute('src', imgSrcs[index]);
  document.getElementById('description').textContent = descriptions[index];
  
  // 添加鼠標移入移出事件
  var bigImg = document.getElementById('big');
  bigImg.addEventListener('mouseover', function() {
    var description = document.getElementById('description');
    description.style.display = 'block';
  });
  bigImg.addEventListener('mouseout', function() {
    var description = document.getElementById('description');
    description.style.display = 'none';
  });
  bigImg.addEventListener('mousemove', function(event) {
    var description = document.getElementById('description');
    description.style.left = event.pageX + 10 + 'px';
    description.style.top = event.pageY + 10 + 'px';
  });