export interface Faq {
    id: number;
    intent_name: string;
    dw_intent: string;
    question: string;
    intent_type: {
        id: number,
        name: string,
        description: string
    };
    type: {
        id: number,
        name: string,
        description: string
    };
    answers: Answer[];
}

export interface Answer {
    answer?: string;
    id?: number;
    intent?: string;
    slots?: string;
    selectedToBeDeleted?: boolean;
}