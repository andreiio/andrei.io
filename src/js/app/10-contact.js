window.onload = function() {
	var form = document.querySelector('form'),
		pristine, fields, recaptcha;

	if (form === null)
		return;

	pristine = new Pristine(form, {
		classTo: 'col',
		errorClass: 'not-valid',
		successClass: 'valid',

		errorTextParent: 'col',
		errorTextTag: 'span',
		errorTextClass: 'error'
	});

	recaptcha = document.getElementById('g-recaptcha-response');

	pristine.addValidator(recaptcha, function(value) {
		return !!value.length;
	}, 'Please fill in the reCAPTCHA form', 2, false);


	form.addEventListener('submit', function(e) {
		if (!pristine.validate())
			e.preventDefault();
	});


	fields = form.querySelectorAll('input, textarea');
	function onKeyDown() {
		var _this = this;

		if (this.type == 'submit')
			return;

		setTimeout(function() {
			if (_this.value == '') {
				_this.parentNode.classList.remove('has-input');
			} else {
				_this.parentNode.classList.add('has-input');
			}
		}, 1);
	}

	fields.forEach(function(field) {
		field.addEventListener('keydown', onKeyDown);
	});
};
