import { Component } from 'react'
import { connect } from 'react-redux'
import { RootState } from '../state/store'
import { Product } from '../state/actions/actionTypes';
import { getAllProducts } from '../state/actions/productActions';
import { Dispatch } from 'redux';


interface ProductListProps {
    products: Product[];
    message: string;
    isLoading: boolean;
    getAll: () => void;
}

class ProductList extends Component<ProductListProps> {
    componentDidMount(): void {
        this.props.getAll();
    }
    render() {
        const { products, getAll, message, isLoading } = this.props
        return (
            <div className='container  w-75'>
                <h3>Product List</h3>
                {isLoading ? <div>Loading...</div> : null}
                {message ? <div>{this.props.message}</div> : null}
                {products ?
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <td>ID</td>
                                <td>Product Name</td>
                                <td>product Price</td>
                                <td></td>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                products.map(item =>
                                    <tr key={item.productId}>
                                        <td>{item.productId}</td>
                                        <td>{item.productName}</td>
                                        <td>{item.unitPrice}</td>
                                        <td>
                                            <button className='btn btn-danger btn-sm'>Delete</button>
                                        </td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                    : null}

            </div>
        )
    }
}


const mapStateToProps = (state: RootState) => {
    return {
        products: state.productState.items,
        message: state.productState.message,
        isLoading: state.productState.isLoading,
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        getAll: () => getAllProducts(dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)
