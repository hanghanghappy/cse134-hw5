import { display } from "./httpdisplay.js";

var requestType;
document.addEventListener('DOMContentLoaded', init);

function init(){
    const postBtn = document.getElementById("postBtn");
    const getBtn = document.getElementById("getBtn");
    const putBtn = document.getElementById("putBtn");
    const deleteBtn = document.getElementById("deleteBtn");
    const form = document.getElementById("entryform");
    postBtn.addEventListener("click", () => {
        requestType = "POST";
    })
    getBtn.addEventListener("click", () => {
        requestType = "GET";
    })
    putBtn.addEventListener("click", () => {
        requestType = "PUT";
    })
    deleteBtn.addEventListener("click", () => {
        requestType = "DELETE";
    })
    form.addEventListener("submit", httpRequest);
}

function httpRequest(event){
    event.preventDefault();
    
    let response = document.getElementById("response");
    response.innerHTML = "";

    const idValue = document.getElementById("id");
    const articleName = document.getElementById("article_name");
    const articleBody = document.getElementById("article_body");
    let tdyDate = new Date();
    
    let formData = new FormData();
    formData.append("id", idValue.value);
    formData.append("article_name", articleName.value);
    formData.append("article_body", articleBody.value);
    formData.append("date", tdyDate)

    let theRequest = new XMLHttpRequest();
    if (requestType == "POST"){
        theRequest.open("POST", "https://httpbin.org/post");
    }
    else if (requestType == "GET"){
        theRequest.open("GET", "https://httpbin.org/get");
    }
    else if (requestType == "PUT"){
        theRequest.open("PUT", "https://httpbin.org/put");
    }
    else if (requestType == "DELETE"){
        theRequest.open("DELETE", "https://httpbin.org/delete");
    }
    theRequest.send(formData);
    theRequest.addEventListener("load", display);
}