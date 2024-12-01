import { useState } from "react";
import { Nav } from "../Nav/Nav";
import styles from "./HomePage.module.css";
import { useForm } from "../../Hooks/useaForm";

const HomePage = () => {
  // const [formData, setFormData] = useState({ from: "", to: "", date: "" });

  const [formData, setFormData] = useForm({ from: "", to: "", date: "" });

  // created a useForm custom hook
  // const handleChange = (e) => {
  //   // console.log(e);
  //   const { id, value } = e.target;
  //   setFormData({ ...formData, [id]: value });
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <div className={styles.home_page}>
      <Nav />
      <h2 className={styles.heading}>Book Your Train Ticket</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            placeholder="Enter Departure Station"
            required
            value={formData.from}
            onChange={setFormData}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            placeholder="Enter Arrival Station"
            required
            value={formData.to}
            onChange={setFormData}
          />
        </div>
        <div className={styles.form_group}>
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            required
            value={formData.date}
            onChange={setFormData}
          />
        </div>
        <button className={styles.form_btn} type="submit">
          Search Trains
        </button>
      </form>
    </div>
  );
};

export { HomePage };
