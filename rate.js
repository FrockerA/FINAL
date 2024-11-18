document.getElementById('rateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);

    const feedback = {};
    formData.forEach((value, key) => {
        feedback[key] = value;
    });
    console.log('User Feedback:', feedback);

    document.getElementById('rateForm').classList.add('hidden');
    document.getElementById('thankYouMessage').classList.remove('hidden');
});
