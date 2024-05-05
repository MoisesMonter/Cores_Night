function addParticipantInput() {
    const participantsList = document.getElementById("participants");
    const li = document.createElement("li");
    const input = document.createElement("input");
    const button = document.createElement("button");
    input.className = "participantInput";
    input.type = "text";
    input.placeholder = "Digite o nome do participante...";


    button.className = "removeParticipantButton";
    button.type = "button";
    button.setAttribute("tabindex","-1");
    const trashIcon = document.createElement("img");
    trashIcon.src = "https://img.icons8.com/material-rounded/24/000000/full-trash.png";
    trashIcon.width = 17;
    trashIcon.height = 17;
    trashIcon.alt = "full-trash";
    button.appendChild(trashIcon);
    button.addEventListener("click", function() {
        removeParticipantInput(li);
    });
    li.appendChild(input);
    li.appendChild(button);
    participantsList.appendChild(li);
    input.focus();
}
function removeParticipantInput(li) {
    li.remove();
}


function Sorteio() {
    const colorListInput = document.getElementById("colorListInput");
    let colorList = colorListInput.value.trim();

    // Se a lista de cores estiver vazia, use a lista padrão
    if (colorList === "") {
        colorList = ["🔴", "🟡", "🟢", "🔵", "🟣", "⚫"];
    } else {
        // Divida a lista de cores em um array
        colorList = colorList.split(",");
    }

    const participantInputs = document.querySelectorAll(".participantInput");
    const participants = [];
    participantInputs.forEach(input => {
        const name = input.value.trim();
        if (name !== "") {
            participants.push(name);
        }
    });

    if (participants.length === 0) {
        alert("Por favor, adicione pelo menos um participante.");
        return;
    }

    if (participants.length !== colorList.length) {
        alert("O número de participantes deve ser igual ao número de cores na lista.");
        return;
    }

    let result = "";

    // Copia da lista de cores para garantir que não haja repetições
    let availableColors = [...colorList];

    participants.forEach(participant => {
        // Sorteia uma cor aleatória disponível
        const randomIndex = Math.floor(Math.random() * availableColors.length);
        const randomColor = availableColors[randomIndex];
        
        // Remove a cor sorteada da lista de cores disponíveis
        availableColors.splice(randomIndex, 1);

        result += participant + " " + randomColor + "<br><br>";
    });

    document.getElementById('info').innerHTML = result;
}
