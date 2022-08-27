import { getHellfireClubSubscriptions, subscribeToHellfireClub } from './firebase/hellfire-club.js';

const txtName = document.getElementById('txtName');
const txtEmail = document.getElementById('txtEmail');
const txtLevel = document.getElementById('txtLevel');
const txtCharacter = document.getElementById('txtCharacter');


const btnSubscribe = document.getElementById('btnSubscribe');

btnSubscribe.addEventListener('click', async () => {
    const subscription = {
        name: txtName.value,
        email: txtEmail.value,
        level: txtLevel.value,
        character: txtCharacter.value
    }

    //salvar no banco de dados!
    const subscriptionId = await subscribeToHellfireClub(subscription)
    alert(`Cadastro Inscrito com sucesso: ${subscriptionId}`)

    txtName.value = ''
    txtEmail.value = ''
    txtLevel.value = ''
    txtCharacter.value = ''

})

async function loadData() {
    const subscriptions = await getHellfireClubSubscriptions()
    console.log(subscriptions)
}

loadData()
