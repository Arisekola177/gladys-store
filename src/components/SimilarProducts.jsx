

const SimilarProducts = ({product}) => {
    const id = product.productName;

    const handleDetails = () => {
       navigate(`/product/${id}`)
      
   }
  return (
    <div onClick={handleDetails}>
           <div className="shadow border rounded-lg w-[300px] h-[300px] mx-auto flex flex-col justify-center items-center " key={product.id}>
              <img className="w-[200px] h-auto object-cover" src={product.imgUrl} alt={product.productName} />
              <p>{product.productName}</p>
              </div>    
    </div>
  )
}

export default SimilarProducts