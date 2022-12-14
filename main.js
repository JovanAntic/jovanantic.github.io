let path = window.location.pathname;

if (path == "/index.html" || path == "/") {
  index();
} else if (path == "/author.html") {
  author();
}
$("document").ready(() => {
  setTimeout(load, 1000);
  function load() {
    $(".loader_bg").fadeOut();
  }
});
$("#productModal").modal("hide");
function contactForm() {
  let forma = document.getElementById("request");
  forma.send.addEventListener("click", () => {
    var checkFullName =
      /^[A-ZČĆŠĐŽ][a-zčćšđž]{2,15}(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,15})?(\s[A-ZČĆŠĐŽ][a-zčćšđž]{2,20})$/;
    var checkEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var checkNumber = /^06([0-9]){7,8}$/;
    let fullName = forma.fullName;
    var error;
    let brGresaka = 0;
    let email = forma.email;
    let number = forma.number;
    let tema = forma.theme;
    let kontakt = forma.contact;
    let poruka = forma.message;
    let bonus = forma.deal;
    if (!checkFullName.test(fullName.value)) {
      error = fullName.nextElementSibling;
      error.classList.remove("d-none");
      error.innerHTML = "Pogrešan unos. Primer : Petar Perić";
      brGresaka++;
    } else {
      error = fullName.nextElementSibling;
      error.classList.add("d-none");
    }
    if (!checkEmail.test(email.value)) {
      error = email.nextElementSibling;
      error.classList.remove("d-none");
      error.innerHTML = "Pogrešan unos. Primer : tvojeime@nazivdomena.com";
      brGresaka++;
    } else {
      error = email.nextElementSibling;
      error.classList.add("d-none");
    }
    if (!checkNumber.test(number.value)) {
      error = number.nextElementSibling;
      error.classList.remove("d-none");
      error.innerHTML = "Pogrešan unos. Primer : 0631234567";
      brGresaka++;
    } else {
      error = number.nextElementSibling;
      error.classList.add("d-none");
    }
    if (tema.selectedIndex == 0) {
      error = tema.nextElementSibling;
      error.classList.remove("d-none");
      error.innerHTML = "Izabrite tip poruke";
      brGresaka++;
    } else {
      error = tema.nextElementSibling;
      error.classList.add("d-none");
    }
    if (kontakt.value == "") {
      error = document.querySelector("#num").parentNode.lastElementChild;
      error.classList.remove("d-none");
      error.innerHTML = "Izabrite način komunikacije";
      brGresaka++;
    } else {
      error = document.querySelector("#num").parentNode.lastElementChild;
      error.classList.add("d-none");
    }
    if (poruka.value == "") {
      error = poruka.parentNode.lastElementChild;
      error.classList.remove("d-none");
      error.innerHTML = "Niste uneli poruku";
      brGresaka++;
    } else {
      error = poruka.parentNode.lastElementChild;
      error.classList.add("d-none");
    }
    let opcije = ``;
    for (let i in bonus) {
      if (bonus[i].checked) {
        opcije += bonus[i].value + ` `;
      }
    }
    if (brGresaka == 0) {
      let success = document.querySelector("#successForm");
      success.classList.remove("d-none");
      let innerSuccess = `Puno ime : ${fullName.value}, Email : ${email.value},
      Telefon : ${number.value}, Tema: ${
        tema.options[tema.selectedIndex].value
      },
      Dodatne opcije : ${opcije != `` ? opcije : "Nema dodatnih opcija"}
      `;
      success.innerHTML = innerSuccess;

      setTimeout(() => {
        success.classList.add("d-none");
      }, 5000);
      forma.reset();

      charLeft.innerHTML = String(200 - charPoruka.value.length);
    }
  });

  let charPoruka = forma.message;

  charPoruka.addEventListener("keyup", function () {
    if (charPoruka.value.length <= 200) {
      charLeft.innerHTML = String(200 - charPoruka.value.length);
    } else {
      let text = charPoruka.value;
      charPoruka.value = text.substring(0, 200);
    }
  });
}
function createNav() {
  let nav = document.querySelector("#navbarLinks");
  nav.innerHTML = "";
  let pages = [
    [
      "index.html",
      "index.html#servicesSection",
      "index.html#productSection",
      "index.html#reviews",
      "index.html#contactSection",
      "author.html",
    ],
    ["Početna", "Usluge", "Proizvodi", "Recenzija", "Kontakt", "Autor"],
  ];

  let lista = document.createElement("ul");
  lista.classList.add("navbar-nav", "mr-auto");
  for (let page in pages[0]) {
    let link = document.createElement("a");
    link.setAttribute("href", pages[0][page]);
    link.classList.add("nav-link");
    link.innerHTML = pages[1][page];
    let item = document.createElement("li");
    if (path == `/${pages[0][page]}`) {
      item.classList.add("nav-item", "active");
    }
    item.appendChild(link);
    lista.appendChild(item);
  }
  nav.appendChild(lista);

  let navToggle = document.getElementById("navbarToggle");

  $(document).ready(() => {
    $("#navbarToggle").click(() => {
      $("#navbarLinks").slideToggle();
    });
  });

  // navToggle.addEventListener("click", () => {
  //   nav.classList.toggle("d-block");
  // });
}
function services() {
  let services = document.getElementById("services");

  let servicesInfo = [
    ["thr.png", "thr1.png", "thr2.png"],
    ["Desktop", "Laptop", "Tablet"],
    [
      `Ojacajte svoju kreativnost sa premijum desktop racunarima, dizajniranih za idrzljivost i modularnost.
      Obavljajte poslovne i licne zadatke
      Snažne poslovne aplikacije sa AI
      Ojacajte vas mali biznis sa racunarom kreiranim za sigurnost, performanse i prosirivost `,
      `Ojacajte svoju kreativnost sa premijum, vrhunskim, lepo uradjenim laptop racunarima sa inovativnim funkcijama. Multitaskovanje izmedju intenzivnih programa
      Kreiranje muzičkih, video, fotografskog sadržaja
      Budite produktivni bilo gde
      `,
      `Najbolje od dva sveta, računara i telefona spojeno u jedno
      Produktivnost u vasim prstima. Ugodan rad bez miša i tastaure.
      Radite bilo gde sa našim najpametnijim , bezbednim tabletima pouzdano
      Kreirajte, konzumirajte i povežite se u stilu sa svestranim tabeltima 
      `,
    ],
  ];

  let serviceInner = "";

  for (let i in servicesInfo[0]) {
    serviceInner += `<div class="col-md-4">
                        <div class="box_text">
                        <i><img src="images/${servicesInfo[0][i]}" alt="#"/></i>
                        <h3>${servicesInfo[1][i]}</h3>
                        <p>${servicesInfo[2][i]}</p>
                        </div>
                    </div>`;
  }

  services.innerHTML = serviceInner;
}
var rememberFilter = "all";
function products(shownItems = 3, filter = "all", sort = "normal") {
  let productWrap = document.getElementById("showProducts");

  rememberFilter = filter;

  let productsInfo = [
    [
      "product2.png",
      "alt",
      "Miš",
      "Software",
      `Miš sa 1600 DPI USB Optičkim vlaknom I dugotrajnom baterijom. Sa njim I dolaze ulošci koji se montiraju na miš da biste ga prilagodili svojoj šaci za do sada nepravizđenu udobnost.`,
      "1299",
    ],
    [
      "product5.png",
      "alt",
      "Ruter",
      "Software",
      `Naš ruter dizajniran za širokopojasni opseg uređaja. Modifikacija prethodno već daleko uspešnog modela,
      sada sa pojačanim sposobnostima nastavlja da bude najbolji odnos cene i kvaliteta.`,
      "1499",
    ],
    [
      "product3.png",
      "alt",
      "Kamera",
      "Software",
      `Video kamera sa integrisanim CMOS senzorom koji daje do 3840x2160 UHD rezoluciju sa 30 frejma po sekundi, kreira živopisnu sliku sa izvanrednom čistinom, bojama i oštrim detaljima`,
      "799",
    ],
    [
      "product9.png",
      "alt",
      "CD Drajv",
      "Hardware",
      `Iako je prema svetskom trendu vreme CD drajvera prošlo, mi još imamo to u ponudi da biste mogl da se sađete u situaciji kada Vam zatreba da sadržaj sa nekog starog CD diska .`,
      "3299",
    ],
    [
      "product4.png",
      "alt",
      "Zvučnici",
      "Software",
      `Naša ponuda zvučnika pokriva sve bazične potrebe za kućno korišćenje, sa pristojnim izborom, a  imamo  par modela zvučnika za proslave.`,
      "2399",
    ],
    [
      "product6.png",
      "alt",
      "Hard Disk",
      "Hardware",
      `Imamo hard diskove za skoro sve vrste računara, tako da ako Vam je se desio kvar, kad nas se nalazi bro rešenje problema. Diskove ya mainfrejm računare dobijamo porudžbinom, sa minimalnim čekanjem`,
      "599",
    ],
    [
      "product7.png",
      "alt",
      "Ram",
      "Hardware",
      `Obezbedite besprekoran rad Vašeg računara, unapredite performanse i brzinu izvršavanja programa sa novim ramom iz naše ponude!`,
      "1599",
    ],
    [
      "product8.png",
      "alt",
      "Baterija",
      "Hardware",
      `Otkazala Vam je baterija na laptopu? Ne brinite, čak i da odgovarajući model baterije nemamo u ponudi, imamo paket konverzije kojim se prikljucuje druga baterija, dok ne stigne odgovarajuća.`,
      "2599",
    ],
    [
      "product1.png",
      "alt",
      "Tastatura",
      "Software",
      `Tastatura poznatog proizvođača  sa mogućnošću napajanja sa računara ili baterije. Sa talasastim dizajnom ipostojanom linijom zakrivljenja koje navode prste pri kucanju bašgde treba. `,
      "1999",
    ],
  ];

  let productsInner = "";
  if (sort != "normal") {
    if (sort == "lowest") {
      productsInfo = productsInfo.sort((a, b) => a[5] - b[5]);
    } else {
      productsInfo = productsInfo.sort((a, b) => b[5] - a[5]);
    }
  }
  if (filter != "all") {
    productsInfo = productsInfo.filter((elem) => elem[3] == filter);
  }

  for (let i = 0; i < shownItems; i++) {
    if (productsInfo[i] != null) {
      productsInner += `<div class="col-md-4" >
                            <a href="#" id="product${i}" class="product-item">
                            <div class="product_box">
                            <figure><img src="images/${productsInfo[i][0]}" alt="${productsInfo[i][1]}"/></figure>
                            <h3>${productsInfo[i][2]}</h3>
                            <p>${productsInfo[i][5]}rsd</p>
                            </div>
                            </a>
                        </div>`;
    }
  }
  if (productsInfo.length > shownItems) {
    productsInner += `<div class="col-md-12">
                      <a class="read_more" href="#" id="moreProducts">Učitaj više</a>
                    </div>`;
  }

  productWrap.innerHTML = productsInner;
  if (shownItems < productsInfo.length) {
    let loadMore = document.getElementById("moreProducts");

    loadMore.addEventListener("click", (e) => {
      e.preventDefault();
      products(shownItems + 3, filter, sort);
    });
  }
  let test = document.querySelectorAll(".product-item");
  test.forEach((element) => {
    element.addEventListener("click", (e) => {
      e.preventDefault();
      let id = element.getAttribute("id");
      let idNum = id.substring(id.length - 1, id.length);
      console.log(idNum);

      let modal = document.getElementById("productContent");
      let modalInner = `<div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">${productsInfo[idNum][2]}</h5>
                        <button
                        type="button"
                        class="close"
                        data-dismiss="modal"
                        aria-label="Close"
                        >
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <img src="images/${productsInfo[idNum][0]}" alt="${productsInfo[idNum][1]}" class="w-100"/>
                        <p>${productsInfo[idNum][4]}</p>
                        <h2 class="text-danger">${productsInfo[idNum][5]}rsd</h2>
                    </div>
                    <div class="modal-footer">
                        <button
                        type="button"
                        class="btn btn-primary"
                        data-dismiss="modal"
                        >
                        Zatvori
                        </button>
                    </div>`;

      modal.innerHTML = modalInner;
      $("#productModal").modal("show");
    });
  });
}
function offer() {
  let countdown = document.getElementById("countdown");

  let dateObj = new Date(Date.now());
  let dateFinish = new Date("2022-12-31");
  let fMili = dateFinish.getTime(dateFinish);
  let newDate;

  if (fMili > Date.now()) {
    newDate = new Date(fMili - Date.now());
    let dateOutput =
      newDate.getDate() -
      1 +
      " d " +
      (newDate.getHours() - 1 + " h ") +
      newDate.getMinutes() +
      " m " +
      newDate.getSeconds() +
      " s ";
    countdown.innerHTML = dateOutput;
  } else {
    countdown.innerHTML = "Offer Ended!";
  }
}
var userCount = 0;
function testimonials(user = userCount) {
  let testiWrap = document.getElementById("testimonialsWrap");
  for (let i = 0; i < 3; i++) {
    let tIndicator = document.getElementById(`indicator${i + 1}`);
    if (i + 1 == user + 1) {
      tIndicator.classList.add("active");
    } else {
      tIndicator.classList.remove("active");
    }
  }
  let testiInfo = [
    ["Sandra Marković", "Petar Nikolić", "Milan Lazić"],
    [
      `Izuzetno profesionalan tim. Uputili su me na proizvod koji se pokazao kao  pravi izbor za rad sa naprednim zahtevnim programima.`,
      `Desio mi se maler da mi je stradao laptop, nekoliko dana pre isteka roka za predaju projekta za stranu kompanuju. Na moju sreću tim u prodavnici mi je brzo pomogao da izaberem odgovarajući novi uređaj.`,
      `Suvlasnik sam firme, koja se za kratko vreme proširila i posluje i u regionu, te se ukazala potreba za mainstream računarom, koja je trajala kratko jer sam uspeo da pronađem pravi računar iz CLA ponude.`,
    ],
  ];
  let testiInner = "";
  //   for (let i in testiInfo[0]) {
  testiInner += `<div class="carousel-item  active">
                    <div class="container">
                    <div class="carousel-caption">
                        <div class="row">
                        <div class="col-md-9 offset-md-3">
                            <div class="test_box">
                            <i><img src="images/cos.png" alt="#" /></i>
                            <h4>${testiInfo[0][user]}</h4>
                            <p>
                                ${testiInfo[1][user]}
                            </p>
                            <h3>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>`;
  //   }

  testiWrap.innerHTML = testiInner;
  ++userCount;
  if (userCount == 3) userCount = 0;
}
function coverSlider() {
  let cover = document.querySelector("#coverSlider");

  let coverInfo = [
    [
      "Treba vam laptop ili desktop računar?",
      "Kod nas ćete kupiti brže, bolje i povoljnije!",
      "Plaćanje na 24 mesečne rate bez kamate!",
    ],
    [
      "Treba vam laptop ili desktop računar?",
      "Treba vam laptop ili desktop računar?",
      "Treba vam laptop ili desktop računar?",
    ],
    [
      `Iskoristite ograničenu akciju na širok spektar računara i dodatne opreme za monitore.
      Izaberite proizvode iz naže ekskluzivne ponude i dobićete premijum uređaj brže, bolje i povoljnije 
      `,
      `Iskoristite ograničenu akciju na širok spektar računara i dodatne opreme za monitore.
      Izaberite proizvode iz naže ekskluzivne ponude i dobićete premijum uređaj brže, bolje i povoljnije 
      `,
      `Iskoristite ograničenu akciju na širok spektar računara i dodatne opreme za monitore.
      Izaberite proizvode iz naže ekskluzivne ponude i dobićete premijum uređaj brže, bolje i povoljnije 
      `,
    ],
    ["Ponuda", "Ponuda", "Ponuda"],
    ["Kontakt", "Kontakt", "Kontakt"],
    ["cover-img-1.png", "cover-img-2a.png", "cover-img-3a.png"],
  ];
  let coverInner = "";
  for (let i in coverInfo[0]) {
    coverInner += ` <div class="carousel-item-1">
                    <div class="container">
                    <div class="carousel-captions">
                        <div class="row">
                        <div class="col-md-6 d-flex align-items-center">
                            <div class="">
                            <span class="text-white d-none">${coverInfo[0][i]}</span>
                            <h1 class="h1 text-white fw-bold">${coverInfo[1][i]}</h1>
                            <p class="text-white fw-light">
                            ${coverInfo[2][i]}
                            </p>
                            <p class="mt-3 py-3">
                              <a href="#productSection" class="p-3 border mt-3 mr-3 text-white">${coverInfo[3][i]} </a>
                              <a href="#contactSection"  class="p-3 border mt-3 text-white">${coverInfo[4][i]}</a>
                            </p>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex align-items-center mt-sm-0 mt-5">
                            <img src="images/${coverInfo[5][i]}" alt="#" class="img-fluid" />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>`;
  }
  cover.innerHTML = coverInner;
}
function renderFooter() {
  let footer = document.getElementById("footerSocial");

  let footerInfo = [
    [
      ["logo1.png", "social_icon"],
      [
        "fa fa-facebook",
        "fa fa-solid fa-sitemap",
        "fa fa-solid fa-file",
        "fa fa-instagram",
      ],
      [
        "https://www.facebook.com",
        "sitemap.xml",
        "documentation.pdf",
        "https://www.linkedin.com",
      ],
    ],
    [
      ["Linkovi", "about_us"],
      ["Početna", "Usluge", "Proizvodi", "Recenzije", "Kontakt", "Autor"],
      [
        "index.html",
        "index.html#servicesSection",
        "index.html#productSection",
        "index.html#reviews",
        "index.html#contactSection",
        "author.html",
      ],
    ],
    [
      ["Informacije", "conta"],
      ["Vuka Karadzića 21", "support@cla.com", "+381 64/1234-341"],
      ["index.html", "index.html", "index.html"],
    ],
  ];

  let footerInner = "";

  for (let i = 0; i < footerInfo.length; i++) {
    footerInner += `<div class="col-xl-4 col-lg-4 col-md-6 col-sm-6">`;
    if (i == 0) {
      footerInner += `<img class="logo1" src="images/logo1.png" alt="#" />`;
    } else {
      footerInner += `<h3>${footerInfo[i][0][0]}</h3>`;
    }
    footerInner += `<ul class="${footerInfo[i][0][1]}">`;

    for (let j = 0; j < footerInfo[i][1].length; j++) {
      if (i == 0) {
        footerInner += `<li>
                            <a href="${footerInfo[0][2][j]}"
                            ><i class="${footerInfo[0][1][j]}" aria-hidden="true"></i
                            ></a>
                        </li>`;
      } else {
        footerInner += `<li>
                        <a href="${footerInfo[i][2][j]}" class="text-white">${footerInfo[i][1][j]}</a>
                      </li>`;
      }
    }
    footerInner += `</ul></div>`;
  }
  footer.innerHTML = footerInner;
}
function authorInfo() {
  let authorInfo = [
    ["Ime i prezime", "Jovan Antic"],
    ["Broj indeksa", "20/21"],
    ["Smer i moduo", "IT - Mreže"],
  ];

  let authorInner = ``;

  for (let i in authorInfo) {
    authorInner += `<h2 class="text-white text-center h2">${authorInfo[i][0]}</h2>
                    <h3 class="text-white text-center">${authorInfo[i][1]}</h3>`;
  }
  let authorWrap = document.querySelector("#authorInfo");

  authorWrap.innerHTML = authorInner;

  $(document).ready(() => {
    $("#authorText").hide();

    $("#authorReadMore").click(function (e) {
      e.preventDefault();
      if ($("#authorReadMore").text() == "Read more") {
        $("#authorReadMore").text("Read less");
      } else {
        $("#authorReadMore").text("Read more");
      }
      $("#authorText").slideToggle();
    });
  });
}
function index() {
  services();
  products();
  coverSlider();
  testimonials(0);
  contactForm();
  createNav();
  setInterval(testimonials, 3000);
  setInterval(offer, 1000);
  renderFooter();
  let filterA = document.getElementById("filterA");
  filterA.addEventListener("click", (e) => {
    e.preventDefault();
    products(3, "all");
  });
  let filterO = document.getElementById("filterO");
  filterO.addEventListener("click", (e) => {
    e.preventDefault();
    products(3, "Hardware");
  });
  let filterT = document.getElementById("filterT");
  filterT.addEventListener("click", (e) => {
    e.preventDefault();
    products(3, "Software");
  });
  let sortH = document.getElementById("sortH");
  sortH.addEventListener("click", (e) => {
    e.preventDefault();
    products(3, rememberFilter, "highest");
  });
  let sortL = document.getElementById("sortL");
  sortL.addEventListener("click", (e) => {
    e.preventDefault();
    products(3, rememberFilter, "lowest");
  });

  $(document).ready(function () {
    $(".banner_main").slick({
      arrows: false,
      autoplay: true,
    });
  });
}
function author() {
  createNav();
  authorInfo();
  renderFooter();
}
