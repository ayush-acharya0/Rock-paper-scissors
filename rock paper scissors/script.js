let userscore=0;
let computerscore=0;
const choices=document.querySelectorAll(".img");

const genchoice=()=>{
    const arr=["rock","paper","scissors"];
    ranindx=Math.floor(Math.random()*3);
    return (arr[ranindx]);
}
const play=(userid)=>{
    const computerid=genchoice();
    console.log(userid,computerid);
    //draw
   if(userid==computerid)
   {
    document.getElementById("pmsg").innerHTML="Draw!";
   }
   else{
    var userwin=true;
    if(userid==="rock")
    {
        userwin=computerid==="scissors"? true:false;
    }
    else if(userid==="paper")
    {
        userwin=computerid==="rock"?true:false;
    }
    else if(userid==="scissors")
    {
        userwin=computerid==="paper"?true:false;
    }
    showwinner(userwin);
   }  
   
}
   const showwinner=(userwin)=>{
    if(userwin===true)
    {
       document.getElementById("pmsg").innerHTML="You Won!";
       userscore++;
       document.getElementById("user_score").innerHTML=userscore;
       
    }
    else{
       document.getElementById("pmsg").innerHTML="You Loose!";
       computerscore++;
       document.getElementById("computer_score").innerHTML=computerscore;
   }
   }
   choices.forEach((img)=>{img.addEventListener("click",()=>{
    const userid=img.getAttribute("id");
    play(userid);
}
)});

