document.getElementById('tourForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulate lead capture alert
    alert('Thank you for your interest in 1030 Elmwood! Our leasing office will connect with you via email shortly.');
    
    // Reset form field values
    this.reset();
});