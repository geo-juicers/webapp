
function AnimateButton(props) {

function clickHandler(){
    fetch(`http://localhost:8000/${props.categoryName}/${props.animationName}`)
    .catch((error) => {
        console.error("Error:", error);
    });
    
}

function color(i){
    if (i % 4 == 0){
        return "bg-yellow-300"
    }
    else if (i % 4 == 1){
        return "bg-lime-300"
    }
    else if (i % 4 == 2){
        return "bg-rose-300"
    }
    else {
        return "bg-emerald-300"
    }
}

function color1(i){
    if (i % 4 == 0){
        return "hover:bg-yellow-400"
    }
    else if (i % 4 == 1){
        return "hover:bg-lime-400"
    }
    else if (i % 4 == 2){
        return "hover:bg-rose-400"
    }
    else {
        return "hover:bg-emerald-400"
    }
}

function color2(i){
    if (i % 4 == 0){
        return "border-yellow-400"
    }
    else if (i % 4 == 1){
        return "border-lime-400"
    }
    else if (i % 4 == 2){
        return "border-rose-400"
    }
    else {
        return "border-emerald-400"
    }
}

    return (
      <div onClick={clickHandler} className={`h-40 w-52 ${color(props.i)} ${color1(props.i)} ${color2(props.i)} border-4 rounded-sm justify-center text-black flex items-center`}>
        {props.animationName}
      </div>
    );
  }
  
  export default AnimateButton