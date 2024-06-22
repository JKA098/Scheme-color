document.getElementById("getScheme").addEventListener('click',(e)=>{
    e.preventDefault()
    const schemeValues = document.getElementById("schemeSelector").value
    const hexColor = document.getElementById("colorPicker").value.substring(1)

    fetch(`https://www.thecolorapi.com/scheme?hex=${hexColor}&mode=${schemeValues}&count=5`)
        .then(res=> res.json())
        .then(data => {
            const colorSchemeDiv = document.getElementById("colorScheme")
            colorSchemeDiv.innerHTML= ""
            data.colors.forEach( color =>{
                const colorDiv = document.createElement('div');
                colorDiv.style.backgroundColor = color.hex.value;
                colorDiv.classList.add('color-block');
                colorDiv.ariaLabel = `Color with the hex value of ${schemeValues}`
                
                const colorText = document.createElement('span');
                colorText.textContent = color.hex.value;
                colorText.ariaLabel = `Color with the hex value of ${hexColor}`
                colorDiv.appendChild(colorText);
                colorSchemeDiv.appendChild(colorDiv);              
               
            })
        })
    
    
})
