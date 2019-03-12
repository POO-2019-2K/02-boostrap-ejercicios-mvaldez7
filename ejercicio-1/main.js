import Reservacion from "./Reservacion.js"

class Main{
    constructor(){
        document.querySelector("#btnAgregar").addEventListener("click", () => {
            let name = document.querySelector("#name");
            let date1 = document.querySelector("#date1");
            let date2 = document.querySelector("#date2");
            let tel = document.querySelector("#tel");
            let habit = document.querySelector("#noh");

            let date1 = date1.split("-");
            let date2 = date2.split("-");
            let dateOne = new Date(date1[0],date1[1],date1[2]);
            let dateTwo = new Date(date2[0],date2[1],date2[2]);
            
            let reservacion = new Reservacion(name, dateOne, dateTwo, tel, habit);
        });
    }
}
let m = new Main();



