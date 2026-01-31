    const canvas= document.getElementById('canvas');
    const polyline = document.getElementById('pen')
    let pendown, currentCoordinates, newCoordinates;
    canvas.addEventListener('mousedown', function(event){
            pendown=true;
        });
    canvas.addEventListener('mousemove', function(event){
            if(pendown === true){
                let rect = canvas.getBoundingClientRect();
                let x = event.clientX - rect.left;
                let y = event.clientY - rect.top;
                let coor = y +" "+ x ;
                // let coor = x + " " + y;
                // console.log(coor);
                currentCoordinates = polyline.getAttribute("points");
                newCoordinates = currentCoordinates +","+ coor;
                
                polyline.setAttribute("points", newCoordinates);
            }
        });
    canvas.addEventListener('mouseup', function(){
        pendown=false;  
    })
    