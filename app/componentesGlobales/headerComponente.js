export class EncabezadoComponente extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const cuerpoWebsite = document.getElementById("webPrincipal");

        // Creando los elementos HTML necesarios
        let headerEncabezado = document.createElement("header");
        let divEncabezadoContainer = document.createElement("div");
        let divTitulo = document.createElement("div");
        let imgTituloIcono = document.createElement("img");
        let h1TituloTexto = document.createElement("h1");
        let divNavbar = document.createElement("div");
        let navNavbarContainer = document.createElement("nav");
        let ulNavContainerLinks = document.createElement("ul");
        let liNavContainerBtnLink1 = document.createElement("li");
        let liNavContainerBtnLink2 = document.createElement("li");
        let liNavContainerBtnLink3 = document.createElement("li");
        let liNavContainerBtnLink4 = document.createElement("li");
        let liNavContainerBtnLink5 = document.createElement("li");


        // Creando los nodos de texto correspondientes
        let textTituloEncabezado = document.createTextNode("Arte CampusLands");
        let textNavContainerBtnLink1 = document.createTextNode("Exhibición Arte");
        let textNavContainerBtnLink2 = document.createTextNode("Galería");
        let textNavContainerBtnLink3 = document.createTextNode("Eventos");
        let textNavContainerBtnLink4 = document.createTextNode("Autores");
        let textNavContainerBtnLink5 = document.createTextNode("Contáctanos");


        // Agregándole los atributos a cada etiqueta
        headerEncabezado.setAttribute("id", "encabezado");
        headerEncabezado.setAttribute("class", "encabezado");
        divEncabezadoContainer.setAttribute("class", "encabezadoContainer");
        divTitulo.setAttribute("class", "titulo");
        imgTituloIcono.setAttribute("src", "./assets/svg/iconCampusArt.svg");
        imgTituloIcono.setAttribute("alt", "icon");
        imgTituloIcono.setAttribute("title", "iconWebsite");
        imgTituloIcono.setAttribute("class", "titulo__imagen");
        h1TituloTexto.setAttribute("class", "titulo__texto");
        divNavbar.setAttribute("class", "navbar");
        navNavbarContainer.setAttribute("class", "navbar__container");
        ulNavContainerLinks.setAttribute("class", "navbarContainer__links");
        liNavContainerBtnLink1.setAttribute("class", "navbarContainer__btnLink");
        liNavContainerBtnLink2.setAttribute("class", "navbarContainer__btnLink");
        liNavContainerBtnLink3.setAttribute("class", "navbarContainer__btnLink");
        liNavContainerBtnLink4.setAttribute("class", "navbarContainer__btnLink");
        liNavContainerBtnLink5.setAttribute("class", "navbarContainer__btnLink");


        // Insertando los nodos de texto a la etiquetas correspondientes
        h1TituloTexto.appendChild(textTituloEncabezado);
        liNavContainerBtnLink1.appendChild(textNavContainerBtnLink1);
        liNavContainerBtnLink2.appendChild(textNavContainerBtnLink2);
        liNavContainerBtnLink3.appendChild(textNavContainerBtnLink3);
        liNavContainerBtnLink4.appendChild(textNavContainerBtnLink4);
        liNavContainerBtnLink5.appendChild(textNavContainerBtnLink5);


        // Creando el DOM para insertarlo al HTML
        cuerpoWebsite.appendChild(headerEncabezado);
        headerEncabezado.appendChild(divEncabezadoContainer);
        divEncabezadoContainer.appendChild(divTitulo);
        divEncabezadoContainer.appendChild(divNavbar);
        divTitulo.appendChild(imgTituloIcono);
        divTitulo.appendChild(h1TituloTexto);
        divNavbar.appendChild(navNavbarContainer);
        navNavbarContainer.appendChild(ulNavContainerLinks);
        ulNavContainerLinks.appendChild(liNavContainerBtnLink1);
        ulNavContainerLinks.appendChild(liNavContainerBtnLink2);
        ulNavContainerLinks.appendChild(liNavContainerBtnLink3);
        ulNavContainerLinks.appendChild(liNavContainerBtnLink4);
        ulNavContainerLinks.appendChild(liNavContainerBtnLink5);


        // Creando los eventos pertinentes
    }
}

customElements.define("encabezado-componente", EncabezadoComponente);