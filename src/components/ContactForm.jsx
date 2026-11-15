import {useState} from "react";import {api} from "../services/api";import {SERVICES} from "../data/content";
const F="w-full border border-ink/20 bg-white px-4 py-3 text-sm";
export default function ContactForm({defaultService=""}){const [e,setE]=useState({}),[st,setSt]=useState("idle");
async function submit(ev){ev.preventDefault();const form=ev.target,fd=new FormData(form),v={},n=fd.get("fullName").trim(),p=fd.get("phone").trim();
if(n.length<2)v.fullName="Enter your full name.";if(!/^[+\d\s-]{8,15}$/.test(p))v.phone="Enter a valid phone number.";if(!fd.get("service"))v.service="Select a service.";
setE(v);if(Object.keys(v).length)return;setSt("loading");try{await api.submitEnquiry(fd);setSt("ok");form.reset()}catch{setSt("err")}}
const Err=({k})=>e[k]?<p role="alert" className="mt-1 text-xs text-red-700">{e[k]}</p>:null;
return <form onSubmit={submit} noValidate className="grid gap-4">
<label>Full name<input name="fullName" className={F}/><Err k="fullName"/></label>
<label>Phone number<input name="phone" type="tel" className={F}/><Err k="phone"/></label>
<label>Location<input name="location" className={F}/></label>
<label>Required service<select name="service" defaultValue={defaultService} className={F}><option value="">Select</option>{SERVICES.map(s=><option key={s.slug}>{s.title}</option>)}</select><Err k="service"/></label>
<label>Project description<textarea name="description" rows="4" className={F}/></label>
<label>Photo or video (optional)<input name="attachment" type="file" accept="image/*,video/*" className={F}/></label>
<button disabled={st==="loading"} className="bg-gold py-3 font-medium text-ink disabled:opacity-60">{st==="loading"?"Sending…":"Send enquiry"}</button>
{st==="ok"&&<p role="status" className="text-sm text-green-800">Enquiry sent. We will contact you soon.</p>}
{st==="err"&&<p role="alert" className="text-sm text-red-700">Could not send your enquiry. Check your connection and try again.</p>}</form>}
