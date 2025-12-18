export type Option = { id: "A" | "B" | "C" | "D"; label: string; score: 1 | 2 | 3 | 4 };

export type FollowUpOption = { id: string; label: string; tag: string };

export type FollowUp = {
    id: string;
    question: string;
    type: "single";
    options: FollowUpOption[];
};

export type Question = {
    id: string;
    question: string;
    options: Option[];
    followUp?: {
        whenOptionIds: ("C" | "D")[];
        followUpQuestion: FollowUp;
    };
};

export type ResultProfile = {
    id: "light" | "practical" | "intensive" | "mantelzorg";
    title: string;
    description: string;
    thresholds: { avgMin: number; avgMax: number };
};

export type QuizConfig = {
    title: string;
    description: string;
    questions: Question[];
    results: ResultProfile[];
    cta: { label: string; href: string };
};

export const QUIZ_CONFIG: QuizConfig = {
    title: "Zorgcheck",
    description: "Een korte check om te kijken hoeveel ondersteuning bij jouw situatie past.",
    questions: [
        {
            id: "q1",
            question: "Hoe ervaar je je dagelijkse leven op dit moment?",
            options: [
                { id: "A", label: "Overzichtelijk en goed te doen", score: 1 },
                { id: "B", label: "Druk, maar ik red het meestal", score: 2 },
                { id: "C", label: "Chaotisch en vermoeiend", score: 3 },
                { id: "D", label: "Overweldigend, ik kom structureel tekort", score: 4 },
            ],
        },
        {
            id: "q2",
            question: "Hoe vaak heb je het gevoel dat je 'achter de feiten aanloopt'?",
            options: [
                { id: "A", label: "Zelden", score: 1 },
                { id: "B", label: "Regelmatig", score: 2 },
                { id: "C", label: "Vaak", score: 3 },
                { id: "D", label: "Bijna altijd", score: 4 },
            ],
            followUp: {
                whenOptionIds: ["C", "D"],
                followUpQuestion: {
                    id: "q2_followup",
                    question: "Waar loop je het meest op achter?",
                    type: "single",
                    options: [
                        { id: "behind_household", label: "Huishouden", tag: "household" },
                        { id: "behind_admin", label: "Administratie", tag: "admin" },
                        { id: "behind_care", label: "Zorg voor anderen", tag: "behind_care" },
                        { id: "behind_self", label: "Tijd voor mezelf", tag: "selfcare" },
                    ],
                },
            },
        },
        {
            id: "q3",
            question: "Hoe ziet jouw rol richting anderen eruit?",
            options: [
                { id: "A", label: "Ik zorg vooral voor mezelf", score: 1 },
                { id: "B", label: "Ik help af en toe iemand", score: 2 },
                { id: "C", label: "Ik draag regelmatig zorg voor een ander", score: 3 },
                { id: "D", label: "Ik ben mantelzorger en voel me verantwoordelijk voor veel", score: 4 },
            ],
        },
        {
            id: "q4",
            question: "Wat gebeurt er met jouw eigen behoeften?",
            options: [
                { id: "A", label: "Die staan gewoon op de agenda", score: 1 },
                { id: "B", label: "Die schuiven soms op", score: 2 },
                { id: "C", label: "Die komen vaak op de laatste plaats", score: 3 },
                { id: "D", label: "Die verdwijnen volledig naar de achtergrond", score: 4 },
            ],
            followUp: {
                whenOptionIds: ["C", "D"],
                followUpQuestion: {
                    id: "q4_followup",
                    question: "Wat schiet er het eerst bij in?",
                    type: "single",
                    options: [
                        { id: "selfcare_rest", label: "Rust & ontspanning", tag: "selfcare" },
                        { id: "selfcare_health", label: "Gezondheid", tag: "selfcare" },
                        { id: "selfcare_social", label: "Sociaal contact", tag: "selfcare" },
                        { id: "selfcare_household", label: "Mijn eigen huishouden", tag: "household" },
                    ],
                },
            },
        },
        {
            id: "q5",
            question: "Hoe voel jij je mentaal de laatste tijd?",
            options: [
                { id: "A", label: "Rustig en stabiel", score: 1 },
                { id: "B", label: "Regelmatig gespannen", score: 2 },
                { id: "C", label: "Vaak overprikkeld of onrustig", score: 3 },
                { id: "D", label: "Leeg, uitgeput of emotioneel op", score: 4 },
            ],
        },
        {
            id: "q6",
            question: "Hoe ga jij om met overzicht en structuur?",
            options: [
                { id: "A", label: "Dat lukt me goed", score: 1 },
                { id: "B", label: "Met wat moeite", score: 2 },
                { id: "C", label: "Ik raak snel het overzicht kwijt", score: 3 },
                { id: "D", label: "Structuur voelt nu bijna onmogelijk", score: 4 },
            ],
            followUp: {
                whenOptionIds: ["C", "D"],
                followUpQuestion: {
                    id: "q6_followup",
                    question: "Waar zou structuur je het meest helpen?",
                    type: "single",
                    options: [
                        { id: "structure_planning", label: "Planning & afspraken", tag: "structure_planning" },
                        { id: "structure_admin", label: "Administratie", tag: "admin" },
                        { id: "structure_household", label: "Huishouden", tag: "household" },
                        { id: "structure_energy", label: "Dagindeling / energie", tag: "structure_energy" },
                    ],
                },
            },
        },
        {
            id: "q7",
            question: "Hoeveel ruimte ervaar je om hulp te vragen?",
            options: [
                { id: "A", label: "Dat doe ik makkelijk", score: 1 },
                { id: "B", label: "Soms, als het echt nodig is", score: 2 },
                { id: "C", label: "Ik stel het vaak uit", score: 3 },
                { id: "D", label: "Ik vraag eigenlijk nooit hulp", score: 4 },
            ],
        },
        {
            id: "q8",
            question: "Wat zou je wensen als alles even mocht pauzeren?",
            options: [
                { id: "A", label: "Een beetje extra ademruimte", score: 1 },
                { id: "B", label: "Iemand die meedenkt", score: 2 },
                { id: "C", label: "Echte ontlasting in taken", score: 3 },
                { id: "D", label: "Tijdelijk alles loslaten en opgevangen worden", score: 4 },
            ],
        },
    ],
    results: [
        {
            id: "light",
            title: "Lichte ondersteuning",
            description: "Je hebt de zaken over het algemeen goed op orde, maar af en toe wat extra handen of een frisse blik zou je net die extra ademruimte geven die je verdient.",
            thresholds: { avgMin: 0, avgMax: 1.75 },
        },
        {
            id: "practical",
            title: "Praktische ondersteuning",
            description: "Je merkt dat je vaker achter de feiten aanloopt. Wat extra structuur en praktische hulp in het huishouden of bij de administratie zou je veel rust brengen.",
            thresholds: { avgMin: 1.751, avgMax: 2.5 },
        },
        {
            id: "intensive",
            title: "Intensieve ondersteuning",
            description: "De druk is hoog en je eigen behoeften schieten er vaak bij in. Je hebt behoefte aan iemand die echt met je meehelpt om het overzicht en de rust terug te brengen.",
            thresholds: { avgMin: 2.501, avgMax: 3.25 },
        },
        {
            id: "mantelzorg",
            title: "Mantelzorg & ontlasting",
            description: "Je situatie is momenteel erg zwaar. Het is essentieel dat je taken kunt loslaten en dat er iemand is die de regie en uitvoering van zorgtaken deels van je overneemt.",
            thresholds: { avgMin: 3.251, avgMax: 4.0 },
        },
    ],
    cta: { label: "Ja, ik wil even sparren", href: "/contact" },
};
