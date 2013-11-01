//signup.js 
// add your JavaScript code to this file

//function that will be called when the 
//document is ready for manipulation
$(function(){
    //document is now ready for manipulation
	var stateSelect = $('select[name="state"]');
	var option;
	var idx;
	var state;

	for(idx = 0; idx < usStates.length; ++idx) {
		state = usStates[idx];
		option = $(document.createElement('option'));
		option.attr('value', state.abbreviation);
		option.html(state.name);
		stateSelect.append(option);
	}

	$('.signup-form').submit(function(){
		var signupForm = $(this);
		var addr1Input = signupForm.find('input[name="addr-1"]');
		var addr1Value = addr1Input.val();
		var zipInput = signupForm.find('input[name="zip"]');
		var zipValue = zipInput.val();
		if (addr1Value == 0) {
			return true;
		} else if (addr1Value && addr1Value.trim().length && zipValue && zipValue.trim().length > 0 ) {
			return true;
		} else {
			alert('Please enter a valid address to continue');
			return false;
		}
	});

	$('.cancel-signup').click(function(){
		 $('.cancel-signup-modal').modal();
	}); //cancel-signup click

	$('.btn-abandon').click(function(){
		window.location = 'http://www.google.com';
	});
}); //on document ready