import {Link} from "react-router-dom";import {SITE} from "../config/site";import {SERVICES} from "../data/content";
export default function Footer(){return <footer className="bg-ink text-white/70"><div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-3">
<div><p className="font-display text-2xl tracking-widest text-white">{SITE.name}</p><p className="mt-3 text-sm">{SITE.tagline} Integrated construction, design and renovation services.</p></div>
<div><p className="mb-3 text-white">Services</p>{SERVICES.slice(0,6).map(s=><Link key={s.slug} to={`/services/${s.slug}`} className="block py-1 text-sm hover:text-gold">{s.title}</Link>)}</div>
<div><p className="mb-3 text-white">Company</p>{[["Services","/services"],["Designs","/designs"],["Contact","/contact"]].map(([n,p])=><Link key={p} to={p} className="block py-1 text-sm hover:text-gold">{n}</Link>)}</div></div>
<p className="border-t border-white/10 py-5 text-center text-xs">© {new Date().getFullYear()} {SITE.name}. All rights reserved.</p></footer>}
