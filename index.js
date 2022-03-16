const endDate="18 March 2022"

let hourele=document.getElementById("hours")
let daysele=document.getElementById("days")
let minele=document.getElementById("mins")
let secele=document.getElementById("sec")


function changedDate()
{
    const end=new Date(endDate);
    const current=new Date();
    let sec=Math.floor((end-current)/1000);
    let days=Math.floor((sec/3600)/24)
    let hours=Math.floor(sec/(60*60))%24
    let mins=Math.floor(sec/60)%60
    let secs=sec%60

    hourele.innerHTML=formatdays(hours)
    daysele.innerHTML=formatdays(days)
    minele.innerHTML=formatdays(mins)
    secele.innerHTML=formatdays(secs)

    

}

function formatdays(num)
{
    if(num<10)
    {
        num="0"+num
    }
    return num
}

changedDate()

setInterval(changedDate,1000)