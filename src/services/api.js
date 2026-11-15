// Single integration point for the real backend (Node/Express). Endpoints are ASSUMPTIONS: align with the backend contract.
const BASE=import.meta.env.VITE_API_BASE_URL||"";
async function req(path,opts){const r=await fetch(BASE+path,opts);if(!r.ok)throw new Error(`Request failed (${r.status})`);return r.json();}
export const api={
 getDesigns:()=>req("/designs"),            // expected: [{id,title,category,description,imageUrl}]
 submitEnquiry:(formData)=>req("/enquiries",{method:"POST",body:formData}), // multipart: fullName,phone,location,service,description,attachment?
};
