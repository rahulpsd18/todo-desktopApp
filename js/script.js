$("body").css("overflow", "hidden");
$(document).on('click', 'a', function(event) {
	event.preventDefault();
    require("shell").openExternal(this.href);
  });
$(document).ready(function() {
	$("input[type='text']").hide();
	if(localStorage.length==0){
		localStorage.setItem('task-199',"Hover over to reveal delete button");
		localStorage.setItem('task-198',"Click here to unmark me.");
		localStorage.setItem('task-198value',1);
		localStorage.setItem('task-197',"Hello there :)");
		for(var key in localStorage) {
    	taskID=key;
    	if (taskID.match(/value/g)===null){
    	if (localStorage.getItem(taskID+'value')==1){
    		// console.log(localStorage.getItem(taskID)+" is striked");
    		$('ul').append("<li id='" + taskID + "' class='completed'><span><i class='fa fa-trash'></i></span> " + localStorage.getItem(taskID) + "</li>");
    	}
    	else{
    		// console.log(localStorage.getItem(taskID)+" is ORIGINAL");
    		$('ul').append("<li id='" + taskID + "'><span><i class='fa fa-trash'></i></span> " + localStorage.getItem(taskID) + "</li>");
    	}
	}}
	}
});
$("ul").on("click","li",function(){
	// $(this).toggleClass("completed");
	if($(this).css("color") === "rgb(102, 102, 102)"){
		$(this).css({
			color:"gray",
			textDecoration:"line-through"
		});
		taskID = $(this).attr('id');
		localStorage.setItem(taskID+'value', 1);
		console.log(localStorage.getItem(taskID)+" "+localStorage.getItem(taskID+'value'));
	}
	else{
		$(this).css({
			color:"#666",
			textDecoration:"none"
		});
		taskID = $(this).attr('id');
		localStorage.setItem(taskID+'value', 0);
		// console.log(localStorage.getItem(taskID)+" "+localStorage.getItem(taskID+'value'));
	}
});
(function () {
      
      const remote = require('electron').remote; 
      
      function init() {
		const window = remote.getCurrentWindow();

		  document.getElementById("min-btn").addEventListener("click", function (e) {
          window.minimize(); 
        });
        
        document.getElementById("max-btn").addEventListener("click", function (e) {          
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }	 
});


        document.getElementById("times").addEventListener("click", function (e) {
		  setTimeout(window.close(),5000);
        }); 
      }; 
      
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init(); 
        }
      };
})();
$("ul").on("click","span",function(event){
	self = $(this).parent();
    taskID = self.attr('id');
    // console.log(taskID+" is "+localStorage.getItem(taskID));
    localStorage.removeItem(taskID);
    localStorage.removeItem(taskID+'value');
    self.fadeOut(500, function () {
        self.remove();
    });
	event.stopPropagation();
});

$("#pm").click(function () { 
     if($(this).hasClass("fa-plus")){
          $(this).removeClass("fa-plus").addClass("fa-minus").fadeIn();  
          $("input[type='text']").fadeToggle();
		   $("input[type='text']").focus();
          // console.log("Input Box Shown");
     }
     else if($(this).hasClass("fa-minus")){
          $(this).removeClass("fa-minus").addClass("fa-plus").fadeIn();  
          $("input[type='text']").fadeToggle();
          // console.log("Input Box Hidden");
     }
});

for(var key in localStorage) {
    	taskID=key;
    	if (taskID.match(/value/g)===null){
    	if (localStorage.getItem(taskID+'value')==1){
    		// console.log(localStorage.getItem(taskID)+" is striked");
    		$('ul').append("<li id='" + taskID + "' class='completed'><span><i class='fa fa-trash'></i></span> " + localStorage.getItem(taskID) + "</li>");
    	}
    	else{
    		// console.log(localStorage.getItem(taskID)+" is ORIGINAL");
    		$('ul').append("<li id='" + taskID + "'><span><i class='fa fa-trash'></i></span> " + localStorage.getItem(taskID) + "</li>");
    	}
    	
        console.log("Fetch");    	
	}}
$(document).ready(function () {    
    $('#clear').click(function () {
        localStorage.clear();
        location.reload();
        console.log("Cleared All");
    });
    $("input[type='text']").on("keypress",function (event) {
        if (event.which === 13) {
        	if (!$(this).val()){
        		// console.log("No Data");
        	}
        	else{
            var taskID = "task-" + Math.floor(Math.random()*1000+Math.random()*100/Math.random()+10);
            var taskMessage = $(this).val();
            console.log("Entered "+ taskID +" : "+ taskMessage);
            // console.log(taskID + 'value');
            localStorage.setItem(taskID, taskMessage);
            localStorage.setItem(taskID+'value', 0);
            $('ul').append("<li id='" + taskID + "'><span><i class='fa fa-trash'></i></span> " + taskMessage + "</li>");
            var task = $('#' + taskID);
            $(this).val("")
        }}
    });
});