import { Swipeable } from "react-native-gesture-handler";

import { ISwipeableRow } from "./SwipeableRow.interface";

/**
 * Component used as a wrapper for other components that have swipe to left functionality
 */
const SwipeableRow = ({ renderRightActions, children, isSwipeEnabled = true }: ISwipeableRow) => {
  return isSwipeEnabled ? <Swipeable renderRightActions={renderRightActions}>{children}</Swipeable> : children;
};

export default SwipeableRow;
