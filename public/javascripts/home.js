const salir = document.querySelector('#salir')
const main = document.querySelector('#main')

salir.addEventListener('click', () => {
    main.innerHTML = `
    <div class="card-body">
        <h5 class="card-title">Default Card</h5>
        <div class="alert alert-success alert-dismissible fade show" role="alert"> 
            <a href="/home"> Permanecer en la sesion </a> 
        </div>
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <a href="/auth/logout"> Salir de la sesión </a> 
        </div>
    </div>
    `
})