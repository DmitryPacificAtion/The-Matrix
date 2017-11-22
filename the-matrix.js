(function(){ 
	function Matrix() {
		this.row = document.getElementById('row');
		var childrenLen = this.row.children.length;
		var alphabet = 'ABCĆČDĐEFGHIJKLMNOPQRSŠTUVWXYZŽАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫὰάὲέὴήὶίὸόὺύὼώΏĂÂÊÔƠƯăâêôơưאבגדהוזחטיכךלמםנןסעפףצץקרשת1234567890?!(%)[#]{@}®©$€£¥¢₪';
		var len = alphabet.length - 1;
		var etalonArray = alphabet.split('');
		var v_string = '';
		var index = 0;
		var intervalId = 0;
		this.start = function() {
			// intervalId = setInterval(this.render, 100);
			this.manipulator()
		}
		this.manipulator = function() {
			for(var i = 1; i <= 5; i++) {
				(function(i) {
					setTimeout(function() {
						this.render(i);
					}, i * 1000);
				})(i);
			}
		}
		this.render = function(elem) {
			this.row.children[index].innerHTML = getLetter();
		}
		var getRandom = function (min, max) {
			return Math.round(Math.random() * (max - min)) + min;
		}
		var getLetter = function() {
			if (v_string.length < 100) {
				v_string += '<p>' + alphabet[getRandom(0, len)];
				return v_string;
			}
			if(index < childrenLen - 1) {
				++index;
			}
			else {
				index = 0;
				clearInterval(intervalId);
			}	
			v_string = '';
			return v_string;
		}
		var mixArray = function() {
			var tempArray = etalonArray;
			var random = 0;
			var indexRandom = 0;
			for (var i = 0; i < len; i++) {
				random = getRandom(0, tempArray.length-1);
				//Проверить, если элемент с таким значением есть, то пропустить
				indexRandom = tempArray.indexOf(random);
				if (indexRandom !== -1) {
					totalArray[i] = random;
					// Вырезаем наш рандомный элемент
					tempArray.splice(indexRandom, 1);
				}
			}
			// Все, что не вырезалось во временном массиве с конца загоняем в разреженые области
			for (var j = 0; j < len; j++) {
				if (totalArray[j] === undefined) {
					totalArray[j] = tempArray[tempArray.length - 1];
					tempArray.length--;
				}
			}
		}
	}
	var matrix = new Matrix();
	matrix.start();
})();

/*
var totalArray = [];

var len = row.length;
var index = 0;




function ChinaString (index, v_stringLen = 500) {
	
	var flagInterval = true;
	this.index = index;
	this.сhinaString = function() {
		// debugger;
		row[index].innerHTML = getString();
	}
	this.setInt = function() {
		setInterval(this.сhinaString, 100);
	}
}
function stringGenerator() {
	return new ChinaString();
}

initializer();
mixArray();
// setInterval('stringGenerator().setInt()', 500);*/