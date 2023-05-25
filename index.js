const popup = document.getElementById("mobile-toggle");
const menubutton = document.getElementById("menu-hide");
const modal = document.getElementById("back-drop");
const modalshow = document.getElementById("modal-show");
const modal2 = document.getElementById("back-drop2");
const modalshow2 = document.getElementById("modal-show2");
const modal3 = document.getElementById("back-drop3");
const modalshow3 = document.getElementById("modal-show3");
const modalDesk1 = document.getElementById("back-drop-desk");
const deskShow1 = document.getElementById("modal-show-desk");
const modalDesk2 = document.getElementById("back-drop-desk2");
const deskShow2 = document.getElementById("modal-show-desk2");
const modalDesk3 = document.getElementById("back-drop-desk3");
const deskShow3 = document.getElementById("modal-show-desk3");
const modalDesk4 = document.getElementById("back-drop-desk4");
const deskShow4 = document.getElementById("modal-show-desk4");

function openMenu() {
    popup.classList.add("mobile-toggle-show");
    menubutton.classList.add("menu-hide");
}
openMenu();
function closeMenu() {
    popup.classList.remove("mobile-toggle-show");
    menubutton.classList.remove("menu-hide");
}
closeMenu();

const data = [
    {
        id: 1,
        name: "Tonic",
        title: "Canopy",
        stack: "Back End Dev",
        year: "2015",
        description:
            "Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends",
        deskDescription:
            "Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends",
        mobileImg: "Snapshoot Portfolio.svg",
        desktopImg: "desktop4.svg",
        live: "See Live",
        source: "See Source",
        skills: {
            skill1: "html",
            skill2: "css",
            skill3: "javaScript",
        },
    },

    {
        id: 2,
        name: "Multi-Post Stories",
        title: "Canopy",
        stack: "Back End Dev",
        year: "2015",
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        deskDescription:
            "Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends",
        mobileImg: "Snapshoot Portfolio (1).svg",
        desktopImg: "desktop3.svg",
        live: "See Live",
        source: "See Source",
        skills: {
            skill1: "html",
            skill2: "css",
            skill3: "javaScript",
        },
    },

    {
        id: 3,
        name: "multi-Post Stories",
        title: "Canopy",
        stack: "Back End Dev",
        year: "2015",
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        deskDescription:
            "Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends",
        mobileImg: "Snapshoot Portfolio (3).svg",
        desktopImg: "desktopimg.svg",
        live: "See Live",
        source: "See Source",
        skills: {
            skill1: "html",
            skill2: "css",
            skill3: "javaScript",
        },
    },
    {
        id: 4,
        name: "multi-Post Stories",
        title: "Canopy",
        stack: "Back End Dev",
        year: "2015",
        description:
            "A daily selection of privately personalized reads; no accounts or sign-ups required.",
        deskDescription:
            "Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends",
        mobileImg: "Snapshoot Portfolio (3).svg",
        desktopImg: "desktop2.svg",
        live: "See Live",
        source: "See Source",
        skills: {
            skill1: "html",
            skill2: "css",
            skill3: "javaScript",
        },
    },
];

const container = document.getElementById("modal-show");
const container2 = document.getElementById("modal-show2");
const container3 = document.getElementById("modal-show3");

const deskCont = document.getElementById("modal-show-desk");
const deskCont2 = document.getElementById("modal-show-desk2");
const deskCont3 = document.getElementById("modal-show-desk3");
const deskCont4 = document.getElementById("modal-show-desk4");

for (let i = 0; i < data.length; i++) {
    const item = data[i];
    const itemDiv = document.createElement("div");
    const deskDiv = document.createElement("div");

    itemDiv.className = "item";
    deskDiv.className = "desk-style";

    deskDiv.innerHTML = `
    <h2>${item.name}</h2>
    <span>
    <h3>${item.title}</h3>
    <p>${item.stack}</p>
    <p>${item.year}</p>
    </span>
    <img src="${item.desktopImg}" alt="Mobile Image">
    <p>${item.deskDescription}</p>
    <div>
    <button>${item.skills.skill1}<button>
    <button>${item.skills.skill2}<button>
    <button>${item.skills.skill3}<button>
    </div>
    <span>
    <button><a href="${item.live}">See Live</a><button>
    <button><a href="${item.source}">See Source</a><button>
    </span>
    <hr>
    `;

    itemDiv.innerHTML = `
                <h2>${item.name}</h2>
                <h3>${item.title}</h3>
                <p>${item.stack}</p>
                <p>${item.year}</p>
                <img src="${item.mobileImg}" alt="Mobile Image">
                <p>${item.description}</p>
                <button>${item.skills.skill1}<button>
                <button>${item.skills.skill2}<button>
                <button>${item.skills.skill3}<button>
                <button><a href="${item.live}">See Live</a><button>
                <button><a href="${item.source}">See Source</a><button>
                
            `;

    switch (item.id) {
        case 1:
            container.appendChild(itemDiv);
            deskCont.appendChild(deskDiv);
            break;
        case 2:
            container2.appendChild(itemDiv);
            deskCont2.appendChild(deskDiv);
            break;
        case 3:
            container3.appendChild(itemDiv);
            deskCont3.appendChild(deskDiv);
            break;
        case 4:
            deskCont4.appendChild(deskDiv);
            break;
        default:
            break;
    }
}

// const titleElement2 = document.getElementById('modal-title2');
// titleElement2.textContent = object2.name;

function openModal1() {
    modal.classList.add("modal-backdrop-show");
    modalshow.classList.add("modal-show");
}
openModal1();
function closeModal1() {
    modal.classList.remove("modal-backdrop-show");
    modalshow.classList.remove("modal-show");
}
closeModal1();
function openModal2() {
    modal2.classList.add("modal-backdrop-show");
    modalshow2.classList.add("modal-show");
}
openModal2();
function closeModal2() {
    modal2.classList.remove("modal-backdrop-show");
    modalshow2.classList.remove("modal-show");
}
closeModal2();
function openModal3() {
    modal3.classList.add("modal-backdrop-show");
    modalshow3.classList.add("modal-show");
}
openModal3();
function closeModal3() {
    modal3.classList.remove("modal-backdrop-show");
    modalshow3.classList.remove("modal-show");
}
closeModal3();

function openDesk1() {
    modalDesk1.classList.add("modal-backdrop-show");
    deskShow1.classList.add("new-modal-show");
}
openDesk1();
function closeDesk1() {
    modalDesk1.classList.remove("modal-backdrop-show");
    deskShow1.classList.remove("new-modal-show");
}
closeDesk1();
function openDesk2() {
    modalDesk2.classList.add("modal-backdrop-show");
    deskShow2.classList.add("new-modal-show");
}
openDesk2();
function closeDesk2() {
    modalDesk2.classList.remove("modal-backdrop-show");
    deskShow2.classList.remove("new-modal-show");
}
closeDesk2();
function openDesk3() {
    modalDesk3.classList.add("modal-backdrop-show");
    deskShow3.classList.add("new-modal-show");
}
openDesk3();
function closeDesk3() {
    modalDesk3.classList.remove("modal-backdrop-show");
    deskShow3.classList.remove("new-modal-show");
}
closeDesk3();
function openDesk4() {
    modalDesk4.classList.add("modal-backdrop-show");
    deskShow4.classList.add("new-modal-show");
}
openDesk4();
function closeDesk4() {
    modalDesk4.classList.remove("modal-backdrop-show");
    deskShow4.classList.remove("new-modal-show");
}
closeDesk4();
