
var start = + new Date();
var PositiveDaily = {

	triggerWords: /\b(WAR?|DONALD TRUMP|SAD|EMOTIONAL|TERRORIST|ISIS|ISLAMIC|KILLER|MURDER|RAPE|DANGER|TRAGEDY|||ISLAMIST|DIES|KILL?)\b/i,
	articleNames: ["li", ".post",".article",".story", ".g", ".zergentity", ".unit", ".lede", ".item", ".item-box", ".archive-item", ".news", ".entry", ".highlight"],

	checkClass: function(element) {
		if ($(element).hasClass("checked")) {
			return false
		}
		else {
			return true;
		}
	},

	findNegatives: function(element) {
		var containsNegatives = false;
		var searchThis = $(element).text();

		if (searchThis != undefined) {
			if (searchThis.match(PositiveDaily.triggerWords) != null) {
				containsNegatives = true;
			}
		}

		return containsNegatives;
	},



	eraseNegatives: function() {

		this.articleNames.forEach(function(name) {
			$(name  + ':not(.checked)').addClass("checked").filter(function() {
				return PositiveDaily.findNegatives(this);
			}).css("display", "none")
		})
	},

	blockNegatives: function() {
		setInterval(this.eraseNegatives.bind(this), 1000);
		this.eraseNegatives();
	}


}

PositiveDaily.blockNegatives();
var end = + new Date();
console.log(end-start);
