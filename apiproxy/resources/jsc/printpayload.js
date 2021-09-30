var request = context.getVariable("request.content");
var orgRequest = request;
if (request)
{
    context.setVariable("request.org.message",request);
    var logMessage2 = request.replace(/(\r\n|\n|\r)/gm,"");
    context.setVariable("request.content",orgRequest);
     print(logMessage2);
    
}