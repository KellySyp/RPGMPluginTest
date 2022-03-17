/*:
*
* @author Kelly
* @plugindesc Test Plugin
*
* @param Text Param
* @type text
* @default Hello World!
*
* @param Number Param
* @type number
* @desc My Number
* @min 0
* @max 5
* @decimals 5
*
* @param File param
* @type file
* @dir audio/bgm
* @require 1
* @desc Pick a song!
*
* @help
* Some Text
* Thanks!
*
*/

(function () {
	
	var params = PluginManager.parameters("testPlugin");
	
	var text = params ["Text Param"];
	var number = params ["Number Param"];
	var file = params ["File Param"];
	
	console.log(text);
	console.log(number);
	console.log(file);
	
})();
