// Code your solution in this file!
function distanceFromHqInBlocks(distance){
    if (distance<42){
        return(42-distance)
    }
    else{
        return (distance-42)
}    
}
function distanceFromHqInFeet(istance){
    if(distance<42){
        return(42-distance)*264
    }
    else{
        return(distance-42)*264
    }
}
function distanceTravelledInFeet(start,stop){
    if(stop>start){
        return((stop-start)*264)
    }
    else{
        return((start-stop)*264)
    }
}
function calcuatesFarePrice(start,destination){
    let distance = distanceTravelledInFeet(start, destination);
    if(distance<=400){
        return 0;
    }
    if(distance>=400 && distance<=2000){
        return(distance-400)*0.02;
    }
    else if(distance>=2000 && distance<=2500){
        return 25;
    }
    else if(distance>2500){
        return "cannot travel that far"
    }
}
