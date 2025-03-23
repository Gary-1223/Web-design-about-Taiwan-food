document.addEventListener('DOMContentLoaded', (event) => {
    // 获取保存的访问次数
    let viewCount = localStorage.getItem('viewCount');
    
    // 如果没有保存的访问次数，初始化为0
    if (viewCount === null) {
        viewCount = 0;
    } else {
        viewCount = parseInt(viewCount, 10);
    }
    
    // 增加访问次数
    viewCount += 1;
    
    // 保存新的访问次数
    localStorage.setItem('viewCount', viewCount);
    
    // 显示访问次数
    document.getElementById('viewCount').textContent = viewCount;
});

showTime();
function showTime() {
    var d = new Date(); //拿到時間
    var hours = d.getHours();
    var minutes = d.getMinutes();
    var seconds = d.getSeconds();
    var year = d.getFullYear();
    var month = d.getMonth() + 1; //月份從0開始，所以要加1
    var day = d.getDate();

    var timeString =
      year +
      '年' +
      month +
      '月' +
      day +
      '日 <br>' +
      hours +
      '時:' +
      minutes +
      '分:' +
      seconds +
      '秒';

    document.getElementById('mytime').innerHTML = timeString; //時間變字串且輸出
    setTimeout(showTime, 1000); //一秒刷新一次
  }