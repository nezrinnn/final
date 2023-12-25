function odemeEdildiMesaji() {

    let cardNumber = document.getElementById("cardNumber").value;
    if (cardNumber.length !== 16) {
        alert("Kart nömrəsi 16 rəqəmli olmalıdır (XXXX-XXXX-XXXX-XXXX formatında)");
        return false;
    }


    let expiryDate = document.getElementById("expiryDate").value;
    if (expiryDate.length !== 5 || expiryDate.charAt(2) !== '/') {
        alert("Keçərli tarix qeyd edin (AA/YY formasında)");
        return false;
    }


    let cvv = document.getElementById("cvv").value;
    if (cvv.length !== 3 || isNaN(cvv)) {
        alert("CVV 3 rəqəm olmalıdır");
        return false;
    }

    let cardHolderName = document.getElementById("cardHolderName").value.trim();
    if (cardHolderName === "") {
        alert("Zəhmət olmasa düzgün daxil edin!");
        return false;
    }

     alert("Ödəmə uğurludur!");
    return true;
}
