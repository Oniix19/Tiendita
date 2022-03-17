const listOff = document.querySelector("#listOff");
const listPop = document.querySelector("#listPop");

document.addEventListener("DOMContentLoaded", async () => {    
    const url = await fetch("http://localhost:4001/productos");
    const data = await url.json();

    showData(data)
})

const showData = (data) => {
    data.forEach(producto => {
        const {id, porcentaje, poster, precio, nombre, contenido} = producto
        const prodsOff = document.createElement("p")
        const prodsPop = document.createElement("p")

        if (porcentaje !== 0){
            let descuento = precio * porcentaje / 100;
            total = precio - descuento;
            total = total.toFixed(2);
            prodsOff.innerHTML = `
            <div id="divListOffer" class="divListOffer">
                <div class="listContainer">
                    <span class="spanList">${porcentaje}% dto.</span>
                    
                    <img class="imgList" src="${poster}" alt="">
                    <div class="divPrice">
                        <h3 id="h3PriceOff" class="h3Price">$${total}/Kg</h3>
                        <h3 class="h3Offer">$${precio}/Kg</h3>
                    </div>
                    <h4 class="h4List">${nombre}</h4>
                    <button onclick="myFunction(${id})" id=${id} class="btnList">Agregar</button>
                </div>
            </div>
        `
        }else if(porcentaje === 0){
            unit = precio / contenido
            unit = unit.toFixed(2)
            prodsPop.innerHTML = `
            <div class="divListPop">
                <div class="listContainer">
                    <img id="" class="imgList" src="${poster}" alt="">
                    <div class="divPrice">
                        <h3 id="h3PricePop" class="h3Price">$${precio}</h3>
                    </div>
                    <h4 class="h4List">${nombre}</h4>
                    <h5 class="h5List">${contenido}g ($${unit}/gr)</h5>
                    <button onclick="myFunction(${id})" id="${id}" class="btnList">Agregar</button>
                </div>
            </div>
        `   
        }
        listOff.appendChild(prodsOff)
        listPop.appendChild(prodsPop)
    });
}

function myFunction(id){
    console.log(id);
}