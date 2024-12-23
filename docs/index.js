function displayBlessings() {
    const name = document.getElementById('nameInput').value;
    const formSection = document.getElementById('formSection');
    const blessingSection = document.getElementById('blessingSection');

    if (name) {
        document.getElementById('blessingMessage').innerText = `Dear ${name}, may Lord Krishna bless you with happiness, prosperity, and peace.`;
        formSection.style.display = 'none';
        blessingSection.style.display = 'block';
    } else {
        alert('Please enter your name to receive blessings.');
    }
}
