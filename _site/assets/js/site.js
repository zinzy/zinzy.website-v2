function settime() {
    const timestamp = document.querySelector('[data-timestamp-text]')
    if (!timestamp || !('Intl' in window)) return
  
    const options = {
      timeZone: "Europe/Amsterdam",
      timeStyle: "short",
      hour12: false
    }
  
    // https://gist.github.com/muan/e7414b6241f088090acd916ed965540e
    let time = new Intl.DateTimeFormat(navigator.language || "en-US", options).format(new Date())
  
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1262801
    if (time.match(/^24:/)) time = time.replace('24:', '00:')
  
    // Setting interpolated string instead of just the time because
    // if there's no JS there should be no mentions of current time
    const text = timestamp.getAttribute('data-timestamp-text').replace('{time}', time)
    timestamp.innerHTML = text.replace(':', '<span class="timestamp-colon" data-colon>:</span>')
  
    const now = new Date()
    const sec = now.getSeconds()
    const secondIsEven = sec % 2 === 0
    const colon = document.querySelector('[data-colon]')
    if (colon) colon.style.animationDelay = `${(secondIsEven ? 0 : 1000) - now.getMilliseconds()}ms`
  
    const delay = 60000 - ((sec * 1000) + now.getMilliseconds())
    setTimeout(settime, delay)
}
  
settime()









///////////////////////////


// https://www.slingacademy.com/article/javascript-how-to-convert-date-time-to-time-ago/
// Define a function that takes a date as an argument
// and returns a string that represents how long ago the date was
function timeAgo(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);
  if (interval > 1) {
    return interval + ' years ago';
  }

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) {
    return interval + 'mo ago';
  }

  interval = Math.floor(seconds / 86400);
  if (interval > 1) {
    return interval + 'd ago';
  }

  interval = Math.floor(seconds / 3600);
  if (interval > 1) {
    return interval + 'h ago';
  }

  interval = Math.floor(seconds / 60);
  if (interval > 1) {
    return interval + 'min ago';
  }

  if(seconds < 10) return 'just now';

  return Math.floor(seconds) + 'sec ago';
};


let meow = document.getElementById("statusDate").innerHTML;

// at the time of writing this code, the date is 2022-12-28 16:14:00
// you will see different results if you run this code at different time
// console.log(timeAgo(new Date(meow)))
// console.log(timeAgo(new Date('2022-10-24 19:00:00')))
// console.log(timeAgo(Date.now() - 60 * 5 * 1000))
// console.log(timeAgo(Date.now() - meow))

///////////////////////////

   
// console.log(result);
document.getElementById('statusTimeAgo').innerHTML = timeAgo(new Date(meow)); 
 