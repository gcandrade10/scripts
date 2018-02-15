var global =parseInt(document.getElementsByClassName("fcg")[0].textContent.split(" ")[0].replace(".",""));
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
		for(i=0;i<coments.length;i++)
		{
		console.log(coments[i].innerText);
		}
	}
		
    
}
alertFunc();

