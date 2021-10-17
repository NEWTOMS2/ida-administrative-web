export interface RealTimeCommunication {
    id?: number;
    uuid?: number;
    contact_id: string;
    agent: string;
    client: string;
    date: string;
}

export interface CommunicationDetail {
    contact_id: string,
    duration: number,
    overall_client_sentiment: string,
    overall_agent_sentiment: string,
    interruptions?: number,
    record: string,
    agent: string,
    customer: string,
    transcript: Transcript[]
}

export interface Transcript {
    participant: string,
    content: string,
    sentiment: string,
    duration: number
}