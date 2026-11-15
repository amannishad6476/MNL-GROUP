import {useEffect,useState} from "react";import {Link,NavLink,useLocation} from "react-router-dom";import {Menu,X} from "lucide-react";import {SITE} from "../config/site";
const L=[["Home","/"],["Services","/services"],["Designs","/designs"],["Contact","/contact"]];
export default function Navbar(){const [s,setS]=useState(false),[o,setO]=useState(false),{pathname}=useLocation();
useEffect(()=>{const f=()=>setS(scrollY>40);f();addEventListener("scroll",f);return()=>removeEventListener("scroll",f)},[]);useEffect(()=>setO(false),[pathname]);
const solid=s||pathname!=="/";
return <header className={`fixed inset-x-0 top-0 z-40 transition-colors ${solid?"bg-ink shadow":"bg-transparent"}`}>
<nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6" aria-label="Main">
<Link to="/" className="font-display text-2xl tracking-widest text-white">{SITE.name}</Link>
<ul className="hidden items-center gap-8 md:flex">{L.map(([n,p])=><li key={p}><NavLink to={p} end className={({isActive})=>`text-sm ${isActive?"text-gold":"text-white/85 hover:text-gold"}`}>{n}</NavLink></li>)}
<li><Link to="/contact" className="bg-gold px-5 py-2.5 text-sm font-medium text-ink hover:bg-white">Get Consultation</Link></li></ul>
<button className="text-white md:hidden" aria-label={o?"Close menu":"Open menu"} onClick={()=>setO(!o)}>{o?<X/>:<Menu/>}</button></nav>
{o&&<div className="bg-ink px-6 pb-6 md:hidden">{L.map(([n,p])=><Link key={p} to={p} className="block border-b border-white/10 py-3 text-white">{n}</Link>)}<Link to="/contact" className="mt-4 block bg-gold py-3 text-center font-medium text-ink">Get Consultation</Link></div>}</header>}
