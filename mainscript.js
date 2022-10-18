function Sorteio(){
    let input1 = document.querySelector("#Lista1");
    var l1 = input1.value;
    let input2 = document.querySelector("#Lista2");
    var l2 = input2.value;

    var list1 = l1.split(",");

    var list2 = l2.split(",");
    var result = ""
    if (l1 == "" || l2 == "")
    {
       alert("Opa... tem Lista vasia aí irmão") 
    }
    else
    {
        resultado.innerHTML = l1.value;
        if (list1.length == list2.length)
        {
           
            for (let i = 0; i <= list1.length; i++)
            {
                result += list1[i] + "\n" + list2[i]
            }
             
        }
        else
        {
            alert("As listas devem ter o mesmo número de informações")
        }
    }
    
    resultado.innerHTML = list1
}
    //resultado.innerHTML = string
