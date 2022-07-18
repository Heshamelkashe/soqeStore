
window.onload = function () {
    setTimeout(() => {
        document.querySelector('.loading_page').style.display = "none";
        document.body.style.overflowY ="scroll";
    }, 2000)
    setTimeout(() => {
        document.querySelector('.massage').style.display = "block"        
    },3000);
} 

function close_massage() {
    document.querySelector('.massage').style.display = "none"
}

// the function from the header and button scroll top
window.addEventListener("scroll", function () {
     
    if (window.scrollY >= 590  )
    {
        document.querySelector('header').style.position = "relative";
        document.querySelector('.btn_scrollYop').style.display = "flex";
    }else if(window.scrollY <= 590)
    {
        document.querySelector('header').style.position = "sticky";
        document.querySelector('.btn_scrollYop').style.display = "none";
    }

})

// show input search
function open_search_content() {
    document.querySelector('header .navbar  .search').classList.toggle('active_search_content')
}

// open main menu links
document.querySelector('.btn_media').addEventListener("click", function () {
    document.querySelector('#links').classList.toggle('active_header_links')
})

document.querySelectorAll('header #links a').forEach(link => {
    link.addEventListener("click", function () {
        document.querySelector('#links').classList.remove('active_header_links')  
    })
})

//  data products
new Vue({
    el:'#Products',
    data:{
        content:[
        {Images:'images/Productes/T-shirt-1.jpg', name:'T-shirt', prices:'$40.00', info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/hours-1.png', name:'Wristwatch', prices:'$50.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/bag-1.jpg', name:'back bag', prices:'$60.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/hours-2.png', name:'Wristwatch', prices:'$40.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/T-shirt-2.jpg' , name:'T-shirt', prices:'$40.00', info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/bag-2.jpg', name:'back bag', prices:'$50.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/T-shirt-3.jpg',name:'T-shirt', prices:'$50.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/hours-3.jpg' , name:'back bag', prices:'$50.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/trousers-1.jpg' , name:'trousers', prices:'$30,00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/shoes-4.jpg', name:'shoes', prices:'$50.00', info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/bag-3.jpg' , name:'back bag', prices:'$50.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/hours-4.jpg' , name:'Wristwatch', prices:'$40.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/T-shirt-5.jpg' , name:'T-shirt', prices:'$40.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        {Images:'images/Productes/shoes-6.jpg' , name:'shoes',  prices:'$40.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        { Images:'images/Productes/trousers-2.png', name: 'back bag', prices: '$60.00', info: 'reprehenderit at sapiente quaerat architecto earum eius.' },
        {Images:'images/Productes/shoes-2.jpg' , name:'shoes',  prices:'$50.00',info:'reprehenderit at sapiente quaerat architecto earum eius.'},
        ], 
    }, 
});


// show more items in products
document.querySelector('.Products .loading_item').addEventListener("click", function () {
    
    document.querySelector('.Products .content').classList.toggle('show_more');
})

// // scroll Advertising
// const Advertising = document.querySelector('.Advertising .list_items');
// const items_adv = document.querySelectorAll('.Advertising .list_items .item')
// let cont_item = 0;
// let Advertising_width= Advertising.clientWidth * (items_adv.length-1);

// function scroll_left() {
//     if(cont_item === 0){
//         cont_item= 0
//     }else{
//         cont_item -=items_adv[1].clientWidth
//     }
//     Advertising.style.transform = ` translateX(-${cont_item}px) `
// }
// function scroll_Right() {
//     if(cont_item === Advertising_width){
//         cont_item = Advertising_width
//     }else{
//         cont_item +=items_adv[1].clientWidth
//     }
//     Advertising.style.transform = ` translateX(-${cont_item}px) `;
// }


const comments = document.querySelector('.comments .list_item');
const btn_comments = document.querySelectorAll('.comments .buttons_UserCol  button');

btn_comments.forEach(btn => {
    let scroll_by = btn.dataset.scroll;
    btn.onclick = function(){
        btn_comments.forEach(el=>el.classList.remove('active_btnComments'))
        this.classList.add('active_btnComments');
        comments.style.transform=`translateX(-${scroll_by}px)`
    }
})













