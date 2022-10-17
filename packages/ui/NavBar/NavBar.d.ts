export type Option = {
  label: string;
  value: string;
  url?: string;
};

export interface NavBarProps {
  options: Option[];
  highLightColor?: string;
}
