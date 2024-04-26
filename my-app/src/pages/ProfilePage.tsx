import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {Member} from "../interface/Member";

const ProfilePage: React.FC = () => {
    const { id } = useParams<string>();
    const [member, setMember] = useState<Member | null>(null);

    useEffect(() => {
        const fetchMemberData = async () => {
            // Define the members array correctly
            const members: Member[] = [
                {
                    id: 1,
                    name: 'Max Lee',
                    role: 'Student',
                    image: 'https://media.licdn.com/dms/image/D4D03AQFPOKdKGlBA0w/profile-displayphoto-shrink_800_800/0/1708106515253?e=1719446400&v=beta&t=0a3tBJ9Ea7YB1EKeP2daJmiLrQX_qvjl9igbSBeh--E',
                    LinkToCV: 'https://drive.google.com/file/d/17umC7BEtpukaAYiAra28qE1aSt2CaHju/view?usp=sharing',
                    description: 'Jeg er en blid student med en passion for programmering. Har erfaring innen fullstack hvor jeg har erfaring med React og Java Springboot. Jeg mener at samarbeid mot et felles mål er nøkkelen til å lykkes. Praksis handler om å kunne tilegne seg kunnskap, men også forhåpentligvis bringe ny innsikt til arbeidsplassen.'
                },
                {
                    id: 2,
                    name: 'Jeppe Strømberg',
                    role: 'Student',
                    image: 'https://media.licdn.com/dms/image/D4D03AQGKAVaAlR8jmg/profile-displayphoto-shrink_800_800/0/1705926113512?e=1719446400&v=beta&t=ZGBnb3P0bscirZZaJLcHa59END-dVgTfz8qdL_sq6Io',
                    description: 'Jeg er en utadvendt, vennlig og pliktoppfyllende student ved Universitetet i Agder, der jeg studerer IT- og informasjonssystemer. Min lidenskap for IT har vokst gjennom hele bachelorstudiet mitt, og jeg har opparbeidet meg betydelig erfaring på dette feltet. Jeg er svært interessert i muligheten til å utføre praksis hos dere, da jeg har gjort research om deres arbeid, og syntes det virker veldig interressant',
                    LinkToCV: 'https://drive.google.com/file/d/1B_LLOPTPvEWvczAyP6RKXYc53YQhv0p-/view?usp=sharing',

                },
                {
                    id: 3,
                    name: 'Andreas Mørkesdal',
                    role: 'Student',
                    image: 'https://media.licdn.com/dms/image/D4E03AQHMFORjvQHEkw/profile-displayphoto-shrink_800_800/0/1712234915388?e=1719446400&v=beta&t=I2PmYMkq3V8k-0IeWMLU49x0snzVLo4Z0p2B3LdOVvQ',
                    description: 'Jeg er en 24 år gammel IT student ved Universitetet i Agder, med fagbrev som IKT-servicemedarbeider.\n' +
                        'Gjennom min erfaring som IKT-servicemedarbeider i Skien kommune har jeg utviklet god forståelse for teknologiens samspill med mennesker og verdien av løsningsorientert tilnærming. Studiet mitt har videreutviklet min kompetanse innen analyse av brukerbehov og design/utvikling av bærekraftige teknologiske løsninger. Egde virker som det ideelle stedet for meg å utvide min kompetanse, og jeg er klar til å bidra med min arbeidsinnsats og samarbeidsevne',
                    LinkToCV: 'https://drive.google.com/file/d/1siBjtgegJcGXDxzm8MEJ8u1zNjgSE_bq/view?usp=drive_link'
                }
            ];
            const selectedMember = members.find(m => m.id.toString() === id);
            setMember(selectedMember ?? null);
        };

        fetchMemberData();
    }, [id]);

    if (!member) return <p>Loading member data...</p>;

    return (
        <div>
            <div className="container mx-auto mt-8 md:mt-0 md:space-x-10 md:grid grid-cols-3 justify-center md:py-40">
                <div className="grid justify-center items-center order-1 col-span-1">
                    <img className="lg:h-80 md:h-64 h-40 rounded-full" src={member.image} alt="" />
                </div>
                <div className="mt-8 md:mt-0 lg:justify-end col-span-2">
                    <h1 className="text-4xl text-gray-800 text-center md:text-left font-bold mb-6">{member.name}</h1>
                    <p className="text-xl text-gray-800 text-center md:text-left">{member.description}</p>
                    <button onClick={() => window.open(member.LinkToCV, '_blank')} className="block mt-8 mx-auto md:mx-0 text-2xl py-3 px-6 text-red-50 font-semibold rounded bg-red-400">Last ned CV</button>
                </div>
            </div>
        </div>
    );
};


export default ProfilePage;
