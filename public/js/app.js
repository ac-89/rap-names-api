document.querySelector('button').addEventListener('click', apiRequest)

async function apiRequest(){
    const rapperName = document.querySelector('input').value
    try{
        const response = await fetch(`https://adorable-yak-pullover.cyclic.app/api/${rapperName}`)
        const data = await response.json()

        console.log(data)
        document.getElementById('name').innerText = data.birthName
        document.getElementById('age').innerText = data.age
        document.getElementById('birthPlace').innerText = data.birthPlace
    }catch(error){
        console.log(error)
    }
}

