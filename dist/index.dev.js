"use strict";

var operand = null;
var previousOperator = null;
var displayRunningTotal = false;
var display = document.querySelector("h1");
document.addEventListener('keydown', keyPressed);