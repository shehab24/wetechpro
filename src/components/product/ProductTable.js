
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';


export default function ProductTable({products}) {
    

    useEffect(() => {
        
    }, []);

    const detailsBodyTemplate = (product) =>{
        console.log(product)
        return(
            <>
            <img 
            src={product.image_src}
            className="w-14 h-14" 
            />
            <span>
            {product.name}
            </span>
    
            </>
        )
    }

    return (
        <div className="productTable">
            <DataTable value={products} showGridlines tableStyle={{ minWidth: '50rem' }}>
                <Column field="image_src" body={detailsBodyTemplate} header="Details" style={{ width: '60%' }}></Column>
                <Column field="name" header="Price"></Column>
                <Column field="category" header="Action"></Column>
            </DataTable>
        </div>
    );
}
        