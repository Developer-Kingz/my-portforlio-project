const popup = document.getElementById('mobile-toggle');
const menubutton = document.getElementById('menu-hide');

function openMenu() {
  popup.classList.add('mobile-toggle-show');
  menubutton.classList.add('menu-hide');
}
openMenu();
function closeMenu() {
  popup.classList.remove('mobile-toggle-show');
  menubutton.classList.remove('menu-hide');
}
closeMenu();

const data = [
  {
    id: 1,
    name: 'Tonic',
    title: 'Canopy',
    stack: 'Back End Dev',
    year: '2015',
    description:
            'Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends',
    deskDescription:
            'Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends',
    mobileImg: 'Snapshoot Portfolio.svg',
    desktopImg: 'desktop4.svg',
    circle: 'Counter.svg',
    live: 'See Live',
    source: 'See Source',
    skills: {
      skill1: 'html',
      skill2: 'css',
      skill3: 'javaScript',
    },
  },

  {
    id: 2,
    name: 'Multi-Post Stories',
    title: 'Canopy',
    stack: 'Back End Dev',
    year: '2015',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    deskDescription:
            'Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends',
    mobileImg: 'Snapshoot Portfolio (4).svg',
    desktopImg: 'desktop3.svg',
    circle: 'Counter.svg',
    live: 'See Live',
    source: 'See Source',
    skills: {
      skill1: 'html',
      skill2: 'css',
      skill3: 'javaScript',
    },
  },

  {
    id: 3,
    name: 'multi-Post Stories',
    title: 'Canopy',
    stack: 'Back End Dev',
    year: '2015',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    deskDescription:
            'Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends',
    mobileImg: 'Snapshoot Portfolio (3).svg',
    desktopImg: 'desktopimg.svg',
    circle: 'Counter.svg',
    live: 'See Live',
    source: 'See Source',
    skills: {
      skill1: 'html',
      skill2: 'css',
      skill3: 'javaScript',
    },
  },
  {
    id: 4,
    name: 'multi-Post Stories',
    title: 'Canopy',
    stack: 'Back End Dev',
    year: '2015',
    description:
            'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    deskDescription:
            'Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends Experimental content creation feature that allows users to add to an existing stay over the course of a day without spamming their friends',
    mobileImg: 'Snapshoot Portfolio (3).svg',
    desktopImg: 'desktop2.svg',
    circle: 'Counter.svg',
    live: 'See Live',
    source: 'See Source',
    skills: {
      skill1: 'html',
      skill2: 'css',
      skill3: 'javaScript',
    },
  },
];

data.forEach((item) => {
  const section = document.createElement('div');
  const forMobile = document.createElement('div');

  forMobile.innerHTML = `
    <div class="second-section">
    
    <div class="card1">
                    <div class="card-img">
                        <img src="${item.mobileImg}" alt="" class="card-img-img"> 
                        <div class="card-img-div">
                            <h1 class="tonic">${item.name}</h1>
                            <ul class="Card1-tech">
                                <li class="P1" class="canopy">${item.title}</li>
                                <img src="${item.circle}" alt="" />
                                <li class="P2" class="back-dev">${item.stack}</li>
                                <img src="${item.circle}" alt="" />
                                <li class="P3" class="back-dev">${item.year}</li>
                            </ul>
                            <p>
                                ${item.description}
                              </p>
                              <ul class="T1">
                                <li>${item.skills.skill1}</li>
                                <li>${item.skills.skill2}</li>
                                <li>${item.skills.skill3}</li>
                              </ul>
                              <button class="see-mobile">See Project</button>
                        </div>
                    </div>

                </div>
  </div>
    `;
  const mobileSectionCont = document.querySelector('.main-container');
  mobileSectionCont.appendChild(forMobile);
  const mobilePop = document.querySelectorAll('.see-mobile');

  mobilePop.forEach((pop) => {
    pop.addEventListener('click', (e) => {
      let { id } = e.target;
      id = Number(id);
      if (id === item.id) {
        const itemMobileDiv = document.createElement('div');
        itemMobileDiv.className = 'new-items';
        itemMobileDiv.innerHTML = `
          <h1>${item.name}</h1>
          <div class="canopy-div-pop">
            <p>${item.title}</p>
            <img src="${item.circle}" alt="" />
            <p>${item.stack}</p>
            <img src="${item.circle}" alt="" />
            <p>${item.year}</p>
          </div>
          <img src="${item.mobileImg}" class="pop-desk-img" alt="Mobile Image">
          <div class="description-cont">
          <div class="description-p">
            <p class="writeup-div">${item.description}</p>
          </div>
            <div class="description-btn-cont">
             <button class="desktop-btn">${item.skills.skill1}</button>
             <button class="desktop-btn">${item.skills.skill2}</button>
             <button class="desktop-btn">${item.skills.skill3}</button>
             <hr>
             <div class="description-see">
               <button class="see-project">See Live</button>
               <button class="see-project">See Source</button>
             </div>
            </div>
          </div>

            `;

        const backOverlay = document.querySelector('.mobile-backdrop1');
        backOverlay.classList.add('modal-backdrop-show');

        const modalContainer = document.querySelector('.modal-inner');

        modalContainer.appendChild(itemMobileDiv);
        modalContainer.classList.add('modal-inner-show');
        // const cancelButton = document.querySelector("#modal-close");

        // cancelButton.addEventListener("click", (e) => {
        //     e.preventDefault();
        //     itemMobileDiv.innerHTML = "";
        //     modalContain.classList.remove("new-modal-show");
        //     backOverlay.classList.remove("modal-backdrop-show");
        // });
      }
    });
  });

  // DESKTOP
  section.innerHTML = `
         <div class="mobile-version">
         <div class="mobile-image">
          <img src="${item.desktopImg}" alt="" class="card-img-img">
         </div>
        <div class="mobile-section-div">
          <h1>${item.name}</h1>
          <div class="canopy-div">
            <p>${item.title}</p>
            <img src="${item.circle}" alt="" />
            <p>${item.stack}</p>
            <img src="${item.circle}" alt="" />
            <p>2015</p>
          </div>
         <p class="writeup-div">${item.deskDescription}</p>
         <button class="desktop-btn">${item.skills.skill1}</button>
         <button class="desktop-btn">${item.skills.skill2}</button>
         <button class="desktop-btn">${item.skills.skill3}</button>

         <p><button id="${item.id}" class="see-project">See Project</button></p>
        </div>
       </div>
        `;

  const sectionContainer = document.querySelector('.desktop-container');
  sectionContainer.appendChild(section);

  const popUps = document.querySelectorAll('.see-project');

  popUps.forEach((pop) => {
    pop.addEventListener('click', (e) => {
      let { id } = e.target;
      id = Number(id);
      if (id === item.id) {
        const itemDiv = document.createElement('div');
        itemDiv.className = 'new-items';
        itemDiv.innerHTML = `
          <h1>${item.name}</h1>
          <div class="canopy-div-pop">
            <p>${item.title}</p>
            <img src="${item.circle}" alt="" />
            <p>${item.stack}</p>
            <img src="${item.circle}" alt="" />
            <p>2015</p>
          </div>
          <img src="${item.desktopImg}" class="pop-desk-img" alt="Mobile Image">
          <div class="description-cont">
          <div class="description-p">
            <p class="writeup-div">${item.deskDescription}</p>
          </div>
            <div class="description-btn-cont">
             <button class="desktop-btn">${item.skills.skill1}</button>
             <button class="desktop-btn">${item.skills.skill2}</button>
             <button class="desktop-btn">${item.skills.skill3}</button>
             <hr>
             <div class="description-see">
               <button type="submit" class="see-project">See Live</button>
               <button type="submit" class="see-project">See Source</button>
             </div>
            </div>
          </div>

            `;

        const backOverlay = document.querySelector('.desk-backdrop1');
        backOverlay.classList.add('modal-backdrop-show');

        const modalContain = document.querySelector('.modal-inner-desk1');

        modalContain.appendChild(itemDiv);
        modalContain.classList.add('new-modal-show');
        const cancelButton = document.querySelector('#modal-close');

        cancelButton.addEventListener('click', (e) => {
          e.preventDefault();
          itemDiv.innerHTML = '';
          modalContain.classList.remove('new-modal-show');
          backOverlay.classList.remove('modal-backdrop-show');
        });
        // modalDesk1.classList.add("modal-backdrop-show");
        // deskShow1.classList.add("modal-show");
      }
    });
  });
});

// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const textarea = document.getElementById("text");
// const form = document.getElementById("form");
// const errorElement = document.getElementById("error");

// form.addEventListener("submit", (e) => {
//     e.preventDefault();
//     console.log("Submitted");
//     let messages = [];
//     lowerCaseEmail = email.value.toLocaleLowerCase();
//     if (name.value.length <= 6) {
//         messages.push("email must be lowercase");
//         console.log("email must be lowercase");
//     }
//     if (email !== lowerCaseEmail) {
//         messages.push("email must be lowercase");
//         console.log("email must be lowercase");
//     }
//     if (messages.length > 0) {
//         e.preventDefault();
//         errorElement.innerText = messages.join(",");
//     }
// });
