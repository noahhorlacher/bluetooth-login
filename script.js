const form = document.querySelector('form')
const error = document.querySelector('.error')
const success = document.querySelector('.success')

// good luck
const salt = 'Binjeman69'
const hash = '7a464871e74542d5cd2a57abab0a59a50c51a209b72f1000818ec8bbc3bea5c1'

async function sha256(message) {
    const msgBuffer = new TextEncoder().encode(message);

    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer)

    const hashArray = Array.from(new Uint8Array(hashBuffer))
  
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
    return hashHex
}

form.addEventListener('submit', async e=>{
    e.preventDefault()

    // insert code here
    const passwordInput = form.querySelector('input[type="password"]')
    const password = passwordInput.value
    const saltedPassword = salt + password
    
    const hashedPassword = await sha256(saltedPassword)

    console.log('hashed', hashedPassword)

    if(hashedPassword !== hash){
        // clear password
        form.querySelectorAll('input[type="password"]').forEach(el => el.value = null)
        
        // show error
        error.classList.remove('hidden')
    } else {
        form.remove()

        error.remove()
        success.classList.remove('hidden')
    }
})