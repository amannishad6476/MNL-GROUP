// Central business config. Real values come from env / backend settings. Never hardcode invented numbers.
export const SITE={name:"MNL GROUP",tagline:"Building Dreams. Creating Futures.",
whatsapp:import.meta.env.VITE_WHATSAPP_NUMBER||"",phone:"",email:"",address:""};
export const waLink=(msg)=>SITE.whatsapp?`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(msg)}`:null;
