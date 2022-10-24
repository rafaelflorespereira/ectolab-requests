export interface IParticipant {
    name: string,
    email: string,
    role: string,
    dipNumber: string,
}
export type ParticipantTypes = "name"|"email"|"role"|"dipNumber"

export interface ParticipantPropsTypes extends IParticipant  {
    removeParticipant: void;
}

export const defaultParticipant: IParticipant = {
    name: " ",
    email: " ",
    role: " ",
    dipNumber: " "
}