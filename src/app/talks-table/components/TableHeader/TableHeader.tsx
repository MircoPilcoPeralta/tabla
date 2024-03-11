import { HeaderGroup } from "@tanstack/react-table";
import { DownArrow, UpArrow } from "..";

interface Props <T extends object> {
    headerGroups: HeaderGroup<T>[]
}

export const TableHeader = <T extends object> ({ headerGroups }: Props<T>) => {

    const columnSortingIcons = {
        asc: <DownArrow />,
        desc: <UpArrow />,
      }

    return(
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  className="col"
                  key={header.id}
                  onClick={header.column.getToggleSortingHandler()}
                >
                    <span> {header.column.columnDef.header} </span> 
                  {header.column.getIsSorted() !== false
                    ? columnSortingIcons[header.column.getIsSorted()]
                    : ''}
                </th>
              ))}
            </tr>
          ))}
        </thead>
    );
}