var request = context.getVariable("request.content");

if (request) {
    //var logMessage2 = request.replace(/<br ?\/?>/g, '\\n');
    //contex.setVariable("request.content", logMessage2);
    contex.setVariable("request.org.message", request);
    
}