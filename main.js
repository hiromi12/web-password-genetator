// Author: Hiromi Honda
// Date: 02-22-2023

function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const special = document.getElementById('special').checked;

    let chars = '';

    if (uppercase) {
      chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }

    if (lowercase) {
      chars += 'abcdefghijklmnopqrstuvwxyz';
    }

    if (numbers) {
      chars += '0123456789';
    }

    if (special) {
      chars += '!@#$%^&*()_+-={}[]|;:,.<>?';
    }

    let password = '';

    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    document.getElementById('result').value = password;
  }

  function updateValue(value) {
    document.getElementById('lengthValue').textContent = value;
  }

  // copy the result
  function copyToClipboard() {
    const result = document.getElementById("result");
    result.select();
    document.execCommand("copy");
    alert("Copied the text: " + result.value);
  }