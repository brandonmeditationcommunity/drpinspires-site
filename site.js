function toggleNav(){document.querySelector('.nav-links').classList.toggle('open')}
var io=new IntersectionObserver(function(es){
  es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});

/* click-to-play YouTube embeds: any element with data-yt (video id) and optional data-start */
document.querySelectorAll('[data-yt]').forEach(function(el){
  el.addEventListener('click',function(){
    var id=el.getAttribute('data-yt'), start=el.getAttribute('data-start');
    var src='https://www.youtube.com/embed/'+id+'?autoplay=1'+(start?'&start='+start:'');
    el.innerHTML='<iframe src="'+src+'" allow="autoplay; fullscreen" allowfullscreen></iframe>';
  },{once:true});
});

/* contact form posts to FormSubmit (delivers to Dr. P's inbox).
   After redirect back with ?sent=1, show the thank-you message. */
if(window.location.search.indexOf('sent=1')>-1){
  var cf=document.getElementById('contactForm'),done=document.getElementById('formDone');
  if(cf){cf.style.display='none'}
  if(done){done.style.display='block';done.scrollIntoView({block:'center'})}
}
