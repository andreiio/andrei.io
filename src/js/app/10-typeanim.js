function typeAnim() {
	this.animationDelay    = 2500;
	this.lettersDelay      = 50;
	this.selectionDuration = 350;
	this.typeDelay         = this.selectionDuration + 800;

	this.headline = document.querySelector('.type-wrapper');
	this.words =  this.headline !== null ? this.headline.querySelectorAll('b') : [];
}

typeAnim.prototype.init = function() {
	var _this = this;

	if (this.headline === null || this.headline == '')
		return;

	this.headline.classList.add('waiting');

	// insert <i> element for each letter of a changing word
	this.words.forEach(function(word) {
		var letters = word.textContent.split(''),
			visible = word.classList.contains('is-visible');

		for (var l in letters) {
			letters[l] = visible ? '<i class="in">' + letters[l] + '</i>': '<i>' + letters[l] + '</i>';
		}

		// $(this).html(letters.join(''));
		word.innerHTML = letters.join('');
	});

	// initialise headline animation
	setTimeout(function() {
		_this.hide( _this.headline.querySelector('.is-visible') );
	}, _this.animationDelay);
};

typeAnim.prototype.hide = function(word) {
	var _this  = this,
		next   = this.next(word),
		parent = word.parentNode;

	parent.classList.add('selected');
	parent.classList.remove('waiting');

	setTimeout(function() {
		parent.classList.remove('selected');

		word.classList.remove('is-visible');
		word.classList.add('is-hidden');
		word.querySelectorAll('i').forEach(function(el) {
			el.classList.remove('in');
		});
	}, _this.selectionDuration);

	setTimeout(function() {
		_this.show(next, _this.lettersDelay);
	}, _this.typeDelay);
};

typeAnim.prototype.show = function(word, duration) {
	this.showLetter(word.querySelector('i'), word, false, duration);
	word.classList.add('is-visible');
	word.classList.remove('is-hidden');
};

typeAnim.prototype.next = function(word) {
	return word.nextSibling !== null ? word.nextSibling : word.parentNode.firstChild;
};

typeAnim.prototype.prev = function(word) {
	return word.previousSibling !== null ? word.previousSibling : word.parentNode.lastChild;
};


typeAnim.prototype.showLetter = function(letter, word, bool, duration) {
	var _this = this;

	letter.classList.add('in');

	if (letter.nextSibling !== null) {
		setTimeout(function() {
			_this.showLetter(letter.nextSibling, word, bool, duration);
		}, duration);
	} else {
		setTimeout(function() {
			word.parentNode.classList.add('waiting');
		}, 200);

		if (!bool) {
			setTimeout(function() {
				_this.hide(word);
			}, _this.animationDelay);
		}
	}
};

(new typeAnim()).init();
