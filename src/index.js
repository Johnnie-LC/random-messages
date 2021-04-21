// creando un modulo con npm

const messages = [
    "Oscar",
    "Ana",
    "Yesica",
    "Diego",
    "Laura",
    "Carolina",
    "Paulina"
]

const randomMSG = () => {
    const message = messages[Math.floor(Math.random()* messages.length)]
    console.log(message)
}

module.exports = {randomMSG} 