let myColor = "Blue";

function revealMessage() {
     document.getElementById("hiddenMessage").style.display = 'block';
}

document.getElementById("hiddenMessage").style.color = myColor;
(function() {
	
	function Slideshow( element ) {
		this.el = document.querySelector( element );
		this.init();
	}
	
	Slideshow.prototype = {
		init: function() {
			this.wrapper = this.el.querySelector( ".slider-wrapper" );
			this.slides = this.el.querySelectorAll( ".slide" );
			this.previous = this.el.querySelector( ".slider-previous" );
			this.next = this.el.querySelector( ".slider-next" );
			this.index = 0;
			this.total = this.slides.length;
			this.timer = null;
			/*Ideas and inspiration from Liz's each week challenge + Codepen*/
  this.action();
			this.stopStart();	
		},
		_slideTo: function( slide ) {
			let currentSlide = this.slides[slide];
			currentSlide.style.opacity = 1;
			
			for( let i = 0; i < this.slides.length; i++ ) {
				let slide = this.slides[i];
				if( slide !== currentSlide ) {
					slide.style.opacity = 0;
				}
			}
		},
		action: function() {
			let self = this;
			self.timer = setInterval(function() {
				self.index++;
				if( self.index == self.slides.length ) {
					self.index = 0;
				}
				self._slideTo( self.index );
				
			}, 3000);
		},
		stopStart: function() {
			let self = this;
			self.el.addEventListener( "mouseover", function() {
				clearInterval( self.timer );
				self.timer = null;
				
			}, false);
			self.el.addEventListener( "mouseout", function() {
				self.action();
				
			}, false);
		}
		
		
	};
	
	document.addEventListener( "DOMContentLoaded", function() {
		
		let slider = new Slideshow( "#main-slider" );
		
	});
	
	
})();