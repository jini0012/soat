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
        className="w-[130px] h-[22px] border-2 border-gray-400 text-xs focus-visible:outline-none hover:border-flesh-300 focus:border-flesh-500 rounded-sm p-1 mr-1"
      />
    </>
  );
}
