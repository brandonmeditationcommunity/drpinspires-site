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

/* contact form -> mailto compose to drp@drpinspires.com */
var cf=document.getElementById('contactForm');
if(cf){
  cf.addEventListener('submit',function(e){
    e.preventDefault();
    function v(n){var el=cf.querySelector('[name="'+n+'"]');return el?el.value:''}
    var fn=v('first'),ln=v('last'),em=v('email'),ph=v('phone'),msg=v('message');
    var subj='Website inquiry from '+fn+' '+ln;
    var body='Name: '+fn+' '+ln+'\nEmail: '+em+'\nPhone: '+ph+'\n\nMessage:\n'+msg;
    window.location.href='mailto:drp@drpinspires.com?subject='+encodeURIComponent(subj)+'&body='+encodeURIComponent(body);
    var done=document.getElementById('formDone');
    if(done){done.style.display='block';cf.style.display='none'}
  });
}
