var alphabet = 'ABCĆČDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫὰάὲέὴήὶίὸόὺύὼώΏĂÂÊÔƠƯăâêôơưאבגדהוזחטיכךלמםנןסעפףצץקרשת1234567890?!(%)[#]{@}®©$€£¥¢₪';
alphabet = alphabet.split('');
var row = document.querySelectorAll('#row td');
var tempArr = row;
var index = 0;
function ChinaString (index, v_stringLen = 500) {
	var v_string = '';
	var flagInterval = true;
	this.index = index;
	this.сhinaString = function() {
		// debugger;
		row[index].innerHTML = getString();
	}
	this.setInt = function() {
			setInterval(this.сhinaString, 100);
	}
	var getString = function () {
		if (v_string.length < v_stringLen){
			return v_string += '<span>' + alphabet[getRandomInt(0, 299)] + '</span>';
		}
		else {
			v_string = '';
		}
		return v_string;
	}
}
function stringGenerator() {
	index = getRandomInt(0, tempArr.length-1);
	return new ChinaString(index);
}
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var str = stringGenerator();
setInterval('stringGenerator().setInt()', 500);