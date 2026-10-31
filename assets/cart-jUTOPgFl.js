import{D as e,T as t,_ as n,d as r,f as i,h as a,k as o,p as s,t as c,v as l,x as u}from"./app-BI8_0-gV.js";import{t as d}from"./stores-BHF4UwcQ.js";import{r as f}from"./product-card-Cxs6pBaI.js";import{t as p}from"./carousel-D5c5Pizn.js";c();var m=`Adrar.Chlef.Laghouat.Oum El Bouaghi.Batna.Béjaïa.Biskra.Béchar.Blida.Bouira.Tamanrasset.Tébessa.Tlemcen.Tiaret.Tizi Ouzou.Alger.Djelfa.Jijel.Sétif.Saïda.Skikda.Sidi Bel Abbès.Annaba.Guelma.Constantine.Médéa.Mostaganem.M'Sila.Mascara.Ouargla.Oran.El Bayadh.Illizi.Bordj Bou Arréridj.Boumerdès.El Tarf.Tindouf.Tissemsilt.El Oued.Khenchela.Souk Ahras.Tipaza.Mila.Aïn Defla.Naâma.Aïn Témouchent.Ghardaïa.Relizane`.split(`.`),h={code:`ARIKA10`,pct:.1,cap:15e3},g={pickup:0,home:2500,assembly:6900},_={step:1,ship:(()=>{try{return sessionStorage.getItem(`elarika:ship`)||`home`}catch{return`home`}})(),promo:``,store:d[0].id,details:{},pay:`cib`,order:null};function v(e=t.lines()){let n=e.map(e=>({...e,p:u[e.id]})).filter(e=>e.p),r=n.reduce((e,t)=>e+(t.unit??t.p.price)*t.qty,0),i=n.reduce((e,t)=>e+(t.p.old?(t.p.old-t.p.price)*t.qty:0),0),a=_.promo===h.code?Math.min(h.cap,Math.round(r*h.pct)):0,o=_.ship===`pickup`||r>=15e4?0:g.home,s=_.ship===`assembly`?g.assembly:0;return{items:n,subtotal:r,savings:i,discount:a,delivery:o,assembly:s,total:Math.max(0,r-a+o+s)}}var y=e=>/^d+$/.test(e)&&Number(e)>9?`${e} cm`:o(`size.${e}`),b=e=>`${i(e)} ${o(`cur`)}`;function x(){let e=v(),t=[[o(`co.subtotal`,{n:e.items.reduce((e,t)=>e+t.qty,0)}),b(e.subtotal)],e.savings?[o(`co.savings`),`<span class="text-success">−${b(e.savings)}</span>`]:null,e.discount?[`${o(`co.promo`)} (${h.code})`,`<span class="text-success">−${b(e.discount)}</span>`]:null,[o(`co.delivery`),e.delivery?b(e.delivery):`<span class="text-success font-bold">${o(`free`)}</span>`],_.ship===`assembly`?[o(`co.assembly`),b(e.assembly)]:null].filter(Boolean);document.querySelector(`[data-summary-lines]`).innerHTML=t.map(([e,t])=>`<dt class="text-muted-strong">${e}</dt><dd class="text-end font-semibold">${t}</dd>`).join(``)+`
    <dt class="pt-3 mt-1 border-t border-line font-extrabold text-lg">${o(`co.total`)}</dt>
    <dd class="pt-3 mt-1 border-t border-line text-end"><span class="price">${i(e.total)}<span class="cur">${o(`cur`)}</span></span></dd>
    <dd class="col-span-2 text-end finance-line">${o(`card.finance`,{n:i(s(e.total))})}</dd>`;let n=document.querySelector(`[data-summary-actions]`);if(_.step===4||!e.items.length){n.innerHTML=``;return}let a={1:o(`co.next1`),2:o(`co.next2`),3:o(`co.next3`)}[_.step];n.innerHTML=`
    ${_.step===1?`
      <form class="flex gap-2 mb-4" data-promo-form>
        <label class="sr-only" for="promo">${o(`co.promoLabel`)}</label>
        <input id="promo" class="input h-11! min-h-11! text-sm uppercase" placeholder="${o(`co.promoPh`)}" value="${r(_.promo)}" />
        <button class="btn btn-ghost btn-sm">${o(`co.apply`)}</button>
      </form>
      <p class="text-[13px] -mt-2 mb-3" role="status" data-promo-status></p>`:``}
    <button class="btn btn-primary btn-block" data-next>${a}</button>
    ${_.step>1?`<button class="btn btn-ghost btn-block mt-2" data-back>${o(`co.back`)}</button>`:``}`}function S(){let t=v();return t.items.length?`
    <h1 class="h2">${o(`co.title`)} <span class="text-muted font-semibold text-lg">(${t.items.reduce((e,t)=>e+t.qty,0)})</span></h1>
    <ul class="mt-5 divide-y divide-line border-y border-line">
      ${t.items.map(t=>`
        <li class="py-5 grid grid-cols-[96px_1fr] sm:grid-cols-[132px_1fr_auto] gap-4">
          <a href="product.html?id=${t.id}" class="block rounded-input overflow-hidden aspect-[4/3]">${a(t.p.img,{w:264,alt:r(t.p.name),cls:`w-full h-full object-cover`})}</a>
          <div class="min-w-0">
            <a href="product.html?id=${t.id}" class="font-bold hover:text-brand">${r(t.p.name)}</a>
            <p class="text-[13px] text-muted">${r(t.p.spec)}</p>
            <p class="text-[13px] mt-1">${t.color?`${o(`pdp.color`)}: <b>${l[t.color]?.label??t.color}</b>`:``}${t.size?` · ${o(`pdp.size`)}: <b>${y(t.size)}</b>`:``}</p>
            <p class="text-[13px] mt-1 ${t.p.stock===`out`?`text-brand`:`text-success`} font-semibold">● ${o(t.p.stock===`out`?`stock.order`:`co.inStock`)}</p>
            <div class="mt-3 flex items-center gap-3">
              <div class="flex items-center rounded-pill border border-line h-10" role="group" aria-label="${o(`pdp.qty`)}">
                <button class="w-9 h-full grid place-items-center hover:text-brand" data-dec="${t.key}" aria-label="${o(`co.dec`)}">${e(`minus`,16)}</button>
                <span class="w-8 text-center font-bold" aria-live="polite">${t.qty}</span>
                <button class="w-9 h-full grid place-items-center hover:text-brand" data-inc="${t.key}" aria-label="${o(`co.inc`)}">${e(`plus`,16)}</button>
              </div>
              <button class="inline-flex items-center gap-1 text-[13px] font-semibold text-muted hover:text-brand" data-remove="${t.key}">${e(`trash`,16)} ${o(`co.remove`)}</button>
            </div>
          </div>
          <div class="col-span-2 sm:col-span-1 sm:text-end">
            <span class="price text-[22px]!">${i((t.unit??t.p.price)*t.qty)}<span class="cur">${o(`cur`)}</span></span>
            ${t.qty>1?`<p class="text-[12px] text-muted">${b(t.unit??t.p.price)} / ${o(`co.unit`)}</p>`:``}
          </div>
        </li>`).join(``)}
    </ul>
    <fieldset class="mt-8">
      <legend class="h3 mb-3">${o(`pdp.delivery`)}</legend>
      <div class="grid gap-2">
        ${[[`pickup`,`ship.pickup`,`ship.pickup.d`,0],[`home`,`ship.home`,t.subtotal>=15e4?`co.freeOver`:`co.homeD`,t.subtotal>=15e4?0:g.home],[`assembly`,`ship.assembly`,`ship.assembly.d`,g.assembly]].map(([e,t,n,r])=>`
          <label class="opt"><input type="radio" name="ship" value="${e}" ${_.ship===e?`checked`:``} />
            <span class="flex-1"><span class="font-bold block">${o(t)}</span><span class="text-[13px] text-muted">${o(n)}</span></span>
            <span class="font-bold ${r?``:`text-success`}">${r?b(r):o(`free`)}</span></label>`).join(``)}
      </div>
      ${_.ship===`pickup`?`
        <label class="label mt-4" for="store">${o(`co.store`)}</label>
        <select id="store" class="input" data-store>${d.map(e=>`<option value="${e.id}" ${e.id===_.store?`selected`:``}>${r(e.name)} — ${e.city}</option>`).join(``)}</select>`:``}
    </fieldset>`:`<div class="rounded-card border border-line p-10 text-center">
      <span class="inline-grid place-items-center w-16 h-16 rounded-full bg-surface text-muted">${e(`cart`,30)}</span>
      <h1 class="h2 mt-4">${o(`co.empty`)}</h1>
      <p class="mt-2 text-muted-strong">${o(`co.emptyText`)}</p>
      <a class="btn btn-primary mt-6" href="category.html?cat=promotions">${o(`hero1.cta`)}</a>
    </div>`}function C(e,t,n=``,i=`text`){return`<div><label class="label" for="${e}">${t}</label><input id="${e}" name="${e}" type="${i}" class="input" value="${r(_.details[e]??``)}" ${n} /></div>`}function w(){return`
    <h1 class="h2">${o(`co.s2`)}</h1>
    <form class="mt-6 grid gap-4" data-details novalidate>
      <div class="grid sm:grid-cols-2 gap-4">
        ${C(`name`,o(`co.name`),`required autocomplete="name"`)}
        ${C(`phone`,o(`co.phone`),`required autocomplete="tel" inputmode="tel" pattern="^(\\+213|0)[5-7][0-9]{8}$" placeholder="0550 00 00 00"`,`tel`)}
      </div>
      ${C(`email`,o(`co.email`),`required autocomplete="email"`,`email`)}
      ${_.ship===`pickup`?`
        <div class="rounded-card bg-surface p-4 text-sm"><b>${o(`co.pickupAt`)}</b><br />${r(d.find(e=>e.id===_.store).name)} — ${r(d.find(e=>e.id===_.store).address)}</div>`:`
        <div class="grid sm:grid-cols-2 gap-4">
          <div><label class="label" for="wilaya">${o(`co.wilaya`)}</label>
            <select id="wilaya" name="wilaya" class="input" required><option value="">${o(`co.choose`)}</option>${m.map((e,t)=>`<option ${_.details.wilaya===e?`selected`:``} value="${e}">${String(t+1).padStart(2,`0`)} — ${e}</option>`).join(``)}</select></div>
          ${C(`commune`,o(`co.commune`),`required`)}
        </div>
        ${C(`address`,o(`co.address`),`required autocomplete="street-address"`)}
        <fieldset><legend class="label">${o(`co.slot`)}</legend>
          <div class="grid sm:grid-cols-2 gap-2">
            <label class="opt"><input type="radio" name="slot" value="am" ${_.details.slot===`pm`?``:`checked`} /><span>${o(`co.am`)}</span></label>
            <label class="opt"><input type="radio" name="slot" value="pm" ${_.details.slot===`pm`?`checked`:``} /><span>${o(`co.pm`)}</span></label>
          </div>
        </fieldset>`}
      <div><label class="label" for="notes">${o(`co.notes`)}</label><textarea id="notes" name="notes" rows="3" class="input py-3">${r(_.details.notes??``)}</textarea></div>
      <p class="text-sm font-semibold text-brand" role="alert" data-form-error></p>
    </form>`}function T(){let e=v(),t=(e,t,n,r=``)=>`
    <label class="opt"><input type="radio" name="pay" value="${e}" ${_.pay===e?`checked`:``} />
      <span class="flex-1"><span class="font-bold block">${t}</span><span class="text-[13px] text-muted">${n}</span>${r}</span></label>`;return`
    <h1 class="h2">${o(`co.s3`)}</h1>
    <form class="mt-6 grid gap-3" data-payment novalidate>
      ${t(`cib`,o(`pay.card`),o(`pay.cardD`),_.pay===`cib`?`
        <span class="mt-4 grid sm:grid-cols-[1fr_120px_100px] gap-3">
          <span><span class="label">${o(`pay.number`)}</span><input class="input" inputmode="numeric" autocomplete="cc-number" placeholder="6280 •••• •••• ••••" required pattern="[0-9 ]{16,19}" /></span>
          <span><span class="label">${o(`pay.exp`)}</span><input class="input" autocomplete="cc-exp" placeholder="MM/YY" required pattern="(0[1-9]|1[0-2])/[0-9]{2}" /></span>
          <span><span class="label">CVV2</span><input class="input" inputmode="numeric" autocomplete="cc-csc" placeholder="•••" required pattern="[0-9]{3}" /></span>
        </span>`:``)}
      ${t(`cod`,o(`pay.cod`),o(`pay.codD`))}
      ${t(`installments`,o(`pay.inst`),o(`pay.instD`,{n:i(s(e.total))}))}
      <label class="check mt-3"><input type="checkbox" required data-terms /><span>${o(`pay.terms`)}</span></label>
      <p class="text-sm font-semibold text-brand" role="alert" data-form-error></p>
      <p class="text-[12px] text-muted">${o(`pay.demo`)}</p>
    </form>`}function E(){let t=_.order;return`
    <div class="rounded-card border border-line p-8 lg:p-12 text-center">
      <span class="inline-grid place-items-center w-16 h-16 rounded-full bg-brand text-white">${e(`check`,32)}</span>
      <h1 class="h2 mt-5">${o(`co.thanks`)}</h1>
      <p class="mt-2 text-muted-strong">${o(`co.orderNo`)} <b class="text-ink">${t.no}</b></p>
      <p class="mt-1 text-muted-strong">${o(t.ship===`pickup`?`co.doneP`:`co.doneH`)}</p>
      <div class="mt-6 flex flex-wrap justify-center gap-3">
        <a class="btn btn-primary" href="index.html">${o(`co.continue`)}</a>
        <a class="btn btn-secondary" href="stores.html">${o(`util.store`)}</a>
      </div>
    </div>`}var D=document.querySelector(`[data-step-view]`);function O(e=!1){document.querySelectorAll(`[data-step]`).forEach(e=>{let t=Number(e.dataset.step);e.classList.toggle(`is-done`,t<_.step),e.classList.toggle(`is-current`,t===_.step),t===_.step?e.setAttribute(`aria-current`,`step`):e.removeAttribute(`aria-current`)}),D.innerHTML={1:S,2:w,3:T,4:E}[_.step](),x(),document.querySelector(`[data-reco]`).hidden=_.step>1,e&&(D.querySelector(`h1`)?.setAttribute(`tabindex`,`-1`),D.querySelector(`h1`)?.focus(),scrollTo({top:0,behavior:`smooth`}))}function k(e){let t=e.querySelector(`[data-form-error]`),n=[...e.querySelectorAll(`input, select, textarea`)].find(e=>!e.checkValidity());return n?(t.textContent=o(`co.fix`),n.focus(),e.querySelectorAll(`input, select`).forEach(e=>e.setAttribute(`aria-invalid`,String(!e.checkValidity()))),!1):(t.textContent=``,!0)}document.addEventListener(`click`,e=>{let n=t=>e.target.closest(`[${t}]`)?.getAttribute(t),r=n(`data-inc`),i=n(`data-dec`),a=n(`data-remove`);if(r||i){let e=r||i,n=t.lines().find(t=>t.key===e);n&&t.setQty(e,n.qty+(r?1:-1))}if(a&&t.remove(a),e.target.closest(`[data-back]`)&&(_.step--,O(!0)),e.target.closest(`[data-next]`)){if(_.step===2){let e=D.querySelector(`[data-details]`);if(!k(e))return;_.details=Object.fromEntries(new FormData(e))}if(_.step===3){if(!k(D.querySelector(`[data-payment]`)))return;_.order={no:`EA-${new Date().getFullYear()}-${String(Math.floor(Math.random()*9e5)+1e5)}`,ship:_.ship},t.clear()}_.step++,O(!0)}}),document.addEventListener(`change`,e=>{e.target.name===`ship`&&(_.ship=e.target.value,O()),e.target.name===`pay`&&(_.pay=e.target.value,O(),D.querySelector(`[value="${_.pay}"]`).focus()),e.target.matches(`[data-store]`)&&(_.store=e.target.value)}),document.addEventListener(`submit`,e=>{if(!e.target.matches(`[data-promo-form]`))return;e.preventDefault();let t=e.target.querySelector(`input`).value.trim().toUpperCase();_.promo=t===h.code?t:``,x();let n=document.querySelector(`[data-promo-status]`);n.textContent=t===h.code?o(`co.promoOk`):o(`co.promoBad`),n.className=`text-[13px] -mt-2 mb-3 font-semibold ${t===h.code?`text-success`:`text-brand`}`}),document.addEventListener(`cart:change`,()=>{_.step===1&&O()}),document.addEventListener(`lang:change`,()=>{O(),A()});function A(){document.querySelector(`[data-reco-track]`).innerHTML=n.map(e=>f(e)).join(``),p(document.querySelector(`[data-reco] [data-carousel]`))}O(),A();