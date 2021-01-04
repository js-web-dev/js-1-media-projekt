/* window.onload -> damit die Funktionen und Anweisungen erst nach dem vollständigen Laden der Seite aufegführt werden */
window.onload = function () {

    /* der rechte Container als Objekt */
    let ele_content_right = document.getElementById("content_right");

    /* In einem Array werden hier jeweils Objekte mit Eigenschaften definiert, welche für die Element-Erzeugung
     * von Relevanz sind, wie tagName, id, class sowie weitere "Hilfseigenschaften".
     * Diese Objekte werden für die Funktion 'createAndAppendElementsToElement' benötigt. */

    // Array aus Objekten mit Bildern bzw. deren zu erzeugenden Eigenschaften
    let ele_bilder = [{
        tagName: "img",
        title: "Wahl 1",
        src: "./wahlbilder/eins.jpg",
        id: "bild1",
        hover_src: "./wahlbilder/eins_aktiv.jpg",
        onClickTargetId: "info1"
    }, {
        tagName: "img",
        title: "Wahl 2",
        src: "./wahlbilder/zwei.jpg",
        id: "bild2",
        hover_src: "./wahlbilder/zwei_aktiv.jpg",
        onClickTargetId: "info2"
    }, {
        tagName: "img",
        title: "Wahl 3",
        src: "./wahlbilder/drei.jpg",
        id: "bild3",
        hover_src: "./wahlbilder/drei_aktiv.jpg",
        onClickTargetId: "info3"
    }, {
        tagName: "img",
        title: "Wahl 4",
        src: "./wahlbilder/vier.jpg",
        id: "bild4",
        hover_src: "./wahlbilder/vier_aktiv.jpg",
        onClickTargetId: "info4"
    }];

    // Array aus Objekten mit Infoboxen bzw. deren zu erzeugenden Eigenschaften
    let ele_infoboxen = [{
        tagName: "article",
        innerHTML: "<h3>HTML</h3><p>dieser text hat eigentlich gar keinen wirklichen inhalt. aber er hat auch " +
            "keine relevanz, und deswegen ist das egal. er dient lediglich als platzhalter. um mal zu zeigen, wie " +
            "diese stelle der seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der text dabei gut " +
            "fühlt, weiß ich nicht.</p><br><a href='#/' onclick='closseInfobox()'>Info Schliessen</a>",
        id: "info1",
        className: "infobox infobox_hide"
    }, {
        tagName: "article",
        innerHTML: "<h3>CSS</h3><p>dieser text hat eigentlich gar keinen wirklichen inhalt. aber er hat auch " +
            "keine relevanz, und deswegen ist das egal. er dient lediglich als platzhalter. um mal zu zeigen, wie " +
            "diese stelle der seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der text dabei gut " +
            "fühlt, weiß ich nicht.</p><br><a href='#/' onclick='closseInfobox()'>Info Schliessen</a>",
        id: "info2",
        className: "infobox infobox_hide"
    }, {
        tagName: "article",
        innerHTML: "<h3>JavaScript</h3><p>dieser text hat eigentlich gar keinen wirklichen inhalt. aber er hat " +
            "auch keine relevanz, und deswegen ist das egal. er dient lediglich als platzhalter. um mal zu zeigen," +
            " wie diese stelle der seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der text dabei gut" +
            " fühlt, weiß ich nicht.</p><br><a href='#/' onclick='closseInfobox()'>Info Schliessen</a>",
        id: "info3",
        className: "infobox infobox_hide"
    }, {
        tagName: "article",
        innerHTML: "<h3>HTML/CSS/JavaScript</h3><p>dieser text hat eigentlich gar keinen wirklichen inhalt. aber" +
            " er hat auch keine relevanz, und deswegen ist das egal. er dient lediglich als platzhalter. um mal zu" +
            " zeigen, wie diese stelle der seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der text " +
            "dabei gut fühlt, weiß ich nicht.</p><br><a href='#/' onclick='closseInfobox()'>Info Schliessen</a>",
        id: "info4",
        className: "infobox infobox_hide"
    }];

    /* Die definierten Objekte mit den zu erstellenden Element-Eigenschaften werden zusammen mit dem Ziel-Element
     * an die Funktion 'createAndAppendElementsToElement' übergeben. Die Funktion erstellt aus den Objekten die
     * spezifierten Elemente und fügt sie dem Ziel-Element zu. */
    createAndAppendElementsToElement(ele_bilder, ele_content_right);
    createAndAppendElementsToElement(ele_infoboxen, ele_content_right);

};


/* ########### functions area ###########
 * Hier befinden sich die eigenen Funktionen, welche im Bereich 'window.onload' genutzt werden können.
 */

function createAndAppendElementsToElement(elements, toElement) {
    for (let element in elements) {
        let new_element = document.createElement(elements[element].tagName);
        if (elements[element].src) { new_element.src = elements[element].src };
        if (elements[element].title) { new_element.title = elements[element].title };
        if (elements[element].id) { new_element.id = elements[element].id };
        if (elements[element].className) { new_element.className = elements[element].className };
        if (elements[element].innerHTML) { new_element.innerHTML = elements[element].innerHTML };
        if (elements[element].hover_src) {
            let hover_src = elements[element].hover_src;
            let orig_src = elements[element].src;
            new_element.addEventListener('mouseover', function (event, newSrc = hover_src) {
                event.target.src = newSrc
            });
            new_element.addEventListener('mouseout', function (event, newSrc = orig_src) {
                event.target.src = newSrc
            });
        };
        if (elements[element].onClickTargetId) {
            let onClickTargetId = elements[element].onClickTargetId;
            new_element.addEventListener('click', function (event, target = onClickTargetId) {
                openInfobox(target)
            });
        };
        toElement.appendChild(new_element);
    }
}

function openInfobox(onClickTargetId) {
    let infobox = document.getElementById(onClickTargetId);
    let openInfoboxes = document.querySelectorAll(".infobox_show");

    if (openInfoboxes.length != 0) {
        openInfoboxes.forEach(box => {
            console.log('box: ', box);
            box.classList.remove("infobox_show");
            box.classList.add("infobox_hide");
        });

    }
    if (infobox.length != 0) {
        infobox.classList.add("infobox_show")
    }
}

function closseInfobox() {
    let openInfoboxes = document.querySelectorAll(".infobox_show");
    if (openInfoboxes.length != 0) {
        openInfoboxes.forEach(box => {
            box.classList.remove("infobox_show");
            box.classList.add("infobox_hide");
        })
    }
}