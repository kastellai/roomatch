import CitiesSelector from "../../CitiesSelector";
import styles from "./SecondStep.module.scss";
import { BsArrowRightCircleFill, BsArrowLeftCircle } from "react-icons/bs";

const SecondStep = ({
  nextStep,
  handleFormData,
  prevStep,
  values,
  handleInputCities,
  handleInputPref,
  handleCity,
  handleTown,
}) => {
  const submitFormData = e => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className={styles.containerForm}>
      <form className={styles.form} onSubmit={e => submitFormData(e)}>
        <div>
          <div className={styles.age}>
            <label className={styles.selectorLabel} htmlFor="age">
              Age*
            </label>
            <input
              className={styles.styledCheckbox}
              value={values.age}
              onChange={handleFormData("age")}
              name="age"
              id="age"
              type="number"
              placeholder="Your age"
              min="18"
              max="90"
              required
            />
          </div>
          <div className={styles.gender}>
            <label className={styles.selectorLabel} htmlFor="gender">
              Gender*
            </label>
            <select
              onChange={handleFormData("gender")}
              name="gender"
              id="gender"
              placeholder="Gender"
              required
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div className={styles.city}>
            <label className={styles.selectorLabel} htmlFor="City">
              City*
            </label>
            <CitiesSelector
              handleCity={handleCity}
              handleTown={handleTown}
              handleInputCities={handleInputCities}
              values={values}
            />
          </div>

          <fieldset className={styles.fieldset}>
            <legend>I'm</legend>
            <section>
              <div className={styles.flexColumn}>
                <div>
                  <label className={styles.labelContainer} htmlFor="lgbtq">
                    LGBTQ+
                    <input
                      type="checkbox"
                      name="action"
                      id="lgbtq"
                      checked={values.iam.lgbtq === 1 ? true : false}
                      onChange={e => handleInputPref("lgbtq", e)}
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="pet_owner">
                    Pet owner
                    <input
                      checked={values.iam.pet_owner === 1 ? true : false}
                      onChange={e => handleInputPref("pet_owner", e)}
                      type="checkbox"
                      name="action"
                      id="pet_owner"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
                <div>
                  <label
                    className={styles.labelContainer}
                    htmlFor="multicultural"
                  >
                    Multicultural
                    <input
                      checked={values.iam.multicultural === 1 ? true : false}
                      onChange={e => handleInputPref("multicultural", e)}
                      type="checkbox"
                      name="action"
                      id="multicultural"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
              </div>

              <div className={styles.flexColumn}>
                <div>
                  <label className={styles.labelContainer} htmlFor="veg">
                    Veg
                    <input
                      checked={values.iam.veg === 1 ? true : false}
                      type="checkbox"
                      onChange={e => handleInputPref("veg", e)}
                      name="action"
                      id="veg"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label className={styles.labelContainer} htmlFor="smooker">
                    Smooker
                    <input
                      checked={values.iam.smooker === 1 ? true : false}
                      onChange={e => handleInputPref("smooker", e)}
                      type="checkbox"
                      name="action"
                      id="smooker"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>

                <div>
                  <label
                    className={styles.labelContainer}
                    htmlFor="party_lover"
                  >
                    Party lover
                    <input
                      checked={values.iam.party_lover === 1 ? true : false}
                      onChange={e => handleInputPref("party_lover", e)}
                      type="checkbox"
                      name="action"
                      id="party_lover"
                    />
                    <span className={styles.mark}></span>
                  </label>
                </div>
              </div>
            </section>
          </fieldset>
        </div>
      </form>
      <div className={styles.arrowBtns}>
        <button className={styles.prevStep} onClick={prevStep}>
          <BsArrowLeftCircle />
        </button>
        <button className={styles.nextStep} onClick={nextStep}>
          <BsArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default SecondStep;
