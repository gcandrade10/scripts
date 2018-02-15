//how many comments you want?
var global =1091;
var coments =document.getElementsByClassName("UFICommentActorAndBody");
function myFunction() 
{
    setTimeout(alertFunc, 3000);
}
function alertFunc() 
{
	var a =document.getElementsByClassName("UFIPagerLink")[0]; 
	a.click();
    coments =document.getElementsByClassName("UFICommentActorAndBody");
    console.log(coments.length);
    if(coments.length<global)
    {
        myFunction();
    }
	else
	{
		var listOfObjects = [];
		for(i=0;i<coments.length;i++)
		{
		
		var myObj = { "name":coments[i].children[0].innerText, 
			     "comment":coments[i].children[1].innerText,
			     "profile":coments[i].children[0].children[0].href};
		listOfObjects.push(myObj);
		}
		function download(text, name, type) {
		    var a = document.createElement("a");
		    var file = new Blob([text], {type: type});
		    a.href = URL.createObjectURL(file);
		    a.download = name;
		    a.click();
		}
		download(JSON.stringify(listOfObjects), 'test.txt', 'text/plain');
	}
		
    
}
alertFunc();

