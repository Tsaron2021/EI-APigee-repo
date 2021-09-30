var jsattributes=context.getvariable("app.attributes");
context.setvariable("EBONDING_LOGIN","NA");
var jsonparse=JSON.parse(jsattributes);
for(attrCount in jsonParse)
{
    var attrName = jsonparse[attrCount].Name;
    var attrValue = jsonparse[attrCount].Value;
    
    if(attrbName == "EBONDING_LOGIN")
    {
        context.setVariable("EBONDING_LOGIN",attrbValue)
    }
    
}