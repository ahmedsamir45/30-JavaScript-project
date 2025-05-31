let outputCode = document.getElementById("css-code");
let silders = document.querySelectorAll("input[type='range']")
silders.forEach(function(slider){
    slider.addEventListener("input",createBlob)
});

let inputs = document.querySelectorAll("input[type='number']")
inputs.forEach(function(inp){
    inp.addEventListener("change",createBlob)
})
function createBlob(){
    let radiusOne =  silders[0].value;
    let radiusTwo =  silders[1].value;
    let radiusThree =  silders[2].value;
    let radiusFour =  silders[3].value;
    let blobHeight = inputs[0].value;
    let blobWidth = inputs[1].value;

    let borderRadius = `${radiusOne}% ${100 - radiusOne}% ${100 - radiusThree}% ${radiusThree}% / ${radiusFour}% ${radiusTwo}% ${100 - radiusTwo}% ${100 - radiusFour}%`;

    let blobStyle = `border-radius:${borderRadius};height:${blobHeight}px; width:${blobWidth}px;`
    document.querySelector(".blob").style.cssText = blobStyle

    outputCode.value = blobStyle
}

document.getElementById("copy").addEventListener("click",
    function(){
        navigator.clipboard.writeText(outputCode.value).then(
            function(){
                alert("Code is Copied")
            }
        )
    }
)

createBlob()