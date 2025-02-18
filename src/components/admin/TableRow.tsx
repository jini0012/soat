interface TableRowProps<T extends Record<string, any>> {
  rowData: T;
  headers: string[];
  fieldMapping: Record<string, keyof T>;
  onClick: () => void;
}

export default function TableRow<T extends Record<string, any>>({
  rowData,
  headers,
  fieldMapping,
  onClick,
}: TableRowProps<T>) {
  return (
    <tr
      className="text-[10px] border-b border-gray-300 cursor-pointer hover:bg-gray-100"
      onClick={onClick}
    >
      {headers.map((header) => (
        <td key={header} className="text-center py-1">
          {rowData[fieldMapping[header]] as React.ReactNode}
        </td>
      ))}
    </tr>
  );
}
