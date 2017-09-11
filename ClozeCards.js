var ClozeCard = function(text, cloze){
	var textLower = text.toLowerCase();
	var clozeLower = cloze.toLowerCase();

	if(!textLower.includes(clozeLower)) {
		console.log("")
		console.log('ERROR: cloze-deletion does not appear within full text -- <' + cloze + '>');
		return;
	};

	this.full = text;
	this.cloze = cloze;
	this.partial = text.replace(cloze, '...');
};

module.exports = clozeCard;
