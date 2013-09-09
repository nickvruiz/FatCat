// Flip - @Author: Derek Reis
var Dealer = function (id, deck) {
    this.deck = deck;
    this.length = deck.length;
    this.domElement = document.getElementById(id);
    this.running = false;
    this.pointer = 0;
    this.step = 1;
    this.rounds = 0;
    this.timeInterval = 3000;
    this.deal();
};

Dealer.prototype.nextPointer = function () {
    this.pointer += this.step;
    if (this.pointer >= this.length) {
        this.pointer = 0;
    } else if (this.pointer <= 0) {
        this.pointer = this.length - 1;
        this.rounds += 1;
    }
};

Dealer.prototype.deal = function () {
    this.domElement.innerHTML = this.deck[this.pointer];
    this.nextPointer();
};

Dealer.prototype.run = function () {
    var self = this;
    if (this.running) {
        this.deal();
    }
    if (this.rounds >= this.length) {
        this.stop();  
    }
    this.timer = setTimeout(function () {
        self.run();
    }, this.timeInterval)
    this.running = true;
};

Dealer.prototype.stop = function () {
    this.running = false;
    clearTimeout(this.timer);
};

var firstDealer = new Dealer('slot', ['code', 'shoot', 'film', 'edit']);
firstDealer.run();

$(document).ready(function () {

    // Get stage height apply to top element
    var height = $('#main').css("height");
    $('#workblock').css("margin-top", "-" + height);


	// Menu animation
	$('#toggle').bind( "click", function (e) {

		e.preventDefault();

		$('#items li').each(function (index) {
			$(this).delay(150*index)
				       .fadeIn(1000);
		});
	});


    // Block scrolling
    $('#items li a').bind( "click", function (e) {

        e.preventDefault();

        var icon   = $(this).attr("class"),
            target = icon + "block";

        $('.logo, .flip, #items').fadeOut(50);

        $('.icon').css("background", "#C6C6C6 url(img/menu-icon-" + icon + ".png) no-repeat center");

        if(target == "contactblock"){
            $('#contactblock').removeClass('noactive')
                                   .addClass('active');
        }
        if(target == "workblock"){
            $('#workblock').css("margin-top", 0);
            $('#homeblock').css("margin-top", height);
        }
        if(target == "aboutblock"){
            $('#homeblock').css("margin-top", "-" + height);
        }
    });


    // Block closing
    $('#aboutblock header a').bind( "click", function (e) {

        e.preventDefault();

        console.log("Clicked about close");

        $('.icon').css("background", "#C6C6C6 url(img/icon-list-menu.png) no-repeat center");

        $('.logo, .flip, #items').fadeIn("slow");
        $('#homeblock').css("margin-top", 0);
    });

    $('#workblock header a').bind( "click", function (e) {

        e.preventDefault();

        console.log("Clicked work close");

        $('.icon').css( "background", "#C6C6C6 url(img/icon-list-menu.png) no-repeat center");

        $('.logo, .flip, #items').fadeIn("slow");
        $('#workblock').css("margin-top", "-" + height);
        $('#homeblock').css("margin-top", 0);
    });

    $('#contactblock header a').bind( "click", function (e) {

        e.preventDefault();

        $('.icon').css("background", "#C6C6C6 url(img/icon-list-menu.png) no-repeat center");

        $('.logo, .flip, #items').fadeIn("slow");
        $('#contactblock').removeClass('active')
                           .addClass('noactive');
    });
});



