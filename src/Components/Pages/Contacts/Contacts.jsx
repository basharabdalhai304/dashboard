import { DataGrid } from '@mui/x-data-grid';
import { rows,columns } from './data.js';

export function Contacts(){
    return(
        <div style={{ height: 500, width: '95%',margin:'80px auto' }}>
      <DataGrid 
        rows={rows} 
        columns={columns}
        showToolbar
      />
      
    </div>
    )
}

