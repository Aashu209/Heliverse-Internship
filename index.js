
//GSAP GREENSOCK ANIMATION PLATFORM(GSAP)

//GSAP FOR THIRD SECTION PART 1
gsap.from(".users,#thirdh2",{
    x:900,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".thirdsec",
        scroller:"Body",
        start:"top 70%",
        scurb:1,
        //markers:true
    }
})
//GSAP FOR THIRD SECTION PART 2(Left Side)
gsap.from(".leftside",{
    x:-100,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".thirdsecpt",
        scroller:"Body",
        start:"top 70%",
        scurb:1,
       // markers:true
    }
})

//GSAP FOR THIRD SECTION PART 2(Right Side)
gsap.from(".rightside",{
    x:-100,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".thirdsecpt",
        scroller:"Body",
        start:"top 55%",
        scurb:1,
       // markers:true
    }
})
//GSAP FOR FOURTH SECTION H1
gsap.from(".foutrhsec h1",{
    x:-100,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".foutrhsec",
        scroller:"Body",
        start:"top 60%",
        scurb:1,
       //markers:true
    }
})
//GSAP FOR FOURTH SECTION CONTAINER 
gsap.from(".frthleft ,.frthright",{
    Y:900,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".frthcont",
        scroller:"Body",
        start:"top 40%",
        scurb:1,
       //markers:true
    }
})
//GSAP FOR FIFTH SECTION PART1 
gsap.from("#mainfifthcont",{
    x:900,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".fifthsec",
        scroller:"Body",
        start:"top 50%",
        scurb:1,
       //markers:true
    }
})
//GSAP FOR FIFTH SECTION PART2 
gsap.from(".fifth2",{
    x:100,
    y:100,
    z:100,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".fifth2",
        scroller:"Body",
        start:"top 90%",
        scurb:1,
       //markers:true
    }
})
//GSAP FOR SIXTH SECTION  1
gsap.from(".sixsub1",{
    x:300,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".sixsec",
        scroller:"Body",
        start:"top 50%",
        scurb:1,
       //markers:true
    }
})
//GSAP FOR SIXTH SECTION 2 
gsap.from(".sixsub2",{
    Y:300,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".sixsec",
        scroller:"Body",
        start:"top 50%",
        scurb:1,
       //markers:true
    }
})
//GSAP FOR SIXTH SECTION  3
gsap.from(".sixsub3",{
    x:-300,
    scale:0,
    duration:1,
    delay:0.2,
    scrollTrigger:{
        trigger:".sixsec",
        scroller:"Body",
        start:"top 50%",
        scurb:1,
       //markers:true
    }
})