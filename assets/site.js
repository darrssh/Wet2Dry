const SERVICES=[
{t:"Waterproofing / Water Tightening",d:"Full interior + exterior sanitary waterproofing for walls, floors, roofs & ceilings. Leak analysis with thermography for old & new buildings.",img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=70",icon:"fa-shield-halved"},
{t:"Seepage Solutions",d:"Root-cause diagnosis of wet basements & walls — how, when & where it occurs. Specialist in sanitary seepage, paint peel-out & hidden trails.",img:"https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=700&q=70",icon:"fa-droplet"},
{t:"Leakage Solutions",d:"Tank, wall & ceiling leakage repair with high-grade systems, bulk & customised execution, on-time completion across metros.",img:"https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=700&q=70",icon:"fa-house-flood-water"},
{t:"Thermographic Survey",d:"Non-invasive infrared diagnosis: water leaks, dampness, thermal bridging, air infiltration, wasted energy & efficiency mapping.",img:"https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=700&q=70",icon:"fa-temperature-high"},
{t:"Bathroom Waterproofing",d:"Complete bathroom sanitation: back-flow water removal, moisture protection for damp zones near bedrooms & upper floors.",img:"https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700&q=70",icon:"fa-bath"},
{t:"Annual Thermographic Survey (AMC)",d:"Yearly care for societies, passages, tanks, pools & terraces. Quality assurance before monsoon, every monsoon.",img:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=70",icon:"fa-calendar-check"},
{t:"Painting Services",d:"Organised interior, exterior & industrial painting in Pune, Mumbai, Bengaluru, Delhi & Trivandrum. Water-tighten first, paint last.",img:"https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=70",icon:"fa-paint-roller"},
];
const PROJECTS={
mumbai:["Serenity Towers, Santacruz","Mahalaxmi Chambers, Mulund E","Sajjan India Ltd, Lower Parel","Tower 2 Society, Borivali W","New Vishwas Bldg, Chembur","Swapanlok Towers, Malad","Premier Residency, Kurla W","Runwal Greens, Mulund–Goregaon","Sai Enclave CHS, Vikhroli E"],
pune:["Mechano Machine Tools, Chinchwad","Lagoo Apte Gulmohar, Erandwane","Empire Estate, Chinchwad","Kukreja Heritage, Dhanori","Kunal Crimson, Aundh Rd","Skyline, Wakad","Mont Vert Seville, Wakad","Satin Hills, Bavdhan","Ganga Aurum Park, Tathawade","Central Bank, Camp MG Road","Citadel Enclave, Ghorpadi","Mount N Glory, Kharadi"],
bangalore:["Nitesh Camp David, Frazer Town","Sai Green Apt, Kalyan Nagar","Pearl Castle, Banaswadi","Bens Royal Woods, Hennur Rd","Brigade Harmony, Whitefield","Bel Layout, Vidyaranyapura","Vaswani Reserve, Marathahalli","Indian Transport Co, Lakkasandra"],
trivandrum:["Trivandrum International Airport","Parthas Textiles","KTDC Museum","Triveni Nursing Home, Vanchiyoor","Govt. Medical College, Chalakkuzhi","Veli Boat Club","Trivandrum Tennis Club, Kowdiar","Trivandrum Club, Vazhuthacaud","Technopark, Kerala","Glass & Glazing Systems, Kochuveli"],
other:["Friends Colony, Delhi","Lepton Software, Gurgaon","Sector-66, Noida","Laxmi Alaya Apts, Secunderabad","Kapil Group, Nanakramguda","Maple Town, Telangana","Som Distilleries, Bhopal","Varghese House, Kochi Kadvanthra"]
};
const REVIEWS=[
{n:"Priya Deshmukh — Wakad, Pune",t:"Damp patches near our bedroom vanished in one visit. Thermal camera showed the exact bathroom joint leaking. One year on, paint is still perfect.",s:5},
{n:"Rahul Shetty — Whitefield, Bangalore",t:"Two waterproofers patched and failed. Wet2Dry did water tightening with impactor drying. No chipping of tiles, no dust mess. Genuinely permanent.",s:5},
{n:"Suresh Nair — Kowdiar, Trivandrum",t:"Professional inspection before we bought our flat caught terrace seepage. We negotiated the repair into the price. Saved us lakhs.",s:5},
{n:"Farhan K. — Malad, Mumbai",t:"Society passage + terrace AMC done before monsoon. Daily photo updates on WhatsApp. Very disciplined team.",s:4},
];
const BLOGS=[
{t:"How to Spot Internal Ceiling & Wall Seepage in Your Bangalore Home",d:"Musty smell? Slow-spreading damp patch in Koramangala / Whitefield / Indiranagar? Here's the checklist.",img:"https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=70"},
{t:"How to Choose a Suitable Waterproofing Applicator in India",d:"Don't hire on price alone. 7 questions to ask before you hand over your terrace.",img:"https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=70"},
{t:"Top 10 Sanitary Ware Brands in India",d:"The fixtures that decide whether your bathroom stays dry for 10 years.",img:"https://images.unsplash.com/photo-1620626011761-996317b8d101?w=700&q=70"},
{t:"All You Need to Know About Terrace Waterproofing Cost in Bangalore",d:"Process, materials and honest cost breakup — no surprises.",img:"https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=700&q=70"},
{t:"10 Major Reasons Your Wall Paint Is Peeling Off",d:"Painting experts + waterproofing experts agree on these 10 causes.",img:"https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=700&q=70"},
{t:"Why Waterproofing Maintenance (AMC) Matters",d:"One monsoon can undo 5 years of work. Here's the annual ritual.",img:"https://images.unsplash.com/photo-1428592953211-077101b2021b?w=700&q=70"},
];
const FAQS=[
{q:"Is Water Tightening different from waterproofing?",a:"Yes. Waterproofing coats a surface; water then migrates sideways. Water Tightening (20% chemical + 80% mechanical) seals the sanitary source, dewaters with Impactor + Quick Wall Dryer, and is verified by thermal scan — one-time fix with 3-year warranty."},
{q:"How long does the work take? Do you break tiles?",a:"Most bathrooms finish in 2–4 days with no tile breakage. Terrace/society jobs depend on area. We share daily photos and keep dust controlled."},
{q:"Which cities do you serve?",a:"Pune (HQ), Mumbai/Navi Mumbai, Bangalore, Delhi NCR/Noida, Hyderabad, Kochi/Ernakulam and Thiruvananthapuram — plus nearby districts on request."},
{q:"Do you inspect before buying / renovating a home?",a:"Yes — our most valuable service. A thermographic home inspection before purchase, rent or interior work reports hidden seepage so you fix it in the deal, not after."},
{q:"What warranty do I get?",a:"3-year workmanship warranty on water-tightening (excludes external rain-water ingress, as stated). AMC customers get an annual thermal health check."},
];
const OFFICES=[
{c:"PUNE (HQ)",a:"Block D III, Shop 6A, Nr. St. Andrews High School, Chinchwad, Pune – 411019",p:"9552664343"},
{c:"MUMBAI",a:"Plot 07, Road 9, Sector 12, New Panvel, Navi Mumbai – 410206",p:"9284466703"},
{c:"BANGALORE",a:"No.15 HBL Homes, Munnekolala, Marathahalli, Bengaluru – 560037",p:"7620691838"},
{c:"THIRUVANANTHAPURAM",a:"All Saints Jn, Beach P.O, TVM – 695007",p:"8956394543"},
{c:"DELHI NCR",a:"Shiva Tower, Gali 7, Mamura Village, Sector-66, Noida, UP – 201303",p:"9552664343"},
{c:"KOCHI / ERNAKULAM",a:"Labour Corner, Eroor, Thrippunithura, Ernakulam – 682306",p:"8956394543"},
{c:"HYDERABAD",a:"Plot 215, Anjali Nilayam, Tirumala Gardens, Bandlaguda Jagir, Gandipet – 500086",p:"7620691838"},
];
function el(h){const d=document.createElement('div');d.innerHTML=h.trim();return d.firstChild}
document.addEventListener('DOMContentLoaded',()=>{
 const mb=document.getElementById('menuBtn'),mm=document.getElementById('mobileMenu');
 if(mb&&mm)mb.onclick=()=>mm.classList.toggle('hidden');
 const sg=document.getElementById('serviceGrid');
 if(sg)sg.innerHTML=SERVICES.map(s=>`<div class="rounded-2xl border overflow-hidden hover:shadow-card hover:-translate-y-1 transition bg-white reveal visible"><img src="${s.img}" alt="${s.t}" class="h-44 w-full object-cover"><div class="p-5"><div class="w-10 h-10 rounded-xl bg-navy text-cyan-300 grid place-items-center mb-3"><i class="fa-solid ${s.icon}"></i></div><h3 class="font-extrabold text-navy">${s.t}</h3><p class="text-sm text-slate-500 mt-1.5">${s.d}</p><a href="services.html" class="inline-block mt-3 text-sm font-bold text-aquadark">Read more →</a></div></div>`).join('');
 const pl=document.getElementById('projectList');
 const renderCity=c=>{if(!pl)return;pl.innerHTML=(PROJECTS[c]||[]).map(p=>`<div class="rounded-xl border bg-white px-4 py-3 flex gap-2 items-start"><i class="fa-solid fa-location-dot text-aquadark mt-1"></i><span class="font-semibold text-navy">${p}</span></div>`).join('')};
 if(pl){renderCity('mumbai');document.querySelectorAll('#cityTabs .tab-btn').forEach(b=>b.onclick=()=>{document.querySelectorAll('#cityTabs .tab-btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');renderCity(b.dataset.city)})}
 const rg=document.getElementById('reviewGrid');
 if(rg)rg.innerHTML=REVIEWS.map(r=>`<div class="bg-white rounded-2xl p-6 shadow-card"><div class="text-amberx text-sm">${'★'.repeat(r.s)}${'☆'.repeat(5-r.s)}</div><p class="text-sm mt-2 text-slate-600">“${r.t}”</p><div class="mt-3 font-bold text-navy text-sm">${r.n}</div><div class="text-xs text-emerald-600 font-bold mt-1"><i class="fa-solid fa-circle-check mr-1"></i>Verified Wet2Dry client</div></div>`).join('');
 const bp=document.getElementById('blogPreview'),bg2=document.getElementById('blogGrid');
 const card=b=>`<a href="blog.html" class="rounded-2xl border overflow-hidden bg-white hover:shadow-card transition block"><img src="${b.img}" class="h-44 w-full object-cover" alt="${b.t}"><div class="p-5"><h3 class="font-bold text-navy leading-snug">${b.t}</h3><p class="text-sm text-slate-500 mt-1.5">${b.d}</p><span class="text-sm font-bold text-aquadark mt-2 inline-block">Read more →</span></div></a>`;
 if(bp)bp.innerHTML=BLOGS.slice(0,3).map(card).join('');
 if(bg2)bg2.innerHTML=BLOGS.map(card).join('');
 const fq=document.getElementById('faqList');
 if(fq)fq.innerHTML=FAQS.map(f=>`<div class="faq-item rounded-2xl border bg-white"><button class="faq-q w-full text-left px-5 py-4 font-bold text-navy flex justify-between items-center gap-3">${f.q}<span class="faq-icon w-8 h-8 rounded-full bg-mist grid place-items-center shrink-0 text-aquadark text-xl leading-none">+</span></button><div class="faq-a px-5 pb-5 text-sm text-slate-500">${f.a}</div></div>`).join('');
 document.querySelectorAll('.faq-q').forEach(q=>q.onclick=()=>q.parentElement.classList.toggle('open'));
 const og=document.getElementById('officeGrid');
 if(og)og.innerHTML=OFFICES.map(o=>`<div class="rounded-2xl bg-white/5 border border-white/10 p-5"><div class="font-extrabold text-cyan-300">${o.c}</div><p class="mt-1.5 text-slate-300">${o.a}</p><a href="tel:+91${o.p}" class="mt-2 inline-block font-bold text-white"><i class="fa-solid fa-phone text-aqua mr-1"></i> +91 ${o.p}</a></div>`).join('');
 const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
 document.querySelectorAll('.reveal').forEach(r=>io.observe(r));
 const dots=document.querySelectorAll('.dot');
 dots.forEach(d=>d.onclick=()=>{dots.forEach(x=>x.classList.remove('active'));d.classList.add('active')});
 const f=document.getElementById('leadForm');
 if(f)f.addEventListener('submit',e=>{e.preventDefault();const ok=document.getElementById('formOk');if(ok)ok.classList.remove('hidden');f.reset();ok&&ok.scrollIntoView({behavior:'smooth',block:'center'})});
});
