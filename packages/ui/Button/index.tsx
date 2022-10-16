export const Button = ({ text = "Click me!" }: { text: string }) => {
  return <button className="bg-amber-400 p-3 rounded-lg">{text}</button>;
};
