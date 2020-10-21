import PropTypes from "prop-types";
import { useEffect, useState } from "react";

function getNumbers(input) {
  return input.replace(/\D/g, "");
}

export default function QueryValid(query) {
  const [validNumber, setValidNumber] = useState(0);

  useEffect(() => {
    if (query === undefined) {
      console.log("QUERY CANNOT BE UNDEFINED:", query);
      return 0;
    } else if (typeof query === "string") {
      const regexNumber = getNumbers(query);

      if (regexNumber === null || regexNumber === "") {
        console.log("QUERY EQUALS-NULL OR EMPTY-STRING:", typeof regexNumber);
        return;
      } else {
        const numberQuery = parseInt(regexNumber);
        console.log("VALID QUERY:", numberQuery);
        setValidNumber(numberQuery);
      }
    } else {
      setValidNumber(parseInt(query));
    }
  }, [query]);

  return validNumber;
}

// TEST:
// ?number=7
// ;asdlkfjas;dlkfj
// ?dragon=1
// ?number=1
// ?number=0
// ?number=11
// ?number=12sad;f
// results

QueryValid.propTypes = {
  query: PropTypes.string.isRequired,
};
