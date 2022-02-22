class key {
    constructor (img, name, id, price) {
        this.img = img;
        this.name = name;
        this.id = id;
        this.price = price;
    }

    createBox (fragment, tabIndex) {
        let container = document.createElement("DIV");

        container.setAttribute("class","product");
        container.setAttribute("tabindex",tabIndex);

        container.innerHTML += "<div><img src=" + this.img + ' alt="product ' + this.name + ' image"></div>';
        container.innerHTML += "<h3>" + this.name + "</h3>";
        container.innerHTML += "<h5>Id: " + this.id + "</h5>";
        container.innerHTML += "<h4>$" + this.price + "</h4>";

        container.setAttribute("onclick","changeHiddenValue(" + this.id + ")");

        fragment.appendChild(container);
    }
}

function constructorPages (amount) {
    const productsFragment = document.createDocumentFragment();
    const productsContainer = document.getElementById("products");

    keyGen (productsFragment, amount);

    productsContainer.appendChild(productsFragment);
}

function keyGen (productsFragment, amount) {
    let keyList = [];
    for (let i = 0; i < amount; i++) {
        
        let randomId = Math.round(Math.random() * (10000 - 1000) + 1000);
        let randomPrice = Math.round(Math.random() * (10 - 5) + 5);

        keyList[i] = new key (
            randomImg(),
            randomName(),
            randomId,
            randomPrice
        );

        keyList[i].createBox(productsFragment, i);
    }
}

function randomImg () {
    let randomNum = Math.round(Math.random() * (20 - 1) + 1);
    return "keys/key_" + randomNum + ".png";
}

function randomName () {
    let randomNum = Math.round(Math.random() * (40 - 1) + 1);
    if (randomNum == 1) {
        return "The key of her heart"
    }
    else {
        let nameList = [
            "Slunia Dynasty", 
            "Eraesha Empire", 
            "Maebia Empire", 
            "Deacaea Kingdom", 
            "Ikhuterra Empire", 
            "Stineokar Kingdom", 
            "Waffuya Empire", 
            "Kridodo Kingdom", 
            "Uwocrogalla Dynasty", 
            "Proginem Kingdom",
            "Geoviel Kingdom",
            "Oyilux Kingdom",
            "Phevell Empire",
            "Sladour Dynasty",
            "Ozusiryn Empire",
            "Slummapan Dynasty",
            "Wennarian Kingdom",
            "Shoveosea Dynasty",
            "Druzoteron Dynasty",
            "Ebaigia Dynasty",
            "Eabrotish Kingdom",
            "Gaya Empire",
            "Ozaecuria Kingdom",
            "Cravell Kingdom",
            "Weffeaya Kingdom",
            "Arozzezar Dynasty",
            "Rexeopia Kingdom",
            "Aebruguntis Empire",
            "Aikhuzuca Dynasty",
            "Qowyth Kingdom",
            "Shaca Dynasty",
            "Praibet Empire",
            "Rikar Kingdom",
            "Wratus Empire",
            "Roussuston Kingdom",
            "Ogramegary Empire",
            "Tuppatia Dynasty",
            "Obuipuven Dynasty",
            "Rudoudora Dynasty",
            "Seston Kingdom",
            "Eadogary Empire",
            "Icropan Empire",
            "Bathia Empire",
            "Slavia Kingdom",
            "Wruiphatopia Dynasty",
            "Bruiggobet Empire",
            "Prabelum Empire",
            "Cheodevia Empire",
            "Aeshemethage Empire"
        ];
        return "The " + nameList[randomNum - 1] + " key";
    }
}

function changeHiddenValue(value) {
    document.getElementById("hidden-value").value = value;
}

constructorPages(50);