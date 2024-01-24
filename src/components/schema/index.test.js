import * as Yup from 'yup';

describe('GroupSchema Validation', () => {
  it('validates a valid group form', async () => {
    const validData = {
      groupName: 'Valid Group',
      description: 'Valid Description',
      cards: [
        { term: 'Valid Term 1', defination: 'Valid Definition 1' },
        { term: 'Valid Term 2', defination: 'Valid Definition 2' },
      ],
    };

    let validationError;

    try {
        await Yup.reach(Yup.object().shape({ ...GroupSchema })).validate(validData, {
          abortEarly: false,
        });
      } catch (error) {
        validationError = error;
      }
  });

  it('fails validation for an invalid group form', async () => {
    const invalidData = {
      groupName: 'Short', // groupName does not meet the minimum length requirement
      description: 'Invalid', // description does not meet the minimum length requirement
      cards: [
        { term: 'Short', defination: 'Invalid' }, // term and defination do not meet the minimum length requirement
      ],
    };

    let validationError;

    try {
      await Yup.reach(Yup.object().shape({ ...GroupSchema })).validate(invalidData, {
        abortEarly: false,
      });
    } catch (error) {
      validationError = error;
    }
    
  });
});
