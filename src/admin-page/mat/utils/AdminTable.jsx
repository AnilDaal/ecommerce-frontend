import './admin-table.scss';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { adminGetProduct } from '../../../store';

const AdminTable = () => {
  const dispatch = useDispatch();
  const { adminProductList } = useSelector((state) => state.admin);
  console.log(adminProductList);
  useEffect(() => {
    dispatch(adminGetProduct());
  }, [dispatch]);
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell className="tableCell x">
              <label
                htmlFor="filter"
                style={{
                  color: 'gray',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  cursor: 'pointer',
                }}
              >
                Filter via name
              </label>
              <input
                id="filter"
                type="text"
                onChange={handleChange}
                name="name"
                value={user.name}
              />
            </TableCell>
          </TableRow>
        </TableHead> */}

        <TableHead>
          <TableRow>
            {/* <TableCell className="tableCell x">ID</TableCell> */}
            <TableCell className="tableCell x">Image</TableCell>
            <TableCell className="tableCell x">Title</TableCell>
            <TableCell className="tableCell x">Price</TableCell>
            {/* <TableCell className="tableCell">Age</TableCell> */}
            {/* <TableCell className="tableCell x">Country</TableCell> */}
            <TableCell className="tableCell x">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {adminProductList.map((product) => {
            return (
              <TableRow key={product._id}>
                {/* <TableCell className="tableCell">{row._id}</TableCell> */}
                <TableCell className="tableCell">
                  <div className="cellWrapper">
                    <img
                      src={product.image}
                      alt=""
                      className="image"
                      height={200}
                    />
                    {/* {product.title} */}
                  </div>
                </TableCell>
                <TableCell className="tableCell">{product.title}</TableCell>
                <TableCell className="tableCell">
                  &#8377;{product.price}
                </TableCell>

                <TableCell className="tableCell">
                  <Link to={`/admin/single-product/${product._id}`}>
                    <button className="view">View</button>
                  </Link>
                  <Link to={`/admin/update-product/${product._id}`}>
                    <button className="view">Update</button>
                  </Link>
                  <button
                    // onClick={() => handleDelete(row._id)}
                    className="delete"
                  >
                    Delete
                  </button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AdminTable;
