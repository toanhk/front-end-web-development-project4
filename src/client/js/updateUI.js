/* update UI with new entry */
const updateUI = (data) => {
    document.querySelector('#agreement').innerHTML = "Agreement: " + data.agreement.toLowerCase();
    document.querySelector('#confidence').innerHTML = "Confidence: " + data.confidence + "%";
    document.querySelector('#irony').innerHTML = "Irony: " + data.irony.toLowerCase();
    document.querySelector('#subjectivity').innerHTML = "Subjectivity: " + data.subjectivity.toLowerCase();
    document.querySelector('#score_tag').innerHTML = "Sentiment: " + data.score_tag;
};

export { updateUI }