import { updateUI } from './updateUI.js';
import { checkForName } from './nameChecker.js';

async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    if (checkForName(formText)) {
        alert("Please input text")
    }
    else {
        await getAnalysis('http://localhost:8081/call', { data: formText })
            .then(apiData => apiData.json())
            .then(function (data) {
                console.log(data);
                updateUI(data)
            })
    }

}

async function getAnalysis(url, userInput) {

    let response = await fetch(url, {
        // Must use POST. GET can't have a body, so can't send URL to server
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        // Body data type must match "Content-Type" header        
        body: JSON.stringify(userInput),
    })

    return response
}
export { handleSubmit }
