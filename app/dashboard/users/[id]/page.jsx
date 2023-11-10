import styles from "@/app/ui/dashboard/users/singlrUser/singleUser.module.css";
import Image from "next/image";

const SIngleUserPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src={"/noavatar.png"} alt="" fill />
        </div>
        Aman
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="hidden" name="id" value="123" />
          <label>Username</label>
          <input type="text" name="username" placeholder="Aman" />
          <label>Email</label>
          <input type="email" name="email" placeholder="aman@email.com" />
          <label>Password</label>
          <input type="password" name="password" />
          <label>Phone</label>
          <input type="text" name="phone" placeholder="1234567890" />
          <label>Address</label>
          <textarea type="text" name="address" placeholder="test address" />
          <label>Is Admin?</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label>Is Active?</label>
          <select name="isActive" id="isActive">
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
};

export default SIngleUserPage;
