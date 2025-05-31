const elem = document.getElementById("element");
const code = document.getElementById("code");
const sliders = document.querySelectorAll(".sliders input");
const insetCheckbox = document.getElementById("shadow-inset");

// Add event listeners to sliders and the inset checkbox
sliders.forEach(slider => slider.addEventListener("input", generateShadow));
insetCheckbox.addEventListener("click", generateShadow);

function generateShadow() {
    const shadowParams = getShadowParams();
    const boxShadow = createBoxShadow(...shadowParams);
    applyShadow(elem, boxShadow);
    upadateCode(boxShadow)
}

function getShadowParams() {
    const hShadow = parseInt(document.getElementById("h-shadow").value);
    const vShadow = parseInt(document.getElementById("v-shadow").value);
    const blurRadius = parseInt(document.getElementById("blur-shadow").value);
    const spreadRadius = parseInt(document.getElementById("spread-radius").value);
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowColorOpacity = parseFloat(document.getElementById("opacity").value).toFixed(1);
    const shadowInset = document.getElementById("shadow-inset").checked;

    return [hShadow, vShadow, blurRadius, spreadRadius, shadowColor, shadowColorOpacity, shadowInset];
}

function createBoxShadow(hShadow, vShadow, blurRadius, spreadRadius, color, opacity, inset) {
    const shadow = inset ? "inset" : "";
    const rgbaColor = hexToRgba(color, opacity);
    return `${shadow} ${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${rgbaColor}`;
}

function hexToRgba(color, opacity) {
    const r = parseInt(color.substr(1, 2), 16);
    const g = parseInt(color.substr(3, 2), 16);
    const b = parseInt(color.substr(5, 2), 16);
    return `rgba(${r}, ${g}, ${b}, ${opacity})`;
}

function applyShadow(elem, boxShadow) {
    elem.style.boxShadow = boxShadow;
}


function upadateCode(text){
    code.textContent = `box-Shadow: ${text}`;
}

function copyCode(){
    const codeText = code.textContent;
    navigator.clipboard.writeText(codeText)
        .then(()=>{
            alert("Code Copied to Clipboard");
        });
}



window.onload = generateShadow;