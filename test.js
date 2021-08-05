// function onLoadCartNumbers(){
//     let productNumbers = localStorage.getItem('cartNumbers');

//     if(productNumbers){
//         document.querySelector('.js-cart-order span').textContent = productNumbers;
//     }
// }
// // them value vao local strorage
// function CartNumbers(product){

//     console.log(product);
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
// }

// onLoadCartNumbers();
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

function them(x){
    var box = x.parentElement.children;
    var hinh = box[0].src;
    var ten = box[1].innerHTML;
    var gia = box[2].children[0].innerHTML;
    var sl = box[3].value;
    
    var tt = parseInt(sl)* parseInt(gia);
    

     var giohang_tr = document.createElement("tr");
     var giohang_td = document.createElement("td");
     
    
    // tạo ul hình sản phẩm 
    var giohang_td_hinh = document.createElement("img");
    giohang_td_hinh.src= hinh;
    giohang_td_hinh.setAttribute("width","100px");
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
}
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