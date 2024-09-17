export class EncabezadoComponente extends HTMLElement {
    constructor() {
        super();
        this.render();
    }

    render() {
        const cuerpoWebsite = document.getElementById("webPrincipal");
        const SVG_XMLNS = "http://www.w3.org/2000/svg";

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

        let divContentInfo = document.createElement("div");
        let divInfoContainer = document.createElement("div");
        let divPresentacion = document.createElement("div");
        let h2TituloInfo = document.createElement("h2");
        let pTextoInfo = document.createElement("p");
        let divInfoContBtns = document.createElement("div");
        let buttonVisita = document.createElement("button");
        let spanBtnVistaTexto = document.createElement("span");
        let spanBtnVisitaIcon = document.createElement("span");
        let svgIconContainer = document.createElementNS(SVG_XMLNS, "svg");
        let circleSvgIcon1 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon2 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon3 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon4 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon5 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon6 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon7 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon8 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon9 = document.createElementNS(SVG_XMLNS, "circle");
        let circleSvgIcon10 = document.createElementNS(SVG_XMLNS, "circle");
        let buttonVermas = document.createElement("button");
        let divImgMuestra = document.createElement("div");
        let imgMuestra = document.createElement("img");


        // Creando los nodos de texto correspondientes
        let textTituloEncabezado = document.createTextNode("Arte CampusLands");
        let textNavContainerBtnLink1 = document.createTextNode("Exhibición Arte");
        let textNavContainerBtnLink2 = document.createTextNode("Galería");
        let textNavContainerBtnLink3 = document.createTextNode("Eventos");
        let textNavContainerBtnLink4 = document.createTextNode("Autores");
        let textNavContainerBtnLink5 = document.createTextNode("Contáctanos");

        let textTituloInfoSection = document.createTextNode("¡Bienvenido a la galería de arte CampusArt!");
        let textInfoContPresentacion = document.createTextNode("Descubre impresionantes obras de arte de siglos de expresividad, creatividad y pensamiento humano. Nuestra gran colección de pinturas, se ajusta a todo tipo de gustos, ¡De seguro encontrarás la obra perfecta!");
        let textBtnVisita = document.createTextNode("Planea tu visita");
        let textBtnVermas = document.createTextNode("Ver más");


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

        divContentInfo.setAttribute("class", "contentInfo");
        divContentInfo.setAttribute("id", "contentInfo");
        divInfoContainer.setAttribute("class", "infoContainer");
        divPresentacion.setAttribute("class", "infoContainer__presentacion");
        h2TituloInfo.setAttribute("class", "infoContPresentacion__titulo");
        pTextoInfo.setAttribute("class", "infoContPresentacion__texto");
        divInfoContBtns.setAttribute("class", "infoContainer__btnVisita");
        buttonVisita.setAttribute("class", "infoContainer__btnVisita");
        spanBtnVistaTexto.setAttribute("class", "btnVisita__texto");
        spanBtnVisitaIcon.setAttribute("class", "btnVisita__iconContainer");
        svgIconContainer.setAttributeNS(null, "width", "16");
        svgIconContainer.setAttributeNS(null, "height", "19");
        svgIconContainer.setAttributeNS(null, "viewBox", "0 0 16 19");
        svgIconContainer.setAttributeNS(null, "fill", "nones");
        svgIconContainer.setAttributeNS(null, "class", "btnVisita__svgIcon");
        circleSvgIcon1.setAttributeNS(null, "cx", "1.61321");
        circleSvgIcon1.setAttributeNS(null, "cy", "1.61321");
        circleSvgIcon1.setAttribute(null, "r", "1.5");
        circleSvgIcon1.setAttributeNS(null, "fill", "black");


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