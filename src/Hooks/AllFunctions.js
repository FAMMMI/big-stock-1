
import GetData from './GetData';

const AllFunctions = () => {
    const [getData, setGetData] = GetData();

    const DecreaseByOne = (item) => {

        console.log(item);

        const newStock = parseInt(item.stock) - 1;

        const newItem = { name: item.name, img: item.img, price: item.price, Supplier: item.Supplier, year: item.year, color: item.color, stock: newStock };

        const url = `http://localhost:5000/car/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setGetData(data);
            });
    }

    const IncreaseByOne = (item, number) => {

        console.log(item, typeof number);

        const newStock = parseInt(item.stock) + parseInt(number);

        const newItem = { name: item.name, img: item.img, price: item.price, Supplier: item.Supplier, year: item.year, color: item.color, stock: newStock };

        const url = `http://localhost:5000/car/${item._id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newItem)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                setGetData(data);
            });
    }

    return [DecreaseByOne, IncreaseByOne];
}

export default AllFunctions