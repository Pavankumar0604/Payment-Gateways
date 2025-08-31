var options = {
        "key": "rzp_test_RBr0XU0jMzu6ME", // Enter the Key ID generated from the Dashboard
        "amount": "50000", // Amount is in currency subunits.
        "currency": "INR", // Set your currency (e.g., INR, USD, etc.)
        "name": "Pavan Corp", // Your business name
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": "order_RBsgmwYbhG8Zd3", // Pass the order ID received from server#order_RBryyFQPSb8dvh
        "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
        "prefill": {
            "name": "Pavan kumar", // Your customer's name
            "email": "penumurupavankumar@gmail.com",
            "contact": "7989628479" // Customer's phone
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
            "color": "#3399cc"
        }
    };



    var rzp1 = new Razorpay(options);

    document.getElementById('pay-button').onclick = function(e) {
        rzp1.open();
        e.preventDefault();
    }

    // Optional: Listen for payment failures
    rzp1.on('payment.failed', function (response){
        alert("Payment Failed: " + response.error.description);
        console.log(response);
    });