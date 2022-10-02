$(document).ready(function() {  
	//Modal
	$('#exampleModal').on('shown.bs.modal', function () {    

		var galleryThumbs = new Swiper('.gallery-thumbs', {
			spaceBetween: 10,
			slidesPerView: 4,
			// loop: true,
			freeMode: true,
			loopedSlides: 4,
			watchSlidesVisibility: true,
			watchSlidesProgress: true,
		});
		var galleryTop = new Swiper('.gallery-top', {
			spaceBetween: 10,
			// loop: true,
			// loopedSlides: 4,
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			thumbs: {
				swiper: galleryThumbs
			}
		});
	})

	//Close-Button Function
	$('.close').click(function(e){
		$('#collapseExample,#collapsexample').removeClass('show');
	});

	//Overlay Effect
	$('.btn-filter, .btn-dots, img.search-place, .search-container button.close').click(function(){
		$('section').toggleClass('overlay');
	});

	//DatePicker
	$("#datepicker01").datepicker({dateFormat:"mm/dd/yy"});

	$("#datepicker1").datepicker({dateFormat:"mm/dd/yy"});

	//Table-Carousel
	$('.table-carousel').owlCarousel({
		loop:true,	
		dots:false,						
		margin:10,
		nav:true,
		items:1
	})

	//DropKick
	$("#normal_select").dropkick({
		mobile: true
	});
	$("#normal_selected").dropkick({
		mobile: true
	});
	$("#normal_selects").dropkick({
		mobile: true
	});
	$("#normal_selecting").dropkick({
		mobile: true
	});

	//Trending-Carousel
	$('.trending-carousel').owlCarousel({
		nav:true,
		loop:true,
		margin:10,
		dots:false,			
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});

	//Destinations-Carousel
	$('.destinations-carousel').owlCarousel({
		nav:true,
		loop:true,
		margin:10,
		dots:false,			
		responsive:{
			0:{
				items:2
			},
			600:{
				items:3
			},
			1000:{
				items:6
			}
		}
	});

	//Affordable-Carousel
	$('.affordable-carousel').owlCarousel({
		nav:true,
		loop:true,
		margin:10,						
		responsive:{
			0:{
				items:1
			},
			600:{
				items:3
			},
			1000:{
				items:5
			}
		}
	})

	//Medi-Carousel
	$('.medi-carousel').owlCarousel({
		nav:true,
		loop:true,
		margin:10,
		dots:false,			
		items:1
	});

	//Reference
	$('.search-btn-outer .search-btn').click(function(){
		window.location.href = 'search-result.html';
		return false;
	});
	
	//noUiSlider
	if($("#slider").length){
		var slider = document.getElementById('slider');	
		noUiSlider.create(slider, {
			start: [1, 40],
			connect: true,
			range: {
				'min': 0,
				'max': 100
			}
		});
	};

	//Autocomplete
	$( function() {
		var availableTags = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];
		
		$( "#tags" ).autocomplete({
			source: availableTags
		});

		$( "#tag" ).autocomplete({
			source: availableTags
		});
	} );
	
	//Fix-Header
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$(".same-head").addClass('search-result');
		}
		else{
			$(".same-head").removeClass('search-result');
		}
	});

	/*An array containing all the country names in the world:*/
	//var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

	/*initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:*/
	//autocomplete(document.getElementById("myInput"), countries);

	/*initiate the autocomplete function on the "myInput2" element, and pass along the countries array as possible autocomplete values:*/
	//autocomplete(document.getElementById("myInput2"), countries);
	
});

	//Validation
	function Validation(){
		var p =	document.forms["newForm"]["myname"].value;
		var q =	document.forms["newForm"]["emaill"].value;
		var r =	document.forms["newForm"]["mesg"].value;
		if(p == "" && q == "" && r == ""){
			alert("Enter Name, Email as well as your Message.")
			return false;
		}
		if( p == "" && q != "" && r != ""){
			alert("Name Must be Entered.");
			return false;
		}
		if( q == "" && p != "" && r != ""){
			alert("Email Must be Entered.");
			return false;
		}
		if( r == "" && q != "" && p != ""){
			alert("Message Must be Entered.");
			return false;
		}
		if( q == "" && r == "" && p != "") {
			alert("Enter Email & Message.");
			return false;
		}
		if( r == "" && p == "" && q != ""){ 
			alert("Enter Name & Message.");
			return false;
		}
		if( p == "" && q == "" && r != ""){
			alert("Enter Name & Email.");
			return false;
		}
		else{
			confirm("Do You Want TO Send Your Data?")
		}
	}
	function EmailValid(inputex){
		var mailformat = /^\d+([\.-]?\d+)*@\d+([\.-]?\d+)*(\.\d{2,3})+$/;
		if(inputex.value.match(mailformat))
		{
			document.newForm.emaill.focus();
			return true;
		}
		else
		{
			alert("You have entered an invalid email address!");
			document.newForm.emaill.focus();
			return false;
		}
	}

	//Form-Validation
	function validateform(){
		var x = document.forms["myForm"]["uname"].value;
		var y = document.forms["myForm"]["pass"].value;
		if (x == "") {
			alert("Name must be filled out");
			return false;
		}
		else if(x == "harsh" && y == "tatva123"){
			confirm("Valid Data.");
		} 
		else{
			alert("Invalid Data!");
			return false;
		}
	}

    //Sign-up Validation
    function myValidation(){
    	var a =	document.forms["myform"]["fname"].value;
    	var b =	document.forms["myform"]["datetime"].value;
    	var c =	document.forms["myform"]["drtn"].value;
    	var d =	document.forms["myform"]["emails"].value;

    	if(a == "" && b == "" &&  c == "" && d == ""){
    		alert("Please Insert Full Name, Date, Duration and Email.");
    		return false;
    	}

    	if( b == "" && a != "" && c != "" && d != ""){
    		alert("Date must be filled out");
    		return false;
    	}
    	if( c == "" && a != "" && b != "" && d != ""){
    		alert("Please Select Duration Period.");
    		return false;
    	}
    	if( d == "" && a != "" && b != "" && c != ""){
    		alert("Please Enter Your email.");
    		return false;
    	}
    	if (a == "" && b != "" && c != "" && d != "") {
    		alert("Full Name must be filled out");
    		return false;
    	}
    	if( a == "" && b == "" && c == "" && d == "" ){
    		alert("Required Field Missing.");
    	}
    	if( a == "" && b == "" && c != "" && d != ""){
    		alert("Enter Full Name & Date.");
    		return false;
    	}
    	if( a == "" && c == "" && b != "" && d != ""){
    		alert("Enter Full Name & Duration.");
    		return false;
    	}
    	if( a == "" && d == "" && c != "" && b != ""){
    		alert("Enter Full Name & Email.");
    		return false;
    	}
    	if( c == "" && b == "" && a != "" && d != ""){
    		alert("Enter Date & Duration.");
    		return false;
    	}
    	if( d == "" && b == "" && c != "" && a != ""){
    		alert("Enter Date & Email.");
    		return false;
    	}
    	if( c == "" && d == "" && a != "" && b != ""){
    		alert("Enter Duration & Email.");
    		return false;
    	}
    	if( a == "" && b == "" && c == "" && d != ""){
    		alert("Enter Full Name, Dayte & Duration.");
    		return false;
    	}
    	if( a == "" && d == "" && c == "" && b != ""){
    		alert("Enter Full Name, Duration & Email.");
    		return false;
    	}
    	if( a == "" && b == "" && d == "" && c != ""){
    		alert("Enter Full Name, Date & Email.");
    		return false;
    	}
    	if( d == "" && b == "" && c == "" && a != ""){
    		alert("Enter Duration, Date & Email.");
    		return false;
    	}
    	else if(a != "" && b != "" && c != "" && d != ""){
    		confirm("Are You Want To Sign Up?");
    	}
    }
    function ValidateEmail(inputText){
    	var mailformat = /^\d+([\.-]?\d+)*@\d+([\.-]?\d+)*(\.\d{2,3})+$/;

    	if(inputText.value.match(mailformat))
    	{
    		document.myform.emails.focus();
    		return true;
    	}
    	else
    	{
    		alert("You have entered an invalid email address!");
    		document.myform.emails.focus();
    		return false;
    	}
    }
    function phonenumber(inputtxt){
    	var e =	document.forms["myform"]["phone"].value; 
    	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    	if(e != ""){
    		if(inputtxt.value.match(phoneno))
    		{
    			return true;
    		}
    		else
    		{
    			alert("Not a valid Phone Number");
    			return false;
    		}
    	}
    }

    //Organization Validation
    function validations(){
    	var x = document.forms["formnew"]["oname"].value;
    	var y = document.forms["formnew"]["omail"].value;
    	var z = document.forms["formnew"]["cname"].value;

    	if( x == "" && y == "" && z == ""){
    		alert("Enter Oraganization Name, Contact Number as well as Contact Name.")
    		return false;
    	}
    	if( x == ""){
    		alert("Enter Organization Name please.")
    		return false;
    	}
    	if( y == ""){
    		alert("Enter Email please.")
    		return false;
    	}
    	if( z == ""){
    		alert("Enter Contact Name please.")
    		return false;
    	}
    	if( x != "" && y != "" ){
    		alert("Enter Contact Number please.")
    		return false;
    	}
    	if( x != "" && z != "" ){
    		alert("Enter Email please.")
    		return false;
    	}
    	if( z != "" && y != "" ){
    		alert("Enter Organization Name please.")
    		return false;
    	}
    }
    function validatemail(inputText){
    	var mailformat = /^\y+([\.-]?\y+)*@\y+([\.-]?\y+)*(\.\y{2,3})+$/;

    	if(inputText.value.match(mailformat))
    	{
    		document.formnew.omail.focus();
    		return true;
    	}
    	else
    	{
    		alert("You have entered an invalid email address!");
    		document.formnew.omail.focus();
    		return false;
    	}
    }
    function validwebsite(str) {
    	var w = document.forms["formnew"]["website"].value;				
    	var url_pattern = new RegExp("((http|https)(:\/\/))?([a-zA-Z0-9]+[.]{1}){2}[a-zA-z0-9]+(\/{1}[a-zA-Z0-9]+)*\/?", "i");
    	if( w != ""){
    		if(str.value.match(url_pattern))
    		{
    			document.formnew.website.focus();
    			return true;
    		}
    		else
    		{
    			alert("You have entered an invalid URL!");
    			document.formnew.website.focus();
    			return false;
    		}
    	}
    }

    //Project Validation
    function validfunc(){
    	var a = document.forms["formnev"]["orgo"].value;
    	var b = document.forms["formnev"]["activity"].value;
    	var c = document.forms["formnev"]["category"].value;
    	var d = document.forms["formnev"]["tittle"].value;
    	var e = document.forms["formnev"]["minage"].value;
    	var f = document.forms["formnev"]["maxage"].value;
    	var g = document.forms["formnev"]["city"].value;
    	var h = document.forms["formnev"]["country"].value;

    	if( a == "" &&  b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "" ){
    		alert("Enter Organization.");
    		return false;
    	}
    	if( b == "" &&  a != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "" ){
    		alert("Enter Activity.");
    		return false;
    	}
    	if( c == "" &&  b != "" && a != "" && d != "" && e != "" && f != "" && g != "" && h != "" ){
    		alert("Enter Category.");
    		return false;
    	}
    	if( d == "" &&  b != "" && c != "" && a != "" && e != "" && f != "" && g != "" && h != "" ){
    		alert("Enter Title.");
    		return false;
    	}
    	if( e == "" &&  b != "" && c != "" && d != "" && a!= "" && f != "" && g != "" && h != "" ){
    		alert("Enter Min-Age.");
    		return false;
    	}
    	if( f == "" &&  b != "" && c != "" && d != "" && e != "" && a != "" && g != "" && h != "" ){
    		alert("Enter Max-Age.");
    		return false;
    	}
    	if( g == "" &&  b != "" && c != "" && d != "" && e != "" && f != "" && a != "" && h != "" ){
    		alert("Enter City.");
    		return false;
    	}
    	if( h == "" &&  b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && a != "" ){
    		alert("Enter Country.");
    		return false;
    	}
    	if( a != "" &&  b != "" && c != "" && d != "" && e != "" && f != "" && g != "" && h != "" ){
    		confirm("Do You Want To Submit?");
    		return true;
    	}

    	if( a == "" || b != "" || c != "" || d != "" || e != "" || f != "" || g != "" || a != "" ){
    		alert("Missing Any of the required field!");
    		return false;
    	}
    }
    function validateForms(){
    	var e = document.forms["formnev"]["minage"].value;
    	var f = document.forms["formnev"]["maxage"].value;

    	if(!e.match(/^\d+/) && !f.match(/^\d+/))
    	{
    		alert("Please enter only numeric characters for your Min-Age & Max-Age.");
    		return false;
    	}

    	if(e > f){
    		alert("Max-Age Must be Greater than Min-Age.");
    		return false;
    	}
    }

	//Autocomplete
	// function autocomplete(inp, arr) {
 //  		/*the autocomplete function takes two arguments,
 //  		the text field element and an array of possible autocompleted values:*/
 //  		var currentFocus;
 //  		/*execute a function when someone writes in the text field:*/
 //  		inp.addEventListener("input", function(e) {
 //  			var a, b, i, val = this.value;
 //  			/*close any already open lists of autocompleted values*/
 //  			closeAllLists();
 //  			if (!val) { return false;}
 //  			currentFocus = -1;
 //  			/*create a DIV element that will contain the items (values):*/
 //  			a = document.createElement("DIV");
 //  			a.setAttribute("id", this.id + "autocomplete-list");
 //  			a.setAttribute("class", "autocomplete-items");
 //  			/*append the DIV element as a child of the autocomplete container:*/
 //  			this.parentNode.appendChild(a);
 //  			/*for each item in the array...*/
 //  			for (i = 0; i < arr.length; i++) {
 //  				/*check if the item starts with the same letters as the text field value:*/
 //  				if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
 //  					/*create a DIV element for each matching element:*/
 //  					b = document.createElement("DIV");
 //  					/*make the matching letters bold:*/
 //  					b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
 //  					b.innerHTML += arr[i].substr(val.length);
 //  					/*insert a input field that will hold the current array item's value:*/
 //  					b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
 //  					/*execute a function when someone clicks on the item value (DIV element):*/
 //  					b.addEventListener("click", function(e) {
 //  						/*insert the value for the autocomplete text field:*/
 //  						inp.value = this.getElementsByTagName("input")[0].value;
 //              			/*close the list of autocompleted values,
 //              			(or any other open lists of autocompleted values:*/
 //              			closeAllLists();
 //              		});
 //  					a.appendChild(b);
 //  				}
 //  			}
 //  		});
 //  		/*execute a function presses a key on the keyboard:*/
 //  		inp.addEventListener("keydown", function(e) {
 //  			var x = document.getElementById(this.id + "autocomplete-list");
 //  			if (x) x = x.getElementsByTagName("div");
 //  			if (e.keyCode == 40) {
 //        		/*If the arrow DOWN key is pressed,
 //        		increase the currentFocus variable:*/
 //        		currentFocus++;
 //        		/*and and make the current item more visible:*/
 //        		addActive(x);
 //      		} else if (e.keyCode == 38) { //up
 //        		/*If the arrow UP key is pressed,
 //        		decrease the currentFocus variable:*/
 //        		currentFocus--;
 //        		/*and and make the current item more visible:*/
 //        		addActive(x);
 //        	} else if (e.keyCode == 13) {
 //        		/*If the ENTER key is pressed, prevent the form from being submitted,*/
 //        		e.preventDefault();
 //        		if (currentFocus > -1) {
 //        			/*and simulate a click on the "active" item:*/
 //        			if (x) x[currentFocus].click();
 //        		}
 //        	}
 //        });
 //  		function addActive(x) {
 //  			/*a function to classify an item as "active":*/
 //  			if (!x) return false;
 //  			/*start by removing the "active" class on all items:*/
 //  			removeActive(x);
 //  			if (currentFocus >= x.length) currentFocus = 0;
 //  			if (currentFocus < 0) currentFocus = (x.length - 1);
 //  			/*add class "autocomplete-active":*/
 //  			x[currentFocus].classList.add("autocomplete-active");
 //  		}
 //  		function removeActive(x) {
 //  			/*a function to remove the "active" class from all autocomplete items:*/
 //  			for (var i = 0; i < x.length; i++) {
 //  				x[i].classList.remove("autocomplete-active");
 //  			}
 //  		}
 //  		function closeAllLists(elmnt) {
 //    		/*close all autocomplete lists in the document,
 //    		except the one passed as an argument:*/
 //    		var x = document.getElementsByClassName("autocomplete-items");
 //    		for (var i = 0; i < x.length; i++) {
 //    			if (elmnt != x[i] && elmnt != inp) {
 //    				x[i].parentNode.removeChild(x[i]);
 //    			}
 //    		}
 //    	}
 //    	/*execute a function when someone clicks in the document:*/
 //    	document.addEventListener("click", function (e) {
 //    		closeAllLists(e.target);
 //    	});
 //    }    