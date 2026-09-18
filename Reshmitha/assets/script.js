
/* ================================================================
   EVERYTHING YOU EDIT LIVES IN THIS ONE OBJECT.
   Photos: drop your image files next to this HTML file (or in a
   "photos" folder) and write the filename in, e.g. "photos/us.jpg".
   Leave a src empty and a tasteful placeholder stays in its place.
================================================================= */
const CONFIG = {

  names: { her:"Reshmitha", him:"Rathish" },

  /* ---- MUSIC (optional) — e.g. "music/our-song.mp3" ---- */
  music: { src: "" },

  /* ---- THE PROPOSAL ---- */
  proposal: {
    question: "Reshmitha, will you marry me?",
    photo:    "",                       // ← THE PHOTO OF YOU TWO GOES HERE
    caption:  "the two of us",
    line:     "No more chapters written alone. Everything after this page, we write together.",
    stamp:    "AND SO IT BEGINS"        // shown small under the photo
  },

  /* ---- STANDALONE PHOTOS ---- */
  photos: {
    reconnect: { src:"" },              // ← the "finding our way back" photo
    birthday:  { src:"" }               // ← her birthday photo
  },

  /* ---- CHAPTER ONE: TIMELINE ---- */
  timeline: [
    { when:"the beginning", title:"Where all Started", src:"assets/images/firstmeet.jpeg", text:"One day, Ramya sent me a picture and said, “These are my friends,” and I said, “That girl next to you is pretty,” never knowing that girl was you.." },
    { when:"somewhere after that", title:"When we started talking", src:"", text:"A few ordinary conversations turned into the kind of small ritual you start looking forward to all day." },
    { when:"one of the good days", title:"The first moment that stuck", src:"", text:"The details were small, but the feeling stayed — easy laughter, and you being completely yourself." },
    { when:"kept forever", title:"The first photo", src:"", text:"Proof that an unplanned moment can become one of the pictures you come back to most." },
    { when:"still makes me smile", title:"The first time you made me laugh like that", src:"", text:"It would sound ordinary to anyone else. That's exactly why it belongs to us." }
  ],

  /* ---- CHAPTER TWO: GALLERY (hidden:true is the secret one) ---- */
  gallery: [
    { src:"", when:"a day worth keeping", cap:"the little things", note:"The best ones are made of details nobody else would think to save.", hidden:false },
    { src:"", when:"one of our days",     cap:"easy laughter",     note:"Some people make an ordinary afternoon feel like it has a soundtrack.", hidden:false },
    { src:"", when:"still a favourite",   cap:"this one",          note:"I don't think you know how much I like this picture.", hidden:false },
    { src:"", when:"somewhere in between",cap:"same us",           note:"A small frame from a much bigger story.", hidden:false },
    { src:"", when:"one for the shelf",   cap:"good company",      note:"Thank you for making the quiet moments feel full.", hidden:false },
    { src:"", when:"kept close",          cap:"always worth it",   note:"This one gets better every time I come back to it.", hidden:false },
    { src:"", when:"a soft spot",         cap:"right here",        note:"No explanation needed. I just like this one a lot.", hidden:false },
    { src:"", when:"the quiet one",       cap:"between us",        note:"You found the corner of the story I hid on purpose. Keep it.", hidden:true }
  ],

  /* ---- MEMORY BOX ---- */
  memoryBox: [
    { icon:"spark",  title:"The funniest thing that ever happened to us", text:"Still funny. Still ours. Still the easiest memory to smile about." },
    { icon:"quote",  title:"That conversation at an unreasonable hour",   text:"It started nowhere and somehow never left me." },
    { icon:"sun",    title:"That one day",                                text:"A day that had no idea it was becoming a favourite." },
    { icon:"flower", title:"Your favourite thing",                        text:"One of a hundred small details that make you unmistakably you." },
    { icon:"star",   title:"Something I'll always keep",                  text:"The way a room gets warmer simply because you walked into it." }
  ],

  /* ---- CHAPTER THREE ---- */
  mystery: [
    { src:"", note:"A tiny moment, permanently filed under: us." },
    { src:"", note:"You've probably forgotten this one happened." },
    { src:"", note:"It only gets funnier with time." },
    { src:"", note:"The best days rarely announce themselves." }
  ],

  /* ---- CHAPTER FIVE: TEN THINGS ---- */
  littleThings: [
    "You make people feel seen. I don't think you realise you're doing it.",
    "You bring more warmth into a room than you take credit for.",
    "You can turn a completely unremarkable hour into something I remember.",
    "I admire the person you're becoming, especially on the days you doubt her.",
    "You're allowed to take up space in every beautiful room life opens for you.",
    "Your laugh makes a whole day lighter.",
    "You make ordinary memories feel worth keeping.",
    "I hope this year is gentle with your heart and generous with your dreams.",
    "There is far more ahead of you than you can see from where you're standing.",
    "You are, and will always be, worth celebrating."
  ],

  /* ---- CHAPTER SIX ---- */
  usNow: [
    "I've stopped trying to guess what the future looks like.",
    "But I know which parts of it I'm not willing to go without.",
    "I'm grateful for every ordinary day we've spent building this.",
    "I'll keep growing, keep building, keep becoming someone worth choosing.",
    "And I'll keep being grateful for the small world we made together."
  ],

  birthdayMessage: "May this year bring you slow mornings, brave decisions, ridiculous laughter, and the kind of happiness that feels like coming home.",

  /* ---- THE LETTER ---- */
  letter: [
    "Reshmitha,",
    "I hope you know how deeply you're appreciated — not only today, but in all the unremarkable moments in between.",
    "Thank you for every laugh, every honest conversation, and every memory that turned into this.",
    "I'm proud of you, grateful for you, and impatient for everything still waiting on the other side of this year.",
    "Happy birthday.",
    "— Rathish"
  ],

  /* ---- SECRETS ---- */
  secrets: {
    hearts: [
      "A note left on purpose: you make more of a difference than you know.",
      "Found one. Keep choosing the things that make you feel alive.",
      "You're someone's favourite person today. Mine, particularly."
    ],
    allFound: "You found every last piece of it. Of course you did.",
    constellation: "That's the secret. The next chapter is ours to write."
  },

  /* ---- "ASK ME AGAIN" BUTTON (it doesn't want to be pressed) ---- */
  dodges: [
    "Ask me again", "Hmm...", "Try that again", "You're serious?", "Nope. Again.",
    "You almost had me", "Still no", "Nice try", "Wrong button", "Keep asking",
    "I'm moving this", "Too slow", "Not that easy", "Again? Really?", "You know the answer",
    "Catch me if you can", "I wasn't there", "Try the other one", "Nope nope nope", "Ask nicely",
    "You're persistent", "Okay... but no", "Maybe in another life", "Still running", "Missed me",
    "I'm not making this easy", "One more time", "You thought that worked?", "Keep chasing", "Almost...",
    "Definitely not done yet", "Again, future husband", "You can do better", "I'm somewhere else now", "Still here. Still no.",
    "The button has escaped", "You really won't give up", "Fine... ask again", "No comment", "Try again, sweetheart"
  ]
};

/* ================================================================
   HELPERS
================================================================= */
const $  = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const EMPTY = `<span class="empty">
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4">
    <rect x="3" y="6" width="18" height="14" rx="1.5"/><circle cx="12" cy="13" r="3.4"/><path d="M8.5 6l1.2-2h4.6l1.2 2"/>
  </svg><span>PHOTO</span></span>`;

const shot = src => src ? `<img src="${src}" alt="" loading="lazy">` : EMPTY;

const ICONS = {
  spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 3l2 6.5 6.5 2-6.5 2L12 21l-2-7.5L3.5 11.5 10 9.5z"/></svg>',
  quote:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M21 12a8 8 0 01-11.6 7.1L4 21l1.9-5.4A8 8 0 1121 12z"/></svg>',
  sun:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4"/></svg>',
  flower:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><circle cx="12" cy="9" r="2.4"/><path d="M12 6.6c0-2 1.3-3.6 2.9-3.6S17 4.4 16 6M12 6.6C12 4.6 10.7 3 9.1 3S7 4.4 8 6M14.4 9c2 0 3.6 1.3 3.6 2.9S16.6 14 15 13M9.6 9C7.6 9 6 10.3 6 11.9S7.4 14 9 13M12 11.4V21"/></svg>',
  star:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3"><path d="M12 3l2.6 6.1 6.4.6-4.9 4.3 1.5 6.3L12 17l-5.6 3.3 1.5-6.3L3 9.7l6.4-.6z"/></svg>'
};

const BLOOM_SHAPES = [
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1"><path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19"/></svg>',
  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c1.1 2.6 2.1 4.3 4.3 5.4C14.1 9.5 13 11.2 12 14c-1-2.8-2.1-4.5-4.3-5.6C9.9 7.3 10.9 5.6 12 3z" opacity=".9"/><circle cx="12" cy="17" r="1.6"/></svg>',
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.1"><circle cx="12" cy="12" r="2.2"/><ellipse cx="12" cy="6.4" rx="2.4" ry="3.4"/><ellipse cx="12" cy="17.6" rx="2.4" ry="3.4"/><ellipse cx="6.4" cy="12" rx="3.4" ry="2.4"/><ellipse cx="17.6" cy="12" rx="3.4" ry="2.4"/></svg>'
];

/* toast */
const toastEl = $('#toast');
let toastTimer;
function toast(msg){
  toastEl.textContent = msg;
  toastEl.classList.add('on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(()=> toastEl.classList.remove('on'), 3600);
}

/* found-items counter */
let found;
try { found = new Set(JSON.parse(localStorage.getItem('r_found') || '[]')); }
catch(e){ found = new Set(); }
let allFoundShown = false;
try { allFoundShown = localStorage.getItem('r_allfound') === '1'; } catch(e){}
const TOTAL_FINDABLE = CONFIG.gallery.length + CONFIG.littleThings.length;
function find(id){
  if(found.has(id)) return;
  found.add(id);
  try { localStorage.setItem('r_found', JSON.stringify([...found])); } catch(e){}
  if(found.size >= TOTAL_FINDABLE && !allFoundShown){
    allFoundShown = true;
    try { localStorage.setItem('r_allfound','1'); } catch(e){}
    setTimeout(()=> toast(CONFIG.secrets.allFound), 900);
  }
}

/* ================================================================
   COVER
================================================================= */
$$('#cover .fade-seq').forEach((el,i)=>{
  setTimeout(()=> el.classList.add('go'), reduced ? 0 : 220 + i*260);
});
$('#begin').addEventListener('click', ()=> $('#ch1').scrollIntoView({behavior: reduced ? 'auto':'smooth'}));

/* star canvas on the cover */
(function coverStars(){
  const c = $('#stars-cover'), ctx = c.getContext('2d');
  let w,h,pts=[];
  function size(){
    const r = c.parentElement.getBoundingClientRect();
    w = c.width = r.width * devicePixelRatio;
    h = c.height = r.height * devicePixelRatio;
    c.style.width = r.width+'px'; c.style.height = r.height+'px';
    pts = Array.from({length: Math.round(r.width*r.height/9000)}, ()=>({
      x: Math.random()*w, y: Math.random()*h*0.9,
      r: (Math.random()*1.3+0.3)*devicePixelRatio,
      a: Math.random()*Math.PI*2,
      s: Math.random()*0.012+0.004
    }));
  }
  function draw(){
    ctx.clearRect(0,0,w,h);
    pts.forEach(p=>{
      p.a += p.s;
      const o = 0.18 + Math.abs(Math.sin(p.a))*0.55;
      ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,7);
      ctx.fillStyle = `rgba(228,211,174,${o})`; ctx.fill();
    });
    if(!reduced) requestAnimationFrame(draw);
  }
  size(); draw();
  addEventListener('resize', size);
})();

/* ================================================================
   SCROLL REVEALS
================================================================= */
const revObs = new IntersectionObserver(es=>{
  es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); revObs.unobserve(e.target); } });
},{threshold:.15});
$$('.chapter .inner > *, .chapter .col > *').forEach(el=>{
  if(el.closest('#cover')) return;
  el.classList.add('rev'); revObs.observe(el);
});

/* ================================================================
   PHOTOS IN FIXED SLOTS
================================================================= */
$$('[data-photo]').forEach(el=>{
  const key = el.dataset.photo;
  const src = key === 'us' ? CONFIG.proposal.photo : (CONFIG.photos[key]?.src || "");
  $('.shot', el).innerHTML = shot(src);
});

/* ================================================================
   CHAPTER ONE — TIMELINE
================================================================= */
const romans = ['i','ii','iii','iv','v','vi','vii','viii','ix','x'];
CONFIG.timeline.forEach((it,i)=>{
  const b = document.createElement('button');
  b.className = 'tl'; b.type='button'; b.setAttribute('aria-expanded','false');
  b.innerHTML = `<span class="num">${romans[i]}</span>
    <span><h3>${it.title}</h3><span class="when">${it.when}</span>
    <span class="body"><p>${it.text}</p><span class="tap-memory">Tap to open this memory</span></span></span>`;
  b.addEventListener('click', ()=> openTimelineModal(i));
  $('#timeline').appendChild(b);
});

function openTimelineModal(i){
  const it = CONFIG.timeline[i];
  $('#mShot').innerHTML = shot(it.src);
  $('#mWhen').textContent = it.when;
  $('#mNote').textContent = it.text;
  $('#mTitle').textContent = it.title;
  modal.classList.add('on');
}

/* ================================================================
   CHAPTER TWO — GALLERY + MODAL
================================================================= */
CONFIG.gallery.forEach((g,i)=>{
  const cell = document.createElement('div');
  cell.className = 'cell';
  cell.innerHTML = `<button class="frame" type="button">
      <span class="shot">${shot(g.src)}</span>
      <span class="cap">${g.cap}</span></button>`;
  cell.addEventListener('click', ()=> openModal(i));
  $('#gallery').appendChild(cell);
});

const modal = $('#modal');
function openModal(i){
  const g = CONFIG.gallery[i];
  $('#mShot').innerHTML = shot(g.src);
  $('#mWhen').textContent = g.when;
  $('#mTitle').textContent = g.cap;
  $('#mNote').textContent = g.note;
  modal.classList.add('on');
  find('g'+i);
  if(g.hidden) setTimeout(()=> toast(CONFIG.secrets.hearts[Math.floor(Math.random()*CONFIG.secrets.hearts.length)]), 500);
}
$('#modalClose').addEventListener('click', ()=> modal.classList.remove('on'));
modal.addEventListener('click', e=>{ if(e.target === modal) modal.classList.remove('on'); });

/* ================================================================
   MEMORY BOX
================================================================= */
CONFIG.memoryBox.forEach(m=>{
  const b = document.createElement('button');
  b.className='card'; b.type='button'; b.setAttribute('aria-expanded','false');
  b.innerHTML = `<span class="ico">${ICONS[m.icon]||ICONS.star}</span>
    <span><h3>${m.title}</h3><span class="txt">${m.text}</span></span>`;
  b.addEventListener('click', ()=>{
    const open = b.classList.toggle('open');
    b.setAttribute('aria-expanded', String(open));
  });
  $('#cards').appendChild(b);
});

/* ================================================================
   CHAPTER THREE — MYSTERY
================================================================= */
CONFIG.mystery.forEach(m=>{
  const d = document.createElement('div');
  d.className = 'mcard blurred';
  d.innerHTML = `<div class="frame" style="cursor:default">
      <div class="shot">${shot(m.src)}</div></div>
    <p class="mnote">${m.note}</p>
    <button class="btn line small" type="button">Bring it back</button>`;
  $('.btn', d).addEventListener('click', ()=>{
    d.classList.remove('blurred'); d.classList.add('shown');
  });
  $('#mystery').appendChild(d);
});

/* ================================================================
   CHAPTER FOUR — TWO PATHS
================================================================= */
(function paths(){
  const wrap = $('#paths');
  $$('#paths path').forEach(p=> p.style.setProperty('--len', p.getTotalLength()));
  new IntersectionObserver((es,o)=>{
    es.forEach(e=>{ if(e.isIntersecting){ wrap.classList.add('drawn'); o.disconnect(); } });
  },{threshold:.5}).observe(wrap);
})();

/* ================================================================
   CHAPTER FIVE — THE SKY
================================================================= */
(function sky(){
  const sky = $('#sky');
  const spots = [
    [12,18],[30,9],[52,22],[74,12],[88,30],
    [18,48],[40,38],[63,52],[82,62],[33,72]
  ];
  CONFIG.littleThings.forEach((txt,i)=>{
    const [x,y] = spots[i % spots.length];
    const b = document.createElement('button');
    b.className='bloom'; b.type='button';
    b.style.left = x+'%'; b.style.top = y+'%';
    b.style.transform = 'translate(-50%,-50%)';
    b.setAttribute('aria-label','A little thing about you');
    b.innerHTML = BLOOM_SHAPES[i % BLOOM_SHAPES.length];
    b.addEventListener('click', ()=>{
      $('#whisperText').textContent = txt;
      $('#whisper').classList.add('on');
      b.classList.add('used');
      find('l'+i);
    });
    sky.appendChild(b);
  });
  $('#whisper').addEventListener('click', ()=> $('#whisper').classList.remove('on'));
})();

/* ================================================================
   CHAPTER SIX — LINES
================================================================= */
(function lines(){
  const wrap = $('#lines');
  CONFIG.usNow.forEach(t=>{
    const p = document.createElement('p'); p.textContent = t; wrap.appendChild(p);
  });
  new IntersectionObserver((es,o)=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      $$('p', wrap).forEach((p,i)=> setTimeout(()=> p.classList.add('in'), reduced ? 0 : i*700));
      o.disconnect();
    });
  },{threshold:.4}).observe(wrap);
})();

/* ================================================================
   BIRTHDAY
================================================================= */
$('#bdayMsg').textContent = CONFIG.birthdayMessage;

/* ================================================================
   LETTER
================================================================= */
(function letter(){
  const env = $('#envelope'), paper = $('#letter');
  CONFIG.letter.forEach((l,i)=>{
    const p = document.createElement('p');
    if(i === CONFIG.letter.length-1) p.className = 'sign';
    p.textContent = l; paper.appendChild(p);
  });
  env.addEventListener('click', ()=>{
    if(env.classList.contains('open')) return;
    env.classList.add('open');
    env.setAttribute('aria-expanded','true');
    setTimeout(()=>{
      paper.classList.add('open');
      $$('p', paper).forEach((p,i)=> setTimeout(()=> p.classList.add('in'), reduced ? 0 : 260 + i*520));
      setTimeout(()=> paper.scrollIntoView({behavior: reduced?'auto':'smooth', block:'center'}), 400);
    }, reduced ? 0 : 560);
  });
})();

/* ================================================================
   CONSTELLATION — GEMINI + SAGITTARIUS
================================================================= */
(function constellation(){
  const wrap = $('#constellation'), svg = $('#constLines');
  const ids = ['cover','ch1','ch2','box','ch3','ch4','ch5','ch6','birthday','letterSection'];

  // Ten chapter stars are mapped onto two recognizable constellation shapes.
  // The remaining points are permanent, dim guide stars.
  const points = [
    // Gemini
    {x:17,y:24}, {x:25,y:31}, {x:33,y:38}, {x:41,y:46}, {x:49,y:54},
    {x:57,y:62}, {x:65,y:70}, {x:73,y:78},
    // Sagittarius
    {x:78,y:22}, {x:86,y:30}, {x:91,y:43}, {x:86,y:55}, {x:77,y:62},
    {x:68,y:52}, {x:60,y:42}, {x:69,y:32}, {x:80,y:42}, {x:73,y:51}
  ];
  const chapterPointMap = [0,2,4,6,7,8,10,12,14,16];
  const edges = [
    [0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],
    [8,9],[9,10],[10,11],[11,12],[12,13],[13,14],[14,15],[15,8],
    [9,16],[16,10],[16,17],[17,13],[14,16]
  ];

  let lit;
  try { lit = new Set(JSON.parse(localStorage.getItem('r_lit') || '[]')); } catch(e){ lit = new Set(); }

  const stars = points.map((p,i)=>{
    const s = document.createElement('button');
    s.className = 'star' + (chapterPointMap.includes(i) && lit.has(ids[chapterPointMap.indexOf(i)]) ? ' lit' : '');
    s.type='button'; s.tabIndex=-1; s.setAttribute('aria-hidden','true');
    s.style.left=p.x+'%'; s.style.top=p.y+'%';
    s.dataset.point=i;
    wrap.appendChild(s);
    return s;
  });

  const future = document.createElement('button');
  future.className='future-star';
  future.type='button';
  future.textContent='';
  future.setAttribute('aria-label','Nadhirthi, the little star');
  future.hidden = lit.size < ids.length;
  wrap.appendChild(future);

  function lines(){
    svg.innerHTML='';
    edges.forEach(([a,b])=>{
      const ca = chapterPointMap.indexOf(a), cb = chapterPointMap.indexOf(b);
      const active = (ca === -1 || lit.has(ids[ca])) && (cb === -1 || lit.has(ids[cb]));
      const l=document.createElementNS('http://www.w3.org/2000/svg','line');
      l.setAttribute('x1',points[a].x+'%'); l.setAttribute('y1',points[a].y+'%');
      l.setAttribute('x2',points[b].x+'%'); l.setAttribute('y2',points[b].y+'%');
      l.classList.toggle('active',active);
      svg.appendChild(l);
    });
  }

  function refresh(){
    stars.forEach((s,i)=>{
      const c=chapterPointMap.indexOf(i);
      s.classList.toggle('lit', c!==-1 && lit.has(ids[c]));
    });
    const complete=lit.size>=ids.length;
    future.hidden=!complete;
    wrap.classList.toggle('complete',complete);
    lines();
  }
  refresh();

  const obs=new IntersectionObserver(es=>{
    es.forEach(e=>{
      if(!e.isIntersecting) return;
      const i=ids.indexOf(e.target.id);
      if(i<0 || lit.has(e.target.id)) return;
      lit.add(e.target.id);
      try{localStorage.setItem('r_lit',JSON.stringify([...lit]));}catch(err){}
      refresh();
    });
  },{threshold:.35});
  ids.forEach(id=>{const el=document.getElementById(id); if(el) obs.observe(el);});

  future.addEventListener('click',()=>{
    if(lit.size>=ids.length) toast('Nadhirthi — the little star we once imagined.');
  });
})();

/* ================================================================
   THE PROPOSAL
================================================================= */
$('#ask').textContent = CONFIG.proposal.question;
$('#usCap').textContent = CONFIG.proposal.caption;
$('#yesLine').textContent = CONFIG.proposal.line;
$('#stamp').textContent = CONFIG.proposal.stamp;

(function dodge(){
  const no = $('#no');
  let n = 0;

  const move = ()=>{
    n++;
    no.textContent = CONFIG.dodges[(n-1) % CONFIG.dodges.length];

    // After a few attempts, let the button roam around the screen.
    if(n < 5){
      const x=(Math.random()*160-80), y=(Math.random()*60-30);
      no.style.transform=`translate(${x}px, ${y}px)`;
      return;
    }

    no.style.position='fixed';
    no.style.zIndex='250';
    const pad=18;
    const rect=no.getBoundingClientRect();
    const maxX=Math.max(pad,innerWidth-rect.width-pad);
    const maxY=Math.max(pad,innerHeight-rect.height-pad);
    const x=pad+Math.random()*Math.max(0,maxX-pad);
    const y=pad+Math.random()*Math.max(0,maxY-pad);
    no.style.left=x+'px';
    no.style.top=y+'px';
    no.style.transform=`rotate(${(Math.random()*12)-6}deg)`;
  };

  no.addEventListener('click',move);
  no.addEventListener('mouseenter',()=>move());
  no.addEventListener('touchstart',()=>move(),{passive:true});
})();

$('#yes').addEventListener('click', ()=>{
  const screen = $('#yes-screen');
  const finale = $('#finale');

  // Turn the celebration into the final section of the page instead of a
  // fixed overlay. This keeps the whole website naturally scrollable.
  finale.classList.add('accepted');
  screen.classList.add('on');
  $$('.moment .pop').forEach((el,i)=> setTimeout(()=> el.classList.add('go'), reduced ? 0 : 300 + i*450));
  confetti();
  $('#yes').blur();

  // Move the page to the beginning of the celebration, then let the user
  // scroll normally back through the proposal and every earlier chapter.
  setTimeout(()=> screen.scrollIntoView({behavior: reduced ? 'auto' : 'smooth', block:'start'}), reduced ? 0 : 80);
});

/* confetti — paper, gold, rose */
function confetti(){
  if(reduced) return;
  const c = $('#confetti'), ctx = c.getContext('2d');
  const dpr = devicePixelRatio || 1;
  c.width = innerWidth*dpr; c.height = innerHeight*dpr;
  c.style.width = innerWidth+'px'; c.style.height = innerHeight+'px';
  const colors = ['#E4D3AE','#C0A063','#E8CBD3','#B4637A','#F7F3EC'];
  const bits = Array.from({length:150}, ()=>({
    x: Math.random()*c.width,
    y: -Math.random()*c.height*0.6,
    w: (5+Math.random()*7)*dpr,
    h: (9+Math.random()*12)*dpr,
    vy: (1.6+Math.random()*2.6)*dpr,
    vx: (Math.random()-0.5)*1.4*dpr,
    rot: Math.random()*Math.PI,
    vr: (Math.random()-0.5)*0.14,
    col: colors[Math.floor(Math.random()*colors.length)]
  }));
  const start = performance.now();
  (function frame(t){
    const life = t - start;
    ctx.clearRect(0,0,c.width,c.height);
    bits.forEach(b=>{
      b.x += b.vx; b.y += b.vy; b.rot += b.vr;
      if(b.y > c.height + 40*dpr){ b.y = -30*dpr; b.x = Math.random()*c.width; }
      ctx.save(); ctx.translate(b.x,b.y); ctx.rotate(b.rot);
      ctx.globalAlpha = life > 7000 ? Math.max(0, 1 - (life-7000)/3000) : 1;
      ctx.fillStyle = b.col; ctx.fillRect(-b.w/2,-b.h/2,b.w,b.h);
      ctx.restore();
    });
    if(life < 10000) requestAnimationFrame(frame);
    else ctx.clearRect(0,0,c.width,c.height);
  })(start);
}

/* ================================================================
   MUSIC + KEYS
================================================================= */
(function sound(){
  const btn = $('#sound'), audio = $('#music');
  if(!CONFIG.music.src) return;
  audio.src = CONFIG.music.src;
  btn.disabled = false;
  let on = false;
  btn.addEventListener('click', ()=>{
    on = !on;
    if(on){ audio.play().catch(()=>{}); btn.setAttribute('aria-label','Pause music'); btn.style.color = 'var(--rose-soft)'; }
    else { audio.pause(); btn.setAttribute('aria-label','Play music'); btn.style.color = 'var(--gold-soft)'; }
  });
})();

document.addEventListener('keydown', e=>{
  if(e.key !== 'Escape') return;
  modal.classList.remove('on');
  $('#whisper').classList.remove('on');
});
