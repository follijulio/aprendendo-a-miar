import ContatoCard from "./ContatoCard";

interface ContactProps {
    contacts: {
        image: string;
        titulo: string;
        link: string;
    }[];
}

const ContactSidebar: React.FC<ContactProps> = ({ contacts }) => {

    return (
        <div className="h-48 w-40  bg-gradient-to-br from-black/90 to-gray-900 rounded-md flex flex-col items-center justify-center">
            {contacts.map(contact => (
                <ContatoCard key={contact.titulo} link={contact.link} image={contact.image} titulo={contact.titulo}
                />
            ))}
        </div>
    );  
}

export default ContactSidebar;
