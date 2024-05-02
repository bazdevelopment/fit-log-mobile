import { View } from "react-native";

import Button from "../../atoms/button/button";
import Label from "../../atoms/label";
import { IEdgeCaseTemplate } from "./EdgeCaseTemplate.interface";

/**
 * Component used to display a placeholder text along with a suggestive image
 */
const EdgeCaseTemplate = ({ title, image, message, actionLabel, onActionPress }: IEdgeCaseTemplate) => {
  return (
    <View className="flex-col items-center">
      <View>{image}</View>
      {title && <Label labelText={title} as="h3" additionalLabelStyle="font-primary-bold mb-1 text-gray-800" />}
      {message && <Label labelText={message} as="h4" additionalLabelStyle="mt-2 text-center px-10 text-gray-800" />}
      {actionLabel && (
        <Button buttonText={actionLabel} variant="primary" onPress={onActionPress} additionalContainerStyle="mt-6" />
      )}
    </View>
  );
};

export default EdgeCaseTemplate;
