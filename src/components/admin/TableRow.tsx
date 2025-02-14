interface TableRowProps<T> {
  rowData: T;
  headers: string[];
  fieldMapping: { [key: string]: keyof T }; // 필드명과 헤더 텍스트를 매핑
}

export default function TableRow<T>({
  rowData,
  headers,
  fieldMapping,
}: TableRowProps<T>) {
  return (
    <tr className="text-[10px] border-b border-gray-300">
      {headers.map((header) => (
        <td key={header} className="text-center py-1 cursor-pointer">
          {/* 필드명 기반으로 데이터 출력 ex: rowData["name"] */}
          {rowData[fieldMapping[header]] as React.ReactNode}
        </td>
      ))}
    </tr>
  );
}
