import { useForm } from "react-hook-form";

const FillUserData = ({onSubmit}) => {
  const { register, handleSubmit } = useForm();

  const genders = [
    {
      value: "Мужской",
      label:"Мужской"
    },
    {
      value: "Женский",
      label:"Женский"
    }
  ];

  return (
    <div className="empty-data">
        <h2>ЗАПОЛНИТЕ ДАННЫЕ</h2>

        <form onSubmit={handleSubmit(onSubmit)} >
          <label>Город</label>
          <input {...register("Город", { required: true })} />

          <label>Пол</label>
          <select {...register("Пол")}>
            {genders.map((gender) => (
              <option 
                key={gender.value}
                value={gender.value}>
                  {gender.label}
              </option>
            ))}
          </select>

          <label>Дата рождения</label>
          <input {...register("Дата", { required: true })} type="date"/>

          <input type="submit" value="Сохранить"/>
        </form>
      </div>
  )
}

export default FillUserData;
