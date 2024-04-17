import Label from "../../../components/atoms/label";
import { TYPOGRAPHY_ELEMENTS } from "../../../constants/typography-elements";

const Page = () => {
  return <Label labelText="This is the profile page" as={TYPOGRAPHY_ELEMENTS.p} />;
};

export default Page;
