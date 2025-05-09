var list = document.getElementById('list');

function todoApp(){
        var txt = document.getElementById('inputTxt');
        
        var trr = document.createElement('tr')
        var tdd = document.createElement('td')
        var tdtxt = document.createTextNode(txt.value);
        trr.appendChild(tdd);
        tdd.appendChild(tdtxt);
        list.appendChild(trr);
        var hr = document.createElement('hr')
        console.log(trr)
        var delbtn =document.createElement('button');
        var deltd =document.createElement('td');
        var deltxt = document.createTextNode('Delete');
        delbtn.appendChild(deltxt);
        deltd.appendChild(delbtn);
        trr.appendChild(deltd)  
        
        delbtn.setAttribute("class","btn1");
        delbtn.setAttribute("onclick", "delfun(this)");
        
        trr.setAttribute('class', 'trr')
        txt.value ='';
}

function dltAll(){
      list.innerhtml = '';  
}

function delfun(adeel){
        adeel.parentNode.parentNode.remove();
        // console.log(adeel.parentNode.remove())


}


