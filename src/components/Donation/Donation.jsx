import PropTypes from 'prop-types';

const Donation = ({ donation }) => {
  const { image, title, category, background_color, text_color, color, } = donation;
  const backgroundColor = {
    backgroundColor: `${background_color}`,
    color: `${text_color}`
  }
  const cetegoryColor = {
    backgroundColor: `${color}`
  }
  console.log(background_color)
  console.log(backgroundColor)
  return (
    <div style={backgroundColor} className={`card w-96 shadow-xl max-w-72`}>
      <figure><img src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 style={cetegoryColor} className='font-bold max-w-24 px-2 rounded-xl text-center'>{category}</h2>
        <p className="card-title">{title}</p>
      </div>
    </div>
  );
};

Donation.propTypes = {
  donation: PropTypes.object
};

export default Donation;