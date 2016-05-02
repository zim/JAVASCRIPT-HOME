$(document).ready(function() {
    
    // SET SOME GLOBAL VARIABLES
    
    

	$.getJSON('http://content.guardianapis.com/search?q=arsenal&format=json&api-key=ragnru2k9y5fwm7eg2r7824y', function(info){



			var output='';
			for (var i = 0; i <= info.response.results.length-1; i++) {
                
                output += '<li>hi</li>';
                
				for (key in info.response.results[i]) {
                    output += '<li>whaaaa</li>';
					if (info.response.results[i].hasOwnProperty(key)) {
						output += '<li>' + 
						'<p>KEY = ' + key +
						'</p><p>' + info.response.results[i][key] + '</p>';
						'</li>';
                        
                        
			        }
                    
				}
			}
			
			var update = document.getElementById('links');
        
        
			update.innerHTML = output;
			
			
	
	}); //getJSON

}); // ready



var FeedItem = FeedItem || (function(){

  console.log('NEW FeedItem OBJECT CREATED +++++++++++++++++++++++++++++++ domObject = ' + domObject);

  







	function setTimeSecPosition(){
		console.log('setTimeSecPosition CALLED ==================================');

	}// end function setTimeSecPosition(){

	function shareTime(url, caption){
	    console.log('function shareTime(url, caption) CALLED ************* url = ' + url + " and caption = " + caption);
	}// end function shareTime(url, caption){


	return{
        
        TimeSecPosition:function(){
          setTimeSecPosition();
        },
        share:function(url, caption){
          shareTime(url, caption);
        }
        
	};// end return

});