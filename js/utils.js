import displayModal from "./modal.js";
const fetchProducts = async (url) => {
  try {
    const resp = await fetch(url);
    const data = await resp.json();
    return data;
  } catch (error) {
    console.error("An error occurred during the fetch:", error);
  }
};
function get(item) {
  if (document.querySelector(item)) {
    return document.querySelector(item);
  } else {
    console.log(`${item} is not found!`);
  }
}

function getStorageItems(key) {
  if (localStorage.getItem(key)) {
    return JSON.parse(localStorage.getItem(key));
  } else {
    return [];
  }
}

function addUserItemToStorage(id, email, username, password) {
  let item = { id, email, username, password};
  localStorage.setItem('user', JSON.stringify(item));
}

function addItemToStorage(productID, key) {
  const likes = getStorageItems(key) || [];
  const existingItemIndex = likes.findIndex((product) => product.id == productID);
  const comingitem = menuArray.find((item) => item.id == productID);

  if (existingItemIndex === -1) {
    likes.push(comingitem);
    localStorage.setItem(key, JSON.stringify(likes));
  } else {
   return []
  }
}



function removeItemFromStorage(id, key) {
  const likes = getStorageItems(key);
  const updatedLikes = likes.filter((item) => item.id != id);
  localStorage.setItem(key, JSON.stringify(updatedLikes));
}
function addToCart(){
  let cartIcons = document.querySelectorAll(".cart_icon")
  console.log(cartIcons);
cartIcons.forEach(cartIcon =>{
    cartIcon.addEventListener('click', function(){
        let cartIconId = cartIcon.closest('div').id
        console.log(cartIconId);
       displayModal(cartIconId)          
    })
})
}



export {
  fetchProducts,
  get,
  getStorageItems,
  addUserItemToStorage,
  addItemToStorage,
  removeItemFromStorage,
};
