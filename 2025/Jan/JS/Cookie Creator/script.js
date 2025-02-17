function setCookie(name, value, domain, path, expires) {
  if (!name) return "Must include a cookie name";
  if (!value) value = name;

  let cookieParts = [`${name}=${value}`];

  // Handle `expires`
  if (expires) {
    if (typeof expires === "number") {
      let date = new Date();
      date.setDate(date.getDate() + expires);
      console.log('date: ', date);
      expires = getCorrectDate(date);
    } else if (typeof expires === "string") {
      console.log('expires: ', expires);
      expires = getCorrectDate(expires)
    }
    cookieParts.push(`expires=${expires}`);
  }

  // Handle `path`
  cookieParts.push(`path=${path || "/"}`);

  // Handle `domain`
  if (domain) cookieParts.push(`domain=${domain}`);

  return `document.cookie = "${cookieParts.join("; ")}"`;
}

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function getCorrectDate(date){
   let d = new Date(date)
   let dayInWeek = days[d.getUTCDay()]
   let month = months[d.getUTCMonth()]
   let dayNumber = (String(d.getUTCDate())).padStart(2,0)
   let year = d.getUTCFullYear()
   let time = '00:00:00'
   
   return `${dayInWeek} ${month} ${dayNumber} ${year} ${time}`
   
  // Fri Jan 01 2055 00:00:00 =========
  // Fri Jan 01, 2055, 12:00:00 AM

  // return new Date(date).toLocaleString("en-US", options).replace(",", "");
}

console.log(setCookie("user", "admin", "www.example.com", "/dashboard", 30));




