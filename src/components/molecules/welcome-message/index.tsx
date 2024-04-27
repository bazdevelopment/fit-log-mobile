import dayjs from "dayjs";

import { getGreetingMessage } from "../../../utilities/greeting-message";
import Label from "../../atoms/label";
import { IWelcomeMessage } from "./WelcomeMessage.interface";

/**Component used to display a greeting message along with the user name */
const WelcomeMessage = ({ username }: IWelcomeMessage) => {
  const currentHour = dayjs().hour();
  const greetingMessage = getGreetingMessage(currentHour);
  return (
    <Label
      labelText={`${greetingMessage}, ${username}! 👋`}
      as="h2"
      additionalLabelStyle="font-primary-bold text-gray-900"
    />
  );
};

export default WelcomeMessage;
