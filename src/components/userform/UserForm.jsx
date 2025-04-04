import "./UserForm.css"

function UserForm({inputType, inputName, inputLabel, inputId, validationRules, register, errors}) {

    return (
        <>
            <label htmlFor={inputId} className="form-label">
                {inputLabel}
                <input
                    type={inputType}
                    id={inputId}
                    {...register(inputName, validationRules)}
                />
            </label>
            {errors[inputName] && <p>{errors[inputName].message}</p>}
        </>
    );
}

export default UserForm