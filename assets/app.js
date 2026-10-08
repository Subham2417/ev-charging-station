
const menu=document.querySelector('.menu'), links=document.querySelector('.navlinks');
if(menu) menu.addEventListener('click',()=>links.classList.toggle('open'));

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(x=>observer.observe(x));

document.querySelectorAll('[data-count]').forEach(el=>{
  const target=Number(el.dataset.count), suffix=el.dataset.suffix||'';
  let done=false;
  const io=new IntersectionObserver(es=>{
    if(es[0].isIntersecting&&!done){
      done=true; let start=0; const dur=1000, t0=performance.now();
      function tick(t){let p=Math.min((t-t0)/dur,1);let v=Math.floor((1-Math.pow(1-p,3))*target);el.textContent=v.toLocaleString()+suffix;if(p<1)requestAnimationFrame(tick)}
      requestAnimationFrame(tick);io.disconnect();
    }
  });io.observe(el);
});

const year=document.querySelector('#year'); if(year)year.textContent=new Date().getFullYear();

const calc=document.querySelector('#calc');
if(calc){
  const cap=calc.querySelector('#capacity'), util=calc.querySelector('#util'), price=calc.querySelector('#price');
  const outEnergy=calc.querySelector('#outEnergy'), outRevenue=calc.querySelector('#outRevenue'), outProfit=calc.querySelector('#outProfit');
  function update(){
    const c=Number(cap.value), u=Number(util.value)/100, p=Number(price.value);
    const mwh=c*8760*u/1000, rev=mwh*1000*p, variable=rev*.55, fixed=180000*12, profit=rev-variable-fixed;
    outEnergy.textContent=Math.round(mwh).toLocaleString()+' MWh';
    outRevenue.textContent='₹'+(rev/100000).toFixed(1)+' L';
    outProfit.textContent='₹'+(profit/100000).toFixed(1)+' L';
    calc.querySelector('#utilLabel').textContent=util.value+'%';
    calc.querySelector('#priceLabel').textContent='₹'+price.value+'/kWh';
  }
  [cap,util,price].forEach(x=>x.addEventListener('input',update));update();
}
