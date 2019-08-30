const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
//nav
Array.from(document.querySelector('nav').children).forEach((link, i)=>{
    link.innerText = siteContent['nav'][`nav-item-${i+1}`]
})
//cta
document.querySelector('.cta-text>h1').innerText = siteContent['cta']['h1']
document.querySelector('.cta-text>button').innerText = siteContent['cta']['button']
document.getElementById('cta-img').src = siteContent['cta']['img-src']
//main-content
let mainCont = document.querySelector('.main-content')
let categories = ['features','about','services','product','vision']
Array.from(mainCont.getElementsByTagName('h4')).forEach((header, i)=>{
    header.innerText = siteContent['main-content'][`${categories[i]}-h4`]
})
Array.from(mainCont.getElementsByTagName('p')).forEach((content, i)=>{
    content.innerText = siteContent['main-content'][`${categories[i]}-content`]
})
document.getElementById('middle-img').src = siteContent['main-content']['middle-img-src']
// contact
categories = ['contact-h4','address','phone','email']
Array.from(document.querySelector('.contact').children).forEach((child, i)=>{
    child.innerText = siteContent['contact'][categories[i]]
})