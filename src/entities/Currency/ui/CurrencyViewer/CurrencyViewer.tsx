export interface CurrencyViewerProps {
  className?: string;
  name: string;
}
export const CurrencyViewer = ({ name, className }: CurrencyViewerProps) => {
  return <p className={className}>{name}</p>;
};
