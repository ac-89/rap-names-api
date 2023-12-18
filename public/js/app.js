document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://adorable-yak-pullover.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.querySelector('#birthName').innerText = data.birthName
        document.querySelector('#age').innerText = data.age
        document.querySelector('#birthPlace').innerText = data.birthPlace
    }catch(error){
        console.log(error)
    }
}

