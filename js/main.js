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

	// Menu animation
	$('#toggle').bind( "click", function (e) {
		e.preventDefault();
		$('#items li').each(function (index) {
			$(this).delay(150*index)
				       .fadeIn(1000);
		});
	});

    // Page Scrolling
    $("#items li a").bind( "click", function (e) {
        e.preventDefault();

        var target = $(this).attr("class") + "block";
        var height = $("#main").css("height");

        if(target == "contactblock"){
            $(".logo, .flip").fadeOut("fast");
            $(".contactblock").fadeIn("slow");
        }

        if(target == "workblock"){
            $(".homeblock").css("margin-bottom", "-" + height);
        }

        if(target == "aboutblock"){
            $(".homeblock").css("margin-top", "-" + height);
        }
    });
});




