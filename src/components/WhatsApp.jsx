import {MessageCircle} from "lucide-react";import {waLink} from "../config/site";
export default function WhatsApp({message="Hello MNL GROUP, I would like to know more about your services.",floating=false,label="Enquire on WhatsApp"}){
const h=waLink(message);const base=floating?"fixed bottom-5 right-5 z-50 rounded-full bg-gold p-4 text-ink shadow-lg":"inline-flex items-center gap-2 border border-gold px-5 py-3 text-sm text-gold hover:bg-gold hover:text-ink";
if(!h)return floating?null:<span className="text-sm text-muted">WhatsApp number not configured yet.</span>;
return <a href={h} target="_blank" rel="noreferrer" aria-label={label} className={base}><MessageCircle size={floating?24:18}/>{!floating&&label}</a>}
