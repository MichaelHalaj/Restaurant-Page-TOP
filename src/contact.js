import { removeAllChildren } from "./functions";
const person = (name, position, phone, email) => ({ name, position, phone, email });
const createContact = (content) => {
    removeAllChildren(content);
    let contactList = [];
    contactList.push(person('Michael', 'CEO', '800-999-9999', 'michael@email.com'));
    for(let i = 0; i < contactList.length; i++){
        const contactCard = document.createElement('div');
        const name = document.createElement('h3');
        const position = document.createElement('h4');
        const phone = document.createElement('div');
        const email = document.createElement('div');

        const contactItem = contactList[i];
        name.textContent = contactItem.name;
        position.textContent = contactItem.position;
        phone.textContent = contactItem.phone;
        email.textContent = contactItem.email;

        contactCard.appendChild(name);
        contactCard.appendChild(position);
        contactCard.appendChild(phone);
        contactCard.appendChild(email);
        content.appendChild(contactCard);
    }

}
export default createContact;