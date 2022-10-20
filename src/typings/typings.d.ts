export interface iParticipant {
    name: string,
    email: string,
    role: string,
    dipNumber: string
}
type participantTypes = "name"|"email"|"role"|"dipNumber"

export interface participantPropsTypes extends iParticipant  {
    addParticipant: (type: iParticipant) => void;
}

export const defaultParticipant = {
    name: "",
    email: "",
    role: "",
    dipNumber: ""
}