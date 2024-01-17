
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { apidataType } from '../../pages/home/Home';
import { DemoTreeDataValue } from '@mui/x-data-grid-generator/services/tree-data-generator';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';



export default function DataTable({ tableData }: { tableData: apidataType[] }) {



    // my custom column
    const columns = [
        {
            field: "userId",
            headerName: "UserID",
            flex: 0.5,
            hide: false,
        },
        {
            field: "id",
            headerName: "ID",
            flex: 0.5,
            hide: false,
            dataGeneratorUniquenessEnabled: true,

        },
        {
            field: "title",
            headerName: "Title",
            flex: 1,
            hide: false,
        },
        {
            field: "body",
            headerName: "Body",
            flex: 1,
            hide: false,
        }
    ]

    // for feeding the data to DataGrid
    const newTableData: DemoTreeDataValue = {
        rows: tableData,
        columns: columns,
        experimentalFeatures: { ariaV7: true },
    };


    // just for decoration loading
    const [loading, setloading] = useState<boolean>(true)
    // just of decoration loading
    useEffect(() => {
        const timer = setTimeout(() => {
            setloading(false)
        }, 1000);
        return () => clearTimeout(timer);
    }, []);



    return (

        <Box
            mt="40px"
            sx={{
                // customizing MUI table CSS
                "& .MuiDataGrid-root": {
                    borderColor: " #1c4b91",
                },
                "& .MuiDataGrid-cell": {
                    // borderBottom: "none",
                },
                "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: "#173d77",
                    color: "white",
                    // borderBottom: "none",
                },

            }}
        >

            <div style={{ height: 600, width: '100%', backgroundColor: 'white' }}>
                <DataGrid {...newTableData} slots={{ toolbar: GridToolbar }} loading={loading} />
            </div>
        </Box>
    );
}
