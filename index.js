export const myName = "Hsu Myat"

export const showMyName = () =>{

    return myName

}

export const showMyNameUi = () =>{
    const h1 = document.createElement("h1")
    h1.innerText = myName;
    document.body.append(h1)
}

console.log(showMyName)
showMyNameUi()