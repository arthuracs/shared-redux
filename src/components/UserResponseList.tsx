import { Button, TimeMachineIcon } from "@lokalise/louis";
import { UserDetails } from "../types/userDetails";

export const UserResponseList = ({
  userDetails: { name, email, phone, tshirtSize, fruit },
  onReset,
}: {
  userDetails: UserDetails;
  onReset: () => void;
}) => {
  return (
    <>
      <span>Thanks, we received the following:</span>
      <ul>
        <li>
          <b>Name:</b> {name}
        </li>
        <li>
          <b>Email:</b> {email}
        </li>
        <li>
          <b>Phone:</b> {phone}
        </li>
        <li>
          <b>T-Shirt Size:</b> {tshirtSize.label}
        </li>
        <li>
          <b>Fruit:</b> {fruit}
        </li>
      </ul>
      <Button
        appearance="danger"
        variant="outline"
        leftIcon={<TimeMachineIcon />}
        onClick={onReset}
      >
        Reset
      </Button>
    </>
  );
};
