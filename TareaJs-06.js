const users = [
    {
        id: 1,
        user_name: 'User1',
        description: 'lorem ipsum',
        age: '46',
        fav_music: {
            bands: [
                'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    },
    {
        id: 2,
        user_name: 'User LastName',
        description: 'Lorem lorem lorem',
        age: '23',
        fav_music: {
            bands: [
               'Band 1', 'Band 2', 'Band 3', 'Band 4'
            ]
        }
    }
];

function createCard(user) {
    const card = document.createElement('div');
    card.classList.add('card');

    const userName = document.createElement('h2');
    userName.textContent = user.user_name;
    card.appendChild(userName);

    const description = document.createElement('p');
    description.textContent = user.description;
    card.appendChild(description);

    const age = document.createElement('p');
    age.textContent = `Age: ${user.age}`;
    card.appendChild(age);

    const bandsTitle = document.createElement('h3');
    bandsTitle.textContent = 'Favorite Bands:';
    card.appendChild(bandsTitle);

    const bandsList = document.createElement('ul');
    user.fav_music.bands.forEach(band => {
        const bandItem = document.createElement('li');
        bandItem.textContent = band;
        bandsList.appendChild(bandItem);
    });
    card.appendChild(bandsList);

    return card;
}

function displayCards(users) {
    const container = document.getElementById('cards-container');
    users.forEach(user => {
        const card = createCard(user);
        container.appendChild(card);
    });
}

document.addEventListener('DOMContentLoaded', function() {
    displayCards(users);
});