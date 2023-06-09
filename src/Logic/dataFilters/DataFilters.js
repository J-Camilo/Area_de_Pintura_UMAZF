import axios from 'axios'

export async function dataFilterBrand() {
    var dataFilterBrand=[]
    await axios.get('https://apiproducts-production-f466.up.railway.app/Api/brand')
            .then(function (response) {
                response.data.forEach(data=>{
                    dataFilterBrand.push(data.brand)
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    return dataFilterBrand;
}

export async function dataFilterEstado() {
    var dataFilterEstado=[]
    await axios.get('https://apiproducts-production-f466.up.railway.app/Api/state')
            .then(function (response) {
                response.data.forEach(data=>{
                    dataFilterEstado.push(data.state)
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    return dataFilterEstado;
}

export async function dataProducts() {
    var dataProducts=[]
    await axios.get('https://apiproducts-production-f466.up.railway.app/Api/products')
            .then(function (response) {
                response.data.forEach(data=>{
                    dataProducts.push(data)
                })
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
    return dataProducts;
}