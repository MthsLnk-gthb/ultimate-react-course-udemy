import { PropTypes } from "prop-types";

const Pizza = ({pizzaObj}) => {

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : "" }`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        {/* {
          pizzaObj.soldOut ? <span>SOLD OUT !</span> : <span>pizzaObj.price</span>
        } */}

        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price }</span>
      </div>
    </li>
  );
};

Pizza.propTypes = {
  pizzaObj: PropTypes.string.isRequired,
};

export default Pizza;
