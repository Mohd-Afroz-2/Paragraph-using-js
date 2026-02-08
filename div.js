function addParas() {


let container = document.getElementById('my-container');
let newContainer = document.getElementById('my-newContainer');

let para = document.createElement('p');
para.textContent= prompt("Enter your text")


let newPara = document.createElement('p');
newPara.textContent= prompt("Enter your additional text")

container.appendChild(para);
newContainer.appendChild(newPara);
    
}

function deletePara() {
    document.getElementById('my-container').innerHTML='';
    document.getElementById('my-newContainer').innerHTML='';
    
}

