const button = document.querySelector('button')
const display = document.querySelector('.display')
const UserComment = new Comments()

const generateTemplate = (data) => {
    console.log(data)
    const randomQuotes = data[Math.floor(Math.random() * data.length)];
    const html = `<h1><span class="bold-quote">"</span> ${randomQuotes.body}</h1>
    <p class="quote-name">${randomQuotes.name}</p>`
    display.innerHTML = html
}

const getComment = async () => {
    const commentDets = await UserComment.getComments()
    return commentDets
}

button.addEventListener('click', e => {
    getComment().then(data => generateTemplate(data)).catch(err => console.log(err))
})
