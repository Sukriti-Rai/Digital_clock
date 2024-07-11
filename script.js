function updateTime(){
    var d=new Date();

    let h=String(d.getHours()).padStart(2, "0");
    let m=String(d.getMinutes()).padStart(2, "0");
    let s = String(d.getSeconds()).padStart(2,"0");
    let p="AM";
    if(h>=12)
        p="PM";
     if(h>12)
         {
             h=h-12;
         } 
         
    // h=h<10?"0"+h:h;
    // m=m<10?"0"+m:m;
    // s=s<10?"0"+s:s;
    // s=s>=12?"PM":s;
    // var time=h+" : "+m+" : "+s+" "p;
    const timeElement=document.querySelector(".time");
    timeElement.textContent=`${h}:${m}:${s} ${p}`
    const date = d.getDate();
    const year = d.getFullYear();
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const monthName = months[d.getMonth()];
    const dayName = daysOfWeek[d.getDay()];

    const dateElement = document.querySelector(".date");

    dateElement.textContent = `${dayName}, ${monthName} ${date}, ${year}`;
}
updateTime();

setInterval(() => {
    updateTime();
}, 1000);
    
   

