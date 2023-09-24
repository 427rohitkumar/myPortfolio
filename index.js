

function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });



    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

//   Init();

locomotive();



//   circle bounceing animation  
gsap.from(".circle", {
    scale: 0,
    duration: 1.3,
    delay: .5
});

var cl = new TimelineMax({ repeat: -1, yoyo: true });

cl.fromTo(".circle", 0.9,
    { ease: Power0.easeNone, y: 10 },
    { ease: Power0.easeNone, y: -10 });

cl.fromTo(".circle", 0.9,
    { ease: Power0.easeNone, y: -10 },
    { ease: Power0.easeNone, y: 10 });

//  tex animation 

var frame = document.querySelector(".frame");
var circle = document.querySelector("#circlePoineter");


window.addEventListener("mousemove", function (dets) {
    gsap.to(circle, {
        x: dets.clientX,
        y: dets.clientY,
        duration: .2,
        ease: Expo
    })
});

frame.addEventListener("mousemove", function (dets) {
    gsap.to(circle, {
        scale: 4


    });


    gsap.to(".frame span", {
        color: "orange",
        duration: .4,
        y: "-5vw"

    })
})

frame.addEventListener("mouseleave", function (dets) {
    gsap.to(circle, {
        scale: 1
    })

    gsap.to(".frame span", {
        color: "#7a07ed",
        duration: .4,
        y: 0


    })
})


gsap.to(".page2", {
    scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        pin: true,
        start: "top top",
        end: "10%",


        scrub: true
    }
});

gsap.to(".page2 #java", {
    // x: -500,
    x: -300,
    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: ".page2 #java",
        scroller: "#main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".page2 #cpp", {
    // x: -300,
    x: -150,

    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: ".page2 #cpp",
        scroller: "#main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".page2 #python", {
    // y: -300,
    // x: -300,
    y: -150,
    x: -150,
    duration: 2,
    delay: .5,
    scrollTrigger: {
        trigger: ".page2 #python",
        scroller: "#main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".page2 #csharp", {
    // y: -200,
    // x: 300,
    y: -100,
    x: 150,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 #csharp",
        scroller: "#main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".page2 #jQuery", {
    // x: 500,
    x: 250,

    duration: 1,
    scrollTrigger: {
        trigger: ".page2 #jQuery",
        scroller: "#main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".page2 #bootstrap", {
    y: 100,
    x: -250,
    // y: 200,
    // x: -500,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 #bootstrap",
        scroller: "#main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".page2 #jsp", {
    y: 100,
    x: 150,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 #jsp",
        scroller: "#main",
        start: "top 70%",
        // end:"200%",
        scrub: true
    }
});

gsap.from(".page2 .skill-tex", {
    scale: 0,
    duration: 1,
    delay: 1,
    scrollTrigger: {
        trigger: ".page2",
        scroller: "#main",
        start: "top 70%",
        end: "top 10px",
        scrub: true
    }
});

gsap.to(".page2 #ps", {
    y: 100,
    x: 150,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 #ps",
        scroller: "#main",
        start: "top 70%",
        // end:"200%",
        scrub: true
    }
});

gsap.to(".page2 #canva", {
    x: -150,

    duration: 2,
    delay: 1,
    scrollTrigger: {
        trigger: ".page2 #canva",
        scroller: "#main",
        start: "top 70%",
        scrub: true
    }
});

gsap.to(".page2 #pr", {
    y: -100,
    x: 150,
    duration: 1,
    scrollTrigger: {
        trigger: ".page2 #pr",
        scroller: "#main",
        start: "top 70%",
        scrub: true
    }
});


var skl = new TimelineMax({ repeat: -1, yoyo: true });

skl.fromTo(".imag-mainDiv", 0.9,
    { ease: Power0.easeNone, y: 5 },
    { ease: Power0.easeNone, y: -5 }


);

skl.fromTo(".imag-mainDiv", 0.9,
    { ease: Power0.easeNone, y: -5 },
    { ease: Power0.easeNone, y: 5 }


);


// samll screen gsap 

let mm = gsap.matchMedia();

mm.add("(max-width:440px)", () => {
    gsap.to(".page2 #java", {
        x: -130,
        duration: 2,
        delay: 1,
        scrollTrigger: {
            trigger: ".page2 #java",
            scroller: "#main",
            start: "top 60%",
            scrub: true
        }
    });

    gsap.to(".page2 #cpp", {
        x: -80,
        y: 50,
        duration: 2,
        delay: 1,
        scrollTrigger: {
            trigger: ".page2 #cpp",
            scroller: "#main",
            start: "top 60%",
            scrub: true
        }
    });

    gsap.to(".page2 #python", {
        y: -80,
        x: -110,
        duration: 2,
        delay: .5,
        scrollTrigger: {
            trigger: ".page2 #python",
            scroller: "#main",
            start: "top 60%",
            scrub: true
        }
    });

    gsap.to(".page2 #csharp", {
        y: -80,
        x: 90,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2 #csharp",
            scroller: "#main",
            start: "top 60%",
            scrub: true
        }
    });

    gsap.to(".page2 #jQuery", {
        x: 80,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2 #jQuery",
            scroller: "#main",
            start: "top 60%",
            scrub: true
        }
    });

    gsap.to(".page2 #bootstrap", {
        y: 110,
        x: -110,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2 #bootstrap",
            scroller: "#main",
            start: "top 60%",
            scrub: true
        }
    });

    gsap.to(".page2 #jsp", {
        y: 90,
        x: 110,
        duration: 1,
        scrollTrigger: {
            trigger: ".page2 #jsp",
            scroller: "#main",
            start: "top 60%",
            // end:"200%",
            scrub: true
        }
    });

    gsap.to(".page4",{
        scrollTrigger: {
            trigger: ".page4",
            scroller: "#main",
            pin: true,
            start: "top top",
            end: "+=100%",
                        
            scrub: true
         }
    })





})




// page 3 js starting 

  gsap.from(".page3 .text-page3",{
        scale:0,
          scrollTrigger:{
             trigger:".page3",
             scroller:"#main",
             start:"top 90%",
             scrub:true
          }
  });

let proj = gsap.timeline();

gsap.to(".page3", {
    scrollTrigger: {
        trigger: ".page3",
        scroller: "#main",
        pin: true,
        start: "top top",
        end: "+=10%",


        scrub: true
    }
});

gsap.from(".page3 #project1", {
    scale: 0,
    delay: 1,
    scrollTrigger: {
        trigger: ".page3  #project1",
        scroller: "#main",
        start: "top 90%",
        end: "buttom 20%",
        scrub: true
    }
});



gsap.from(".page3 #project2", {
    scale: 0,
    delay: 1,

    scrollTrigger: {
        trigger: ".page3 #project2",
        scroller: "#main",
        start: "top 90%",
        end: "buttom 20%",


        scrub: true
    }

});

gsap.from(".page3 #project3", {
    scale: 0,
    delay: 1,

    scrollTrigger: {
        trigger: ".page3 #project3",
        scroller: "#main",
        start: "top 90%",
        end: "buttom 20%",

        scrub: true
    }

});



var project = new TimelineMax({ repeat: -1, yoyo: true });

project.fromTo(".page3 .project", 0.9,
    { ease: Power0.easeNone, y: 5 },
    { ease: Power0.easeNone, y: -5 }


);

project.fromTo(".page3 .project", 0.9,
    { ease: Power0.easeNone, y: -5 },
    { ease: Power0.easeNone, y: 5 }


);


// page 4 gsap 

gsap.from(".page4 .aboutimg",{
    scale:0,
    duration:1,
    scrollTrigger: {
        trigger: ".page4 .aboutimg",
        scroller: "#main",
        start: "top 90%",
        end: "buttom 20%",

        scrub: true
    }
})

gsap.from(".page4 .page4-about-text",{
    scale:0,
    duration:1,
    scrollTrigger: {
        trigger: ".page4 .page4-about-text",
        scroller: "#main",
        start: "top 90%",
        end: "buttom 20%",

        scrub: true
    }
})



// let pro = gsap.matchMedia();

// pro.add("(max-width:440px)", () => {
       
//     gsap.to(".page3", {
//         scrollTrigger: {
//             trigger: ".page3",
//             scroller: "#main",
//             pin: true,
//             start: "top top",
//             end: "+=100%",
            
//             scrub: true
//         }
//     });

// });


// let mm = gsap.matchMedia();

// // add a media query. When it matches, the associated function will run
// mm.add("(min-width: 800px)", () => {

//   // this setup code only runs when viewport is at least 800px wide
//   gsap.to(...);
//   gsap.from(...);
//   ScrollTrigger.create({...});

//   return () => { // optional
//     // custom cleanup code here (runs when it STOPS matching)
//   };
// });

// // later, if we need to revert all the animations/ScrollTriggers...
// mm.revert();



