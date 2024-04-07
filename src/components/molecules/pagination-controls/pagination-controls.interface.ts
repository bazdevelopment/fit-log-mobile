export interface IPaginationControls {
  activeDotIndex: number;
  pagesLength: number;
  onNavigateBack: () => void;
  onNavigateNext: () => void;
  additionalContainerStyle?: string;
}
