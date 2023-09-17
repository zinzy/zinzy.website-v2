// Hey, the majority of this was written by Mu-An
// https://github.com/muan/site/blob/main/assets/site.js

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
  timestamp.innerHTML = text.replace(':', '<span class="timestamp-colon blink text-slate-300 dark:text-zinc-400" data-colon>:</span>')

  const now = new Date()
  const sec = now.getSeconds()
  const secondIsEven = sec % 2 === 0
  const colon = document.querySelector('[data-colon]')
  if (colon) colon.style.animationDelay = `${(secondIsEven ? 0 : 1000) - now.getMilliseconds()}ms`

  const delay = 60000 - ((sec * 1000) + now.getMilliseconds())
  setTimeout(settime, delay)
}

settime()

function relativeDate(date) {
  const diff = Math.round((new Date() - new Date(date)) / 1000);

  const minute = 60;
  const hour = minute * 60;
  const day = hour * 24;
  const week = day * 7;
  const month = day * 30;
  const year = month * 12;


  if (diff < 30) {
    return "just now";
  } else if (diff < minute) {
    return diff + " seconds ago";
  } else if (diff < 2 * minute) {
    return "a minute ago";
  } else if (diff < hour) {
    return Math.floor(diff / minute) + " minutes ago";
  } else if (Math.floor(diff / hour) == 1) {
    return "1 hour ago";
  } else if (diff < day) {
    return Math.floor(diff / hour) + " hours ago";
  } else if (diff < day * 2) {
    return "yesterday";
  } else if (diff < week) {
    return week + " days ago";
  } else if (diff < month) {
    return Math.floor(diff / week) + " weeks ago";
  } else if (diff < year) {
    return Math.floor(diff / month) + " months ago";
  } else {
    return Math.floor(diff / year) + " years ago";
  }
}



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
    return interval + ' min ago';
  }

  if(seconds < 10) return 'just now';

  return 'just now';
};


let meow = document.getElementById("statusDate").innerHTML;
document.getElementById('statusTimeAgo').innerHTML = relativeDate(new Date(meow)); 














  // JavaScript program to illustrate 
    // calculation of no. of days between two date 
      
    // To set two dates to two variables
    var date1 = new Date("05/03/2018");
    var date2 = new Date();
      
    // To calculate the time difference of two dates
    var Difference_In_Time = date2.getTime() - date1.getTime();
      
    // To calculate the no. of days between two dates
    var Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  
    let a = Math.floor(Difference_In_Days);
      
    //To display the final no. of days (result)
    console.log(a);
    document.getElementById("sobriety").innerHTML = a + " days";