var swiper=new Swiper("#swiper1",{slidesPerView:1,spaceBetween:40,grabCursor:!0,pagination:{el:".swiper-pagination"},navigation:{nextEl:"#nav-right",prevEl:"#nav-left"}});const gantiSertif=document.querySelector(".ganti-sertif"),imgFront=document.querySelector("#img-front"),imgBack=document.querySelector("#img-back"),namaSertif=document.querySelector(".nama-sertif");let idDefault=1,idSertif=parseInt(gantiSertif.dataset.id);gantiSertif.addEventListener("click",function(){idSertif++,fetch("manifest.json").then(e=>e.json()).then(e=>{let t=Object.keys(e.certificate).length;idSertif=idSertif>t?idDefault:idSertif;let a=e.certificate.find(e=>e.id===idSertif);namaSertif.innerHTML=a.major,imgFront.src=a.image1,imgBack.src=a.image2,imgFront.parentElement.classList.add("active"),imgBack.parentElement.classList.remove("active")})});const category=document.querySelector("#category"),features=document.querySelector("#features"),tools=document.querySelector("#tools"),purpose=document.querySelector("#purpose"),modalImg=document.querySelector(".modal-img"),modalTitle=document.querySelector("#modal-title"),projectCol=document.querySelector("#project-col");fetch("manifest.json").then(e=>e.json()).then(e=>{let t=e.project;for(p of t){let a=`<div class="col">
          <div class="card" data-aos="flip-up" data-aos-offset="300">
            <img src="${p.image}" class="card-img-top rounded shadow-lg" alt="moriarty">
            <div class="card-body">
              <h5 class="card-title fw-bold">${p.title}</h5>
              <p class="card-text">${p.desc}</p>
              <a class="btn btn-dark tampilDetail" data-bs-toggle="modal" data-bs-target="#exampleModal" data-id="${p.id}">Details</a>
            </div>
          </div>
        </div>`;projectCol.innerHTML+=a}AOS.init()}),projectCol.addEventListener("click",function(e){if(e.target.classList.contains("tampilDetail")){let t=parseInt(e.target.dataset.id);fetch("manifest.json").then(e=>e.json()).then(e=>{let a=e.project.find(e=>e.id===t);category.textContent=a.category,features.textContent=a.feature,tools.textContent=a.tools,purpose.textContent=a.purpose,modalImg.src=a.image,modalTitle.textContent=a.title})}});const swiperWrapper=document.querySelector(".swiper-wrapper");fetch("manifest.json").then(e=>e.json()).then(e=>{let t=e.education,a="";for([i,e]of t.entries())i%4==0?a+=`<div class="swiper-slide">
          <div class="row row-cols-md-2">
          <div class="col p-2 mb-3" >
          <div class="card" data-aos="${e.aos}">
            <div class="card-header text-muted fst-italic">
              ${e.year}
            </div>
            <div class="card-body">
              <h5 class="card-title">${e.major}</h5>
              <p class="card-text mt-4">- ${e.organizer}</p>
            </div>
          </div>
        </div>`:i%4==3?a+=`<div class="col p-2 mb-3" >
       <div class="card" data-aos="${e.aos}">
         <div class="card-header text-muted fst-italic">
           ${e.year}
         </div>
         <div class="card-body">
           <h5 class="card-title">${e.major}</h5>
           <p class="card-text mt-4">- ${e.organizer}</p>
         </div>
       </div>
      </div>
     </div>
    </div>`:a+=`<div class="col p-2 mb-3" >
      <div class="card" data-aos="${e.aos}">
        <div class="card-header text-muted fst-italic">
          ${e.year}
        </div>
        <div class="card-body">
          <h5 class="card-title">${e.major}</h5>
          <p class="card-text mt-4">- ${e.organizer}</p>
        </div>
      </div>
    </div>`;swiperWrapper.innerHTML+=a,AOS.init()});