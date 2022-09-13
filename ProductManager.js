//Khoi tao doi tuong
let product1 = new Product(
  "Motor giảm tốc",
  4,
  80000,
  "https://nshopvn.com/wp-content/uploads/2021/04/dong-co-dc-giam-toc-vang-2-truc-vsel-2-600x600.jpg"
);
let product2 = new Product(
  "Arduino R3",
  5,
  130000,
  "https://cf.shopee.vn/file/487eb683123de72c4103f10406ac4519"
);
let product3 = new Product(
  "Cảm biến siêu âm",
  8,
  55000,
  "https://huphaco.vn/wp-content/uploads/2020/02/module-cam_bien_sieu_am_ultrasonic.jpg"
);
let product4 = new Product(
  "Cảm biến hồng ngoại",
  5,
  45000,
  "https://bizweb.dktcdn.net/thumb/large/100/190/540/products/cam-bien-hong-ngoai.jpg?v=1490769661013"
);
let listProduct = [product1, product2, product3, product4];
//Ham Show san pham
function showAllProduct() {
  let allProduct = " ";
  for (let i = 0; i < listProduct.length; i++) {
    allProduct += `<tr>
                <td style="border: solid">${listProduct[i].name}</td>
                <td style="border: solid; text-align: right">${
                  listProduct[i].number
                }</td>
                <td style="border: solid; text-align: right">${
                  listProduct[i].price
                }</td>
                <td style="border: solid; text-align: right">${listProduct[
                  i
                ].getAmount()}</td>
                <td style="border: solid"><img src="${
                  listProduct[i].img
                }" alt="" width="100px"></td>
                <td style="border: solid"><button onclick="editProduct(${i})">Edit</button></td>
                <td style="border: solid"><button onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`;
  }

  document.getElementById("list").innerHTML = allProduct;
}
showAllProduct();
//Ham them san pham
function addProduct() {
  let addProduct = new Product(
    document.getElementById("addname").value,
    document.getElementById("addnumber").value,
    document.getElementById("addprice").value,
    "https://bizweb.dktcdn.net/thumb/large/100/190/540/products/cam-bien-hong-ngoai.jpg?v=1490769661013"
  );
  listProduct.push(addProduct);
  showAllProduct();
}
//Ham sua san pham
function editProduct(i) {
  let editProduct = new Product(
    prompt("Nhap ten san pham"),
    prompt("Nhap so luong"),
    prompt("Nhap don gia")
  );
  listProduct[i] = editProduct;
  showAllProduct();
}
//Ham xoa san pham
function deleteProduct(i) {
  listProduct.splice(i, 1);
  showAllProduct();
}
//Ham tim kiem san pham
function searchProduct() {
  let name = document.getElementById("name").value;
  let number = document.getElementById("number").value;
  let price = document.getElementById("price").value;
  let allProduct = " ";
  for (let i = 0; i < listProduct.length; i++) {
    if (
      listProduct[i].name == name ||
      listProduct[i].number == number ||
      listProduct[i].price == price
    ) {
      allProduct += `<tr>
      <td style="border: solid">${listProduct[i].name}</td>
      <td style="border: solid; text-align: right">${listProduct[i].number}</td>
      <td style="border: solid; text-align: right">${listProduct[i].price}</td>
      <td style="border: solid; text-align: right">${listProduct[
        i
      ].getAmount()}</td>
      <td style="border: solid"><img src="${
        listProduct[i].img
      }" alt="" width="100px"></td>
      <td style="border: solid"><button onclick="editProduct(${i})">Edit</button></td>
      <td style="border: solid"><button onclick="deleteProduct(${i})">Delete</button></td>
            </tr>`;
    }
  }
  document.getElementById("list").innerHTML = allProduct;
}
