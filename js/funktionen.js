/* window.onload -> damit die Funktionen und Anweisungen erst nach dem vollständigen Laden der Seite aufegführt werden */
window.onload = function () {

    /*######################### index.html #################### */

    /* führe folgenden Code nur auf der Index-Seite aus */
    if (document.body.id === "index") {

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
                "fühlt, weiß ich nicht.</p><br><a href='#/' onclick='closeInfobox()'>Info Schliessen</a>",
            id: "info1",
            className: "infobox"
        }, {
            tagName: "article",
            innerHTML: "<h3>CSS</h3><p>dieser text hat eigentlich gar keinen wirklichen inhalt. aber er hat auch " +
                "keine relevanz, und deswegen ist das egal. er dient lediglich als platzhalter. um mal zu zeigen, wie " +
                "diese stelle der seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der text dabei gut " +
                "fühlt, weiß ich nicht.</p><br><a href='#/' onclick='closeInfobox()'>Info Schliessen</a>",
            id: "info2",
            className: "infobox"
        }, {
            tagName: "article",
            innerHTML: "<h3>JavaScript</h3><p>dieser text hat eigentlich gar keinen wirklichen inhalt. aber er hat " +
                "auch keine relevanz, und deswegen ist das egal. er dient lediglich als platzhalter. um mal zu zeigen," +
                " wie diese stelle der seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der text dabei gut" +
                " fühlt, weiß ich nicht.</p><br><a href='#/' onclick='closeInfobox()'>Info Schliessen</a>",
            id: "info3",
            className: "infobox"
        }, {
            tagName: "article",
            innerHTML: "<h3>HTML/CSS/JavaScript</h3><p>dieser text hat eigentlich gar keinen wirklichen inhalt. aber" +
                " er hat auch keine relevanz, und deswegen ist das egal. er dient lediglich als platzhalter. um mal zu" +
                " zeigen, wie diese stelle der seite aussieht, wenn ein paar zeilen vorhanden sind. ob sich der text " +
                "dabei gut fühlt, weiß ich nicht.</p><br><a href='#/' onclick='closeInfobox()'>Info Schliessen</a>",
            id: "info4",
            className: "infobox"
        }];

        /* Die definierten Objekte mit den zu erstellenden Element-Eigenschaften werden zusammen mit dem Ziel-Element
         * an die Funktion 'createAndAppendElementsToElement' übergeben. Die Funktion erstellt aus den Objekten die
         * spezifierten Elemente und fügt sie dem Ziel-Element zu. */
        createAndAppendElementsToElement(ele_bilder, ele_content_right);
        createAndAppendElementsToElement(ele_infoboxen, ele_content_right);
    }

    /*######################### produktionen.html #################### */

    /* führe folgenden Code nur auf der Produktionen-Seite aus */
    if (document.body.id === "produktionen") {
        let random_bilder = generateImageArray();
        let randomNumber = Math.floor(random_bilder.length * Math.random());
        document.getElementById("random_werbebild").innerHTML = '<img src="' + random_bilder[randomNumber] + '" alt="werbebild" title="werbebild" id="werbebild" />';

        let wahlbilder = document.querySelectorAll('#wahlbilder img');
        for (let i = 0; i < wahlbilder.length; i++) {
            let a = document.createElement('a');
            a.setAttribute('href', "./grossbild/" + wahlbilder[i].id + ".jpg");
            // a.setAttribute('data-lightbox', 'image-' + i);
            a.setAttribute('data-lightbox', 'images');
            a.setAttribute('data-title', wahlbilder[i].title);
            a.setAttribute('data-alt', wahlbilder[i].alt);

            a.appendChild(wahlbilder[i].cloneNode(true));
            wahlbilder[i].parentNode.replaceChild(a, wahlbilder[i]);
        }

        /*   Oder einfacher in jQuery, welches ja durch lightbox zur Verfügung steht.
        $('#wahlbilder img').each(function( index, element ){
            $(element).wrap('<a href="./grossbild/' + element.id + '.jpg" ' +
                '               data-lightbox="image"' +
                '               data-title="' + element.title + '"' +
                '               data-alt="' + element.alt + '">');
        });*/

        lightbox.option({
            'resizeDuration': 200,
            'wrapAround': true
        })

    }

    /*######################### kontakt.html #################### */

    /* führe folgenden Code nur auf der Kontakt-Seite aus */
    if (document.body.id === "kontakt") {
        let ele_contactinfoarea = document.getElementById('contactinfoarea');

        let mailadresses = [{
            sld: "rainer",
            domain: "magic",
            tld: "de"
        }, {
            sld: "hanna",
            domain: "magic",
            tld: "de"
        }, {
            sld: "frauke",
            domain: "magic",
            tld: "de"
        }, {
            sld: "filip",
            domain: "magic",
            tld: "de"
        }];

        let ele_contactinfos = [{
            tagName: "h2",
            innerHTML: "Media Magic - Team"
        }, {
            tagName: "span",
            innerHTML: "Kontakt: "
        }, {
            tagName: "a",
            innerHTML: mailadresses[0].sld + "@" + mailadresses[0].domain + "." + mailadresses[0].tld,
            href: "mai" + "lt" + "o:" + mailadresses[0].sld + "@" + mailadresses[0].domain + "." + mailadresses[0].tld
        }, {
            tagName: "br"
        }, {
            tagName: "span",
            innerHTML: "Kontakt: "
        }, {
            tagName: "a",
            innerHTML: mailadresses[1].sld + "@" + mailadresses[1].domain + "." + mailadresses[1].tld,
            href: "mai" + "lt" + "o:" + mailadresses[1].sld + "@" + mailadresses[1].domain + "." + mailadresses[1].tld
        }, {
            tagName: "br"
        }, {
            tagName: "span",
            innerHTML: "Kontakt: "
        }, {
            tagName: "a",
            innerHTML: mailadresses[2].sld + "@" + mailadresses[2].domain + "." + mailadresses[2].tld,
            href: "mai" + "lt" + "o:" + mailadresses[2].sld + "@" + mailadresses[2].domain + "." + mailadresses[2].tld
        }, {
            tagName: "br"
        }, {
            tagName: "span",
            innerHTML: "Kontakt: "
        }, {
            tagName: "a",
            innerHTML: mailadresses[3].sld + "@" + mailadresses[3].domain + "." + mailadresses[3].tld,
            href: "mai" + "lt" + "o:" + mailadresses[3].sld + "@" + mailadresses[3].domain + "." + mailadresses[3].tld
        }];

        createAndAppendElementsToElement(ele_contactinfos, ele_contactinfoarea);



        /* Formular-Validierung */

        checkAllRequiredFields('contactform');




    }
};

/* ########### functions area ###########
 * Hier befinden sich die eigenen Funktionen, welche im Bereich 'window.onload' genutzt werden können.
 */


function createAndAppendElementsToElement(elements, toElement) {
    for (let element in elements) {
        let new_element = document.createElement(elements[element].tagName);
        if (elements[element].src) {
            new_element.src = elements[element].src
        }
        ;
        if (elements[element].title) {
            new_element.title = elements[element].title
        }
        ;
        if (elements[element].href) {
            new_element.href = elements[element].href
        }
        ;
        if (elements[element].id) {
            new_element.id = elements[element].id
        }
        ;
        if (elements[element].className) {
            new_element.className = elements[element].className
        }
        ;
        if (elements[element].innerHTML) {
            new_element.innerHTML = elements[element].innerHTML
        }
        ;
        if (elements[element].hover_src) {
            let hover_src = elements[element].hover_src;
            let orig_src = elements[element].src;
            /* Übergabe der Parameter zunächst über eine anonymen Funktion,
               in der wiederum die Funktion mit den Argumenten sitzt */
            new_element.addEventListener('mouseover', function () {
                addEventSource(this, hover_src)
            });
            new_element.addEventListener('mouseout', function () {
                addEventSource(this, orig_src)
            });
        }
        ;
        if (elements[element].onClickTargetId) {
            let onClickTargetId = elements[element].onClickTargetId;
            new_element.addEventListener('click', function () {
                openInfobox(onClickTargetId)
            });
        }
        ;
        toElement.appendChild(new_element);
    }
}

function addEventSource(event, src) {
    event.src = src;
}

function openInfobox(onClickTargetId) {
    let infobox = document.getElementById(onClickTargetId);
    let openInfoboxes = document.querySelectorAll(".infobox_show");

    if (openInfoboxes.length != 0) {
        for (let i = 0; i < openInfoboxes.length; i++) {
            openInfoboxes[i].classList.remove("infobox_show");
        }

        /* Diese Möglichkeiten der for loops werden LEIDER nicht vom IE interpretiert
            for (let box of openInfoboxes) {
                box.classList.remove("infobox_show");
            };

            openInfoboxes.forEach(box => {
                box.classList.remove("infobox_show");
            });
        */
    }
    if (infobox.length != 0) {
        infobox.classList.add("infobox_show")
    }
}

function closeInfobox() {
    let openInfoboxes = document.querySelectorAll(".infobox_show");
    if (openInfoboxes.length != 0) {
        for (let i = 0; i < openInfoboxes.length; i++) {
            openInfoboxes[i].classList.remove("infobox_show")
        }
    }
}

function generateImageArray() {
    let str_begin = "./produktionen/banner";
    let str_end = ".jpg";
    let random_bilder = [];
    for (let i = 1; i < 8; i++) {
        random_bilder[i - 1] = str_begin + i + str_end;
    }
    return random_bilder;
}

function checkAllRequiredFields(formId) {
    let reqFields = document.getElementById(formId).querySelectorAll("[required]");
    if (reqFields.length > 0) {
        let numSuccessFields = 0;
        for (let i=0; i < reqFields.length; i++) {
            if (!reqFields[i].classList.contains("success-message")) {
                document.getElementById("submit-button").disabled = true;
                console.log(reqFields[i].id + ' nicht valide');
                return false;
            }
            numSuccessFields++;
        }
        if (numSuccessFields == reqFields.length) {
            document.getElementById("submit-button").disabled = false;
        }
    }
}

function createMessage(message, targetID, cssClass) {
    document.getElementById(targetID).classList = cssClass;
    document.getElementById(targetID + "-message").innerHTML = message;
    document.getElementById(targetID + "-message").classList = "message " + cssClass;
    checkAllRequiredFields('contactform');
}

function validateSex(field) {
    console.log("validateSex");
    /* Wenn "nichts" ausgewählt -> Fehlermeldung */
    if (field.value === "") {
        createMessage('Ihre Anrede bitte.', field.id, 'error-message')
        return false;
    }
    /* wenn alles passt -> :-) */
    createMessage(':-)', field.id, 'success-message');
    return true;
}

function validateName(field) {
    console.log("validateName");
    /* wenn das Feld leer, da alle Zeichen gelöscht sind -> Fehlermeldung */
    if (field.value.length == 0) {
        createMessage('Ihren Namen bitte.', field.id, 'error-message')
        return false;
    }
    /* wenn das Feld zu viele Zeichen enthält -> Verhindern weiterer Eingaben */
    if (field.value.length >= 10) {
        /* löscht das letzte Zeichen, welches zuviel eingegeben wurde */
        field.value = field.value.slice(0, -1);
    }
    /* Nur gültige Zeichen: Alle Buchstaben, Leerzeichen und Bindestriche -> sonst Fehlermeldung */
    if (!field.value.match(/^[a-zA-ZäöüÄÖÜß\s\-]+$/)) {
        createMessage('Nur Buchstaben und \"-\".', field.id, 'error-message');
        return false;
    }
    /* wenn alles passt -> :-) */
    createMessage(':-)', field.id, 'success-message');
    return true;
}

function validateSubject(field) {
    console.log("validateSubject");
    /* wenn das Feld leer, da alle Zeichen gelöscht sind -> Fehlermeldung */
    if (field.value.length == 0) {
        createMessage('Den Betreff bitte.', field.id, 'error-message')
        return false;
    }
    /* wenn das Feld zu viele Zeichen enthält -> Verhindern weiterer Eingaben */
    if (field.value.length >= 10) {
        /* löscht das letzte Zeichen, welches zuviel eingegeben wurde */
        field.value = field.value.slice(0, -1);
    }
    /* wenn alles passt -> :-) */
    createMessage(':-)', field.id, 'success-message');
    return true;
}

function validateEmail(field) {
    console.log("validateEmail");
    /* wenn das Feld leer, da alle Zeichen gelöscht sind -> Fehlermeldung */
    if (field.value.length == 0) {
        createMessage('Ihre E-Mail bitte.', field.id, 'error-message');
        return false;
    }

    /* wenn das Feld zu viele Zeichen enthält -> Verhindern weiterer Eingaben */
    if (field.value.length >= 20) {
        /* löscht das letzte Zeichen, welches zuviel eingegeben wurde */
        field.value = field.value.slice(0, -1);
    }
    /* Gültiges Format: Buchstaben, Zahlen, Punkte, Unterstriche, Bindestriche, dann ein @,
     * dann Buchstaben, dann ein ., dann min 2 bzw. max 4 Buchstaben -> sonst Fehlermeldung
     */
    if (!field.value.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        createMessage('Ungültiges E-Mail Format', field.id, 'error-message');
        return false;
    }
    /* wenn alles passt -> :-) */
    createMessage(':-)', field.id, 'success-message');
    return true;
}

function validateMessage(field) {
    console.log("validateMessage");
    let max = 40;
    let min = 10;
    let charsLeftToMin = min - field.value.length;
    let charsLeftToMax = max - field.value.length;

    if (charsLeftToMin > 0) {
        createMessage(charsLeftToMin + ' mehr Zeichen benötigt.', field.id, 'error-message');
        return false;
    }

    /* wenn das Feld zu viele Zeichen enthält -> Verhindern weiterer Eingaben */
    if (field.value.length >= max) {
        /* löscht das letzte Zeichen, welches zuviel eingegeben wurde */
        field.value = field.value.slice(0, -1);
    }
    /* wenn alles passt -> :-) */
    createMessage('noch ' + charsLeftToMax + ' Zeichen übrig.', field.id, 'success-message');
    return true;
}

function clearAllForms() {
    let formFields = document.getElementById('contactform').querySelectorAll("[required]");
    if (formFields.length > 0) {
        for (let i=0; i < formFields.length; i++) {
            document.getElementById(formFields[i].id + "-message").classList = "message";
            document.getElementById(formFields[i].id + "-message").innerHTML = "";
            formFields[i].classList = "";
        }
        document.getElementById("submit-button").disabled = true;
    }
}

function validateForm(e) {
    e.preventDefault();
    let formFields = document.getElementById('contactform').querySelectorAll("[required]");
    if (formFields.length > 0) {
        for (let i=0; i < formFields.length; i++) {
            if (formFields[i].id == "anrede") {
                if (!formFields[i].onchange()) {
                    // return false;
                }
            }
            else {
                if (!formFields[i].onkeyup(null)) {
                    // return false;
                }
            }
        }
    }
    sendFakeMail();
}

function sendFakeMail() {
    let mailbody = "";
    let formFields = document.getElementById('contactform').querySelectorAll("[required]");
    let checkboxes = document.getElementById("checkboxes").querySelectorAll("input");
    if (formFields.length > 0) {
        for (let i = 0; i < formFields.length; i++) {
            mailbody += formFields[i].value + "\n";
        }
    }
    if (checkboxes.length > 0) {
        for (let i = 0; i < checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                mailbody += "Plus Infos über: " +  checkboxes[i].value + "\n";
            }
        }
    }
    alert(mailbody);
}
