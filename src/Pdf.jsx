import React from 'react';
import { waitFordownloadPDF } from './sagas/pdf.saga';
import { DOWNLOAD_PDF } from './types/pdf.types';

class ProductComp extends React.Component {

    constructor(){
        super();
        this.state={
            products:[]
        }
    }

    componentDidMount(){
        DOWNLOAD_PDF.getProducts().then((response) =>{
            this.setState({products: response.data})
        });
    }
    
    render(){
        return(
            <div>
                <h1 className='text-center'>Products</h1>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <td>Product PDF</td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                        this.state.products.map(
                            product =>
                            <tr>
                                <td>{product.file}</td>
                            </tr>
                        )}
                    </tbody>

                </table>
            </div>
        )
    }
}

export default ProductComp