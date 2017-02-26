var typo = {
	text : 'hello! i\'m mazba',
	delay : 200,
	cindex : 0,
	maxLength : 17,
	el : $('#typo'),
	init :function(){
		// console.log(this.el.length)
		if(this.text.length && this.el.length)
			this.start();

	},
	start:function() {
		this.getRandomChar(0);
	},
	// stop:function() {
	// 	this.el.html('');
	// },
	getRandomChar:function(index){
		var typo = this;
		var count = 0;
		typo.cindex++;
		if(index == typo.maxLength) return false;
		var refreshInterval = setInterval(function(){
			if(count<5){
				if(typo.el.find('span').length ==0)
					typo.el.append('<span><span>');
				typo.el.find('span').html(String.fromCharCode(Math.random() * (127 - 33) + 33));
			}
			else{
				clearInterval(refreshInterval);
				typo.el.find('span').remove();
				typo.el.append(typo.text[index]);
				typo.getRandomChar(typo.cindex);

			}
			count++;
		},8);
	}

}
