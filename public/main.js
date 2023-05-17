const btn = document.querySelector('button')
const otherBtn = document.getElementById('post')

const clickHandler = () => alert('The cat name is: Rascal')

btn.addEventListener('click', clickHandler)

otherBtn.addEventListener('click', () => {
    axios.post('/ma-post')
    .then((response) => {
        alert(response.data)
    })
})