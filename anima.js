var t = gsap.timeline()

t.from("#main #nav h2,#main #nav img",{
       y: -70,
       duration: 0.4,
       delay: 0.2,
       opacity: 0,
       stagger: 0.4
})
t.from("#main #container #left h1",{
    x: -100,
    opacity:0,
    duration: 0.4,
    stagger: 0.4
})
t.from("#main #container #right p",{
    x: 100,
    opacity:0,
    duration: 0.4
})
t.from("#main #img #img1,#main #img #img2",{
    rotate: "360deg",
    x: -50,
    opacity: 0,
    duration: 0.7,
    stagger: 0.2
})
t.from("#main #botton #text",{
    x:-30,
    duration: 0.3,
    opacity: 0
})
t.from("#main #arrow #iii",{
    y: -40,
    duration: 0.5,
    repeat: -1,
    opacity:0
})