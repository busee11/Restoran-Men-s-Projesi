const menu=[
    {
        id: 1,
        title:"Baniçka",
        category:"Pomak",
        price: 14.99,
        img:  "https://cdn.yemek.com/uploads/2014/09/banicka-bulgaristan-eylul-2021.jpg",
        desc: `A delicious rectangular pastry with curd cheese`,   
    },
    {
        id: 2,
        title:"Poniçka",
        category:"Macır",
        price: 19.99,
        img:  "https://cdn.yemek.com/mncrop/940/625/uploads/2014/10/ponicka-tarifi.jpg",
        desc: `Doughs prepared in small donuts are cooked in hot oil and served by pouring powdered sugar on them`,   
    },
    {
        id: 3,
        title:"Dızmana",
        category:"Macır",
        price: 16.99,
        img:  "https://cdn.yemek.com/uploads/2014/11/dizmana-tarifi.jpg",
        desc: `It is prepared with a special dough for dızman, the sultan of the weekends, with minced meat or cheese`,   
    },
    {
        id: 4,
        title:"Lutenitsa",
        category:"Pomak",
        price: 24.99,
        img:  "https://cdn.yemek.com/uploads/2016/09/lutenitsa-1-yemekcom.jpg",
        desc: `Handmade tomato paste for breakfast with eggplant, carrot, tomato and red pepper`,   
    },
    {
        id: 5,
        title:"Milinka",
        category:"Macır",
        price: 14.99,
        img:  "https://cdn.yemek.com/uploads/2019/12/milinka-borek.jpg",
        desc: `Bread dough`,   
    },
    {
        id: 6,
        title:"Caşcaval Pane",
        category:"Pomak",
        price: 9.99,
        img:  "https://jamilacuisine.ro/wp-content/uploads/2016/09/Cascaval-pane-cu-ierburi-aromatice-500x478.jpg",
        desc: `It is made by paneling and frying yellow cheddar cheese`,   
    },
    {
        id: 7,
        title:"Pritnisa",
        category:"Çerkes",
        price: 12.99,
        img:  "https://gastromanya.com/wp-content/uploads/2016/12/Pritnisa-Tarifi-640x428.jpg",
        desc: `Bulgarian mucver with garlic yoghurt`,   
    },
    {
        id: 8,
        title:"Kapama",
        category:"Pomak",
        price: 29.99,
        img:  "https://img-s3.onedio.com/id-554768c221b824e75f082248/rev-0/w-635/f-jpg/s-b369c568acedec0ee5f0c2d2f2e4ccb6afbc3677.jpg",
        desc: `A dish made with chicken or red meat on rice`,   
    },
];

btnDOM = document.querySelector(".btn-container")
menuDOM = document.querySelector(".section-center")

const btnCreate=( ) =>{
    let buttons= `
        <button class="btn btn-outline-dark btn-item" id="All">All</button>
        <button class="btn btn-outline-dark btn-item" id="Pomak">Pomak</button>
        <button class="btn btn-outline-dark btn-item" id="Macır">Macır</button>
        <button class="btn btn-outline-dark btn-item" id="Çerkes">Çerkes</button>
   `
   btnDOM.innerHTML=buttons;

}
btnCreate();

const foodRecipes=(item) => {
    let food=`
      <div class="menu-items col-lg-6 col-sm-12">
          <img src="${item.img}" alt="${item.title}" class="photo">
          <div class="menu-info">
              <div class="menu-title">
                  <h4>${item.title}</h4>
                  <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">
                  ${item.desc}
              </div>
           </div>
       </div>
    `
    return food;
}

const showAllFoods=()=>{
    let allFoods=""

    menu.map(item=>{
        allFoods +=foodRecipes(item)
    })
    menuDOM.innerHTML=allFoods;
}
allBTN=document.querySelector("#All")
document.addEventListener("DOMContentLoaded",showAllFoods)
allBTN.addEventListener("click",showAllFoods)

const showPomakFoods = () => {
  
    let pomakFoods = ""
  
    menu.map(item => {
      if(item.category === "Pomak"){
        pomakFoods += foodRecipes(item)
      }
    })
    
    menuDOM.innerHTML = pomakFoods;
  
  }
  pomakBTN=document.querySelector("#Pomak")
  pomakBTN.addEventListener("click",showPomakFoods);

  const showMacirFoods = () => {
  
    let macirFoods = ""
  
    menu.map(item => {
      if(item.category === "Macır"){
        macirFoods += foodRecipes(item)
      }
    })
    
    menuDOM.innerHTML = macirFoods;
  
  }
  macirBTN=document.querySelector("#Macır")
  macirBTN.addEventListener("click",showMacirFoods);

  const showCerkesFoods = () => {
  
    let cerkesFoods = ""
  
    menu.map(item => {
      if(item.category === "Çerkes"){
        cerkesFoods += foodRecipes(item)
      }
    })
    
    menuDOM.innerHTML = cerkesFoods;
  
  }
  cerkesBTN=document.querySelector("#Çerkes")
  cerkesBTN.addEventListener("click",showCerkesFoods);