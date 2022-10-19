function Sorteio(){
    let input1 = document.querySelector("#Lista1");
    var l1 = input1.value;
    let input2 = document.querySelector("#Lista2");
    var l2 = input2.value;
   if (l2.length == 0){
     l2 += "🔴,🟡,🟢,🔵,🟣,⚫";
   }
    const list1 = l1.replace(".",",").split(',');
    const list2 = l2.replace(".",",").split(',');
    var result = ""
    shuffleArray(list1);
    shuffleArray(list2);
    if (l1 == "" || l2 == "")
    {
       alert("Opa... tem Lista vasia aí irmão") 
    }
    else
    {
        if (list1.length == list2.length)
        {
            for(let i = 0; i < list1.length; i++){
                result += '<br>'+list1[i] + ' ' + list2[i] + '<br><br>'
                
            }
            document.getElementById('info').innerHTML = result;
        }

        else
        {
            document.getElementById('info').innerHTML = "<br>As listas devem ter o mesmo número de informações";
        }
        
    }

}
function shuffleArray(inputArray){
    inputArray.sort(()=> Math.random() - 0.5);
}