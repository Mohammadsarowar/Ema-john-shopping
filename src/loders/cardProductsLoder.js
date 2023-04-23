import { getShoppingCart } from "../utilities/fakedb";

const cardProductsLoder = async() => {
       const loaderProduct= await fetch('products.json');
       const products = await loaderProduct.json()
       const storedCart = getShoppingCart()
       const savedCard  =[]
      
        for(const id in storedCart){
        const addedProduct = products.find(pd=>pd.id===id);
        if(addedProduct){
              const quantity = storedCart[id];
              addedProduct.quantity= quantity ;
              savedCard.push(addedProduct)   
        }
   }

    
              return savedCard;
};

export default cardProductsLoder;