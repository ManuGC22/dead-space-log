let button = document.querySelector('button')
let necroImg = document.querySelector('img')
let necroName = document.querySelector('.name')
let attack = document.querySelector('.attack')
let description = document.querySelector('.description')
let attackText = document.querySelector('.description-attack')
let strategyText = document.querySelector('.description-strategy')
let apiData 

button.addEventListener('click', apiRequest)

async function apiRequest(){
    const necromorph = document.querySelector('input').value

    try{
        const response = await fetch(`https://deadspace-api.cyclic.app/api/${necromorph}`)
        const data = await response.json()
        apiData = data

        console.log(apiData)
        necroName.innerText = apiData['name']
        description.innerText = apiData['description']

        attackTextShown()
        strategyTextShown()
        necroImage()
    }catch(error){
        console.log(error)
    }

   
}

function attackTextShown(){
    let attacksArray = apiData['attack']

    while(attackText.firstChild){
        attackText.removeChild(attackText.firstChild)
    }
    for(let i = 0; i < attacksArray.length;i++){

        let newAttack = document.createElement('li')
        newAttack.innerText = attacksArray[i]
            attackText.appendChild(newAttack)

    }
}

function strategyTextShown(){
    let strategyArray = apiData['strategy']

    while(strategyText.firstChild){
        strategyText.removeChild(strategyText.firstChild)
    }
    for(let i = 0; i < strategyArray.length;i++){

        let newStrategy = document.createElement('li')
        newStrategy.innerText = strategyArray[i]
            strategyText.appendChild(newStrategy)

    }
}

function necroImage(){

    if(necroName.innerText === 'Slashers'){
        necroImg.src = '/dead-space-client/media/necromorphs/slasher.png'
    }

    if(necroName.innerText === 'Pods'){
        necroImg.src = '/dead-space-client/media/necromorphs/pods.png'
    }

    if(necroName.innerText === 'Brute'){
        necroImg.src = '/dead-space-client/media/necromorphs/brute.png'
    }

    if(necroName.innerText === 'Infectors'){
        necroImg.src = '/dead-space-client/media/necromorphs/infector.png'
    }

    if(necroName.innerText === 'Puker'){
        necroImg.src = '/dead-space-client/media/necromorphs/puker.png'
    }

    if(necroName.innerText === 'Cyst'){
        necroImg.src = '/dead-space-client/media/necromorphs/cyst.png'
    }

    if(necroName.innerText === 'Swarmers'){
        necroImg.src = '/dead-space-client/media/necromorphs/swarmers.png'
    }

    if(necroName.innerText === 'Dividers'){
        necroImg.src = '/dead-space-client/media/necromorphs/divider.webp'
    }

    if(necroName.innerText === 'unkown creature'){
        necroImg.src = '/dead-space-client/media/ishimura-logo.webp'
    }
}