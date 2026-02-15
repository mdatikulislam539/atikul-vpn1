function placeOrder() {
    let name = document.getElementById('userName').value;
    let sim = document.getElementById('simOperator').value;
    let vpnPackage = document.getElementById('package').value;
    let payment = document.getElementById('paymentMethod').value;
    
    let myNumber = "+8801349967157"; // এখানে আপনার নম্বর দিন

    if(name === "") {
        alert("Please enter your name!");
        return;
    }

    // ইংরেজি ফরম্যাটে হোয়াটসঅ্যাপ মেসেজ
    let text = `*New VPN Order*\n` +
               `------------------\n` +
               `*Name:* ${name}\n` +
               `*Sim:* ${sim}\n` +
               `*Package:* ${vpnPackage}\n` +
               `*Payment:* ${payment}`;

    let whatsappUrl = `https://wa.me/${myNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
}