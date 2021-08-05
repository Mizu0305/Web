const Cartsi = document.querySelector('.js-cart-order');
const Cart = document.querySelector('.js-giohang');
const CartClose = document.querySelector('.js-cart-close');
// mở cửa sổ giỏ hàng
function openCart(){
    Cart.classList.add('open');
}
// đóng cửa sổ giỏ hàng
function closeCart(){
    Cart.classList.remove('open');
}
Cartsi.addEventListener('click',openCart);

CartClose.addEventListener('click',closeCart);

// var giohang = new Array();

// function themvaogiohang(x){
//     var boxsp = x.parentElement.children;
//     var hinh = boxsp[0].children[0].src;
//     var ten = boxsp[1].innerText;
//     var gia = boxsp[2].children[0].innerText;
//     var sl = boxsp[3].value;
//     var sp = new Array (hinh , ten , sl , gia);

//     
//     console.log(giohang);
// }

// function show(){
//     var ttgh = "";
//     var tong = 0;
//     for (let i = 0; i < giohang.length; i++) {
//         var tt  = parseInt(giohang[i][2]) * parseInt(giohang[i][3]);
//         tong +=tt;
//         ttgh +='<td>'+
//         '<td>' +(i+1)+ '</td>' +
//         '<img src="'+giohang[i][0]+'" id="ps5"></td>'+
//         '<td>'+giohang[i][1]+'</td>'+
//         '<td>'+giohang[i][2]+'</td>'+
//         '<td>'+giohang[i][3]+'</td>'+
//         '<td>'+
//             '<div>'+tt+'</div>'+
//             '</td>';
        
//     }
//     console.log(ttgh);
//     ttgh +='<tr>'+
//                 '<th>tong don hang</th>'+
//                     '<th>'+
//                         '<div>'+tong+'</div>'+
//                     '</th>'+
//             '</tr>';
//     document.getElementById("mycart").innerHTML = ttgh ;
    
// }

// show();
var giohang = new Array();

function them(x){
    var box = x.parentElement.children;
    var hinh = box[0].children[0].src;
    var ten = box[1].innerHTML;
    var gia = box[2].children[0].innerHTML;
    var sl = box[3].value;

    var sp = new Array(hinh , ten , gia , sl);

    

    var tt = parseInt(sl)* parseInt(gia);
    

     var giohang_tr = document.createElement("tr");
     var giohang_td = document.createElement("td");
     
    
    // tạo ul hình sản phẩm 
    var giohang_td_hinh = document.createElement("img");
    giohang_td_hinh.src= hinh;
    giohang_td_hinh.setAttribute("width","100%");
    giohang_td_hinh.setAttribute("height","100px");
    giohang_tr.appendChild(giohang_td_hinh);
    
    // tạo tên Sản Phẩm
    var giohang_td = document.createElement("td");
     var giohang_td_ten = document.createTextNode(ten);
     giohang_td.appendChild(giohang_td_ten);
     giohang_tr.appendChild(giohang_td);
    // tạo giá Sản Phẩm
    var giohang_td = document.createElement("td");
     var giohang_td_dongia = document.createTextNode(gia);
     giohang_td.appendChild(giohang_td_dongia);
     giohang_tr.appendChild(giohang_td); 
     //tạo số lượng sản phẩm 
     var giohang_td = document.createElement("td");
     var giohang_td_sl = document.createTextNode(sl);
     giohang_td.appendChild(giohang_td_sl);
     giohang_tr.appendChild(giohang_td); 
    //tạo thành tiền sp
    var giohang_td = document.createElement("td");
    var giohang_td_tt = document.createTextNode(tt);
    giohang_td.appendChild(giohang_td_tt);
    giohang_tr.appendChild(giohang_td); 
     
    // //  tạo nút xóa 
    var giohang_td_nut = document.createElement("input");
    giohang_td_nut.type="button";
    giohang_td_nut.value="Xóa";
    giohang_td_nut.setAttribute("onclick","xoa(this)");
    giohang_tr.appendChild(giohang_td_nut);
    giohang_tr.appendChild(giohang_td);

    var giohang = document.getElementById("mycart");
    giohang.appendChild(giohang_tr);
    
    tongdonhang();

    

    sessionStorage.setItem("giohang",JSON.stringify(sp));
}
function showmycart(){
    var gh = sessionStorage.getItem("sp");
    var giohang = JSON.parse(gh);


    
}
showmycart();

function xoa(x){
    var tr = x.parentElement;
    tr.remove();
    tongdonhang();
}

function tongdonhang() {
    var giohang = document.getElementById("mycart");
    var tr = giohang.children;
    var tong = 0 ;
    for (let i = 0; i< tr.length; i++){
        var td = tr[i].getElementsByTagName("td");
        var ttien = parseInt(td[3].innerText);
        tong += ttien;
    }
    document.getElementById("tongdonhang").innerHTML=tong;
}

function send(){
    var arr = [
        document.getElementById("inputText"),
        document.getElementById("inputText1"),
        document.getElementById("inputText2"),
        document.getElementById("inputText3"),
        document.getElementById("select"),
        document.getElementById("textarea"),
    ];
    var name = arr[0].value;
    var email = arr[1].value;
    var adress = arr[2].value;
    var phone = arr[3].value;
    var tp = arr[4].value;
    var bs = arr[5].value;

    var thongtin = new Array(
        "FullName:" + name , 
        "Email KH:" + email , 
        "Address:" + adress, 
        "SĐT:" + phone , 
        "Thành Phố:" + tp ,
        "Thông Tin Bổ Sung:" + bs
    );
        

    if( name == "" || email == "" || adress =="" || phone==""){
        alert("Vui Lòng Điền Đầy Đủ Thông Tin");
        return;
    }
    if(isNaN(phone)){
        alert("Vui Lòng Nhập Số Điện Thoại");
        return;
    }
    alert("Cảm Ơn Bạn Đặt Hàng");
    localStorage.setItem("ThongTin",thongtin);
}
function remove(){
    document.getElementsByTagName('form')[0].reset();
}


// let carts = document.querySelectorAll('.bta');

// for( let i = 0 ; i < carts.length ; i++){
//     carts[i].addEventListener('click', ()=>{
//         CartNumbers(products[i]);
//         totalCost(products[i])
//     })
// }


// // danh sach san pham
// let products =[
//     {
//     name: 'Acer',
//     tag:'man hinh Acer',
//     price: 5600000,
//     image:"img/san pham/manhinh/acer ed245qa.png",
//     incart : 0
//     },
//     {
//     name: 'h',
//     tag:'man hinh h',
//     price: 1600000,
//     incart : 0
//     },
//     {
//     name: 'as',
//     tag:'man hinh as',
//     price: 600000,
//     incart : 0
//     }
// ];
// // // tạo su kien click 

// // luu gia tri trong gio hang` F5 kh mat di 
// function onLoadCartNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers){
//         document.querySelector('.js-cart-order span').textContent = productNumbers;
//     }
// }
// // // them value vao local strorage
// function CartNumbers(product){
//     let productNumbers = localStorage.getItem('cartNumbers');
    
//     productNumbers = parseInt(productNumbers);
//     // cong gia tri khi an click len ++
//     if(productNumbers){
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.querySelector('.js-cart-order span').textContent = productNumbers + 1;
//     }
//     else{
//         localStorage.setItem('cartNumbers',1);
//         document.querySelector('.js-cart-order span').textContent = 1;
//     }

//     setItems(product);
// }

// function setItems(product){
//     let cartItems = localStorage.getItem('productsInCart');
//     cartItems = JSON.parse(cartItems);

//     if(cartItems != null){

//         if (cartItems[product.tag] == undefined){
//             cartItems= {
//                 ...cartItems,
//                 [product.tag]: product
//             }
//         }
//         cartItems[product.tag].incart += 1;
//     } else{
//         product.incart = 1;
    
//         cartItems = {
//             [product.tag]: product
//         }
//     }
    
    
//     localStorage.setItem("productsInCart",JSON.stringify(cartItems));
// }

// function totalCost(product){
//     // console.log("the product price is", product.price);
//     let cartCost = localStorage.getItem('totalCost');

//     if(cartCost != null){
//         cartCost = parseInt(cartCost);
//         localStorage.setItem("totalCost", cartCost + product.price );
//     }
//     else{
//         localStorage.setItem('totalCost', product.price);
//     }

    
// }

// function displayCart(){
//     let cartItems = localStorage.getItem("productsInCart");
//     cartItems = JSON.parse(cartItems);
//     let productContainer = document.querySelector('.giohangs');

//     if( cartItems && productContainer){
//         productContainer.innerHTML = '';
//         Object.values(cartItems).map(item=>{
//             productContainer.innerHTML += `
//             <div class="giohangs">
//                 <img src = "img/san pham/manhinh/acer ed245qa.png" width = "40px">
//                 <span>${item.name}M</span>
//             </div>
//             <div class="price">$${item.price},00</div>
//             <div class="total">
//                 $${item.incart * item.price},00
//             </div>
//         `;
//         });
//         productContainer.innerHTML += `
//         `
//     }
// }

// onLoadCartNumbers();
// displayCart();