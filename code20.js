gdjs.Manteigaria_32FimCode = {};
gdjs.Manteigaria_32FimCode.GDyesObjects1_1final = [];

gdjs.Manteigaria_32FimCode.GDscoreObjects1= [];
gdjs.Manteigaria_32FimCode.GDscoreObjects2= [];
gdjs.Manteigaria_32FimCode.GDscoreObjects3= [];
gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1= [];
gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects2= [];
gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects3= [];
gdjs.Manteigaria_32FimCode.GDURLObjects1= [];
gdjs.Manteigaria_32FimCode.GDURLObjects2= [];
gdjs.Manteigaria_32FimCode.GDURLObjects3= [];
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects1= [];
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects2= [];
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects3= [];
gdjs.Manteigaria_32FimCode.GDpistagmObjects1= [];
gdjs.Manteigaria_32FimCode.GDpistagmObjects2= [];
gdjs.Manteigaria_32FimCode.GDpistagmObjects3= [];
gdjs.Manteigaria_32FimCode.GDprox_95localObjects1= [];
gdjs.Manteigaria_32FimCode.GDprox_95localObjects2= [];
gdjs.Manteigaria_32FimCode.GDprox_95localObjects3= [];
gdjs.Manteigaria_32FimCode.GDnoObjects1= [];
gdjs.Manteigaria_32FimCode.GDnoObjects2= [];
gdjs.Manteigaria_32FimCode.GDnoObjects3= [];
gdjs.Manteigaria_32FimCode.GDyesObjects1= [];
gdjs.Manteigaria_32FimCode.GDyesObjects2= [];
gdjs.Manteigaria_32FimCode.GDyesObjects3= [];
gdjs.Manteigaria_32FimCode.GDfundoObjects1= [];
gdjs.Manteigaria_32FimCode.GDfundoObjects2= [];
gdjs.Manteigaria_32FimCode.GDfundoObjects3= [];
gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1= [];
gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects2= [];
gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects3= [];


gdjs.Manteigaria_32FimCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_amarela"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_azul"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_castanha"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_rosa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_roxa"));
if (isConditionTrue_1) {
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().get("UID_atual")) != gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("UID_verde"));
}
}
}
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Logout", false);
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}}

}


};gdjs.Manteigaria_32FimCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15038012);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Track", gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Team", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Progress", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(2)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Hour", runtimeScene.getScene().getVariables().get("hour"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("Timer", "Minute", runtimeScene.getScene().getVariables().get("minute"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15042516);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 0, 1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 0, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15049404);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15051388);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15054644);
}
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "click-21156.mp3", false, 100, 1);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(15056900);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.database.updateField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Score", gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.sound.playSound(runtimeScene, "correct-2-46134.mp3", false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, (( gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1.length === 0 ) ? "" :gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1[0].getString()), false);
}}

}


};gdjs.Manteigaria_32FimCode.eventsList6 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "UID");
}{gdjs.evtsExt__Geolocation__LocatePlayer.func(runtimeScene, runtimeScene.getScene().getVariables().get("GPS"), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().get("UID_atual").setString(gdjs.evtTools.firebaseTools.auth.userManagement.getUID());
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Amarela", runtimeScene.getScene().getVariables().get("UID_amarela"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Azul", runtimeScene.getScene().getVariables().get("UID_azul"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Castanha", runtimeScene.getScene().getVariables().get("UID_castanha"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Rosa", runtimeScene.getScene().getVariables().get("UID_rosa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Roxa", runtimeScene.getScene().getVariables().get("UID_roxa"), runtimeScene.getScene().getVariables().get("error"));
}{gdjs.evtTools.firebaseTools.database.getField("UID", "Verde", runtimeScene.getScene().getVariables().get("UID_verde"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "UID") > 5;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(17);
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1[i].setString("Percurso Sta Catarina");
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("next_scene"), gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1);
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "next scene");
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") <= 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("hour")));
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("minute")));
}{gdjs.evtTools.firebaseTools.database.getField(gdjs.evtTools.firebaseTools.auth.userManagement.getUID(), "Next", runtimeScene.getScene().getVariables().get("next"), runtimeScene.getScene().getVariables().get("error"));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 10;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDscoreObjects1[i].setString("00" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 10;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 100;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDscoreObjects1[i].setString("0" + gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) >= 100;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("score"), gdjs.Manteigaria_32FimCode.GDscoreObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDscoreObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDscoreObjects1[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(1)));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("prox_local"), gdjs.Manteigaria_32FimCode.GDprox_95localObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDprox_95localObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDprox_95localObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32FimCode.GDprox_95localObjects1[k] = gdjs.Manteigaria_32FimCode.GDprox_95localObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDprox_95localObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList2(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("no"), gdjs.Manteigaria_32FimCode.GDnoObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDnoObjects1[i].isVisible() ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32FimCode.GDnoObjects1[k] = gdjs.Manteigaria_32FimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDnoObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDnoObjects1.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDnoObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Manteigaria_32FimCode.GDnoObjects1[k] = gdjs.Manteigaria_32FimCode.GDnoObjects1[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDnoObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Manteigaria_32FimCode.GDnoObjects1 */
gdjs.copyArray(runtimeScene.getObjects("task_confirmation"), gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1);
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects1);
{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDnoObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDnoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDyesObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDyesObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1.length ;i < len;++i) {
    gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1[i].hide();
}
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList3(runtimeScene);} //End of subevents
}

}


{

gdjs.Manteigaria_32FimCode.GDyesObjects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("yes"), gdjs.Manteigaria_32FimCode.GDyesObjects2);
{let isConditionTrue_2 = false;
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDyesObjects2[i].isVisible() ) {
        isConditionTrue_2 = true;
        gdjs.Manteigaria_32FimCode.GDyesObjects2[k] = gdjs.Manteigaria_32FimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = k;
if (isConditionTrue_2) {
isConditionTrue_2 = false;
for (var i = 0, k = 0, l = gdjs.Manteigaria_32FimCode.GDyesObjects2.length;i<l;++i) {
    if ( gdjs.Manteigaria_32FimCode.GDyesObjects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_2 = true;
        gdjs.Manteigaria_32FimCode.GDyesObjects2[k] = gdjs.Manteigaria_32FimCode.GDyesObjects2[i];
        ++k;
    }
}
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = k;
}
isConditionTrue_1 = isConditionTrue_2;
}
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Manteigaria_32FimCode.GDyesObjects2.length; j < jLen ; ++j) {
        if ( gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.indexOf(gdjs.Manteigaria_32FimCode.GDyesObjects2[j]) === -1 )
            gdjs.Manteigaria_32FimCode.GDyesObjects1_1final.push(gdjs.Manteigaria_32FimCode.GDyesObjects2[j]);
    }
}
}
{
isConditionTrue_1 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("next")) == gdjs.evtTools.firebaseTools.auth.userManagement.getUID();
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.Manteigaria_32FimCode.GDyesObjects1_1final, gdjs.Manteigaria_32FimCode.GDyesObjects1);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "next scene");
}{runtimeScene.getScene().getVariables().get("next").setString("");
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "next scene") >= 0.5;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(2);
}{gdjs.evtTools.leaderboards.savePlayerScore(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(3)), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
{ //Subevents
gdjs.Manteigaria_32FimCode.eventsList5(runtimeScene);} //End of subevents
}

}


};

gdjs.Manteigaria_32FimCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Manteigaria_32FimCode.GDscoreObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDscoreObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDscoreObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDnext_95sceneObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDURLObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDfundopistagmObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDpistagmObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDprox_95localObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDprox_95localObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDprox_95localObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDnoObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDyesObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDfundoObjects3.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects1.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects2.length = 0;
gdjs.Manteigaria_32FimCode.GDtask_95confirmationObjects3.length = 0;

gdjs.Manteigaria_32FimCode.eventsList6(runtimeScene);

return;

}

gdjs['Manteigaria_32FimCode'] = gdjs.Manteigaria_32FimCode;
