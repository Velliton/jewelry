const deadline=document.querySelector('.deadline');
const items=document.querySelectorAll('.deadline-format h4'); 


let futureDate = new Date(2023,01,28,12,30,0);


const year=futureDate.getFullYear();


const date=futureDate.getDate();


const weekDay=futureDate.getDay();



const futureTime=futureDate.getTime();



function getRemainingTime(){
    const today=new Date().getTime();
    const t=futureTime-today;
  
    const oneDay=24*60*60*1000;
    const oneHour=60*60*1000;
    const oneMinute=60*1000;
    const oneSecond=1000;

    let kolDay=Math.floor(t/oneDay);

    let hours=Math.floor((t%oneDay)/oneHour);

    let minutes=Math.floor((t%oneHour)/oneMinute);
 
    let seconds=Math.floor((t%oneMinute)/oneSecond);
  

    const values=[hours,minutes,seconds,hours,minutes,seconds,hours,minutes,seconds,];

    function format(item)
    {
        if(item<10){
            return(item=`0${item}`);
        }
        return(item);
    }

    items.forEach(function(item,index){
        item.innerHTML=format(values[index]);
    });
    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML(`<h4>sorry</h4>`);
    }

}   

let countdown=setInterval(getRemainingTime,1000);
getRemainingTime();