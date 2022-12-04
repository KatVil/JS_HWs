let date = new Date(2022,6,21,0,5,4) //for test
function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      alert('прямо сейчас');
      return 'прямо сейчас';
    } else if (diffMin < 1) {
      alert(`${diffSec} сек. назад`);
      return `${diffSec} сек. назад`   ;   
    } else if (diffHour < 1) {
      alert(`${diffMin} мин. назад`);
      return `${diffMin} мин. назад`;
    } else {
      alert(`${dayOfMonth}.${month}.${year} ${hour}:${minutes}`);
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`;
    }
  }
alert(formatDate(date));