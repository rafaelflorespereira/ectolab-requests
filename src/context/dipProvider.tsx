import { useState } from "react";
import { IParticipant } from "../typings/typing";
const DipProvider: React.FC = () => {
  const [dipParticipants, setDipParticipants] = useState<IParticipant[]>([]);

  const subParticipant = (index: number) => {
    dipParticipants?.splice(index, 1)
    setDipParticipants([...dipParticipants]);
  };

  const updateParticipants = (participant: IParticipant, index: number) => {
    dipParticipants[index] = participant
    setDipParticipants([...dipParticipants])
  }
  return (<></>)
}

export default DipProvider