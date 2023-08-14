import PropTypes from "prop-types";
import { useFormContext } from "react-hook-form";
import { Input, Text } from "@chakra-ui/react";

const FormInput = ({ className, name, label, type = "text", ...rest }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name];
  return (
    <div className={className}>
      <Input
        borderRadius="15px"
        mb={error ? "5px" : "24px"}
        fontSize="sm"
        type={type}
        placeholder="Your email adress"
        size="lg"
        isInvalid={!!error}
        errorBorderColor="crimson"
        {...register(name)}
        {...rest}
      />
      {error && (
        <Text fontSize="xs" color="crimson" mb="24px" ml="5px">
          {error.message}
        </Text>
      )}
    </div>
  );
};

FormInput.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
};

FormInput.defaultProps = {
  type: "text",
  icon: null,
};

export default FormInput;
