import {useSearchParams} from "react-router-dom";import ContactForm from "../components/ContactForm";import WhatsApp from "../components/WhatsApp";import {SITE} from "../config/site";
export default function Contact(){const [q]=useSearchParams();return <main className="mx-auto grid max-w-6xl gap-12 px-6 pb-20 pt-32 md:grid-cols-2"><div><h1 className="font-display text-5xl">Get in touch</h1>
<p className="mt-4 text-body/80">Tell us about your project and we will respond with next steps.</p>
<p className="mt-6 text-sm">Phone: {SITE.phone||"To be added"}<br/>Email: {SITE.email||"To be added"}<br/>Address: {SITE.address||"To be added"}</p><div className="mt-6"><WhatsApp/></div></div>
<ContactForm defaultService={q.get("service")||""}/></main>}
