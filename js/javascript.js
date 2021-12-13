let variable2= document.getElementById("content");
let variable1 = document.getElementById("cont");
let figuritas =[];

variable1.addEventListener("submit", (event)=> {
    event.preventDefault();
    let data = new FormData(variable1);
    figuritas.push({
        nombre: data.get("nombre"),
        color: data.get("color"),
        figura: data.get("figura"),
    });
    pintar_figuritas();
});
const pintar_figuritas = () =>{
    variable2.innerHTML="";
    figuritas.forEach((e) => {
        variable2.insertAdjacentHTML(
            "beforeend",
          `
          <div
          class="${e.figura}"
          style="background:${e.color};"
          >
          ${e.nombre}
          </div>
        `
        );
    });
}