"use strict";var index=document.querySelector(".contact-form"),email=document.getElementById("email"),small=document.getElementById("small"),btnClear=document.querySelector("button"),inputs=document.querySelector("input");function checkInputs(){""===email.value.trim()||setSucessFor(email)}function setSucessFor(e){e.parentElement.className="form-controller success"}function validate(){var e=document.getElementById("text").value;return/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/.text(e)?(alert(),!0):(alert(),!1)}index.addEventListener("submit",(function(e){e.preventDefault();var t={email:email.value},n=new XMLHttpRequest;n.open("POST","/"),n.setRequestHeader("content-type","application/json"),n.onload=function(){console.log(n.responseText),"success"==n.responseText?email.value="":alert("something went wrong")},n.send(JSON.stringify(t)),checkInputs()}));
//# sourceMappingURL=script.js.map