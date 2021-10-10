"usestrict";
function check(){
    document.addEventListener("DOMContentLoaded", ready);
 }
 function ready(){
    let site = document.querySelector("#site-link");
    let phone = document.querySelector("#phone");
    let linkButton = document.querySelector("#link-button");
    let linkBlock = document.querySelector("#links");
    console.log(site);
    // site.addEventListener("mouseover", (e) => {
    //     e.target.style.fontSize = "36px";
    // });
    // site.addEventListener("mouseout", (e) => {
    //     e.target.style.fontSize = "20px";
    // });
    phone.addEventListener("click", (e) => {
       e.preventDefault();
        e.target.textContent = "+79773122164";
    });
    linkButton.addEventListener("click", (e) => {
        linkBlock.innerHTML = "";
        linkBlock.innerHTML = '<a class = "orig" href="https://instagram.com/akvariumsvet?utm_medium=copy_link"><img src="i.jpg" alt=""></a><a class = "orig" href="https://www.facebook.com/groups/472692690247110/?ref=share"><img src="а.jpg" alt=""></a><a class = "diff" href="https://youtube.com/user/ThePngzoo"><img src="yt.png" alt=""></a><a class = "diff" href="https://t.me/akvarium_svet"><img src="tg.jpg" alt=""></a><a class = "orig" href="https://vk.com/akvarium_svet"><img src="vk.png" alt=""></a>';
    });
 }
check();
