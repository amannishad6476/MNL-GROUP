import {useEffect,useState} from "react";import {api} from "../services/api";import {CATEGORIES} from "../data/content";import Img from "../components/Img";import WhatsApp from "../components/WhatsApp";
export default function Designs(){const [d,setD]=useState([]),[st,setSt]=useState("loading"),[cat,setCat]=useState("All"),[open,setOpen]=useState(null);
useEffect(()=>{api.getDesigns().then(r=>{setD(r);setSt("ready")}).catch(()=>setSt("error"))},[]);
useEffect(()=>{const k=e=>e.key==="Escape"&&setOpen(null);addEventListener("keydown",k);return()=>removeEventListener("keydown",k)},[]);
const list=cat==="All"?d:d.filter(x=>x.category===cat);
return <main className="mx-auto max-w-7xl px-6 pb-20 pt-32"><h1 className="font-display text-5xl">Design gallery</h1>
<div className="mt-6 flex flex-wrap gap-2">{["All",...CATEGORIES].map(c=><button key={c} aria-pressed={cat===c} onClick={()=>setCat(c)} className={`border px-4 py-2 text-sm ${cat===c?"border-gold bg-gold text-ink":"border-ink/20"}`}>{c}</button>)}</div>
{st==="loading"&&<p className="mt-10 text-muted">Loading designs…</p>}
{st==="error"&&<p role="alert" className="mt-10">Designs could not be loaded. Check that the backend is running and VITE_API_BASE_URL is set.</p>}
{st==="ready"&&!list.length&&<p className="mt-10 text-muted">No designs in this category yet.</p>}
<div className="mt-8 columns-1 gap-4 sm:columns-2 lg:columns-3">{list.map(x=><button key={x.id} onClick={()=>setOpen(x)} className="mb-4 block w-full"><Img src={x.imageUrl} alt={x.title} className="w-full"/></button>)}</div>
{open&&<div role="dialog" aria-modal="true" aria-label={open.title} className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-6" onClick={()=>setOpen(null)}><div className="max-w-4xl text-white" onClick={e=>e.stopPropagation()}><Img src={open.imageUrl} alt={open.title} className="max-h-[70vh] w-full object-contain"/><h2 className="mt-4 font-display text-3xl">{open.title}</h2><p className="text-white/70">{open.description}</p><div className="mt-4 flex gap-4"><WhatsApp message={`Hello MNL GROUP, I am interested in the design "${open.title}". Please share more details.`} label="Enquire About This Design"/><button onClick={()=>setOpen(null)} className="border border-white/40 px-5 py-3 text-sm">Close</button></div></div></div>}</main>}
