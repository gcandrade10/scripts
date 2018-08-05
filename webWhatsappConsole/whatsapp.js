function triggerMouseEvent(node, eventType) {
  var event = document.createEvent("MouseEvents");
  event.initEvent(eventType, true, true);
  node.dispatchEvent(event);
}
var chats = document.getElementsByClassName("_25Ooe");
for (var i = chats.length - 1; i >= 0; i--) {
  console.log(i+"\t"+chats[i].innerText);
}
function openChat(i)
{
  triggerMouseEvent(chats[i],"mousedown"); 
}
function send(message)
{
  var input = document.getElementsByClassName("_2S1VP copyable-text selectable-text")[0];
  input.innerHTML=message;
  input.dispatchEvent(new Event('input', {bubbles: true}));
  document.getElementsByClassName("_35EW6")[0].click();
}
