//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.

const teamList = [
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg'

},
{
    name: 'Walter Gordon',
    role: 'Office Manager',
    image: 'walter-gordon-office-manager.jpg'
},
{
    name: 'Angela Lopez',
    role: 'Social Media Manager',
    image: 'angela-lopez-social-media-manager.jpg'
},
{
    name: 'Scott Estrada',
    role: 'Developer',
    image: 'scott-estrada-developer.jpg'
},
{
    name: 'Barbara Ramos',
    role: 'Graphic Designer',
    image: 'barbara-ramos-graphic-designer.jpg'
}
]



//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto


function writeMember(teamMember){
    const memberContainer = document.querySelector('.team-container');
    memberContainer.innerHTML += `
        <div class="team-card">
        <div class="card-image">
        <img src="img/${teamMember.image}" alt="${teamMember.name}"/>
        </div>
        <div class="card-text">
        <h3>${teamMember.name}</h3>
        <p>${teamMember.role}</p>
        </div>
    </div>`;
}