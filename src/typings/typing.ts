export interface IParticipant {
    name: string,
    email: string,
    role: string,
    dipNumber: string,
}
export type ParticipantTypes = "name" | "email" | "role" | "dipNumber"

export interface ParticipantPropsTypes extends IParticipant {
    removeParticipant: (id: number) => void,
    updateParticipant: (participant: IParticipant, id: number) => void
    index: number
}

export const defaultParticipant: IParticipant = {
    name: "",
    email: "",
    role: "",
    dipNumber: ""
}