document.getElementById('moonpay-button').addEventListener('click', function() {
    // Initialize the MoonPay SDK
    const moonpay = new MoonPay({
        apiKey: 'sk_test_NDcqkTEdRX3WOFAN7OYMHkvHf6NGWQa', // Replace with your MoonPay public API key
    });

    // Create the widget
    const widget = moonpay.createWidget({
        currencyCode: 'btc', // Example: 'btc' for Bitcoin, change to desired cryptocurrency
        walletAddress: 'bgehoierheterggiosdfygydf', // Replace with your wallet address
        showPaymentMethods: true, // Display all available payment methods
    });

    // Append the widget to the container
    document.getElementById('moonpay-widget-container').appendChild(widget);

    // Open the widget
    widget.open();
});
