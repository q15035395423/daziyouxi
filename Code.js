/*
* @Author: 29016
* @Date:   2017-12-18 17:38:00
* @Last Modified by:   29016
* @Last Modified time: 2017-12-18 18:52:42
*/
/*
	* 属性
	*   字母表、几个字符、生命、关卡、速度
	* 方法
	*   开始、产生、下落、消失、进入下一关、重新开始
	 */
class Code{
	constructor(){
		this.char = ['Q','W','E','R','T','Y','U','U','I','O','P'];
		this.length = 5;
		this.current = [];
		this.speed = 10;
	}
	start(){
		this.getChars(this.length);
		this.drop();
	}
	getChars(length){
		for(let i = 0;i < length;i++){
			this.getChar();
		}
	}
	getChar(){
		let num = Math.floor(Math.random()*this.char.length);
		// this.char[num];
		let divs = document.createElement('div');
		let tops = Math.floor(Math.random()*100);
		let lefts = Math.floor((window.innerWidth - 400)*Math.random() + 200);
		divs.style.cssText = `
			width:50px;height:50px;background:orangered;
			border-radius:3px;text-align:center;
			line-height:50px;font-size:20px;
			position:absolute;top:${tops}px;left:${lefts}px;
		`;
		divs.innerText = this.char[num];
		document.body.appendChild(divs);
		this.current.push(divs);
	}
	drop(){
		let that = this
		setInterval(function(){
			for(let i = 0;i < that.current.length;i++){
				let tops = that.current[i].offsetTop + that.speed;
				that.current[i].style.top = tops + 'px';
				if(tops >= 500){
					document.body.removeChild(that.current[i]);
					that.current.splice(i,1);
					that.getChar();
				}
			}
		},100)	
	}
}