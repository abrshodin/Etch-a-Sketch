// obtain the dimension from the user
let numberOfDivs = 0;
const btn = document.querySelector("button");

btn.addEventListener('click', divCreator);

// make a grid with divs of the specified dimension
function divCreator() {
    numberOfDivs = Number(prompt("Please enter the number of divs"));

    let dimension = 970 / numberOfDivs;

    let divContainer = document.querySelector("#container");

    for(let i = 1; i <= numberOfDivs; i++) {
        let subDiv = document.createElement("div");
        
        divContainer.appendChild(subDiv);
        subDiv.id = `subDiv${i}`
        
        for(let j = 1; j <= numberOfDivs; j++)
        {
            let innerDiv = document.createElement("div");
            innerDiv.style.height = `${dimension}px`;
            innerDiv.style.width = `${dimension}px`
            subDiv.appendChild(innerDiv);
        }

        subDiv.style.display = 'flex';
        subDiv.style.flexDirection = 'row';
        subDiv.style.height = `${dimension}px`;
    }
}


    



// make the divs to listen mouth hover