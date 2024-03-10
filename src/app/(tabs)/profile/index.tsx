import Label from "../../../components/atoms/label/label";
import { TYPOGRAPHY_ELEMENTS } from "../../../enums/typography-elements";

const Page = () => {
  return <Label labelText="This is the profile page" as={TYPOGRAPHY_ELEMENTS.p} />;
};

export default Page;
