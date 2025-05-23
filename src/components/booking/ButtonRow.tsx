import { Button } from "../controls/Button";

export default function ButtonRow({
  className,
  setProcess,
  buttons,
  bookCompleteHandler,
  showTicketModalHandler,
}: {
  className?: string;
  setProcess: (process: string) => void;
  bookCompleteHandler?: () => void;
  showTicketModalHandler?: () => void;
  buttons: { label: string; process: string; highlight: boolean }[];
}) {
  return (
    <ul className={`w-full max-w-2xl flex gap-x-2 mt-12` + className}>
      {buttons.map((button) => (
        <li key={button.label} className="flex-1">
          <Button
            size="full"
            highlight={button.highlight}
            onClick={() => {
              if (button.process === "bookComplete" && bookCompleteHandler) {
                bookCompleteHandler();
              }
              if (button.process === "close") {
                window.close();
              }
              if (button.process === "ticketCheck" && showTicketModalHandler) {
                showTicketModalHandler();
              } else {
                setProcess(button.process);
              }
            }}
          >
            {button.label}
          </Button>
        </li>
      ))}
    </ul>
  );
}
