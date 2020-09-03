    const customName = document.getElementById('customname');
    const randomize = document.querySelector('.randomize');
    const story = document.querySelector('.story');
    let storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";
    let insertX = ['Willy the Goblin','Big Daddy','Father Christmas'];
    let insertY = ['the soup kitchen','Disneyland','the White House'];
    let insertZ = ['spontaneously combusted','melted into a puddle on the sidewalk','turned into a slug and crawled away'];

    function randomValueFromArray(array){
        const random = Math.floor(Math.random()*array.length);
        return array[random];
    }

    randomize.addEventListener('click', result);

    function result() {
        var newStory = storyText;
        xItem = randomValueFromArray(insertX);
        yItem = randomValueFromArray(insertY);
        zItem = randomValueFromArray(insertZ);
        newStory = newStory.replace(":insertx:",xItem);
        newStory = newStory.replace(":insertx:",xItem);
        newStory = newStory.replace(":inserty:",yItem);
        newStory = newStory.replace(":insertz:",zItem);
        if(customName.value !== '') {
            let name = customName.value;
            newStory = newStory.replace("Bob",name);
        }

        if(document.getElementById("uk").checked) {
            let weight = Math.round(300);
            let temperature =  Math.round(94);
            newStory = newStory.replace("300",(weight/14).toFixed()+' stone');
            newStory = newStory.replace("94",((temperature-32)*(5/9)).toFixed()+' celsius');
        }

        story.textContent = newStory;
        story.style.visibility = 'visible';
    }
