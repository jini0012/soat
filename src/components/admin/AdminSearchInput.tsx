interface AdminSearchInputProps {
  id: string;
  name: string;
  label: string;
}

export default function AdminSearchInput({
  id,
  name,
  label,
}: AdminSearchInputProps) {
  return (
    <>
      <label htmlFor={id} className="sr-only">
        {label}
      </label>
      <input
        type="text"
        id={id}
        name={name}
        className="w-[100px] h-[22px] border border-gray-500 text-[12px] mr-1"
      />
    </>
  );
}
