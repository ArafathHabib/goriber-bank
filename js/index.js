function displayMessage(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let unsuccessMsg = "Incorrect email and password";
    let emptyMsg3 = "";
    if(username == "admin" && password == "admin123"){
        const loginBtn = document.getElementById('login-btn');
        function display(){
            document.getElementById('username').value = emptyMsg3;
            document.getElementById('password').value = emptyMsg3;
            document.getElementById("showwronginputhere").innerText = emptyMsg3;
            document.getElementById('login-page').style.display = "none";
            document.getElementById('dashBoard').style.display = "block";
        }
        display();
    }else{
        document.getElementById("showwronginputhere").innerHTML = unsuccessMsg;
    }
}

function logout(){
        document.getElementById('dashBoard').style.display = "none";
        document.getElementById('login-page').style.display = "block";
}

//Empty Message function 
function emptyMessage(id){
    var space = " ";
    document.getElementById(id).innerText = space;
}

//Empty value function
function emptyValue(id){
    let space = " ";
    document.getElementById(id).value = space;
}

const depositButton = document.getElementById('deposit-btn');
depositButton.addEventListener('click', function(){
    const depositAmount = document.getElementById('depoAmount').value;
    let convertDepo = parseFloat(depositAmount);
    let emptyMsg2 = " ";
    let unsuccessMsg3 = "Deposit amount can't be empty.";
    let unsuccessMsg4 = "Please type any positive amount."
    if(isNaN(convertDepo) == true){
        emptyMessage("unsuccessDepoMsg2");
        document.getElementById('unsuccessDepoMsg').innerText = unsuccessMsg3;
    }else if(convertDepo < 0){
        emptyMessage("unsuccessDepoMsg");
        document.getElementById('unsuccessDepoMsg2').innerText = unsuccessMsg4;
    }else{
        let depoBalance = document.getElementById('show-depo').innerText;
        let convertedDepositBalance = parseFloat(depoBalance);
        const totalDeposit = convertDepo + convertedDepositBalance;
        document.getElementById('show-depo').innerText = totalDeposit;
        emptyValue('depoAmount');

        let balance = document.getElementById('show-balance').innerText;
        let convertedBalance = parseFloat(balance);
        let totalBalance = convertDepo + convertedBalance;
        document.getElementById('show-balance').innerText = totalBalance;
        emptyMessage('unsuccessDepoMsg2');
        emptyMessage('unsuccessDepoMsg');
    }
})

const withdrawButton = document.getElementById('withdraw-btn');
withdrawButton.addEventListener('click', function(event2){
    let balance = document.getElementById('show-balance').innerText;
    let convertedBalance = parseFloat(balance);
    
    const withdrawAmount = document.getElementById('withAmount').value;
    const convertedWithdrawAmount = parseFloat(withdrawAmount);

    let unsuccessMsg1 = "You can't withdraw more than your balance.";
    let unsuccessMsg2 = "Your balance is $0. Deposit some amount first.";
    let emptyMsg = " ";
    if(isNaN(convertedWithdrawAmount) == true){
        emptyMessage('unsuccesWithMsg1');
        emptyMessage('unsuccesWithMsg2');
        emptyMessage('unsuccesWithMsg4');
        document.getElementById('unsuccesWithMsg3').innerText = "Withdraw Amount can't be empty.";
        emptyValue('withAmount');
    }else if(convertedWithdrawAmount < 0){
        emptyMessage('unsuccesWithMsg1');
        emptyMessage('unsuccesWithMsg2');
        emptyMessage('unsuccesWithMsg3');
        document.getElementById('unsuccesWithMsg4').innerText = "Withdraw amount can't be negative";
        document.getElementById('withAmount').value = "";
    }
    else if(convertedBalance == 0){
        emptyMessage('unsuccesWithMsg3');
        emptyMessage('unsuccesWithMsg2');
        emptyMessage('unsuccesWithMsg4');
       document.getElementById('unsuccesWithMsg1').innerText = unsuccessMsg2;
       document.getElementById('withAmount').value = "";
    }else if(convertedBalance < convertedWithdrawAmount){
        emptyMessage('unsuccesWithMsg3');
        emptyMessage('unsuccesWithMsg1');
        emptyMessage('unsuccesWithMsg4');
        document.getElementById('unsuccesWithMsg2').innerText = unsuccessMsg1;
        document.getElementById('withAmount').value = "";
    }else{
    let withdrawBalance = document.getElementById('show-with').innerText;
    let convertedWithdrawBalance = parseFloat(withdrawBalance);
    let totalWithdrawBalance = convertedWithdrawAmount + convertedWithdrawBalance;
    document.getElementById('show-with').innerText = totalWithdrawBalance;

    let totalBalance = convertedBalance - convertedWithdrawAmount;
    document.getElementById('show-balance').innerText = totalBalance;
    document.getElementById('withAmount').value = "";
    emptyMessage('unsuccesWithMsg3');
    emptyMessage('unsuccesWithMsg1');
    emptyMessage('unsuccesWithMsg4');
    emptyMessage('unsuccesWithMsg2');
    }
})