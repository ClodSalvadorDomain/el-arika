import{D as e,E as t,S as n,d as r,f as i,h as a,k as o,m as s,p as c}from"./app-BI8_0-gV.js";var l={new:[`badge-new`,`badge.new`],promo:[`badge-promo`,`badge.promo`],best:[`badge-promo`,`badge.best`],delivery:[`badge-trust`,`badge.delivery`],assembly:[`badge-success`,`badge.assembly`]},u=e=>`<span class="badge ${l[e][0]}">${o(l[e][1])}</span>`;function d(l,{cta:d=`cart`,eager:f=!1}={}){let p=n(l),m=l.stock===`out`,h=`product.html?id=${encodeURIComponent(l.id)}`,g=t.has(l.id),_=m?`<span class="badge badge-new">${o(`card.oosBadge`)}</span>`:[p?`<span class="badge badge-red">-${p}%</span>`:``,...l.badges.slice(0,2).map(u)].join(``),v=r(l.name);return`
  <article class="p-card${m?` is-oos`:``}" data-product="${l.id}">
    <div class="p-card__media">
      ${a(l.img,{w:480,alt:v,eager:f})}
      ${a(l.img2,{w:480,alt:``,cls:`img-alt`})}
      <div class="p-card__badges">${_}</div>
      <div class="p-card__wish">
        <button class="wish-btn glass-button glass-button-circle glass-white" data-wish="${l.id}" aria-pressed="${g}" aria-label="${o(`card.wish`)}: ${v}">${e(`heart`,20)}</button>
      </div>
    </div>
    <div class="p-card__body">
      <h3 class="p-card__name"><a href="${h}">${v}</a></h3>
      <p class="p-card__spec">${r(l.spec)}</p>
      <div class="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
        ${s(l.price)}
        ${l.old?`<span class="price-old"><span class="sr-only">${o(`card.was`)} </span>${i(l.old)} ${o(`cur`)}</span>`:``}
        ${p?`<span class="discount-pill">-${p}%</span>`:``}
      </div>
      <p class="finance-line">${o(`card.finance`,{n:i(c(l.price))})}</p>
      <div class="flex items-center gap-1 text-[13px] text-muted">
        <span class="stars" style="--pct:${l.rating/5*100}%" aria-hidden="true">★★★★★</span>
        <span><span class="sr-only">${o(`card.rating`,{r:l.rating})} </span>(${l.reviews})</span>
      </div>
      <div class="p-card__cta">
        ${m?`<a class="btn btn-ghost btn-block btn-sm" href="${h}">${o(`card.oos`)}</a>`:d===`cart`?`<button class="btn btn-primary btn-block btn-sm" data-add-to-cart="${l.id}">${e(`cart`,18)}<span>${o(`card.add`)}</span></button>`:`<a class="btn btn-secondary btn-block btn-sm" href="${h}">${o(`card.discover`)}</a>`}
      </div>
    </div>
  </article>`}function f(){return`
  <div class="p-card" aria-hidden="true">
    <div class="p-card__media skeleton" style="border-radius:0"></div>
    <div class="p-card__body">
      <div class="skeleton h-4 w-4/5"></div>
      <div class="skeleton h-4 w-2/5"></div>
      <div class="skeleton h-3 w-3/5 mt-1"></div>
      <div class="skeleton h-7 w-1/2 mt-2"></div>
      <div class="skeleton h-3 w-2/3"></div>
    </div>
  </div>`}export{f as n,d as r,u as t};