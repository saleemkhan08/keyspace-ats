import { useRef, useState } from "react";
import Papa from "papaparse";
import propTypes from "prop-types";
import { Button } from "@chakra-ui/react";

const toCamelCase = (input) => {
  return input
    .split(" ")
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join("");
};

const CsvUploader = ({ onUpload }) => {
  const [isLoading, setIsLoading] = useState(false);
  const fileInputRef = useRef(null); // Create a ref to access the input element

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setIsLoading(true);
      Papa.parse(file, {
        header: true,
        complete: (result) => {
          if (result.data?.length > 0) {
            const newResults = result.data?.map((item) => {
              const newObj = {};
              for (const [key, value] of Object.entries(item)) {
                const newKey = toCamelCase(key);
                newObj[newKey] = value;
              }
              return newObj;
            });
            onUpload(newResults);
          }

          setIsLoading(false);
        },
      });
    }
  };

  const handleButtonClick = () => {
    // Trigger the click event on the input element when the button is clicked
    fileInputRef.current?.click();
  };

  return (
    <>
      <input
        id="csv-upload"
        type="file"
        accept=".csv"
        onChange={handleFileChange}
        style={{ display: "none" }}
        ref={fileInputRef}
      />
      <Button
        isLoading={isLoading}
        loadingText="Uploading"
        colorScheme="teal"
        variant="outline"
        onClick={handleButtonClick}
      >
        Upload CSV
      </Button>
    </>
  );
};

CsvUploader.propTypes = {
  onUpload: propTypes.func.isRequired,
};

export default CsvUploader;
