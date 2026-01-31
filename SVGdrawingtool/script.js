const canvas= document.getElementById('canvas');

let pendown, currentCoordinates, newCoordinates,newline;
canvas.addEventListener('mousedown', function(event){
    pendown=true;
    newline = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    let rect = canvas.getBoundingClientRect();
    let x = event.clientX - rect.left;
    let y = event.clientY - rect.top;
    let coor = x + " " + y;

    newline.setAttribute("points", coor);
    canvas.appendChild(newline);

            
    });
canvas.addEventListener('mousemove', function(event){
        if(pendown === true){
            let rect = canvas.getBoundingClientRect();
            let x = event.clientX - rect.left;
            let y = event.clientY - rect.top;
            let coor = x +" "+ y ;
            // let coor = x + " " + y;
            // console.log(coor);
            let currentCoordinates = newline.getAttribute("points");
            
            let newCoordinates = currentCoordinates + "," + coor;
            console.log(currentCoordinates, newCoordinates);

            newline.setAttribute("style", "fill:none;stroke:black");
            newline.setAttribute("points", newCoordinates);
            
        }
    });
canvas.addEventListener('mouseup', function(){
    pendown=false;  
})
