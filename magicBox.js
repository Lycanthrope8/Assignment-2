function clearAll(){
    document.getElementById('textarea').value="";
}

function capitalize(){
    var text=document.getElementById('textarea');
    if(text.style.textTransform==="uppercase"){
        text.style.textTransform="none";
    }else{
        text.style.textTransform="uppercase";
    }
}

function sort(){
    var textarea = document.getElementById('textarea');
    var lines = textarea.value.split("\n");
    // var sorted = [];
    for (let i=0;i<lines.length;i++){
        lines[i]=lines[i].split('').sort().join("");
    }
    textarea.value=lines.join("\n");
}

function reverse(){
    var textarea=document.getElementById('textarea');
    var lines=textarea.value.split("\n");
    for(let i=0;i<lines.length;i++){
        lines[i]=lines[i].split("").reverse().join("");

    }
    // textarea.value=reversedLines
    // console.log(reversedLines);
    textarea.value=lines.join("\n")
}

function stripBlank(){
    var textarea=document.getElementById('textarea');
    var lines=textarea.value.split('\n');
    var stripped=[];
    for(let i=0;i<lines.length;i++){
        if(lines[i]!==''){
            stripped.push(lines[i].trim());
        }
    }
    textarea.value=stripped.join("\n");
}

function addNumbers(){
    var textarea = document.getElementById('textarea');
    lines=textarea.value.split("\n");
    for(let i=0;i<lines.length;i++){
        lines[i] = (i+1) + ". " + lines[i];
    }
    textarea.value=lines.join("\n");
}


function shuffle(){
    var textarea = document.getElementById('textarea');
    lines = textarea.value.split("\n");
    lines.sort(()=>Math.random()-0.5);
    textarea.value = lines.join("\n");
}
