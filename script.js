const btn = document.querySelector("button");
let divContainer = document.querySelector("#container");
let numberOfDivs = 16;

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function colorAdd(event) {
    let color = getRandomColor();
    event.target.style.backgroundColor = color;
}

// make a grid with divs of the specified dimension
function gridCreator() {

    let dimension = 970 / numberOfDivs;
    
    for(let i = 1; i <= numberOfDivs; i++) {
        let subDiv = document.createElement("div");
        
        divContainer.appendChild(subDiv);
        subDiv.id = `subDiv${i}`
        
        for(let j = 1; j <= numberOfDivs; j++)
        {
            let innerDiv = document.createElement("div");
            innerDiv.style.height = `${dimension}px`;
            innerDiv.style.width = `${dimension}px`
            innerDiv.style.border = "1px solid gray";
            // make the divs to listen mouth hover
            innerDiv.addEventListener('mouseover', colorAdd);
            subDiv.appendChild(innerDiv);
        }

        subDiv.style.display = 'flex';
        subDiv.style.flexDirection = 'row';
        subDiv.style.height = `${dimension}px`;
    }
}

function divCreator() {
    for(let i = 1; i <= numberOfDivs; i++) {
        let rmDiv = document.querySelector(`#subDiv${i}`);
        rmDiv.remove();
    }
    // obtain the number of divs from the user
    numberOfDivs = Number(prompt("Please enter the number of divs which doesn't exceed 100"));
    
    gridCreator();

}

do {
    gridCreator();
    btn.addEventListener('click', divCreator);

} while(numberOfDivs > 100);






























    



