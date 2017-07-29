var alphabet = 'ABCĆČDĐEFGHIJKLMNOPQRSŠTUVWXYZŽabcčćdđefghijklmnopqrsštuvwxyzžАБВГҐДЂЕЁЄЖЗЅИІЇЙЈКЛЉМНЊОПРСТЋУЎФХЦЧЏШЩЪЫЬЭЮЯабвгґдђеёєжзѕиіїйјклљмнњопрстћуўфхцчџшщъыьэюяΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩαβγδεζηθικλμνξοπρστυφχψωάΆέΈέΉίϊΐΊόΌύΰϋΎΫὰάὲέὴήὶίὸόὺύὼώΏĂÂÊÔƠƯăâêôơưאבגדהוזחטיכךלמםנןסעפףצץקרשת1234567890?!(%)[#]{@}®©$€£¥¢₪';
alphabet = alphabet.split('');
var row = document.querySelectorAll('#row td');

var v_string = '';

function getString() {
	if (v_string.length < 500){
		return v_string += '<span>' + alphabet[getRandomInt(0, 299)] + '</span>';
	}
	else {
		v_string = '';
	}
	return v_string;
}
setInterval('row[1].innerHTML = getString();', 100);


function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}