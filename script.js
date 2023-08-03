const form = document.querySelector('form')
const error = document.querySelector('.error')

form.addEventListener('submit', e=>{
    e.preventDefault()

    // clear password
    form.querySelectorAll('input[type="password"]').forEach(el => el.value = null)

    // show error
    error.classList.remove('hidden')
})