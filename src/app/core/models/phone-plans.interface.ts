export interface PhonePlan {
    id?: number,
    name: string,
    type: string,
    description?: string,
    minutes: number,
    sms: number,
    mb: number,
    price: number,
    duration: number,
    states: PhonePlanState[]
}
  
interface PhonePlanState {
    id: number,
    phone_plan_id: number,
    state_name: string,
    initial_date: Date,
    final_date: Date,
    description: string
}