var request = context.getVariable("request.content");
var loginId = context.getvariable("app.login_id");

if (request)
{
    
    var elements = request.match(/(:\s*"(\\"|[^"])*)"/g);
    
    if(elements)
          elements.forEach(getFields);
          
    if(loginId && (loginId === 'EB_JABIL_DC' || loginId === 'EB_JABIL_TT'))
        request = request.replace(/\|/g, "\\n");
        
    print('Request' + request);
    var logMessage2 = request.replace.replace(/\n|\r/g, "");
    context.setVariable("request.content",logMessage2);
    context.setVariable("request.org.message",request);
}
 function getFields(item, index){
     var temp = ":" + item.substring(item.indexOf('"'));
     var field= temp.replace(/\r\n|\n|\r/g, "\\n");
     request = request.replace(item, field);
 }   
 