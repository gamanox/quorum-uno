# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
#= require jquery
#= require jquery_ujs
#= require jquery.tinyscrollbar.min

if window.matchMedia("screen and (max-width: 40em)").matches
	document.write "<link href=\"/assets/judges-mobile-portrait.css?body=1\" media=\"screen and (max-width: 40em)\" rel=\"stylesheet\" type=\"text/css\">"
if window.matchMedia("screen and (min-width: 40.01em) and (max-width: 64em)").matches
	document.write "<link href=\"/assets/judges-tablet-portrait.css?body=1\" media=\"screen and (min-width: 40.01em) and (max-width: 64em)\" rel=\"stylesheet\" type=\"text/css\">"
if window.matchMedia("screen and (min-width: 64.01em)").matches
	document.write "<link href=\"/assets/judges-desktop.css?body=1\" media=\"screen and (min-width: 64.01em)\" rel=\"stylesheet\" type=\"text/css\">"

$(window).on "resize", ->
	$("body").fadeOut ->
		location.reload()

$ ->
