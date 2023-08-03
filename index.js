const move = document.querySelector(".move");
const right = document.querySelector("#right");
const left = document.querySelector("#left");

move.forEach(item ,(e)=>{




    
        item.addEventListener("dragStart", function (e) {
            let selectedElement = e.target;
            
            right.addEventListener("dragover", function (e) {
                e.preventDefault();
            });
            
            right.addEventListener("drop", function (e) {
                right.appendChild(selectedElement);
            });
            left.addEventListener("dragover", function (e) {
                e.preventDefault();
            });
            
            left.addEventListener("drop", function (e) {
                left.appendChild(selectedElement);
            });
        }
)}
        )