(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[294],{414:(e,a,t)=>{Promise.resolve().then(t.bind(t,4129))},4129:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>o});var l=t(5155),r=t(2115),s=t(2651);let o=()=>{let[e,a]=(0,r.useState)(!1),[t,o]=(0,r.useState)(""),[n,c]=(0,r.useState)(""),[i,p]=(0,r.useState)(null),[d,u]=(0,r.useState)(null),[h,x]=(0,r.useState)(!1),b=(e,a)=>{var t;let l=null===(t=e.target.files)||void 0===t?void 0:t[0];l&&"application/pdf"===l.type?("salon"===a&&p(l),"delivery"===a&&u(l)):alert("Solo se permiten archivos PDF.")},m=async()=>{if(!i&&!d){alert("Debes seleccionar al menos un archivo.");return}x(!0);try{i&&await v(i,"carta-salon"),d&&await v(d,"carta-delivery"),alert("Archivos actualizados exitosamente.")}catch(e){console.error("Error al subir archivos:",e),alert("Hubo un error al subir los archivos.")}finally{x(!1)}},v=async(e,a)=>{let t=new FormData;if(t.append("file",e),t.append("resource_type","raw"),t.append("upload_preset","Carta GChopp"),t.append("public_id",a),t.append("folder","gchopp_carta"),200!==(await s.A.post("https://api.cloudinary.com/v1_1/".concat("dxqji5xmo","/upload"),t)).status)throw Error("Error al subir el archivo a Cloudinary")};return e?(0,l.jsxs)("div",{className:"p-8 text-center",children:[(0,l.jsx)("h1",{className:"text-2xl font-bold",children:"Subir Archivos PDF"}),(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("label",{className:"block mb-2",children:"Carta Sal\xf3n"}),(0,l.jsx)("input",{type:"file",accept:"application/pdf",onChange:e=>b(e,"salon")})]}),(0,l.jsxs)("div",{className:"my-4",children:[(0,l.jsx)("label",{className:"block mb-2",children:"Carta Delivery"}),(0,l.jsx)("input",{type:"file",accept:"application/pdf",onChange:e=>b(e,"delivery")})]}),(0,l.jsx)("button",{className:"bg-green-500 text-white px-4 py-2 rounded",onClick:m,disabled:h,children:h?"Subiendo...":"Actualizar Archivos"})]}):(0,l.jsxs)("div",{children:[(0,l.jsx)("h1",{className:"text-xl font-bold text-center",children:"Inicia sesi\xf3n"}),(0,l.jsxs)("form",{className:"flex flex-col items-center justify-center",children:[(0,l.jsx)("input",{type:"text",placeholder:"Usuario",className:"border rounded p-2 m-2 text-black",value:t,onChange:e=>o(e.target.value)}),(0,l.jsx)("input",{type:"password",placeholder:"Contrase\xf1a",className:"border rounded p-2 m-2 text-black",value:n,onChange:e=>c(e.target.value)}),(0,l.jsx)("button",{type:"submit",className:"bg-destacable text-black px-4 py-2 rounded",onClick:()=>{"elgranchopp"===t&&"GChopp25#"===n?a(!0):(console.log(n),console.log("GChopp25#"),alert("Usuario o contrase\xf1a incorrectos"))},children:"Ingresar"})]})]})}}},e=>{var a=a=>e(e.s=a);e.O(0,[651,441,517,358],()=>a(414)),_N_E=e.O()}]);