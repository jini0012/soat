interface TableHeaderProps {
  headers: string[]; // headers는 문자열 배열
}

export default function TableHeader({ headers }: TableHeaderProps) {
  return (
    <thead>
      <tr className="text-xs bg-flesh-100 ">
        {headers.map((header, index) => (
          <th
            key={index}
            className="text-center py-1"
            style={{ width: `${100 / headers.length}%` }}
          >
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
