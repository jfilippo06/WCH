const salir = document.querySelector('#salir')
const main = document.querySelector('#main')

salir.addEventListener('click', () => {
    main.innerHTML = `
    <div class="modal modal-sheet position-static d-block bg-secondary py-5" tabindex="-1" role="dialog" id="modalSheet">
        <div class="modal-dialog" role="document">
            <div class="modal-content rounded-4 shadow">
                <div class="modal-header border-bottom-0">
                    <h1 class="modal-title fs-5">¿Salir de la sesión?</h1>
                </div>
                <div class="modal-footer flex-column border-top-0">
                    <a class="btn btn-lg btn-primary w-100 mx-0" href="/auth/logout">Si</a>
                    <a class="btn btn-lg btn-danger w-100 mx-0" href="/inventario">No</a>
                </div>
            </div>
        </div>
    </div>
    `
})