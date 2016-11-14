video = document.getElementById('studio');
video.pause();
video.currentTime = 0;

// Initialize your app
var myApp = new Framework7({ modalTitle: 'BBC Radio+' });

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

// MVP Level Connectivity Detection
if (!navigator.onLine) {
  $$('.views').show();
}

window.applicationCache.addEventListener('cached', function() {
    // anything you need to do for success
    // myApp.confirm('Caching complete.');
    console.log('Caching complete.');
    $$('.views').show();
}, false );

window.applicationCache.addEventListener('noupdate', function() {
    // anything you need to do for success
    // myApp.confirm('No update required.');
    console.log('No update required.');
    $$('.views').show();
}, false );

window.applicationCache.addEventListener('updateready', function() {
    // anything you need to do for success
    // myApp.confirm('Updated.');
    console.log('Updated.');
    $$('.views').show();
}, false );

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

$$('.item-link').on('click',function(){

    audio = document.getElementById('radioshow');
    audio.play();
    
    // video = document.getElementById('studio');
    // video.play();

});

myApp.onPageInit('kermodemayo', function (page) {

    // Init Messages
    var myMessages = myApp.messages('.messages', {
      autoLayout:true
    });

    // Init audio & video
    // audio = document.getElementById('radioshow');
    // audio.play();
    
    video = document.getElementById('studio');
    video.play();

    // Conversation flag
    var conversationStarted = false;

    var p = Popcorn( "#radioshow" )

    // .code({
    //     start: 0,
    //     onStart: function( options ) {         
    //         video = document.getElementById('studio');
    //         video.play();
    //     }

    // })    

    .code({
        start: 0.1,
        onStart: function( options ) {         
            myMessages.addMessage({
              text: "When I went to see it",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg',
              name: 'Simon Mayo'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
        }

    })

    .code({
        start: 2.5,
        onStart: function( options ) {         
            myMessages.addMessage({
              text: "I came out of the movie",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
        }

    })

    .code({
        start: 3.5,
        onStart: function( options ) {         
            myMessages.addMessage({
              text: "And I called up our esteemed production team",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
        }

    })

    .code({
        start: 6,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "Because I saw it before you",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }

      })

    .code({
        start: 6.75,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "You did.",
              type: 'received',
              avatar: 'img/dummy-mark.jpg',
              name: 'Mark Kermode'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 8,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "And my prediction was",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg',
              name: 'Simon Mayo'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 10,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "Mark's going to hate it",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 12,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "That’s what I thought",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 13.5,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "I don’t know if I’m right",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 15.5,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "I suspect I might be",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 17,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "Let’s find out",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 17.5,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "Here's a clip",
              type: 'received',
              avatar: 'img/dummy-mark.jpg',
              name: 'Mark Kermode'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 18.7,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "<img src='img/entourage-clip-full.gif'>",
              type: 'received',
            })
            setTimeout(function(){myMessages.scrollMessages();},10);
            conversationStarted = true;
          }
      })

    .code({
        start: 46,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "Well",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 47.5,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "I mean, it’s no surprise",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })    

    .code({
        start: 49.5,
        onStart: function( options ) {   
            myMessages.addMessage({
              text: "I do hate it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 52,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I absolutely hate it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 54,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I hate it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 55,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I loathe it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 56.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I despise it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })    

    .code({
        start: 58.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I detest it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })    

    .code({
        start: 60.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I feel contempt for it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 62,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I...I just...",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 65,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Everything about it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 66.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Rattles every one of my cages",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 70,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "So what you have is a comedy with no jokes",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 73,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "You have satire with no satire",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 75,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Essentially, it's just like the Generation Game",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 77,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "With a conveyor belt of",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      }) 

    .code({
        start: 79,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Lust",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
        })

    .code({
        start: 80,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Greed",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })  

    .code({
        start: 80.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Avarice",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 81.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Vice",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 83,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Just being wheeled in front of you and going",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 84,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "'There, that's great, isn't it?'",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 87,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I wondered whether",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 88,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Am I not laughing because I'm not getting the jokes?",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 90,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Is the satire actually so straight-faced",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 93,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "So deadpan",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 94,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "So unbelievably just",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 98.8,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Poker faced that I can't see it?",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 100.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And then you realise",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 101.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "No",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 102,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "There are no jokes.",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 104,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "It's not meant to be funny",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 107,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "It's meant to be good",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 109,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "You’re meant to like these people",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 111,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "You're meant to like this lifestyle",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })   

    .code({
        start: 112,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "You're meant to want this stuff",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 113.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "You're meant to be seduced by it",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 117,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Compared to this",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 118.7,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "<a href='#' class='satc'>Sex and the City 2</a> is a call to arms",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 124,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "For the dispossessed masses of the world to rise up",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 127.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "In terms of its gender politics",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 130,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "<a href='#' class='humancentipede'>Human Centipede</a> is more sensitive",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 133,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "It is a film",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })    

    .code({
        start: 135,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Which not only has nothing",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 137,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Other than the syrupy",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 138.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Corpulent",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 140,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Foul display of",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 142,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I mean the amount of shots of",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 142.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Cars",
              type: 'angry',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 142.7,
        onStart: function( options ) { 
            $$('.message-angry .message-text').addClass('tada animated');
          }
      })

    .code({
        start: 143,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And bumpers",
              type: 'angry',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 143.2,
        onStart: function( options ) { 
            $$('.message-angry .message-text').addClass('tada animated');
          }  
      })

    .code({
        start: 144,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And cars",
              type: 'angry',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 144.2,
        onStart: function( options ) { 
            $$('.message-angry .message-text').addClass('tada animated');
          }
      })

    .code({
        start: 145,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And bumpers",
              type: 'angry',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 145.2,
        onStart: function( options ) { 
            $$('.message-angry .message-text').addClass('tada animated');
          }
      })

    .code({
        start: 145.7,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And yachts",
              type: 'angry',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 145.9,
        onStart: function( options ) { 
            $$('.message-angry .message-text').addClass('tada animated');
          }
      })

    .code({
        start: 146.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And cars",
              type: 'angry',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 146.7,
        onStart: function( options ) { 
            $$('.message-angry .message-text').addClass('tada animated');
          } 
      })

    .code({
        start: 146.9,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And bumpers!",
              type: 'angry',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 147.1,
        onStart: function( options ) { 
            $$('.message-angry .message-text').addClass('tada animated');
          } 
      }) 

    .code({
        start: 148.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I would cross the road",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 151,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Not to be in the same street as these people",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 153,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "But the movie wants to be with them",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 155,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "The movie is like some awful hanger-on",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 157.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "That has found its way into some hideous celebrity party",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 161,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And can't believe it's there",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 163,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And doesn't want to annoy anyone.",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 165,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Then of course you get the parade of celebrity cameos",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 170,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "With people just lining up to have their faces in this",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 174,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "The notable one",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 174.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Being ‘Marky' Mark Wahlberg himself",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 175.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Who actually",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })
          
    .code({
        start: 177,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I thought",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })
            
    .code({
        start: 178,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Looked embarrassed to be there.",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 180.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "You've almost got this sense",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      }) 

    .code({
        start: 181.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "That he's moved on",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          } 
      })

    .code({
        start: 183,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Even he realises",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 184.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "That this is not acceptable",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 185.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I cannot remem-",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 187,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And I’m serious about this",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 189,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I hate this more than I hate <a href='#' class='satc'>Sex and the City 2</a>",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 192,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And that's really going some",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 195,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "That’s kind of what I said when I called up the office",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg',
              name: 'Simon Mayo'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 199,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Tell me you didn’t think the same",
              type: 'received',
              avatar: 'img/dummy-mark.jpg',
              name: 'Mark Kermode'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 201,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: " I hated it first! 😄",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg',
              name: 'Simon Mayo'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 203,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "You hated it first?",
              type: 'received',
              avatar: 'img/dummy-mark.jpg',
              name: 'Mark Kermode'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 204.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "He hated before I did",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 205.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "I hated it before you",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg',
              name: 'Simon Mayo'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 207,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Al Murray on Twitter has just said 'This is 5.9 on the KerRant scale'",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 210,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "<img src='img/tweet.png'>",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            setTimeout(function(){myMessages.scrollMessages();},12);
            conversationStarted = true;
          }
      })

    .code({
        start: 211,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Someone else has just called it 'An Entou-rage'",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 216,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "That’s very good 😆",
              type: 'received',
              avatar: 'img/dummy-mark.jpg',
              name: 'Mark Kermode'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 218,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Entou-rage is good",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg',
              name: 'Simon Mayo'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 220,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Worse than <a href='#' class='satc' style='color:#fff;'>Sex and the City 2</a>?",
              type: 'sent',
              avatar: 'img/dummy-simon.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 221.5,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "Yeah",
              type: 'received',
              avatar: 'img/dummy-mark.jpg',
              name: 'Mark Kermode'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    .code({
        start: 222,
        onStart: function( options ) { 
            myMessages.addMessage({
              text: "And I’m not kidding",
              type: 'received',
              avatar: 'img/dummy-mark.jpg'
            })
            myMessages.scrollMessages();
            conversationStarted = true;
          }
      })

    $$('.messages').on('click','.satc', function () {
        var buttons1 = [
            {
                text: "Mark's Review of Sex and the City 2",
                label: true
            },
            {
                text: "Play review",
            },
            {
                text: 'Save for later'
            },
        ];
        var buttons2 = [
            {
                text: 'Cancel',
                color: 'red'
            },
        ];
        var groups = [buttons1, buttons2];
        myApp.actions(groups);
    });

    $$('.messages').on('click','.humancentipede', function () {
        var buttons1 = [
            {
                text: "Mark's Review of Human Centipede",
                label: true
            },
            {
                text: "Play review",
            },
            {
                text: 'Save for later'
            },
        ];
        var buttons2 = [
            {
                text: 'Cancel',
                color: 'red'
            },
        ];
        var groups = [buttons1, buttons2];
        myApp.actions(groups);
    });

    $$('.toolbar-inner .video-toggle').on('click',function(){
        $$('.video-overlay').toggleClass('active');
        $$('.page[data-page="kermodemayo"] .search').removeClass('active');
        // $$('.page[data-page="kermodemayo"] .list-block').removeClass('active');
        // $$('.page[data-page="kermodemayo"] .searchbar').removeClass('active');
        $$('.toolbar').removeClass('search-toggled').toggleClass('video-toggled');
    });

    $$('.toolbar-inner .search-toggle').on('click',function(){
        $$('.messages').toggleClass('hidden');
        $$('.video-overlay').removeClass('active');
        $$('.page[data-page="kermodemayo"] .search').toggleClass('active');
        // $$('.page[data-page="kermodemayo"] .list-block').toggleClass('active');
        // $$('.page[data-page="kermodemayo"] .searchbar').toggleClass('active');
        $$('.toolbar').removeClass('video-toggled').toggleClass('search-toggled');
    });


    $$('.messages').on('click','.picture', function () {
      myApp.popup('.popup-about');
    });


});

