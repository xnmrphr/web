import React from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import {
  FIELD_CHILLS,
  FIELD_CONTACTS,
  FIELD_COUGH,
  FIELD_MUSCLE_PAIN,
  FIELD_RUNNY_NOSE,
  FIELD_TEMPERATURE
} from '../../../../constants';
import { FieldSet, Input, Range, Textarea } from '../../../../components';

const Form = ({ isViewMode }) => {
  const { handleChange, values, errors } = useFormikContext();
  return (
    <div className="form">
      <h4 className="medium title-2">Temperatura</h4>
      <FieldSet>
        <Input
          error={errors[FIELD_TEMPERATURE]}
          disabled={isViewMode}
          label="Podaj aktualną temperaturę ciała"
          name={FIELD_TEMPERATURE}
          placeholder="36.6"
          max={45}
          min={35}
          onChange={handleChange}
          type="number"
          value={values[FIELD_TEMPERATURE]}
        />
      </FieldSet>
      <h4 className="medium title-3">Objawy</h4>
      <FieldSet>
        <Range field={FIELD_RUNNY_NOSE} label="Katar" disable={isViewMode} />
        <Range field={FIELD_COUGH} label="Kaszel" disable={isViewMode} />
        <Range field={FIELD_CHILLS} label="Dreszcze" disable={isViewMode} />
        <Range
          field={FIELD_MUSCLE_PAIN}
          label="Ból mięśni"
          disable={isViewMode}
        />
      </FieldSet>
      <h4 className="medium title-2">Miejsca i kontakty</h4>
      <FieldSet>
        <Textarea
          disabled={isViewMode}
          label="Z kim się spotkałem, gdzie byłem"
          name={FIELD_CONTACTS}
          onChange={handleChange}
          placeholder="wpisz"
          value={values[FIELD_CONTACTS]}
        />
      </FieldSet>
    </div>
  );
};

Form.defaultProps = {
  isViewMode: false
};

Form.propTypes = {
  isViewMode: PropTypes.bool
};

export default Form;
