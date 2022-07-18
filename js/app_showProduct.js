
window.onload = function () {
  setTimeout(() => {
    document.querySelector('.loading_page').style.display = "none";
    document.body.style.overflowY = "scroll"
  },4000)
}

const main_image = document.querySelector(".show_Order .main_image img") ,
      zoomImage = document.querySelector(".show_Order .zoomImage img ") ,
      cursor = document.querySelector(".show_Order .main_image .cursor") ;

//  on hover for main image show container zoom image
main_image.onmouseenter = function () {
  
  document.querySelector(".show_Order .zoomImage").style.display = "block";
  zoomImage.src = main_image.src;
  cursor.style.display = "inline";
};

//  on mouseOut for main image close container zoom image
main_image.onmouseout = function () {
  document.querySelector(".show_Order .zoomImage").style.display = "none";
  cursor.style.display = "none";
};

// chang top for they are cursor and zoom_image
main_image.addEventListener("mousemove", function (e) {
  cursor.style.top = e.pageY + "px";
  zoomImage.style.top = "-" + cursor.style.top;
});

// chang the main image to the Image product
document.querySelectorAll(".show_Order .child_image img").forEach((img) => {
  img.onmouseover = function () {
    main_image.src = img.src;
  };
});

// of you click on images the function is chang textContent in mainImage to a product container  
document.querySelectorAll(".Products .Products_item img").forEach((btn) => {
    
    btn.addEventListener("click", function () {
        
      main_image.src = btn.src;
      document.querySelector('.parnt_price .price').textContent = btn.dataset.price
    })
});



const main_price = document.querySelector('.show_Order .info_product .price ');
const selectNumber = document.querySelector('#select_value_number');
let totalPriceCheckQut = document.querySelector('.total_price');     
let checkAddProduct = false,
  countProductSales = 0;

  // check count sales for product
const checkCountSales = function () {   
  if (countProductSales === 0) {
    document.querySelector("header .btn_Shopping .contr").style.display =
      "none";
  } else {
    document.querySelector("header .btn_Shopping .contr").style.display =
      "block";
  }
}
function open_addCart() {
  document.querySelector(".show_Order .add_cart").classList.toggle(
    "active_addCart_opening");
}

document.querySelector("#btn_AddCart").onclick =function (){
  
  let s = parseInt(main_price.textContent) *
          parseInt(document.querySelector('#select_value_number').value);
  if (!checkAddProduct)
  {
    counter_Product();
    AddProductInCart();
    totalPriceCheckQut.textContent = "hisham";
    document.querySelector("#btn_AddCart").classList.add('button_disabled'); 
    checkAddProduct = true;
  }
};


function counter_Product() {

  countProductSales++;
    document.querySelector(
      "header .btn_Shopping .contr"
  ).textContent = `${countProductSales}`;
  checkCountSales()

  document.querySelector('.total_price').textContent =
    document.querySelector('.select_delete .price ').textContent
  
}

// add product in add cart container 
function AddProductInCart() {
  document.querySelector('.add_cart').innerHTML += `
      <div class="cart" id="product-${countProductSales}">
          <img src="${main_image.src}" alt="">
              <button class="Delete_cart">
              <i class="fa-solid fa-trash-can"></i>
              </button>
          </div> 
      </div>  
    `;
}
// the function is to Remove the product from the cart
document.addEventListener("click", function (e) {
  if (e.target.className === "Delete_cart")
  {
    document.querySelector('.cart').remove()
    countProductSales--;
    document.querySelector(
      "header .btn_Shopping .contr"
    ).textContent = `${countProductSales}`;
    checkCountSales()
    document.querySelector('.total_price').textContent="$ 0"
  }
}) 






const con_sales = document.querySelector(".info_product .total_sales");
const con_comments = document.querySelector(".info_product .comments");
const btn_fidBack = document.querySelectorAll(
  ".show_Order .info_product .fid_Back button"
);
const spans_sales = document.querySelectorAll(
  ".show_Order .total_sales .col p span"
);

// open for the sales container and  close comments container
btn_fidBack[0].onclick = function () {
  // close comments container
  con_comments.classList.remove("Active_container");
  btn_fidBack[1].classList.remove("active_clicked");

  // open for the sales container
  setTimeout(() => {
    con_sales.classList.toggle("Active_container");
    btn_fidBack[0].classList.toggle("active_clicked");

    setInterval(() => {
      spans_sales.forEach((span) => {
        span.style.width = span.dataset.width;
      });
    }, 500);
  }, 300);
};

// open for the comments container and close for the sales container
btn_fidBack[1].onclick = function () {
  con_sales.classList.remove("Active_container");
  btn_fidBack[0].classList.remove("active_clicked");

  setTimeout(() => {
    con_comments.classList.toggle("Active_container");
    btn_fidBack[1].classList.toggle("active_clicked");
  }, 300);
};

// buttons scroll in product
const main_products = document.querySelector(".Products .content");
const products_items = document.querySelectorAll(
  ".Products .content .Products_item"
);

let total_product_Width =
  products_items[1].clientWidth * (products_items.length - 4) + 80; // 60 this is margin its product Item ;
let item_pr = 0;

function scroll_left() {
  if (item_pr === 0) {
    item_pr = 0;
  } else {
    item_pr -= products_items[1].clientWidth + 40;
  }
  main_products.style.transform = `translateX(-${item_pr}px)`;
}
function scroll_right() {
  if (item_pr === total_product_Width) {
    item_pr = total_product_Width;
  } else {
    item_pr += products_items[1].clientWidth + 40;
  }
  main_products.style.transform = `translateX(-${item_pr}px)`;
}

// Open container check out card in user
document.querySelectorAll('.check_out_open_card').forEach(btn => {
    btn.onclick = function() {
      document.querySelector('.Buy_card').style.display = "flex";
      document.body.style.overflowY = "hidden"
      document.querySelector('.Buy_card #Name_card').focus()
    }
})                      

// Close container check out card in user
function close_card() {
  document.querySelector('.Buy_card').style.display = "none";
  document.body.style.overflowY ="scroll"
}


// start for  media button
function show_form_search() {
  document.querySelector('header form').classList.toggle('active_form')
}


