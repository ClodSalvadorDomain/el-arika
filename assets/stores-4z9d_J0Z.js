import{D as e,d as t,k as n,t as r}from"./app-BI8_0-gV.js";import{i,n as a,r as o,t as s}from"./stores-BHF4UwcQ.js";r();var c=new URLSearchParams(location.search),l=document.querySelector(`#sl-q`);l.value=c.get(`city`)??``;var u=null,d=null,f=e=>e.toLowerCase().normalize(`NFD`).replace(/[̀-ͯ]/g,``);function p(e){let t=new Date,[n,r]=(t.getDay()===5?e.hours.fri:e.hours.week).split(` – `).map(e=>{let[t,n]=e.split(`:`).map(Number);return t*60+n}),i=t.getHours()*60+t.getMinutes();return i>=n&&i<r}function m(){let e=f(l.value.trim()),t=s.filter(t=>f(`${t.city} ${t.name}`).includes(e)),n=e?t.length?t:s.filter(t=>f(t.address).includes(e)):s;return d&&(n=n.map(e=>({...e,km:o(d,e)})).sort((e,t)=>e.km-t.km)),n}function h(){let r=m();document.querySelector(`[data-store-count]`).textContent=r.length,u&&r.some(e=>e.id===u)||(u=r[0]?.id??null),document.querySelector(`[data-store-list]`).innerHTML=r.length?r.map(r=>{let i=p(r);return`
    <li>
      <article class="rounded-card border ${r.id===u?`border-brand shadow-[inset_0_0_0_1px_var(--color-brand)] bg-[#fff7f7]`:`border-line bg-white`} p-4 transition-colors">
        <div class="flex items-start justify-between gap-3">
          <h3 class="font-bold"><button class="text-start hover:text-brand" data-select="${r.id}" aria-pressed="${r.id===u}">${t(r.name)}</button></h3>
          ${r.km==null?r.flagship?`<span class="badge badge-red">${n(`sl.flagship`)}</span>`:``:`<span class="badge badge-outline">${Math.round(r.km)} km</span>`}
        </div>
        <p class="text-sm text-muted-strong mt-1">${t(r.address)}</p>
        <p class="text-sm mt-2 flex items-center gap-1.5"><span class="${i?`text-success`:`text-brand`} font-bold">● ${n(i?`sl.open`:`sl.closed`)}</span><span class="text-muted">· ${n(`sl.week`)} ${r.hours.week} · ${n(`sl.fri`)} ${r.hours.fri}</span></p>
        <ul class="mt-2 flex flex-wrap gap-1.5">${r.services.map(e=>`<li class="badge badge-trust normal-case! tracking-normal! font-semibold!">${e}</li>`).join(``)}</ul>
        <div class="mt-3 flex flex-wrap gap-2">
          <a class="btn btn-primary btn-sm" href="${a(r)}" target="_blank" rel="noopener">${e(`pin`,16)}${n(`sl.directions`)}</a>
          <a class="btn btn-ghost btn-sm" href="tel:${r.phone.replace(/\s/g,``)}">${e(`phone`,16)}${r.phone}</a>
        </div>
      </article>
    </li>`}).join(``):`<li class="rounded-card border border-line p-6 text-center text-muted-strong">${n(`sl.none`)}</li>`,g()}function g(){let r=s.find(e=>e.id===u),o=document.querySelector(`[data-map]`),c=document.querySelector(`[data-map-card]`);if(c.hidden=!r,!r)return;let l=i(r);o.src!==l&&(o.src=l),o.title=n(`sl.mapOf`,{n:r.name}),c.innerHTML=`
    <p class="text-[12px] font-bold uppercase tracking-wider text-brand">${t(r.city)}</p>
    <p class="font-bold">${t(r.name)}</p>
    <p class="text-sm">${t(r.address)}</p>
    <a class="link-red text-sm mt-2" href="${a(r)}" target="_blank" rel="noopener">${n(`sl.directions`)} ${e(`arrowRight`,14)}</a>`}document.querySelector(`[data-store-list]`).addEventListener(`click`,e=>{let t=e.target.closest(`[data-select]`);t&&(u=t.dataset.select,h(),document.querySelector(`[data-select="${u}"]`)?.focus())}),l.addEventListener(`input`,h),document.querySelector(`[data-store-search]`).addEventListener(`submit`,e=>{e.preventDefault(),h()}),document.querySelector(`[data-locate]`).addEventListener(`click`,()=>{let e=document.querySelector(`[data-geo-status]`);navigator.geolocation?(e.textContent=n(`sl.geoWait`),navigator.geolocation.getCurrentPosition(t=>{d={lat:t.coords.latitude,lng:t.coords.longitude},l.value=``,u=null,e.textContent=n(`sl.geoOk`),h()},()=>{e.textContent=n(`sl.geoNo`)},{timeout:8e3})):e.textContent=n(`sl.geoNo`)}),h(),document.addEventListener(`lang:change`,h);