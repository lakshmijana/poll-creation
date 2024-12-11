


document.getElementById('formsignin').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const pollTitle = document.getElementById('pollTitle').value;
    const option1 = document.getElementById('option1').value;
    const option2 = document.getElementById('option2').value;

    const poll = {
        title: pollTitle,
        options: [option1, option2],
        votes: [0, 0]
    };

    displayPoll(poll);
    this.reset(); // Reset the form after submission
});

function displayPoll(poll) {
    const pollsDiv = document.getElementById('polls');

    const pollDiv = document.createElement('div');
    pollDiv.classList.add('poll');

    const titleElement = document.createElement('h4');
    titleElement.innerText = poll.title;

    const option1Element = document.createElement('button');
    option1Element.innerText = poll.options[0];
    option1Element.addEventListener('click', () => vote(poll, 0));

    const option2Element = document.createElement('button');
    option2Element.innerText = poll.options[1];
    option2Element.addEventListener('click', () => vote(poll, 1));

    pollDiv.appendChild(titleElement);
    pollDiv.appendChild(option1Element);
    pollDiv.appendChild(option2Element);

    pollsDiv.appendChild(pollDiv);
}

function vote(poll, optionIndex) {
    poll.votes[optionIndex]++;
    alert(`You voted for: ${poll.options[optionIndex]}`);
    console.log(`Current Votes: ${poll.votes}`);
}
