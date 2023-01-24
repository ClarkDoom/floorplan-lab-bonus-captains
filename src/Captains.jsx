import Picard from "./Picard";
import Janeway from "./Janeway";
import Pike from "./Pike";

const Captains = () => {
  return ( 
    <>
      <h1>Captains And Their Ships</h1>
      <div>
        <h1>Picard</h1>
        <Picard />
      </div>
      <div>
        <h1>Janeway</h1>
        <Janeway />
      </div>
      <div>
        <h1>Pike</h1>
        <Pike />
      </div>
    </>
  );
}

export default Captains;