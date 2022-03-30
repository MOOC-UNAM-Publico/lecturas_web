class BaseCreditos extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
    
    <h2>Directorio</h2>
    <h2>Universidad Nacional Autónoma de México</h2>
    
    <p class="lead fw-bold">Dr. Enrique Luis Graue Wiechers</p>
    <p class="lead">Rector</p>
    
    <p class="lead fw-bold">Dr. Leonardo Lomelí Vanegas</p>
    <p class="lead">Secretario general</p>
    
    <p class="lead fw-bold">Dr. Alfredo Sánchez Casta&ntilde;eda</p>
    <p class="lead">Abogado general</p>
    
    <p class="lead fw-bold">Dr. Luis Álvarez-Icaza Longoria</p>
    <p class="lead">Secretario administrativo</p>
    
    <p class="lead fw-bold">Dr. Alberto Ken Oyama Nakagawa</p>
    <p class="lead">Secretario de desarrollo institucional</p>
    
    <p class="lead fw-bold">Lic. Raúl Arcenio Aguilar Tamayo</p>
    <p class="lead">Secretario de prevención, atención y seguridad universitaria</p>
    
    </div>
            <div class="b-creditos-divider"></div>
            <div class="container text-center px-4 py-5">
    
    <h2>Directorio</h2>
    <h2>Coordinación de Universidad Abierta, Innovación Educativa y Educación a Distancia</h2>
    
    <p class="lead fw-bold">Dr. Melchor Sánchez Mendiola</p>
    <p class="lead">Coordinación</p>
    
    <p class="lead fw-bold">Mtra. Ana María del Pilar Martínez Hernández</p>
    <p class="lead">Dirección de innovación educativa, desarrollo curricular y formación docente</p>
    
    <p class="lead fw-bold">Dr. Adrián Alejandro Martínez González</p>
    <p class="lead">Dirección de evaluación educativa</p>
    
    <p class="lead fw-bold">Dra. Guadalupe Vadillo Bueno</p>
    <p class="lead">Dirección de B@UNAM y MOOC</p>
    
    <p class="lead fw-bold">Dr. Enrique Ruiz-Velasco Sánchez</p>
    <p class="lead">Dirección de proyectos de transformación digital para la educación</p>
    
    <p class="lead fw-bold">Mtro. Ricardo Arroyo Mendoza</p>
    <p class="lead">Dirección de desarrollo de sistemas para la educación</p>
    
    <p class="lead fw-bold">Dr. Jorge León Martínez</p>
    <p class="lead">Dirección de proyectos de educación abierta y a distancia</p>
    
    <p class="lead fw-bold">L.C. Alberto Antonio Pedraza Mena</p>
    <p class="lead">Secretaría administrativa</p>
    
    </div>
            <div class="b-creditos-divider"></div>
            <div class="container text-center px-4 py-5">
    
    <h2>Créditos</h2>
    
    <p class="lead fw-bold">Dra. Jackeline Bucio García</p>
    <p class="lead">Subdirección de B@UNAM y MOOC</p>
    
    <p class="lead fw-bold">Mtro. Vicente Hinojosa Alarcón</p>
    <p class="lead">Subdirección de planeación y evaluación MOOC</p>
    
    <p class="lead fw-bold">Dr. Jairo Antonio Melo Flórez</p>
    <p class="lead">Jefatura de desarrollo MOOC</p>
        `
    }
}

customElements.define('creditos-base-global', BaseCreditos);