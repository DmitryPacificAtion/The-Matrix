var alphabet = 'ABCĆČDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫὰάὲέὴήὶίὸόὺύὼώΏĂÂÊÔƠƯăâêôơưאבגדהוזחטיכךלמםנןסעפףצץקרשת1234567890?!(%)[#]{@}®©$€£¥¢₪';
alphabet = alphabet.split('');
var row = document.querySelectorAll('#row td');

function ChinaString (v_stringLen = 500) {
	var v_string = '';
	this.сhinaString = function() {
		// debugger;
		// var positionIndex = getRandomInt(0, 27);
		row[1].innerHTML = getString();
	}
	var getString = function () {
		if (v_string.length < v_stringLen) 
			return v_string += '<span>' + alphabet[getRandomInt(0, 299)] + '</span>';
		else {
			v_string = '';
		}
		return v_string;
	}
}

function stringGenerator() {
	// debugger;
	return new ChinaString();
}

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

var str = stringGenerator();
setInterval('str.сhinaString()', 100);