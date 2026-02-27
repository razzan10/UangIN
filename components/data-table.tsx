import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { tableData } from "@/data/tableData"
import {Button} from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { spendingData } from "@/lib/proops"
import { formatterCurrency } from "@/lib/formatter"
import { MoreHorizontalIcon } from "lucide-react"

const DataTable = ({
    id,
    type,
    amount,
    desc
}: spendingData) => {
  return (
    <Table>
        <TableHeader>
            <TableRow>
                <TableHead className="w-25">No</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Description</TableHead>
                <TableHead>Action</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {tableData.map((data) => (
                <TableRow key={data.id}>
                    <TableCell>{data.id}</TableCell>
                    <TableCell>{data.type}</TableCell>
                    <TableCell>{formatterCurrency(data.amount)}</TableCell>
                    <TableCell>{data.desc}</TableCell>
                    <TableCell>
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="ghost" size='icon' className="size-8">
                                    <MoreHorizontalIcon/>
                                    <span className="sr-only">Open Menu</span>
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>Edit</DropdownMenuItem>
                                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem variant="destructive">
                                    Delete
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
  )
}

export default DataTable
