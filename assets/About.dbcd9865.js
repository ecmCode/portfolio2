import{r as a,_ as n,j as o,a as e}from"./index.db353bc4.js";const c=()=>{const[t,l]=a.exports.useState(null);a.exports.useEffect(()=>{n(()=>import("./cat.1217ff27.js"),[]).then(s=>l(s.default)),console.log("photo uploaded: "+t)},[t]);const i={container:"py-12 px-4 sm:px-10 flex flex-col justify-evenly items-center relative overflow-hidden animate-fadein-fast",box:"flex flex-col md:flex-row justify-evenly gap-y-10 items-center",photo:"w-80 h-80 p-4 rounded ring-1 ring-title shadow-xl",content:"text-right flex flex-col gap-y-4 w-full md:w-1/3 animate-fadein-slow"};return o("div",{className:i.container,children:[e("h1",{className:"text-7xl py-10",children:"About Me"}),o("div",{className:i.box,children:[e("div",{className:i.photo,children:t&&e("img",{src:t,loading:"lazy",alt:"portrait photo",className:"object-cover h-full w-full"})}),o("div",{className:i.content,children:[e("p",{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel maxime non dolorum, numquam iusto esse. Doloremque minima placeat odit incidunt in! Iusto voluptatibus possimus, hic excepturi ea minus repellat dolorem."}),e("p",{children:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est accusantium dicta non. Magnam inventore aspernatur officia maiores blanditiis deleniti voluptatem doloribus, architecto, libero, beatae voluptatibus quibusdam aperiam facere in minima?"})]})]})]})};export{c as default};
